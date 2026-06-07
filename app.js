// ============================================================
// StudySpark OS Quiz - Application Logic (app.js)
// ============================================================

// ============================================================
// STATE
// ============================================================
const state = {
  currentView: 'dashboard',     // 'dashboard' | 'quiz' | 'results'
  activeModule: null,           // 'memory' | 'storage' | 'user' | 'all'
  questions: [],                // soal aktif untuk sesi ini
  currentIndex: 0,
  score: 0,
  answered: false,              // apakah soal saat ini sudah dijawab
  selectedOption: null,         // index jawaban yang dipilih (0-3)
  timerInterval: null,
  timeElapsed: 0,               // detik
  sessionResults: [],           // { question, selectedOption, correct }
};

// ============================================================
// LOCAL STORAGE HELPERS
// ============================================================
function getProgress() {
  try {
    return JSON.parse(localStorage.getItem('studyspark_progress')) || {};
  } catch { return {}; }
}

function saveProgress(module, score, total) {
  const progress = getProgress();
  const key = module;
  const prevBest = progress[key]?.bestScore || 0;
  progress[key] = {
    completed: true,
    lastScore: score,
    bestScore: Math.max(prevBest, score),
    totalQuestions: total,
    lastPlayed: new Date().toISOString(),
    xp: Math.round((score / total) * 150),
  };
  localStorage.setItem('studyspark_progress', JSON.stringify(progress));
}

// ============================================================
// VIEW SWITCHING
// ============================================================
function showView(viewId) {
  document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
  document.getElementById(`${viewId}-view`).classList.remove('hidden');
  state.currentView = viewId;
  updateNavActive(viewId);

  // Sembunyikan bottom nav saat kuis berjalan agar tidak menghalangi tombol kontrol di HP
  const bottomNav = document.querySelector('.bottom-nav');
  if (bottomNav) {
    if (viewId === 'quiz') {
      bottomNav.classList.add('hidden');
    } else {
      bottomNav.classList.remove('hidden');
    }
  }
}

function updateNavActive(viewId) {
  document.querySelectorAll('.nav-item').forEach(el => {
    el.classList.remove('nav-active');
  });
  const activeNav = document.querySelector(`[data-nav="${viewId}"]`);
  if (activeNav) activeNav.classList.add('nav-active');
}

// ============================================================
// DASHBOARD
// ============================================================
function renderDashboard() {
  const progress = getProgress();
  const cards = document.querySelectorAll('.module-card');
  cards.forEach(card => {
    const mod = card.dataset.module;
    const p = progress[mod];
    const bar = card.querySelector('.progress-bar-fill');
    const pct = card.querySelector('.progress-pct');
    const badge = card.querySelector('.best-score-badge');

    if (p && p.completed) {
      const percentage = Math.round((p.bestScore / p.totalQuestions) * 100);
      if (bar) bar.style.width = `${percentage}%`;
      if (pct) pct.textContent = `${percentage}%`;
      if (badge) {
        badge.textContent = `${p.bestScore}/${p.totalQuestions}`;
        badge.classList.remove('hidden');
      }
    } else {
      if (bar) bar.style.width = '0%';
      if (pct) pct.textContent = '0%';
      if (badge) badge.classList.add('hidden');
    }
  });

  // Stats summary
  const totalCompleted = Object.values(progress).filter(p => p.completed).length;
  const totalXP = Object.values(progress).reduce((sum, p) => sum + (p.xp || 0), 0);
  const totalCorrect = Object.values(progress).reduce((sum, p) => sum + (p.bestScore || 0), 0);

  const elCompleted = document.getElementById('stat-completed');
  const elXP = document.getElementById('stat-xp');
  const elCorrect = document.getElementById('stat-correct');
  if (elCompleted) elCompleted.textContent = totalCompleted;
  if (elXP) elXP.textContent = totalXP;
  if (elCorrect) elCorrect.textContent = totalCorrect;
}

// ============================================================
// QUIZ ENGINE
// ============================================================
function startQuiz(moduleId) {
  state.activeModule = moduleId;
  state.questions = moduleId === 'all' ? getAllQuestions() : getQuestionsByModule(moduleId);
  state.currentIndex = 0;
  state.score = 0;
  state.timeElapsed = 0;
  state.sessionResults = [];

  showView('quiz');
  renderQuizHeader();
  renderQuestion();
  startTimer();
}

function renderQuizHeader() {
  const meta = MODULE_META[state.activeModule];
  const moduleLabel = document.getElementById('quiz-module-label');
  if (moduleLabel) moduleLabel.textContent = meta.title;
}

function renderQuestion() {
  const q = state.questions[state.currentIndex];
  const total = state.questions.length;

  state.answered = false;
  state.selectedOption = null;

  // Progress bar & counter
  const pct = ((state.currentIndex) / total) * 100;
  document.getElementById('progress-bar').style.width = `${pct}%`;
  document.getElementById('progress-text').textContent = `Soal ${state.currentIndex + 1} dari ${total}`;

  // Difficulty badge
  const diffEl = document.getElementById('question-difficulty');
  if (diffEl) {
    diffEl.textContent = q.difficulty;
    diffEl.className = 'difficulty-badge';
    if (q.difficulty === 'Mudah') diffEl.classList.add('badge-easy');
    else if (q.difficulty === 'Sedang') diffEl.classList.add('badge-medium');
    else diffEl.classList.add('badge-hard');
  }

  // Module chip
  const modEl = document.getElementById('question-module-chip');
  if (modEl) {
    const meta = MODULE_META[q.module];
    modEl.textContent = meta.title;
  }

  // Question text
  document.getElementById('question-text').textContent = q.question;

  // Options
  const optionsContainer = document.getElementById('options-container');
  optionsContainer.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];
  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.id = `option-${idx}`;
    btn.setAttribute('data-index', idx);
    btn.innerHTML = `
      <div class="option-inner">
        <div class="option-letter" id="option-letter-${idx}">${letters[idx]}</div>
        <span class="option-text">${opt}</span>
      </div>
      <span class="option-icon material-symbols-outlined hidden" id="option-icon-${idx}"></span>
    `;
    btn.addEventListener('click', () => selectOption(idx));
    optionsContainer.appendChild(btn);
  });

  // Explanation
  const expContent = document.getElementById('explanation-content');
  const expToggle = document.getElementById('explanation-toggle');
  const expChevron = document.getElementById('explanation-chevron');
  expContent.classList.add('hidden');
  if (expChevron) expChevron.style.transform = 'rotate(0deg)';
  document.getElementById('explanation-text').textContent = q.explanation;

  // Next button
  const nextBtn = document.getElementById('next-btn');
  nextBtn.classList.add('hidden');
  nextBtn.textContent = state.currentIndex === total - 1 ? 'Selesai & Lihat Hasil' : 'Soal Selanjutnya';

  // Reset explanation toggle handler
  if (expToggle) {
    expToggle.onclick = () => {
      expContent.classList.toggle('hidden');
      if (expToggle) {
        expChevron.style.transform = expContent.classList.contains('hidden')
          ? 'rotate(0deg)' : 'rotate(180deg)';
      }
    };
  }
}

function selectOption(selectedIdx) {
  if (state.answered) return; // Sudah dijawab, abaikan klik berikutnya
  state.answered = true;
  state.selectedOption = selectedIdx;

  const q = state.questions[state.currentIndex];
  const isCorrect = selectedIdx === q.correct;

  if (isCorrect) state.score++;

  // Simpan hasil sesi
  state.sessionResults.push({
    question: q,
    selectedOption: selectedIdx,
    isCorrect,
  });

  // Visual feedback pada semua opsi
  const letters = ['A', 'B', 'C', 'D'];
  for (let i = 0; i < 4; i++) {
    const btn = document.getElementById(`option-${i}`);
    const letterEl = document.getElementById(`option-letter-${i}`);
    const iconEl = document.getElementById(`option-icon-${i}`);
    if (!btn) continue;

    btn.style.cursor = 'default';
    btn.onclick = null;

    if (i === q.correct) {
      // Jawaban benar: selalu tampilkan warna sukses
      btn.className = 'option-btn option-correct';
      if (letterEl) letterEl.className = 'option-letter letter-correct';
      if (iconEl) {
        iconEl.textContent = 'check_circle';
        iconEl.classList.remove('hidden');
        iconEl.style.color = '#006194';
      }
    } else if (i === selectedIdx && !isCorrect) {
      // Jawaban salah yang dipilih user
      btn.className = 'option-btn option-wrong';
      if (letterEl) letterEl.className = 'option-letter letter-wrong';
      if (iconEl) {
        iconEl.textContent = 'cancel';
        iconEl.classList.remove('hidden');
        iconEl.style.color = '#ba1a1a';
      }
    } else {
      // Opsi lain: redup
      btn.className = 'option-btn option-dimmed';
    }
  }

  // Buka explanation otomatis
  const expContent = document.getElementById('explanation-content');
  const expChevron = document.getElementById('explanation-chevron');
  expContent.classList.remove('hidden');
  if (expChevron) expChevron.style.transform = 'rotate(180deg)';

  // Tampilkan next button
  const nextBtn = document.getElementById('next-btn');
  nextBtn.classList.remove('hidden');
  nextBtn.textContent =
    state.currentIndex === state.questions.length - 1
      ? '🏁 Selesai & Lihat Hasil'
      : 'Soal Selanjutnya →';
}

function nextQuestion() {
  if (state.currentIndex < state.questions.length - 1) {
    state.currentIndex++;
    renderQuestion();
    // Scroll ke atas card
    document.getElementById('quiz-card').scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    // Selesai kuis
    finishQuiz();
  }
}

function finishQuiz() {
  clearInterval(state.timerInterval);
  saveProgress(state.activeModule, state.score, state.questions.length);
  showView('results');
  renderResults();
}

// ============================================================
// TIMER
// ============================================================
function startTimer() {
  state.timeElapsed = 0;
  clearInterval(state.timerInterval);
  updateTimerDisplay();
  state.timerInterval = setInterval(() => {
    state.timeElapsed++;
    updateTimerDisplay();
  }, 1000);
}

function updateTimerDisplay() {
  const el = document.getElementById('timer-display');
  if (!el) return;
  const minutes = Math.floor(state.timeElapsed / 60);
  const seconds = state.timeElapsed % 60;
  el.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// ============================================================
// RESULTS
// ============================================================
function renderResults() {
  const total = state.questions.length;
  const score = state.score;
  const wrong = total - score;
  const pct = Math.round((score / total) * 100);
  const minutes = Math.floor(state.timeElapsed / 60);
  const seconds = state.timeElapsed % 60;
  const timeStr = `${minutes}m ${seconds}s`;
  const xp = Math.round((score / total) * 150);

  // Title & subtitle
  const titleEl = document.getElementById('results-title');
  const subtitleEl = document.getElementById('results-subtitle');
  if (pct >= 80) {
    if (titleEl) titleEl.textContent = '🎉 Keren Banget! Kamu Siap Ujian!';
    if (subtitleEl) subtitleEl.textContent = 'Dedikasi belajarmu membuahkan hasil. Terus pertahankan momentum ini!';
  } else if (pct >= 60) {
    if (titleEl) titleEl.textContent = '💪 Hampir! Sedikit Lagi Bisa!';
    if (subtitleEl) subtitleEl.textContent = 'Sudah bagus! Pelajari lagi bagian yang kurang dan coba lagi.';
  } else {
    if (titleEl) titleEl.textContent = '📚 Terus Semangat Belajar!';
    if (subtitleEl) subtitleEl.textContent = 'Jangan menyerah! Belajar lagi dari materi yang sulit dan coba kembali.';
  }

  // Stats
  document.getElementById('result-correct').textContent = score;
  document.getElementById('result-wrong').textContent = wrong;
  document.getElementById('result-time').textContent = timeStr;
  document.getElementById('result-xp').textContent = `+${xp}`;
  document.getElementById('result-pct-text').textContent = `${pct}%`;

  // Donut chart animation
  const fill = document.getElementById('donut-fill');
  if (fill) {
    const circumference = 251.2;
    const offset = circumference * (1 - pct / 100);
    setTimeout(() => {
      fill.style.strokeDashoffset = offset;
    }, 400);
  }

  // Count up animation for percentage text
  const scoreText = document.getElementById('result-pct-text');
  if (scoreText) {
    let current = 0;
    const duration = 1500;
    const interval = 20;
    const step = pct / (duration / interval);
    scoreText.textContent = '0%';
    const counter = setInterval(() => {
      current += step;
      if (current >= pct) {
        current = pct;
        clearInterval(counter);
      }
      scoreText.textContent = `${Math.round(current)}%`;
    }, interval);
  }

  // Generate confetti
  generateConfetti(pct);
}

function generateConfetti(pct) {
  const container = document.getElementById('confetti-container');
  if (!container || pct < 60) return;
  container.innerHTML = '';
  const colors = ['#006194', '#93ccff', '#ffb875', '#ac6200', '#eef1f7', '#cce5ff'];
  const count = pct >= 80 ? 60 : 30;
  if (window.innerWidth > 640) {
    for (let i = 0; i < count; i++) {
      const el = document.createElement('div');
      el.classList.add('confetti-piece');
      el.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      el.style.left = `${Math.random() * 100}vw`;
      el.style.animationDuration = `${Math.random() * 4 + 3}s`;
      el.style.animationDelay = `${Math.random() * 2}s`;
      if (Math.random() > 0.5) el.classList.add('confetti-circle');
      container.appendChild(el);
    }
  }
}

// ============================================================
// NAVIGATION ACTIONS
// ============================================================
function goToDashboard() {
  clearInterval(state.timerInterval);
  showView('dashboard');
  renderDashboard();
}

function retryQuiz() {
  startQuiz(state.activeModule);
}

function exitQuiz() {
  clearInterval(state.timerInterval);
  const modal = document.getElementById('exit-modal');
  if (modal) modal.classList.remove('hidden');
}

function confirmExit() {
  const modal = document.getElementById('exit-modal');
  if (modal) modal.classList.add('hidden');
  clearInterval(state.timerInterval);
  goToDashboard();
}

function cancelExit() {
  const modal = document.getElementById('exit-modal');
  if (modal) modal.classList.add('hidden');
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  // Initial view
  showView('dashboard');
  renderDashboard();

  // Module card buttons
  document.querySelectorAll('.start-quiz-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const mod = btn.dataset.module;
      startQuiz(mod);
    });
  });

  // Next button
  document.getElementById('next-btn')?.addEventListener('click', nextQuestion);

  // Results buttons
  document.getElementById('retry-btn')?.addEventListener('click', retryQuiz);
  document.getElementById('dashboard-btn')?.addEventListener('click', goToDashboard);

  // Exit quiz (X button)
  document.getElementById('exit-quiz-btn')?.addEventListener('click', exitQuiz);
  document.getElementById('confirm-exit-btn')?.addEventListener('click', confirmExit);
  document.getElementById('cancel-exit-btn')?.addEventListener('click', cancelExit);

  // Nav items
  document.querySelectorAll('.nav-item').forEach(el => {
    el.addEventListener('click', () => {
      const nav = el.dataset.nav;
      if (nav === 'dashboard') goToDashboard();
    });
  });

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileSidebar = document.getElementById('mobile-sidebar');
  const sidebarOverlay = document.getElementById('sidebar-overlay');
  if (mobileMenuBtn && mobileSidebar) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileSidebar.classList.toggle('open');
      sidebarOverlay?.classList.toggle('hidden');
    });
    sidebarOverlay?.addEventListener('click', () => {
      mobileSidebar.classList.remove('open');
      sidebarOverlay.classList.add('hidden');
    });
  }
});
