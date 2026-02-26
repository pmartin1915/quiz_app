// ============================================================
// NUR 622 Quiz Application
// ============================================================

// ============================================================
// 1. CONSTANTS & CONFIG
// ============================================================
const EXAMS = [
    { id: 'exam1', name: 'Exam 1', data: 'EXAM1_DATA', categories: ['OB', 'GYN', 'GU', 'STI', 'Contraception', 'Diagnostic Testing'], questionCount: 50, timeSeconds: 75 * 60 },
    { id: 'exam2', name: 'Exam 2', data: 'EXAM2_DATA', categories: ["Men's Health", 'Musculoskeletal', 'Rheumatology & Immunology'], questionCount: 70, timeSeconds: 105 * 60 }
];
const DEFAULT_CATEGORIES = ['OB', 'GYN', 'GU', 'STI', 'Contraception', 'Diagnostic Testing'];
const EXAM_QUESTION_COUNT = 50;
const EXAM_TIME_SECONDS = 75 * 60;
const SM2_MIN_EASE = 1.3;
const SM2_DEFAULT_EASE = 2.5;
const STORAGE_PREFIX = 'nur622_';

// ============================================================
// 2. STATE
// ============================================================
const state = {
    currentExam: 'exam1',
    mode: null,
    activeCategories: [...DEFAULT_CATEGORIES],
    allQuestions: [],
    sessionQuestions: [],
    currentIndex: 0,
    answers: [],
    timerInterval: null,
    examStartTime: null,
    timeRemaining: EXAM_TIME_SECONDS,
    loaded: false
};

// ============================================================
// 3. LOCAL STORAGE HELPERS
// ============================================================
function storageGet(key) {
    try {
        const raw = localStorage.getItem(STORAGE_PREFIX + key);
        return raw ? JSON.parse(raw) : null;
    } catch { return null; }
}

function storageSet(key, val) {
    try {
        localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(val));
    } catch { /* storage full or disabled */ }
}

function loadProgress() {
    return storageGet('progress_' + state.currentExam) || {};
}

function saveProgress(progress) {
    storageSet('progress_' + state.currentExam, progress);
}

function loadFlagged() {
    return storageGet('flagged_' + state.currentExam) || [];
}

function saveFlagged(flagged) {
    storageSet('flagged_' + state.currentExam, flagged);
}

function loadExamHistory() {
    return storageGet('exam_history') || [];
}

function saveExamResult(result) {
    const history = loadExamHistory();
    history.push(result);
    storageSet('exam_history', history);
}

function resetAllData() {
    const confirmed = confirm('Reset ALL progress? This cannot be undone.');
    if (!confirmed) return;
    const doubleConfirm = confirm('Are you sure? All scores, spaced repetition data, and exam history will be deleted.');
    if (!doubleConfirm) return;
    Object.keys(localStorage).forEach(k => {
        if (k.startsWith(STORAGE_PREFIX)) localStorage.removeItem(k);
    });
    renderDashboard();
    renderStats();
    alert('All progress has been reset.');
}

// ============================================================
// 4. SPACED REPETITION (SM-2)
// ============================================================
function getOrCreateSR(questionId, progress) {
    if (progress[questionId]) return progress[questionId];
    return {
        questionId: questionId,
        timesSeen: 0,
        timesCorrect: 0,
        lastSeen: null,
        intervalDays: 0,
        easeFactor: SM2_DEFAULT_EASE
    };
}

function updateSR(questionId, wasCorrect) {
    const progress = loadProgress();
    const sr = getOrCreateSR(questionId, progress);
    sr.timesSeen++;
    sr.lastSeen = new Date().toISOString();

    if (wasCorrect) {
        sr.timesCorrect++;
        if (sr.intervalDays === 0) sr.intervalDays = 1;
        else if (sr.intervalDays === 1) sr.intervalDays = 3;
        else sr.intervalDays = Math.round(sr.intervalDays * sr.easeFactor);
        sr.easeFactor = Math.min(3.0, sr.easeFactor + 0.1);
    } else {
        sr.intervalDays = 0;
        sr.easeFactor = Math.max(SM2_MIN_EASE, sr.easeFactor - 0.2);
    }

    progress[questionId] = sr;
    saveProgress(progress);
}

function isDue(sr) {
    if (!sr.lastSeen) return true;
    if (sr.intervalDays === 0) return true;
    const lastSeen = new Date(sr.lastSeen);
    const nextDue = new Date(lastSeen.getTime() + sr.intervalDays * 86400000);
    return new Date() >= nextDue;
}

function orderBySpacedRepetition(questions) {
    const progress = loadProgress();
    const due = [];
    const unseen = [];
    const notDue = [];

    for (const q of questions) {
        const sr = progress[q.id];
        if (!sr) {
            unseen.push(q);
        } else if (isDue(sr)) {
            due.push({ question: q, sr: sr });
        } else {
            notDue.push({ question: q, sr: sr });
        }
    }

    due.sort((a, b) => a.sr.easeFactor - b.sr.easeFactor);
    notDue.sort((a, b) => {
        const aDue = new Date(a.sr.lastSeen).getTime() + a.sr.intervalDays * 86400000;
        const bDue = new Date(b.sr.lastSeen).getTime() + b.sr.intervalDays * 86400000;
        return aDue - bDue;
    });

    shuffleArray(unseen);

    return [
        ...due.map(d => d.question),
        ...unseen,
        ...notDue.map(d => d.question)
    ];
}

// ============================================================
// 5. QUESTION LOADING & FILTERING
// ============================================================
function loadQuestions() {
    const examConfig = EXAMS.find(e => e.id === state.currentExam);
    if (!examConfig) return;
    const dataVar = window[examConfig.data];
    if (dataVar && dataVar.questions) {
        state.allQuestions = dataVar.questions;
        state.loaded = true;
    }
}

function filterByCategories(questions) {
    return questions.filter(q => state.activeCategories.includes(q.category));
}

function selectStudyQuestions() {
    const filtered = filterByCategories(state.allQuestions);
    return orderBySpacedRepetition(filtered);
}

function selectExamQuestions() {
    const examConfig = EXAMS.find(e => e.id === state.currentExam);
    const count = examConfig ? examConfig.questionCount : EXAM_QUESTION_COUNT;
    const filtered = filterByCategories(state.allQuestions);
    const shuffled = [...filtered];
    shuffleArray(shuffled);
    return shuffled.slice(0, count);
}

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// ============================================================
// 6. QUIZ ENGINE
// ============================================================
function startStudyMode() {
    state.mode = 'study';
    state.sessionQuestions = selectStudyQuestions();
    if (state.sessionQuestions.length === 0) {
        alert('No questions available for the selected categories.');
        return;
    }
    state.currentIndex = 0;
    state.answers = state.sessionQuestions.map(() => null);
    showView('quiz');
    document.getElementById('timer').classList.add('hidden');
    document.getElementById('btn-prev').classList.add('hidden');
    document.getElementById('btn-submit-exam').classList.add('hidden');
    showQuestion();
}

function startExamMode() {
    const examConfig = EXAMS.find(e => e.id === state.currentExam);
    const count = examConfig ? examConfig.questionCount : EXAM_QUESTION_COUNT;
    const timeSec = examConfig ? examConfig.timeSeconds : EXAM_TIME_SECONDS;
    const timeMin = Math.round(timeSec / 60);
    const avail = filterByCategories(state.allQuestions);
    if (avail.length === 0) {
        alert('No questions available for the selected categories.');
        return;
    }
    if (!confirm(`Start Exam Mode?\n\n${Math.min(avail.length, count)} questions • ${timeMin} minutes\nNo feedback until the end.`)) return;

    state.mode = 'exam';
    state.sessionQuestions = selectExamQuestions();
    state.currentIndex = 0;
    state.answers = state.sessionQuestions.map(() => null);
    state.timeRemaining = timeSec;
    state.examStartTime = Date.now();

    showView('quiz');
    document.getElementById('timer').classList.remove('hidden');
    document.getElementById('btn-prev').classList.remove('hidden');
    document.getElementById('btn-submit-exam').classList.add('hidden');
    startTimer();
    showQuestion();
}

function showQuestion() {
    const q = state.sessionQuestions[state.currentIndex];
    const total = state.sessionQuestions.length;

    // Progress
    document.getElementById('progress-text').textContent = `${state.currentIndex + 1} / ${total}`;
    document.getElementById('progress-bar').style.width = `${((state.currentIndex + 1) / total) * 100}%`;

    // Category & difficulty
    const catLabel = document.getElementById('q-category');
    catLabel.textContent = q.category;
    catLabel.setAttribute('data-cat', q.category);
    document.getElementById('q-difficulty').textContent = q.difficulty;

    // Flag
    const flagBtn = document.getElementById('btn-flag');
    const flagged = loadFlagged();
    flagBtn.classList.toggle('flagged', flagged.includes(q.id));
    flagBtn.textContent = flagged.includes(q.id) ? '\u2605' : '\u2606';

    // Stem
    document.getElementById('q-stem').textContent = q.stem;

    // Options
    const optContainer = document.getElementById('q-options');
    optContainer.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];
    q.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `<span class="option-letter">${letters[i]}</span><span>${opt}</span>`;
        btn.addEventListener('click', () => handleAnswer(i));
        optContainer.appendChild(btn);
    });

    // Feedback
    document.getElementById('feedback').classList.add('hidden');
    document.getElementById('feedback').classList.remove('correct-fb', 'incorrect-fb');

    // Nav buttons
    const nextBtn = document.getElementById('btn-next');
    const prevBtn = document.getElementById('btn-prev');
    const submitBtn = document.getElementById('btn-submit-exam');

    if (state.mode === 'study') {
        nextBtn.classList.add('hidden');
        prevBtn.classList.add('hidden');
        submitBtn.classList.add('hidden');
    } else {
        // Exam mode - show prev/next as needed
        prevBtn.classList.toggle('hidden', state.currentIndex === 0);
        if (state.currentIndex === total - 1) {
            nextBtn.classList.add('hidden');
            submitBtn.classList.remove('hidden');
        } else {
            nextBtn.classList.remove('hidden');
            submitBtn.classList.add('hidden');
        }
    }

    // If question already answered in exam mode, show selection
    if (state.mode === 'exam' && state.answers[state.currentIndex] !== null) {
        const prevAnswer = state.answers[state.currentIndex];
        const btns = optContainer.querySelectorAll('.option-btn');
        btns[prevAnswer].classList.add('selected');
    }
}

function handleAnswer(selectedIndex) {
    const q = state.sessionQuestions[state.currentIndex];
    const wasCorrect = selectedIndex === q.correct;

    if (state.mode === 'study') {
        // Check if already answered
        if (state.answers[state.currentIndex] !== null) return;

        state.answers[state.currentIndex] = selectedIndex;
        updateSR(q.id, wasCorrect);

        // Highlight options
        const btns = document.querySelectorAll('#q-options .option-btn');
        btns.forEach((btn, i) => {
            btn.style.pointerEvents = 'none';
            if (i === q.correct) {
                btn.classList.add('correct');
            } else if (i === selectedIndex && !wasCorrect) {
                btn.classList.add('incorrect');
            } else {
                btn.classList.add('dimmed');
            }
        });

        // Show feedback
        const fb = document.getElementById('feedback');
        fb.classList.remove('hidden', 'correct-fb', 'incorrect-fb');
        fb.classList.add(wasCorrect ? 'correct-fb' : 'incorrect-fb');

        const fbResult = document.getElementById('feedback-result');
        fbResult.textContent = wasCorrect ? 'Correct!' : 'Incorrect';
        fbResult.className = 'feedback-result ' + (wasCorrect ? 'correct-text' : 'incorrect-text');

        document.getElementById('feedback-explanation').textContent = q.explanation;

        // Show next button
        document.getElementById('btn-next').classList.remove('hidden');

    } else {
        // Exam mode - just record answer, highlight selection
        state.answers[state.currentIndex] = selectedIndex;
        const btns = document.querySelectorAll('#q-options .option-btn');
        btns.forEach((btn, i) => {
            btn.classList.toggle('selected', i === selectedIndex);
        });
    }
}

function nextQuestion() {
    if (state.currentIndex < state.sessionQuestions.length - 1) {
        state.currentIndex++;
        showQuestion();
    } else if (state.mode === 'study') {
        endStudySession();
    }
}

function prevQuestion() {
    if (state.currentIndex > 0) {
        state.currentIndex--;
        showQuestion();
    }
}

function endStudySession() {
    const answered = state.answers.filter(a => a !== null).length;
    const correct = state.answers.filter((a, i) => a === state.sessionQuestions[i].correct).length;
    alert(`Study Session Complete!\n\nAnswered: ${answered}\nCorrect: ${correct} (${Math.round(correct / answered * 100)}%)`);
    showView('dashboard');
    renderDashboard();
}

function endExamSession() {
    stopTimer();
    const answered = state.answers.filter(a => a !== null).length;
    const correct = state.answers.filter((a, i) =>
        a !== null && a === state.sessionQuestions[i].correct
    ).length;
    const total = state.sessionQuestions.length;

    // Save to history
    const catBreakdown = {};
    state.sessionQuestions.forEach((q, i) => {
        if (!catBreakdown[q.category]) catBreakdown[q.category] = { correct: 0, total: 0 };
        catBreakdown[q.category].total++;
        if (state.answers[i] !== null && state.answers[i] === q.correct) {
            catBreakdown[q.category].correct++;
        }
    });

    saveExamResult({
        date: new Date().toISOString(),
        examId: state.currentExam,
        score: correct,
        total: total,
        answered: answered,
        categoryBreakdown: catBreakdown
    });

    // Update SR for all answered questions
    state.sessionQuestions.forEach((q, i) => {
        if (state.answers[i] !== null) {
            updateSR(q.id, state.answers[i] === q.correct);
        }
    });

    renderResults(correct, total, catBreakdown);
    showView('results');
}

function quitSession() {
    if (state.mode === 'exam') {
        if (!confirm('Quit the exam? Your progress will be lost.')) return;
        stopTimer();
    }
    showView('dashboard');
    renderDashboard();
}

// ============================================================
// 7. TIMER
// ============================================================
function startTimer() {
    state.examStartTime = Date.now();
    updateTimerDisplay();
    state.timerInterval = setInterval(() => {
        const elapsed = Math.floor((Date.now() - state.examStartTime) / 1000);
        state.timeRemaining = EXAM_TIME_SECONDS - elapsed;

        if (state.timeRemaining <= 0) {
            state.timeRemaining = 0;
            updateTimerDisplay();
            alert('Time is up! Your exam will be submitted now.');
            endExamSession();
            return;
        }
        updateTimerDisplay();
    }, 1000);
}

function updateTimerDisplay() {
    const timerEl = document.getElementById('timer');
    const mins = Math.floor(state.timeRemaining / 60);
    const secs = state.timeRemaining % 60;
    timerEl.textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
    timerEl.classList.toggle('warning', state.timeRemaining < 300);
}

function stopTimer() {
    if (state.timerInterval) {
        clearInterval(state.timerInterval);
        state.timerInterval = null;
    }
}

// ============================================================
// 8. UI RENDERING
// ============================================================
function showView(viewName) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(viewName).classList.add('active');
    window.scrollTo(0, 0);
}

function renderDashboard() {
    const progress = loadProgress();
    const entries = Object.values(progress);

    const quickStats = document.getElementById('quick-stats');
    if (entries.length === 0) {
        quickStats.classList.remove('has-data');
        return;
    }

    quickStats.classList.add('has-data');
    const totalSeen = entries.reduce((sum, sr) => sum + sr.timesSeen, 0);
    const totalCorrect = entries.reduce((sum, sr) => sum + sr.timesCorrect, 0);
    const accuracy = totalSeen > 0 ? Math.round(totalCorrect / totalSeen * 100) : 0;
    const dueCount = entries.filter(sr => isDue(sr)).length;

    // Weakest category
    const catStats = {};
    entries.forEach(sr => {
        const q = state.allQuestions.find(q => q.id === sr.questionId);
        if (!q) return;
        if (!catStats[q.category]) catStats[q.category] = { correct: 0, total: 0 };
        catStats[q.category].total += sr.timesSeen;
        catStats[q.category].correct += sr.timesCorrect;
    });
    let weakest = null;
    let weakestAcc = 101;
    Object.entries(catStats).forEach(([cat, s]) => {
        if (s.total >= 3) {
            const acc = s.correct / s.total * 100;
            if (acc < weakestAcc) { weakestAcc = acc; weakest = cat; }
        }
    });

    quickStats.innerHTML = `
        <p class="label">Quick Stats</p>
        <div class="stat-grid">
            <div class="stat-item">
                <div class="stat-value">${entries.length}</div>
                <div class="stat-label">Questions Seen</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">${accuracy}%</div>
                <div class="stat-label">Accuracy</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">${dueCount}</div>
                <div class="stat-label">Due for Review</div>
            </div>
            ${weakest ? `<div class="stat-item">
                <div class="stat-value" style="font-size:16px;color:#c62828">${weakest}</div>
                <div class="stat-label">Weakest Area</div>
            </div>` : ''}
        </div>
    `;
}

function renderResults(correct, total, catBreakdown) {
    const pct = Math.round(correct / total * 100);
    const heroEl = document.getElementById('score-hero');
    heroEl.innerHTML = `
        <div class="score-pct ${pct >= 80 ? 'pass' : 'fail'}">${pct}%</div>
        <div class="score-fraction">${correct} / ${total} correct</div>
    `;

    // Category breakdown
    const catEl = document.getElementById('category-breakdown');
    const catColors = {
        'OB': '#c62828', 'GYN': '#7b1fa2', 'GU': '#1565c0',
        'STI': '#e65100', 'Contraception': '#2e7d32', 'Diagnostic Testing': '#f57f17'
    };
    let catHTML = '<p class="label" style="margin-bottom:10px">By Category</p>';
    Object.entries(catBreakdown).forEach(([cat, data]) => {
        const catPct = data.total > 0 ? Math.round(data.correct / data.total * 100) : 0;
        catHTML += `
            <div class="cat-row">
                <span class="cat-row-name">${cat}</span>
                <div class="cat-row-bar">
                    <div class="cat-row-fill" style="width:${catPct}%;background:${catColors[cat] || '#1565c0'}"></div>
                </div>
                <span class="cat-row-pct">${catPct}%</span>
            </div>
        `;
    });
    catEl.innerHTML = catHTML;

    // Question review
    const reviewEl = document.getElementById('results-review');
    let reviewHTML = '';
    state.sessionQuestions.forEach((q, i) => {
        const userAns = state.answers[i];
        const isCorrect = userAns === q.correct;
        const letters = ['A', 'B', 'C', 'D'];
        reviewHTML += `
            <div class="review-item ${isCorrect ? 'review-correct' : 'review-incorrect'}">
                <div class="review-q-num">Q${i + 1} • ${q.category} • ${q.difficulty}</div>
                <div class="review-stem">${q.stem}</div>
                ${userAns !== null && !isCorrect ? `<div class="review-answer your-answer">Your answer: ${letters[userAns]}. ${q.options[userAns]}</div>` : ''}
                <div class="review-answer correct-answer">Correct: ${letters[q.correct]}. ${q.options[q.correct]}</div>
                <div class="review-explanation">${q.explanation}</div>
            </div>
        `;
    });
    reviewEl.innerHTML = reviewHTML;
}

function renderStats() {
    // Totals
    const progress = loadProgress();
    const entries = Object.values(progress);
    const totalSeen = entries.reduce((sum, sr) => sum + sr.timesSeen, 0);
    const totalCorrect = entries.reduce((sum, sr) => sum + sr.timesCorrect, 0);
    const accuracy = totalSeen > 0 ? Math.round(totalCorrect / totalSeen * 100) : 0;
    const dueCount = entries.filter(sr => isDue(sr)).length;
    const examHistory = loadExamHistory();

    document.getElementById('stats-totals').innerHTML = `
        <p class="label">Overview</p>
        <div class="stat-grid">
            <div class="stat-item">
                <div class="stat-value">${entries.length} / ${state.allQuestions.length}</div>
                <div class="stat-label">Questions Seen</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">${accuracy}%</div>
                <div class="stat-label">Overall Accuracy</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">${dueCount}</div>
                <div class="stat-label">Due for Review</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">${examHistory.length}</div>
                <div class="stat-label">Exams Taken</div>
            </div>
        </div>
    `;

    // Category bars
    const catStats = {};
    const examConfig = EXAMS.find(e => e.id === state.currentExam);
    const cats = examConfig ? examConfig.categories : DEFAULT_CATEGORIES;
    cats.forEach(c => catStats[c] = { correct: 0, total: 0 });
    entries.forEach(sr => {
        const q = state.allQuestions.find(q => q.id === sr.questionId);
        if (!q) return;
        catStats[q.category].total += sr.timesSeen;
        catStats[q.category].correct += sr.timesCorrect;
    });

    let barsHTML = '';
    Object.entries(catStats).forEach(([cat, data]) => {
        const pct = data.total > 0 ? Math.round(data.correct / data.total * 100) : 0;
        const fillClass = pct < 60 ? 'low' : pct < 80 ? 'mid' : 'high';
        barsHTML += `
            <div class="bar-row">
                <span class="bar-label">${cat}</span>
                <div class="bar-track">
                    <div class="bar-fill ${fillClass}" style="width:${data.total > 0 ? pct : 0}%"></div>
                </div>
                <span class="bar-value">${data.total > 0 ? pct + '%' : '—'} ${data.total > 0 ? '(' + data.correct + '/' + data.total + ')' : ''}</span>
            </div>
        `;
    });
    document.getElementById('cat-bars').innerHTML = barsHTML;

    // Weakest areas
    const weak = Object.entries(catStats)
        .filter(([_, d]) => d.total >= 3)
        .sort((a, b) => (a[1].correct / a[1].total) - (b[1].correct / b[1].total))
        .slice(0, 3);
    const weakText = document.getElementById('weakest-text');
    if (weak.length > 0) {
        weakText.innerHTML = weak.map(([cat, d]) => {
            const pct = Math.round(d.correct / d.total * 100);
            return `<strong>${cat}</strong>: ${pct}% accuracy`;
        }).join(' &bull; ');
    } else {
        weakText.innerHTML = '<span class="empty-text">Answer more questions to see focus areas</span>';
    }

    // Exam history
    const histEl = document.getElementById('exam-history-list');
    if (examHistory.length === 0) {
        histEl.innerHTML = '<span class="empty-text">No exams taken yet</span>';
    } else {
        histEl.innerHTML = examHistory.slice().reverse().map(h => {
            const date = new Date(h.date).toLocaleDateString();
            const pct = Math.round(h.score / h.total * 100);
            return `<div class="history-item"><span>${date}</span><span class="history-score" style="color:${pct >= 80 ? '#2e7d32' : '#c62828'}">${pct}% (${h.score}/${h.total})</span></div>`;
        }).join('');
    }
}

// ============================================================
// 9. CATEGORY FILTER UI
// ============================================================
function updateCategoryFilters() {
    const examConfig = EXAMS.find(e => e.id === state.currentExam);
    const cats = examConfig ? examConfig.categories : DEFAULT_CATEGORIES;
    const container = document.getElementById('category-filters');
    container.innerHTML = '';
    cats.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'cat-filter on';
        btn.dataset.cat = cat;
        btn.textContent = cat;
        container.appendChild(btn);
    });
    state.activeCategories = [...cats];

    // Update exam mode button description
    const examBtn = document.querySelector('.exam-btn .mode-desc');
    if (examBtn && examConfig) {
        examBtn.textContent = `${examConfig.questionCount} questions \u2022 ${Math.round(examConfig.timeSeconds / 60)} minutes`;
    }
}

// ============================================================
// 10. EVENT HANDLERS & INITIALIZATION
// ============================================================
function initEventListeners() {
    // Mode buttons
    document.getElementById('btn-study').addEventListener('click', startStudyMode);
    document.getElementById('btn-exam').addEventListener('click', startExamMode);

    // Quiz nav
    document.getElementById('btn-next').addEventListener('click', nextQuestion);
    document.getElementById('btn-prev').addEventListener('click', prevQuestion);
    document.getElementById('btn-quit').addEventListener('click', quitSession);
    document.getElementById('btn-submit-exam').addEventListener('click', () => {
        const unanswered = state.answers.filter(a => a === null).length;
        let msg = 'Submit your exam?';
        if (unanswered > 0) msg = `You have ${unanswered} unanswered question${unanswered > 1 ? 's' : ''}. Submit anyway?`;
        if (confirm(msg)) endExamSession();
    });

    // Flag
    document.getElementById('btn-flag').addEventListener('click', () => {
        const q = state.sessionQuestions[state.currentIndex];
        const flagged = loadFlagged();
        const idx = flagged.indexOf(q.id);
        if (idx >= 0) flagged.splice(idx, 1);
        else flagged.push(q.id);
        saveFlagged(flagged);
        const flagBtn = document.getElementById('btn-flag');
        flagBtn.classList.toggle('flagged', flagged.includes(q.id));
        flagBtn.textContent = flagged.includes(q.id) ? '\u2605' : '\u2606';
    });

    // Exam selector
    document.getElementById('exam-select').addEventListener('change', (e) => {
        state.currentExam = e.target.value;
        loadQuestions();
        updateCategoryFilters();
        renderDashboard();
    });

    // Category filters (delegated)
    document.getElementById('category-filters').addEventListener('click', (e) => {
        const btn = e.target.closest('.cat-filter');
        if (!btn) return;
        btn.classList.toggle('on');
        state.activeCategories = Array.from(document.querySelectorAll('.cat-filter.on'))
            .map(b => b.dataset.cat);
    });

    // Stats
    document.getElementById('btn-stats').addEventListener('click', () => {
        renderStats();
        showView('stats');
    });
    document.getElementById('btn-stats-home').addEventListener('click', () => {
        showView('dashboard');
        renderDashboard();
    });

    // Results home
    document.getElementById('btn-results-home').addEventListener('click', () => {
        showView('dashboard');
        renderDashboard();
    });

    // Reset
    document.getElementById('btn-reset').addEventListener('click', resetAllData);
}

function init() {
    loadQuestions();
    initEventListeners();
    updateCategoryFilters();
    renderDashboard();
}

document.addEventListener('DOMContentLoaded', init);
