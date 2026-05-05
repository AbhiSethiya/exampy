const fs = require('fs');
const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

// Ensure API key is present
if (!process.env.GEMINI_API_KEY) {
  console.error("❌ ERROR: GEMINI_API_KEY environment variable is missing.");
  console.log("Please run the script like this:");
  console.log("  For Windows (PowerShell): $env:GEMINI_API_KEY='your_key_here'; node generate.js");
  console.log("  For Mac/Linux: export GEMINI_API_KEY='your_key_here' && node generate.js");
  process.exit(1);
}

// Simple hash function to match frontend IDs
function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0; // Convert to 32bit integer
  }
  return Math.abs(hash).toString(36);
}

// Read and parse data.js
const dataFile = fs.readFileSync('./data.js', 'utf8');
const subjectsDataStr = dataFile.split('const freqData =')[0].replace('const subjectsData = ', '').trim();
let cleanStr = subjectsDataStr;
if (cleanStr.endsWith(';')) cleanStr = cleanStr.slice(0, -1);
const subjectsData = eval(cleanStr);

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });

async function generateAllAnswers() {
  const answersData = {};

  // Load existing answers if available so we don't regenerate them
  if (fs.existsSync('./answers.js')) {
    try {
      const existingFile = fs.readFileSync('./answers.js', 'utf8');
      const existingJsonStr = existingFile.replace('const answersData = ', '').trim().replace(/;$/, '');
      const existingAnswers = JSON.parse(existingJsonStr);
      Object.assign(answersData, existingAnswers);
      console.log(`Loaded ${Object.keys(answersData).length} existing answers.`);
    } catch (e) {
      console.log('Starting fresh with new answersData.');
    }
  }

  let count = 0;
  let skipped = 0;

  for (const subject of subjectsData) {
    for (const unit of subject.units) {
      for (const q of unit.questions) {
        const qid = `${subject.id}-${unit.unit}-${hashString(q.q)}`;

        if (answersData[qid]) {
          skipped++;
          continue;
        }

        console.log(`Generating answer for: ${q.q.substring(0, 50)}...`);

        try {
          const prompt = `Please provide a detailed, well-structured, and accurate answer to the following university-level computer science exam question: "${q.q}". Format the answer in Markdown, using bullet points or numbered lists where appropriate for clarity. Keep it concise but comprehensive enough for exam preparation.`;

          const result = await model.generateContent(prompt);
          const response = await result.response;
          const text = response.text();

          answersData[qid] = text;
          count++;
          console.log(`✅ Success`);

          // Update file progressively so we don't lose data on crash
          const output = `const answersData = ${JSON.stringify(answersData, null, 2)};`;
          fs.writeFileSync('./answers.js', output);

          // Rate limit: 2 seconds delay
          await new Promise(resolve => setTimeout(resolve, 2000));
        } catch (error) {
          console.error(`❌ Failed:`, error.message);
        }
      }
    }
  }

  console.log(`\n🎉 Done! Generated ${count} new answers. Skipped ${skipped} existing ones.`);
}

generateAllAnswers();
