// State variables
let activeSubjectId = subjectsData[0].id;
let activeUnit = "all";
let searchQuery = "";
let sortBy = "default";
let filterFavorites = false;
let filterMastered = false;

// Persistent state
let bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");
let mastered = JSON.parse(localStorage.getItem("mastered") || "[]");

function saveState() {
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  localStorage.setItem("mastered", JSON.stringify(mastered));
}

// DOM Elements
const tabsContainer = document.getElementById("subject-tabs");
const unitFiltersContainer = document.getElementById("unit-filters");
const contentArea = document.getElementById("content-area");
const searchInput = document.getElementById("search-input");
const legendContainer = document.getElementById("legend-container");

// Initialize Application
function init() {
  // Handle URL Hash
  if (window.location.hash) {
    const hashParts = window.location.hash.substring(1).split('-');
    if (hashParts.length >= 1 && subjectsData.find(s => s.id === hashParts[0])) {
      activeSubjectId = hashParts[0];
      activeUnit = hashParts.length >= 2 ? (parseInt(hashParts[1]) || "all") : "all";
    }
  }

  // Setup control listeners
  document.getElementById("sort-select").addEventListener("change", (e) => {
    sortBy = e.target.value;
    renderContent();
  });
  
  document.getElementById("filter-favorites").addEventListener("change", (e) => {
    filterFavorites = e.target.checked;
    renderContent();
  });
  
  document.getElementById("filter-mastered").addEventListener("change", (e) => {
    filterMastered = e.target.checked;
    renderContent();
  });

  document.getElementById("print-btn").addEventListener("click", () => {
    window.print();
  });
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
      window.location.hash = activeSubjectId;
      
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
  allBtn.addEventListener("click", () => { 
    activeUnit = "all"; 
    window.location.hash = activeSubjectId;
    renderUnitFilters(); 
    renderContent(); 
  });
  unitFiltersContainer.appendChild(allBtn);

  // Individual Unit Buttons
  activeSubject.units.forEach(u => {
    const btn = document.createElement("button");
    btn.className = `unit-btn ${activeUnit === u.unit ? "active" : ""}`;
    btn.textContent = u.title;
    if(activeUnit === u.unit) btn.style.background = activeSubject.theme.primary;
    
    btn.addEventListener("click", () => {
      activeUnit = u.unit;
      window.location.hash = `${activeSubjectId}-${activeUnit}`;
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

    // Filter questions by search query and checkboxes
    let filteredQuestions = unitObj.questions.filter(q => {
      const qId = `${activeSubjectId}-${unitObj.unit}-${btoa(unescape(encodeURIComponent(q.q))).substring(0, 10)}`;
      q._id = qId; // Attach id for rendering
      
      const matchesSearch = q.q.toLowerCase().includes(searchQuery);
      const isFavorite = bookmarks.includes(qId);
      const isMastered = mastered.includes(qId);
      
      if (!matchesSearch) return false;
      if (filterFavorites && !isFavorite) return false;
      if (filterMastered && isMastered) return false;
      
      return true;
    });

    // Apply sorting
    if (sortBy === "freq") {
      const freqOrder = { "must": 4, "high": 3, "med": 2, "low": 1 };
      filteredQuestions.sort((a, b) => freqOrder[b.freq] - freqOrder[a.freq]);
    } else if (sortBy === "marks") {
      filteredQuestions.sort((a, b) => {
        const maxA = a.marks ? Math.max(...a.marks) : 0;
        const maxB = b.marks ? Math.max(...b.marks) : 0;
        return maxB - maxA;
      });
    }

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
      <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
        <div>
          <div class="unit-title" style="color:${activeSubject.theme.primary}">${unitObj.title}</div>
          <div class="unit-sub" style="color:${activeSubject.theme.primary}">${unitObj.sub}</div>
        </div>
        <a href="https://www.youtube.com/results?search_query=${encodeURIComponent(activeSubject.label + ' ' + unitObj.sub + ' playlist')}" target="_blank" rel="noopener noreferrer" style="background: ${activeSubject.theme.primary}; color: white; padding: 0.4rem 0.8rem; border-radius: 6px; text-decoration: none; font-size: 0.85rem; display: flex; align-items: center; gap: 0.4rem; box-shadow: 0 2px 4px rgba(0,0,0,0.1);" onmouseover="this.style.opacity='0.8'" onmouseout="this.style.opacity='1'" title="Search for a YouTube playlist on this topic">
          <span style="font-size: 1rem;">▶️</span> Playlist
        </a>
      </div>
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

      const qId = q._id;
      const isFav = bookmarks.includes(qId);
      const isDone = mastered.includes(qId);

      item.innerHTML = `
        <input type="checkbox" class="master-checkbox" data-id="${qId}" ${isDone ? "checked" : ""} title="Mark as mastered" style="margin-top: 4px; cursor: pointer; transform: scale(1.2);">
        <div class="q-num" style="${isDone ? 'opacity: 0.5;' : ''}">${qIndex + 1}.</div>
        <div class="q-text" style="${isDone ? 'opacity: 0.5; text-decoration: line-through;' : ''}">
          <a href="https://www.google.com/search?q=${encodeURIComponent(q.q)}" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: inherit; cursor: pointer;" title="Search this question on Google">
            ${q.q}
          </a>
        </div>
        <div class="q-meta">
          <div style="display: flex; align-items: center; gap: 8px;">
            <button class="fav-btn" data-id="${qId}" style="background: none; border: none; cursor: pointer; font-size: 1.3rem; opacity: ${isFav ? 1 : 0.3}; transition: opacity 0.2s;" title="Bookmark this question">
              ${isFav ? '⭐' : '☆'}
            </button>
            <span class="badge" style="background:${badgeData.bg};color:${badgeData.color}">
              ${badgeData.label}
            </span>
          </div>
          ${marksHtml}
        </div>
      `;
      qList.appendChild(item);
    });

    // Add event listeners for bookmarks and checkboxes (after appending to DOM)
    setTimeout(() => {
      const checkboxes = qList.querySelectorAll('.master-checkbox');
      checkboxes.forEach(cb => {
        cb.addEventListener('change', (e) => {
          const id = e.target.dataset.id;
          if (e.target.checked) {
            mastered.push(id);
          } else {
            const index = mastered.indexOf(id);
            if (index > -1) mastered.splice(index, 1);
          }
          saveState();
          renderContent(); // re-render to apply strikethrough/filters
        });
      });

      const favBtns = qList.querySelectorAll('.fav-btn');
      favBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
          const id = e.currentTarget.dataset.id;
          if (bookmarks.includes(id)) {
            const index = bookmarks.indexOf(id);
            bookmarks.splice(index, 1);
          } else {
            bookmarks.push(id);
          }
          saveState();
          renderContent(); // re-render to update icon and filters
        });
      });
    }, 0);

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
