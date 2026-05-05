const fs = require('fs');

// Hash function matching the frontend
function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0;
  }
  return Math.abs(hash).toString(36);
}

// Load data.js to get correct question IDs
const dataFile = fs.readFileSync('./data.js', 'utf8');
const subjectsDataStr = dataFile.split('const freqData =')[0].replace('const subjectsData = ', '').trim();
let cleanStr = subjectsDataStr;
if (cleanStr.endsWith(';')) cleanStr = cleanStr.slice(0, -1);
const subjectsData = eval(cleanStr);

// Build a map of question text substring -> correct ID
const questionMap = {};
for (const subject of subjectsData) {
  for (const unit of subject.units) {
    for (const q of unit.questions) {
      const correctId = `${subject.id}-${unit.unit}-${hashString(q.q)}`;
      // Use first 50 chars as key for matching
      const key = `${subject.id}-${unit.unit}-${q.q.substring(0, 50)}`;
      questionMap[key] = correctId;
    }
  }
}

// Load existing answers
const existingFile = fs.readFileSync('./answers.js', 'utf8');
const existingJsonStr = existingFile.replace('const answersData = ', '').trim().replace(/;$/, '');
const oldAnswers = JSON.parse(existingJsonStr);

// Rebuild answers with correct IDs
const newAnswers = {};

// First, keep original DAA 1-3 answers (these had correct IDs from the Gemini API)
const origDaaIds = [
  "daa-1-einrwi","daa-1-2v51i4","daa-1-3wxp9t","daa-1-yoyh3g","daa-1-zc4415","daa-1-st40at",
  "daa-2-ecit3p","daa-2-j44lrd","daa-2-jykqk6","daa-2-x614qo","daa-2-568pjj","daa-2-8688ec",
  "daa-3-3ji8sf","daa-3-qhgmmw","daa-3-m75cf7","daa-3-yq779s","daa-3-mlkzda","daa-3-wj0whb","daa-3-bqy3na"
];
for (const id of origDaaIds) {
  if (oldAnswers[id]) newAnswers[id] = oldAnswers[id];
}

// Now map the manually-added answers to correct IDs
// Build a mapping of old wrong IDs to answer content, with subject-unit prefix
const manualAnswers = {};
for (const [key, value] of Object.entries(oldAnswers)) {
  if (!origDaaIds.includes(key)) {
    manualAnswers[key] = value;
  }
}

// For each subject/unit question, find matching answer content by order
// Strategy: collect correct IDs for each subject-unit, and old IDs for each subject-unit
const correctIdsBySubjUnit = {};
const oldIdsBySubjUnit = {};

for (const subject of subjectsData) {
  for (const unit of subject.units) {
    const su = `${subject.id}-${unit.unit}`;
    correctIdsBySubjUnit[su] = [];
    for (const q of unit.questions) {
      const correctId = `${subject.id}-${unit.unit}-${hashString(q.q)}`;
      correctIdsBySubjUnit[su].push(correctId);
    }
  }
}

// Collect old manual IDs by subject-unit
for (const key of Object.keys(manualAnswers)) {
  const parts = key.split('-');
  const su = `${parts[0]}-${parts[1]}`;
  if (!oldIdsBySubjUnit[su]) oldIdsBySubjUnit[su] = [];
  oldIdsBySubjUnit[su].push(key);
}

// Map old -> correct by position (they were added in the same order as questions)
for (const su of Object.keys(oldIdsBySubjUnit)) {
  const oldIds = oldIdsBySubjUnit[su];
  const correctIds = correctIdsBySubjUnit[su] || [];
  
  for (let i = 0; i < oldIds.length; i++) {
    if (i < correctIds.length) {
      newAnswers[correctIds[i]] = manualAnswers[oldIds[i]];
    }
  }
}

const output = `const answersData = ${JSON.stringify(newAnswers, null, 2)};`;
fs.writeFileSync('./answers.js', output);

// Verify
let total = 0, found = 0;
for (const subject of subjectsData) {
  for (const unit of subject.units) {
    for (const q of unit.questions) {
      total++;
      const correctId = `${subject.id}-${unit.unit}-${hashString(q.q)}`;
      if (newAnswers[correctId]) found++;
    }
  }
}
console.log(`Remapped answers. Total questions: ${total}, Answered: ${found}, Missing: ${total - found}`);
