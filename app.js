// State Management
const State = {
  theme: 'dark',
  activeTab: 'overview',
  simulationActive: false,
  simulationTimeLeft: 0,
  simulationInterval: null,
  
  // Nominated Roster from Office Order No. 87 of 2026
  staff: [
    { id: 1, name: 'D. Prathima', desg: 'AO', avatar: 'DP', role: 'Exam Superintendent', duty: 'Overall supervision, liaison with Board of Examination, final sign-off.', present: true },
    { id: 2, name: 'Janardhan Thota', desg: 'DPA', avatar: 'JT', role: 'Systems & Technical Lead', duty: 'Server setup, computer lab readiness, network security, power backup check.', present: true },
    { id: 3, name: 'N. Kasi Viswanatham', desg: 'SS', avatar: 'NK', role: 'Chief Hall Invigilator', duty: 'Seating coordination, distributing papers, monitoring invigilators.', present: true },
    { id: 4, name: 'G. Bhavani Sankaram', desg: 'SSSA', avatar: 'GB', role: 'Invigilator (Lab A)', duty: 'Candidate verification, lab supervision, ensuring exam discipline.', present: true },
    { id: 5, name: 'O. Suresh Kumar Reddy', desg: 'SSSA', avatar: 'OS', role: 'Invigilator (Lab B)', duty: 'Candidate verification, lab supervision, preventing malpractices.', present: true },
    { id: 6, name: 'P. Sateesh Kumar', desg: 'SSSA', avatar: 'PS', role: 'Invigilator (Lab C)', duty: 'Candidate verification, lab supervision, security patrol.', present: false },
    { id: 7, name: 'EV Raja Gopal Reddy', desg: 'LDC', avatar: 'ER', role: 'Control Room Officer', duty: 'Attendance roster maintenance, stationery distribution, administrative support.', present: true },
    { id: 8, name: 'S. Parvathalu', desg: 'Wash Boy', avatar: 'SP', role: 'Support & Hospitality', duty: 'Drinking water arrangements, cleaning rooms, supporting invigilation team.', present: true }
  ],

  // Mock candidates list (DR Social Security Assistants)
  candidates: [
    { rollNo: 'SSA2026101', name: 'Aravind Kumar', status: 'present', seat: 'Lab A - Row 1 - S1', paper1: 'Completed', paper2: 'Completed' },
    { rollNo: 'SSA2026102', name: 'Priya Sharma', status: 'present', seat: 'Lab A - Row 1 - S2', paper1: 'Completed', paper2: 'Completed' },
    { rollNo: 'SSA2026103', name: 'Rohan Deshmukh', status: 'present', seat: 'Lab A - Row 2 - S1', paper1: 'Completed', paper2: 'Completed' },
    { rollNo: 'SSA2026104', name: 'Sneha Reddy', status: 'present', seat: 'Lab B - Row 1 - S1', paper1: 'Completed', paper2: 'Completed' },
    { rollNo: 'SSA2026105', name: 'Vikram Singh', status: 'absent', seat: 'Lab B - Row 1 - S2', paper1: 'Absent', paper2: 'Absent' },
    { rollNo: 'SSA2026106', name: 'Ananya Rao', status: 'present', seat: 'Lab C - Row 1 - S1', paper1: 'Completed', paper2: 'Completed' },
    { rollNo: 'SSA2026107', name: 'Karthik Nair', status: 'present', seat: 'Lab C - Row 1 - S2', paper1: 'Completed', paper2: 'Completed' },
    { rollNo: 'SSA2026108', name: 'Divya Patel', status: 'present', seat: 'Lab A - Row 2 - S2', paper1: 'Completed', paper2: 'Completed' },
    { rollNo: 'SSA2026109', name: 'Sandeep Varma', status: 'present', seat: 'Lab B - Row 2 - S1', paper1: 'Completed', paper2: 'Completed' },
    { rollNo: 'SSA2026110', name: 'Meera Krishnan', status: 'present', seat: 'Lab C - Row 2 - S1', paper1: 'Completed', paper2: 'Completed' },
    { rollNo: 'SSA2026111', name: 'Vijay Yadav', status: 'present', seat: 'Lab A - Row 3 - S1', paper1: 'Completed', paper2: 'Completed' },
    { rollNo: 'SSA2026112', name: 'Neha Gupta', status: 'absent', seat: 'Lab B - Row 2 - S2', paper1: 'Absent', paper2: 'Absent' },
    { rollNo: 'SSA2026113', name: 'Abhishek Mishra', status: 'present', seat: 'Lab C - Row 2 - S2', paper1: 'Completed', paper2: 'Completed' },
    { rollNo: 'SSA2026114', name: 'Swati Sen', status: 'present', seat: 'Lab A - Row 3 - S2', paper1: 'Completed', paper2: 'Completed' },
    { rollNo: 'SSA2026115', name: 'Harish Choudhary', status: 'present', seat: 'Lab B - Row 3 - S1', paper1: 'Completed', paper2: 'Completed' },
    { rollNo: 'SSA2026116', name: 'Pooja Joshi', status: 'present', seat: 'Lab C - Row 3 - S1', paper1: 'Completed', paper2: 'Completed' },
    { rollNo: 'SSA2026117', name: 'Nikhil Saxena', status: 'present', seat: 'Lab A - Row 4 - S1', paper1: 'Completed', paper2: 'Completed' },
    { rollNo: 'SSA2026118', name: 'Kavita Bhatia', status: 'present', seat: 'Lab B - Row 3 - S2', paper1: 'Completed', paper2: 'Completed' },
    { rollNo: 'SSA2026119', name: 'Varun Grover', status: 'present', seat: 'Lab C - Row 3 - S2', paper1: 'Completed', paper2: 'Completed' },
    { rollNo: 'SSA2026120', name: 'Ritu Mukherji', status: 'present', seat: 'Lab A - Row 4 - S2', paper1: 'Completed', paper2: 'Completed' },
    { rollNo: 'SSA2026121', name: 'Manish Verma', status: 'present', seat: 'Lab B - Row 4 - S1', paper1: 'Completed', paper2: 'Completed' },
    { rollNo: 'SSA2026122', name: 'Deepa Roy', status: 'present', seat: 'Lab C - Row 4 - S1', paper1: 'Completed', paper2: 'Completed' },
    { rollNo: 'SSA2026123', name: 'Arjun Som', status: 'present', seat: 'Lab A - Row 5 - S1', paper1: 'Completed', paper2: 'Completed' },
    { rollNo: 'SSA2026124', name: 'Deepika Sen', status: 'present', seat: 'Lab B - Row 4 - S2', paper1: 'Completed', paper2: 'Completed' },
    { rollNo: 'SSA2026125', name: 'Sanjay Dutt', status: 'present', seat: 'Lab C - Row 4 - S2', paper1: 'Completed', paper2: 'Completed' }
  ],

  // Preparatory Checklist items for 25.06.2026
  checklist: [
    { id: 1, text: 'Inspect Computer Lab Systems & Network Racks', desc: 'Ensure all computer terminals are connected to the local server and network settings are secured.', owner: 'Janardhan Thota (DPA)', done: true },
    { id: 2, text: 'Deploy Seating Layout Maps & Roll Numbers', desc: 'Affix seat numbers on desks and mount entrance display sheets.', owner: 'EV Raja Gopal Reddy (LDC)', done: true },
    { id: 3, text: 'Confirm CCTV Control Room Operations', desc: 'Test all camera feeds in Labs A, B, and C to ensure high-visibility monitoring.', owner: 'P. Sateesh Kumar (SSSA)', done: false },
    { id: 4, text: 'Check Backup Generator & Power Redundancy', desc: 'Inspect UPS systems and coordinate with venue technicians for continuous power.', owner: 'Janardhan Thota (DPA)', done: true },
    { id: 5, text: 'Inventory Question Papers & OMR Sheets', desc: 'Receive, verify quantities, and place sealed envelopes in the secure locker.', owner: 'D. Prathima (AO)', done: true },
    { id: 6, text: 'Set Up Candidate Verification Desks', desc: 'Position entry barricades, sanitizers, and verification tables.', owner: 'G. Bhavani Sankaram (SSSA)', done: false },
    { id: 7, text: 'Conduct Invigilation Team Briefing', desc: 'Review rules, timing constraints, and standard operating procedures (SOPs).', owner: 'D. Prathima (AO)', done: true },
    { id: 8, text: 'Arrange Drinking Water & Refreshments', desc: 'Stock water dispenser units in all exam halls and verify hospitality requirements.', owner: 'S. Parvathalu (Wash Boy)', done: true }
  ],

  // Console log storage
  logs: [
    { time: '2026-06-25 14:00', type: 'info', msg: 'Preparatory exercise initiated at NAC Campus, Hyderabad.' },
    { time: '2026-06-25 14:15', type: 'success', msg: 'D. Prathima (AO) completed the Invigilation SOP Briefing.' },
    { time: '2026-06-25 14:45', type: 'success', msg: 'Janardhan Thota (DPA) configured servers & loaded examination modules.' },
    { time: '2026-06-25 15:30', type: 'warning', msg: 'SSSA P. Sateesh Kumar reported to be absent due to transit delays.' },
    { time: '2026-06-29 07:00', type: 'info', msg: 'Invigilation team assembled at venue. Day 1 operational briefing commenced.' },
    { time: '2026-06-29 08:30', type: 'info', msg: 'Candidate verification desks opened. Gate security operational.' },
    { time: '2026-06-29 09:00', type: 'success', msg: 'Exam Session 1 started successfully across Labs A, B, and C.' }
  ]
};

// DOM Elements & Event Bindings
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  setupNavigation();
  renderAll();
  startCountdown();
  setupEventListeners();
});

// Theme Toggle Code
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  setTheme(savedTheme);
}

function setTheme(theme) {
  State.theme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  
  const themeBtnText = document.getElementById('theme-btn-text');
  const themeBtnIcon = document.getElementById('theme-btn-icon');
  
  if (theme === 'light') {
    themeBtnText.textContent = 'Dark Mode';
    themeBtnIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />`;
  } else {
    themeBtnText.textContent = 'Light Mode';
    themeBtnIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />`;
  }
}

// Switch Tabs Navigation
function setupNavigation() {
  const menuItems = document.querySelectorAll('.menu-item');
  menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const tabId = item.getAttribute('data-tab');
      
      // Update sidebar state
      menuItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      
      // Update main panels
      document.querySelectorAll('.view-section').forEach(s => s.classList.remove('active'));
      const activeSection = document.getElementById(`view-${tabId}`);
      if (activeSection) {
        activeSection.classList.add('active');
      }
      
      State.activeTab = tabId;
      renderAll();
    });
  });
}

// Global UI Rendering Pipeline
function renderAll() {
  if (State.activeTab === 'overview') {
    renderDashboardOverview();
  } else if (State.activeTab === 'roster') {
    renderStaffRoster();
  } else if (State.activeTab === 'checklist') {
    renderChecklist();
  } else if (State.activeTab === 'candidates') {
    renderCandidatesTable();
  } else if (State.activeTab === 'liveops') {
    renderConsoleLogs();
  } else if (State.activeTab === 'reports') {
    renderReports();
  }
  updateGlobalStats();
}

// Update Top Bar & General stats
function updateGlobalStats() {
  // Present Staff count
  const presentStaff = State.staff.filter(s => s.present).length;
  document.getElementById('present-staff-pill').textContent = `${presentStaff}/${State.staff.length} Staff Present`;
  
  // Active state indicator
  const systemStatusDot = document.getElementById('system-status-dot');
  const systemStatusLabel = document.getElementById('system-status-label');
  if (State.simulationActive) {
    systemStatusDot.style.backgroundColor = 'var(--danger)';
    systemStatusDot.style.boxShadow = '0 0 10px var(--danger)';
    systemStatusLabel.textContent = 'Simulating Live';
  } else {
    systemStatusDot.style.backgroundColor = 'var(--success)';
    systemStatusDot.style.boxShadow = '0 0 10px var(--success)';
    systemStatusLabel.textContent = 'Archived Operational Data';
  }
}

// Countdown Clock setup
function startCountdown() {
  const daysEl = document.getElementById('cd-days');
  const hoursEl = document.getElementById('cd-hours');
  const minsEl = document.getElementById('cd-mins');
  const secsEl = document.getElementById('cd-secs');
  const countdownLabel = document.getElementById('countdown-target-label');
  
  // Default Target: Original exam date (June 29, 2026, 07:00 AM)
  const originalExamDate = new Date('2026-06-29T07:00:00+05:30').getTime();
  
  function updateClock() {
    let now = new Date().getTime();
    let target = originalExamDate;
    
    if (State.simulationActive) {
      target = State.simulationTimeTarget;
      countdownLabel.textContent = "Simulation Ends In:";
    } else {
      countdownLabel.textContent = "Archived Exam (June 2026)";
    }
    
    let distance = target - now;
    
    if (distance < 0 && !State.simulationActive) {
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minsEl.textContent = '00';
      secsEl.textContent = '00';
      countdownLabel.textContent = "Exam Status: Successfully Conducted";
      return;
    } else if (distance < 0 && State.simulationActive) {
      endSimulation();
      return;
    }
    
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minsEl.textContent = String(minutes).padStart(2, '0');
    secsEl.textContent = String(seconds).padStart(2, '0');
  }
  
  setInterval(updateClock, 1000);
  updateClock();
}

// 1. RENDER OVERVIEW DASHBOARD
function renderDashboardOverview() {
  // Staff Present Metric Card
  const presentStaff = State.staff.filter(s => s.present).length;
  document.getElementById('stat-staff-present').textContent = `${presentStaff}/${State.staff.length}`;
  
  // Checklist Complete Metric Card
  const doneTasks = State.checklist.filter(t => t.done).length;
  const totalTasks = State.checklist.length;
  const checklistPct = Math.round((doneTasks / totalTasks) * 100);
  document.getElementById('stat-checklist-progress').textContent = `${checklistPct}%`;
  
  // Candidates Turnout
  const presentCandidates = State.candidates.filter(c => c.status === 'present').length;
  const totalCandidates = State.candidates.length;
  document.getElementById('stat-candidate-turnout').textContent = `${presentCandidates}/${totalCandidates}`;
  
  // Progress Ring Dial
  const ringOffset = 377 - (377 * checklistPct) / 100;
  const progressRing = document.getElementById('overview-progress-ring');
  if (progressRing) {
    progressRing.style.strokeDashoffset = ringOffset;
  }
  document.getElementById('overview-progress-percent').textContent = `${checklistPct}%`;
  
  // Render recent logs in mini console
  const recentLogsContainer = document.getElementById('recent-logs-list');
  if (recentLogsContainer) {
    recentLogsContainer.innerHTML = '';
    const sliceLogs = State.logs.slice(-4).reverse();
    sliceLogs.forEach(log => {
      const li = document.createElement('div');
      li.style.fontSize = '12px';
      li.style.borderBottom = '1px solid var(--border-color)';
      li.style.padding = '8px 0';
      li.style.fontFamily = 'monospace';
      li.innerHTML = `<span style="color: var(--text-muted)">${log.time.split(' ')[1] || log.time}</span> 
                      <span class="console-tag ${log.type}" style="padding: 0px 4px; font-size: 9px">${log.type}</span>
                      <span style="color: var(--text-primary)">${log.msg}</span>`;
      recentLogsContainer.appendChild(li);
    });
  }
}

// 2. RENDER STAFF ROSTER
function renderStaffRoster() {
  const container = document.getElementById('staff-roster-grid');
  if (!container) return;
  
  container.innerHTML = '';
  
  State.staff.forEach(member => {
    const card = document.createElement('div');
    card.className = 'staff-card';
    card.innerHTML = `
      <span class="staff-serial">${member.id}</span>
      <div class="staff-avatar-row">
        <div class="staff-avatar">${member.avatar}</div>
        <div class="staff-meta-info">
          <div class="staff-name">${member.name}</div>
          <div class="staff-desg">${member.desg} (Nominated Official)</div>
        </div>
      </div>
      <div>
        <div class="staff-role-badge">Designated Role: <strong>${member.role}</strong></div>
        <div class="staff-duty-detail">${member.duty}</div>
      </div>
      <div class="staff-action-row">
        <label class="staff-attendance-toggle">
          <div class="toggle-switch">
            <input type="checkbox" id="staff-chk-${member.id}" ${member.present ? 'checked' : ''} onchange="toggleStaffAttendance(${member.id})">
            <span class="slider"></span>
          </div>
          Roster Present
        </label>
        <span class="status-indicator-pill ${member.present ? 'present' : 'absent'}">
          ${member.present ? 'Present' : 'Absent'}
        </span>
      </div>
    `;
    container.appendChild(card);
  });
}

window.toggleStaffAttendance = function(id) {
  const index = State.staff.findIndex(s => s.id === id);
  if (index !== -1) {
    State.staff[index].present = !State.staff[index].present;
    
    // Add operational log
    const timestamp = getFormattedTimestamp();
    const action = State.staff[index].present ? 'reported ON DUTY at venue.' : 'marked ABSENT/OFF DUTY.';
    const logType = State.staff[index].present ? 'success' : 'warning';
    
    addLog(timestamp, logType, `${State.staff[index].name} (${State.staff[index].desg}) has been ${action}`);
    renderAll();
  }
};

// 3. RENDER PREPARATORY CHECKLIST
function renderChecklist() {
  const container = document.getElementById('prep-checklist-container');
  if (!container) return;
  
  container.innerHTML = '';
  
  State.checklist.forEach(item => {
    const itemEl = document.createElement('div');
    itemEl.className = `checklist-item ${item.done ? 'completed' : ''}`;
    itemEl.innerHTML = `
      <div class="checklist-checkbox-wrapper">
        <input type="checkbox" ${item.done ? 'checked' : ''} onchange="toggleChecklistTask(${item.id})">
      </div>
      <div class="checklist-text-wrapper">
        <div class="checklist-title">${item.text}</div>
        <div class="checklist-desc">${item.desc}</div>
      </div>
      <span class="checklist-owner-badge">${item.owner}</span>
    `;
    container.appendChild(itemEl);
  });
}

window.toggleChecklistTask = function(id) {
  const index = State.checklist.findIndex(t => t.id === id);
  if (index !== -1) {
    State.checklist[index].done = !State.checklist[index].done;
    
    const timestamp = getFormattedTimestamp();
    const action = State.checklist[index].done ? 'COMPLETED' : 'RE-OPENED';
    const logType = State.checklist[index].done ? 'success' : 'info';
    
    addLog(timestamp, logType, `Checklist item #${id} (${State.checklist[index].text}) has been ${action}.`);
    renderAll();
  }
};

// 4. RENDER CANDIDATES TABLE
let candidateFilter = 'all';
let searchQuery = '';

function renderCandidatesTable() {
  const tbody = document.getElementById('candidates-tbody');
  if (!tbody) return;
  
  tbody.innerHTML = '';
  
  // Apply search query and status filter
  let filtered = State.candidates.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          c.rollNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.seat.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (candidateFilter === 'all') return matchesSearch;
    return matchesSearch && c.status === candidateFilter;
  });
  
  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--text-muted); padding: 30px;">No candidates match your current filter.</td></tr>`;
    return;
  }
  
  filtered.forEach(c => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td style="font-weight: 600; font-family: monospace;">${c.rollNo}</td>
      <td style="font-weight: 500;">${c.name}</td>
      <td>
        <span class="candidate-status ${c.status}">${c.status}</span>
      </td>
      <td><span style="font-family: monospace; font-size: 13px;">${c.seat}</span></td>
      <td>
        <div style="display: flex; gap: 8px;">
          <button class="btn btn-secondary" style="padding: 4px 8px; font-size: 11px;" onclick="updateCandidateStatus('${c.rollNo}', 'present')">Present</button>
          <button class="btn btn-secondary" style="padding: 4px 8px; font-size: 11px;" onclick="updateCandidateStatus('${c.rollNo}', 'absent')">Absent</button>
          <button class="btn btn-secondary" style="padding: 4px 8px; font-size: 11px;" onclick="updateCandidateStatus('${c.rollNo}', 'pending')">Clear</button>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

window.updateCandidateStatus = function(rollNo, newStatus) {
  const index = State.candidates.findIndex(c => c.rollNo === rollNo);
  if (index !== -1) {
    const oldStatus = State.candidates[index].status;
    if (oldStatus === newStatus) return;
    
    State.candidates[index].status = newStatus;
    
    // Auto-update papers
    if (newStatus === 'present') {
      State.candidates[index].paper1 = 'Completed';
      State.candidates[index].paper2 = 'Completed';
    } else if (newStatus === 'absent') {
      State.candidates[index].paper1 = 'Absent';
      State.candidates[index].paper2 = 'Absent';
    } else {
      State.candidates[index].paper1 = 'Pending';
      State.candidates[index].paper2 = 'Pending';
    }
    
    const timestamp = getFormattedTimestamp();
    addLog(timestamp, 'info', `Candidate ${State.candidates[index].name} (${rollNo}) marked ${newStatus.toUpperCase()}.`);
    renderAll();
  }
};

window.setCandidateFilter = function(filter) {
  candidateFilter = filter;
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-filter') === filter) {
      btn.classList.add('active');
    }
  });
  renderCandidatesTable();
};

window.handleSearchInput = function(val) {
  searchQuery = val;
  renderCandidatesTable();
};

// 5. RENDER OPERATIONS CONSOLE
function renderConsoleLogs() {
  const consoleOutput = document.getElementById('console-output-box');
  if (!consoleOutput) return;
  
  consoleOutput.innerHTML = '';
  
  State.logs.forEach(log => {
    const line = document.createElement('div');
    line.className = 'console-line';
    line.innerHTML = `
      <span class="console-time">[${log.time}]</span>
      <span class="console-tag ${log.type}">${log.type}</span>
      <span>${log.msg}</span>
    `;
    consoleOutput.appendChild(line);
  });
  
  // Auto-scroll to bottom of console
  consoleOutput.scrollTop = consoleOutput.scrollHeight;
}

window.postLiveLog = function() {
  const msgInput = document.getElementById('console-input-msg');
  const levelSelect = document.getElementById('console-level-select');
  if (!msgInput || !msgInput.value.trim()) return;
  
  const msg = msgInput.value.trim();
  const type = levelSelect.value;
  const timestamp = getFormattedTimestamp();
  
  addLog(timestamp, type, msg);
  msgInput.value = '';
  renderConsoleLogs();
  
  // If in overview, trigger review of mini logs
  if (State.activeTab === 'overview') {
    renderDashboardOverview();
  }
};

function addLog(time, type, msg) {
  State.logs.push({ time, type, msg });
}

// 6. RENDER REPORTS SECTION & PRINT VIEW
function renderReports() {
  const container = document.getElementById('report-dynamic-view');
  if (!container) return;
  
  const currentReportType = document.getElementById('report-type-select').value;
  
  if (currentReportType === 'attendance') {
    let candidateRows = '';
    State.candidates.forEach((c, idx) => {
      candidateRows += `
        <tr>
          <td>${idx + 1}</td>
          <td>${c.rollNo}</td>
          <td>${c.name}</td>
          <td style="text-transform: capitalize; font-weight: bold; color: ${c.status === 'present' ? 'green' : 'red'}">${c.status}</td>
          <td>${c.seat}</td>
          <td style="width: 150px;"></td>
        </tr>
      `;
    });
    
    container.innerHTML = `
      <div class="printable-report-card">
        <div class="report-header">
          <div class="report-title-main">EPFO Social Security Assistant Examination</div>
          <div class="report-title-sub">Candidate Roster & Attendance Verification Sheet</div>
          <div style="font-size: 12px; color: #666; margin-top: 10px;">
            Venue: NAC Campus, Kothaguda, Hyderabad | Dates: 29.06.2026 - 30.06.2026
          </div>
        </div>
        <table class="report-table">
          <thead>
            <tr>
              <th>Sl. No.</th>
              <th>Roll No.</th>
              <th>Candidate Name</th>
              <th>Status</th>
              <th>Desk/Seat Assignment</th>
              <th>Candidate Signature</th>
            </tr>
          </thead>
          <tbody>
            ${candidateRows}
          </tbody>
        </table>
        <div class="signature-block-row">
          <div class="signature-line">EV Raja Gopal Reddy, LDC<br>Attendance In-Charge</div>
          <div class="signature-line">N. Kasi Viswanatham, SS<br>Chief Invigilator</div>
          <div class="signature-line">D. Prathima, AO<br>Exam Superintendent</div>
        </div>
      </div>
    `;
  } else if (currentReportType === 'staff') {
    let staffRows = '';
    State.staff.forEach((s, idx) => {
      staffRows += `
        <tr>
          <td>${idx + 1}</td>
          <td>${s.name}</td>
          <td>${s.desg}</td>
          <td>${s.role}</td>
          <td>${s.duty}</td>
          <td style="font-weight: bold;">${s.present ? 'Present' : 'Absent'}</td>
        </tr>
      `;
    });
    
    container.innerHTML = `
      <div class="printable-report-card">
        <div class="report-header">
          <div class="report-title-main">EPFO Regional Office, Sangareddy</div>
          <div class="report-title-sub">Office Order No. 87 of 2026 - Nominated Staff Roster</div>
          <div style="font-size: 12px; color: #666; margin-top: 10px;">
            Assigned to assist Board of Examination | Reporting Date: 25.06.2026 (2:00 PM) & 29.06.2026 (7:00 AM)
          </div>
        </div>
        <table class="report-table">
          <thead>
            <tr>
              <th>Sl. No.</th>
              <th>Official Name</th>
              <th>Designation</th>
              <th>Assigned Duty Title</th>
              <th>Operational Responsibility</th>
              <th>Attendance Status</th>
            </tr>
          </thead>
          <tbody>
            ${staffRows}
          </tbody>
        </table>
        <div class="signature-block-row">
          <div class="signature-line">Compiled by: Admin Dept</div>
          <div class="signature-line">DVV Satyavathi<br>Assistant P.F. Commissioner (HRM)</div>
        </div>
      </div>
    `;
  }
}

window.printReport = function() {
  window.print();
};

window.triggerReportChange = function() {
  renderReports();
};

// Simulation Controls
window.toggleSimulation = function() {
  if (State.simulationActive) {
    endSimulation();
  } else {
    startSimulation();
  }
};

function startSimulation() {
  State.simulationActive = true;
  
  // Set Simulation to end in 10 minutes (600 seconds)
  const durationMs = 10 * 60 * 1000;
  State.simulationTimeTarget = new Date().getTime() + durationMs;
  
  const simBtn = document.getElementById('simulation-toggle-btn');
  if (simBtn) {
    simBtn.innerHTML = `
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style="width: 16px; height: 16px;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
      Stop Simulator
    `;
    simBtn.className = 'btn btn-secondary';
    simBtn.style.backgroundColor = 'var(--danger-light)';
    simBtn.style.color = 'var(--danger)';
    simBtn.style.borderColor = 'var(--danger)';
  }
  
  // Set all candidates to pending to simulate checking in
  State.candidates.forEach(c => {
    c.status = 'pending';
    c.paper1 = 'Pending';
    c.paper2 = 'Pending';
  });
  
  // Reset checklists
  State.checklist.forEach((item, idx) => {
    item.done = idx < 3; // Leave some incomplete
  });
  
  // Inject start log
  const timestamp = getFormattedTimestamp();
  addLog(timestamp, 'warning', 'SIMULATION MODE STARTED: Interactive invigilation active.');
  
  // Simulated candidate check-ins
  let candidateIndex = 0;
  State.simulationInterval = setInterval(() => {
    if (candidateIndex < State.candidates.length) {
      // Pick random candidates and mark present or absent
      const targetCandidate = State.candidates[candidateIndex];
      const isPresent = Math.random() > 0.15; // 85% chance present
      const time = getFormattedTimestamp();
      
      if (isPresent) {
        updateCandidateStatus(targetCandidate.rollNo, 'present');
      } else {
        updateCandidateStatus(targetCandidate.rollNo, 'absent');
      }
      candidateIndex++;
      
      // Force render if on relevant screens
      renderAll();
    } else {
      clearInterval(State.simulationInterval);
      addLog(getFormattedTimestamp(), 'success', 'All candidate registrations verified. Simulated check-ins complete.');
      renderAll();
    }
  }, 4000); // Check in a candidate every 4 seconds
  
  renderAll();
}

function endSimulation() {
  State.simulationActive = false;
  clearInterval(State.simulationInterval);
  
  const simBtn = document.getElementById('simulation-toggle-btn');
  if (simBtn) {
    simBtn.innerHTML = `
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style="width: 16px; height: 16px;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      Simulate Exam Day
    `;
    simBtn.style.backgroundColor = '';
    simBtn.style.color = '';
    simBtn.style.borderColor = '';
    simBtn.className = 'btn';
  }
  
  // Restore default states
  State.candidates.forEach((c, idx) => {
    c.status = idx % 12 === 4 || idx % 12 === 11 ? 'absent' : 'present';
    c.paper1 = c.status === 'present' ? 'Completed' : 'Absent';
    c.paper2 = c.status === 'present' ? 'Completed' : 'Absent';
  });
  
  State.checklist.forEach((item, idx) => {
    item.done = idx !== 2 && idx !== 5; // Restore defaults
  });
  
  const timestamp = getFormattedTimestamp();
  addLog(timestamp, 'info', 'Simulation terminated. Restored archived dataset.');
  renderAll();
}

// Helpers
function getFormattedTimestamp() {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  const hh = String(d.getHours()).padStart(2, '0');
  const min = String(d.getMinutes()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd} ${hh}:${min}`;
}

function setupEventListeners() {
  // Theme toggle click
  const themeToggle = document.getElementById('theme-toggle-btn');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      setTheme(State.theme === 'dark' ? 'light' : 'dark');
    });
  }
}
