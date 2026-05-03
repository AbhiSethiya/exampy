// State variables
let activeSubjectId = subjectsData[0].id;
let activeUnit = "all";
let searchQuery = "";

// DOM Elements
const tabsContainer = document.getElementById("subject-tabs");
const unitFiltersContainer = document.getElementById("unit-filters");
const contentArea = document.getElementById("content-area");
const searchInput = document.getElementById("search-input");
const legendContainer = document.getElementById("legend-container");

// Initialize Application
function init() {
  renderTabs();
  renderLegend();
  renderUnitFilters();
  renderContent();

  // Event listener for search
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value.toLowerCase();
    renderContent();
  });

  // Dark Mode Toggle Logic
  const themeToggle = document.getElementById("theme-toggle");
  const currentTheme = localStorage.getItem("theme");
  
  if (currentTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    themeToggle.innerHTML = '<span class="icon">☀️</span>';
  }

  themeToggle.addEventListener("click", () => {
    let theme = document.documentElement.getAttribute("data-theme");
    if (theme === "dark") {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
      themeToggle.innerHTML = '<span class="icon">🌙</span>';
      updateBackground(activeSubjectId);
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      themeToggle.innerHTML = '<span class="icon">☀️</span>';
      document.body.style.background = 'var(--bg-gradient)';
    }
  });
}

function updateBackground(subjectId) {
  const subject = subjectsData.find(s => s.id === subjectId);
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  if (!isDark) {
    document.body.style.background = `linear-gradient(135deg, ${subject.theme.bg} 0%, rgba(255,255,255,0.8) 100%)`;
  } else {
    document.body.style.background = 'var(--bg-gradient)';
  }
}

// Render Subject Tabs
function renderTabs() {
  tabsContainer.innerHTML = "";
  subjectsData.forEach(subject => {
    const btn = document.createElement("button");
    btn.className = `tab-btn ${subject.id === activeSubjectId ? "active" : ""}`;
    btn.textContent = subject.label;
    
    // Apply theme color dynamically to active tab
    if (subject.id === activeSubjectId) {
      btn.style.background = subject.theme.primary;
      btn.style.color = "white";
    }

    btn.addEventListener("click", () => {
      activeSubjectId = subject.id;
      activeUnit = "all"; // Reset unit filter on subject change
      searchQuery = ""; // Reset search
      searchInput.value = "";
      
      updateBackground(subject.id);
      
      renderTabs();
      renderUnitFilters();
      renderContent();
    });
    tabsContainer.appendChild(btn);
  });
}

// Render Legend
function renderLegend() {
  legendContainer.innerHTML = "";
  Object.keys(freqData).forEach(key => {
    const data = freqData[key];
    const item = document.createElement("div");
    item.className = "legend-item";
    item.innerHTML = `
      <div class="legend-dot" style="background:${data.color}"></div>
      ${data.label} <span style="opacity:0.6;font-size:0.8rem">(${data.tooltip})</span>
    `;
    legendContainer.appendChild(item);
  });
}

// Render Unit Filters (All, Unit I, Unit II, etc.)
function renderUnitFilters() {
  unitFiltersContainer.innerHTML = "";
  
  const activeSubject = subjectsData.find(s => s.id === activeSubjectId);
  
  // "All" Button
  const allBtn = document.createElement("button");
  allBtn.className = `unit-btn ${activeUnit === "all" ? "active" : ""}`;
  allBtn.textContent = "All Units";
  if(activeUnit === "all") allBtn.style.background = activeSubject.theme.primary;
  allBtn.addEventListener("click", () => { activeUnit = "all"; renderUnitFilters(); renderContent(); });
  unitFiltersContainer.appendChild(allBtn);

  // Individual Unit Buttons
  activeSubject.units.forEach(u => {
    const btn = document.createElement("button");
    btn.className = `unit-btn ${activeUnit === u.unit ? "active" : ""}`;
    btn.textContent = u.title;
    if(activeUnit === u.unit) btn.style.background = activeSubject.theme.primary;
    
    btn.addEventListener("click", () => {
      activeUnit = u.unit;
      renderUnitFilters();
      renderContent();
    });
    unitFiltersContainer.appendChild(btn);
  });
}

// Render Main Content (Questions)
function renderContent() {
  contentArea.innerHTML = "";
  
  const activeSubject = subjectsData.find(s => s.id === activeSubjectId);
  let totalQuestionsRendered = 0;

  activeSubject.units.forEach((unitObj, uIndex) => {
    // Filter by selected unit
    if (activeUnit !== "all" && activeUnit !== unitObj.unit) return;

    // Filter questions by search query
    const filteredQuestions = unitObj.questions.filter(q => 
      q.q.toLowerCase().includes(searchQuery)
    );

    if (filteredQuestions.length === 0) return;
    totalQuestionsRendered += filteredQuestions.length;

    // Create Unit Section
    const section = document.createElement("div");
    section.className = "unit-section";
    section.style.animationDelay = `${uIndex * 0.1}s`;

    // Unit Header
    const header = document.createElement("div");
    header.className = "unit-header";
    header.style.background = activeSubject.theme.bg;
    header.innerHTML = `
      <div class="unit-title" style="color:${activeSubject.theme.primary}">${unitObj.title}</div>
      <div class="unit-sub" style="color:${activeSubject.theme.primary}">${unitObj.sub}</div>
    `;
    section.appendChild(header);

    // Questions List
    const qList = document.createElement("div");
    qList.className = "q-list";

    filteredQuestions.forEach((q, qIndex) => {
      const item = document.createElement("div");
      item.className = "q-item";

      const badgeData = freqData[q.freq];
      
      // Handle marks formatting
      let marksHtml = "";
      if (q.marks && q.marks.length > 0) {
        const uniqueMarks = [...new Set(q.marks)].sort((a,b)=>a-b);
        marksHtml = `<span class="badge badge-marks">${uniqueMarks.join(', ')}m</span>`;
      }

      item.innerHTML = `
        <div class="q-num">${qIndex + 1}.</div>
        <div class="q-text">
          <a href="https://www.google.com/search?q=${encodeURIComponent(q.q)}" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: inherit; cursor: pointer;" title="Search this question on Google">
            ${q.q}
          </a>
        </div>
        <div class="q-meta">
          <span class="badge" style="background:${badgeData.bg};color:${badgeData.color}">
            ${badgeData.label}
          </span>
          ${marksHtml}
        </div>
      `;
      qList.appendChild(item);
    });

    section.appendChild(qList);
    contentArea.appendChild(section);
  });

  // Empty State
  if (totalQuestionsRendered === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.innerHTML = `
      <div style="font-size:3rem;margin-bottom:1rem">🔍</div>
      <h3>No questions found</h3>
      <p style="margin-top:0.5rem">Try adjusting your search or filters.</p>
    `;
    contentArea.appendChild(empty);
  }
}

// Run!
init();
