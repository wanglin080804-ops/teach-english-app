import { curriculum, mathVocab, scienceVocab, mathStagesInfo, scienceStagesInfo } from './data.js';

let currentSubject = 'math';
let currentQuestions = [];
let currentQuestionIndex = 0;
let currentChapter = 0;
let currentStage = 0;
let currentLevel = 0;

let dailyGoal = 80;
let dailyProgress = { math: 0, science: 0 };
try {
  let stored = localStorage.getItem('dailyProgressBySubject');
  if (stored) {
    dailyProgress = JSON.parse(stored);
  } else if (localStorage.getItem('dailyProgress')) {
    dailyProgress.math = parseInt(localStorage.getItem('dailyProgress')) || 0;
  }
} catch (e) {
  dailyProgress = { math: 0, science: 0 };
}
if (typeof dailyProgress !== 'object' || dailyProgress === null) {
  dailyProgress = { math: 0, science: 0 };
}

let todayStr = new Date().toDateString();
if (localStorage.getItem('dailyProgressDate') !== todayStr) {
  dailyProgress = { math: 0, science: 0 };
  localStorage.setItem('dailyProgressBySubject', JSON.stringify(dailyProgress));
  localStorage.setItem('dailyProgressDate', todayStr);
  localStorage.removeItem('hideCongratsToday_math');
  localStorage.removeItem('hideCongratsToday_science');
}
let learnedVocabs = [];
let currentQuestionAnswered = false;

let progress = JSON.parse(localStorage.getItem('userProgress')) || {
  math: { c: 1, s: 1, l: 1 },
  science: { c: 1, s: 1, l: 1 }
};

let savedSessions = {};
try {
  let stored = localStorage.getItem('savedSessionsBySubject');
  if (stored) {
    savedSessions = JSON.parse(stored);
  } else if (localStorage.getItem('savedSession')) {
    let legacy = JSON.parse(localStorage.getItem('savedSession'));
    if (legacy && legacy.subject) {
      savedSessions[legacy.subject] = legacy;
    }
  }
} catch (e) {
  savedSessions = {};
}

// --- STREAK LOGIC ---
let streakCount = parseInt(localStorage.getItem('streakCount') || '0');
let lastStreakDate = localStorage.getItem('lastStreakDate');

function getStreakHue(count) {
  if (count >= 40) return 90; // Green
  if (count >= 30) return 180; // Blue
  if (count >= 20) return 250; // Purple
  if (count >= 10) return 320; // Red
  return 0; // Orange
}

function getStreakColor(count) {
  if (count >= 40) return 'var(--primary-color)';
  if (count >= 30) return 'var(--secondary-color)';
  if (count >= 20) return 'var(--purple-color)';
  if (count >= 10) return 'var(--danger-color)';
  return 'var(--orange-color)';
}

function updateStreakUI() {
  document.getElementById('streak-count').innerText = streakCount;
  document.getElementById('streak-container').style.color = getStreakColor(streakCount);
  document.getElementById('streak-icon').style.filter = 'hue-rotate(' + getStreakHue(streakCount) + 'deg)';
}

function playStreakAnimation() {
  const modal = document.getElementById('streak-anim-modal');
  const bigFlame = document.getElementById('big-flame');
  const bigNum = document.getElementById('big-streak-num');
  const bigText = document.getElementById('big-streak-text');
  
  modal.classList.remove('hidden');
  bigFlame.style.filter = 'hue-rotate(' + getStreakHue(streakCount) + 'deg)';
  bigNum.innerText = streakCount;
  bigNum.style.color = getStreakColor(streakCount);
  
  setTimeout(() => {
    let target = document.getElementById('streak-icon').getBoundingClientRect();
    let start = bigFlame.getBoundingClientRect();
    
    // Calculate movement
    let moveX = target.left - start.left + (target.width / 2) - (start.width / 2);
    let moveY = target.top - start.top + (target.height / 2) - (start.height / 2);
    let scale = target.width / start.width;
    
    bigText.style.opacity = '0';
    bigFlame.style.transform = 'translate(' + moveX + 'px, ' + moveY + 'px) scale(' + scale + ')';
    
    setTimeout(() => {
      modal.classList.add('hidden');
      bigFlame.style.transform = 'none';
      bigText.style.opacity = '1';
      updateStreakUI();
    }, 1200);
  }, 1500);
}

const SPEECH_SIMILARITY_THRESHOLD = 0.5;

const screens = {
  home: document.getElementById('home-screen'),
  lesson: document.getElementById('lesson-screen'),
  summary: document.getElementById('summary-screen')
};

function init() {
  let saved = savedSessions[currentSubject] || Object.values(savedSessions)[0];
  if (saved && saved.qIndex > 0 && saved.qIndex < 20) {
    let subjectName = saved.subject === 'math' ? 'Toán học' : 'Khoa học';
    let qNum = (saved.qIndex || 0) + 1;
    let remaining = 20 - saved.qIndex;
    const welcomeText = document.getElementById('welcome-text');
    if (welcomeText) {
      welcomeText.innerHTML = 
        "Lần trước bạn đang làm dở <strong>Câu " + qNum + "</strong> (đã hoàn thành <strong>" + saved.qIndex + "/20</strong> câu) của <strong>Ải " + saved.l + "</strong>, Màn " + saved.s + ", Chương " + saved.c + " môn <strong>" + subjectName + "</strong>.";
    }
    const resumeBtn = document.getElementById('btn-resume-session');
    if (resumeBtn) resumeBtn.innerText = "▶️ Tiếp tục Câu " + qNum + " (Còn " + remaining + " câu)";
    document.getElementById('welcome-modal').classList.remove('hidden');
  }
  showScreen('home');
  
  // Handle Streak
  let yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  let yesterdayStr = yesterday.toDateString();
  
  if (lastStreakDate !== todayStr) {
    if (lastStreakDate === yesterdayStr) {
      streakCount++;
    } else {
      streakCount = 1;
    }
    localStorage.setItem('streakCount', streakCount);
    localStorage.setItem('lastStreakDate', todayStr);
    setTimeout(() => playStreakAnimation(), 500);
  } else {
    updateStreakUI();
  }
}

window.closeWelcomeModal = () => {
  document.getElementById('welcome-modal').classList.add('hidden');
};

window.closeCongrats = (continueLesson) => {
  const cb = document.getElementById('dont-remind-today');
  if (cb && cb.checked) {
    localStorage.setItem('hideCongratsToday_' + currentSubject, new Date().toDateString());
  }
  document.getElementById('congrats-modal').classList.add('hidden');
  if (!continueLesson) {
    goHome();
  }
};

window.resumeSession = () => {
  document.getElementById('welcome-modal').classList.add('hidden');
  let saved = savedSessions[currentSubject] || Object.values(savedSessions)[0];
  if (saved) {
    if (saved.subject !== currentSubject) switchTab(saved.subject);
    startLevel(saved.c, saved.s, saved.l, saved.qIndex);
  }
};

window.restartLevelFromBeginning = () => {
  document.getElementById('welcome-modal').classList.add('hidden');
  let saved = savedSessions[currentSubject] || Object.values(savedSessions)[0];
  if (saved) {
    let s = { ...saved };
    delete savedSessions[s.subject];
    localStorage.setItem('savedSessionsBySubject', JSON.stringify(savedSessions));
    localStorage.removeItem('savedSession');
    if (s.subject !== currentSubject) switchTab(s.subject);
    startLevel(s.c, s.s, s.l, 0, true);
  }
};

function showScreen(screenName) {
  Object.values(screens).forEach(s => s.classList.add('hidden'));
  screens[screenName].classList.remove('hidden');
  if (screenName === 'home') {
    updateHomeProgress();
    renderCurriculum();
  }
}

function updateHomeProgress() {
  const currentCount = (dailyProgress && dailyProgress[currentSubject]) ? dailyProgress[currentSubject] : 0;
  const subjectName = currentSubject === 'math' ? 'Toán học' : 'Khoa học';

  const textEl = document.getElementById('daily-progress-text');
  if (textEl) textEl.innerText = currentCount + "/" + dailyGoal;

  const subjectEl = document.getElementById('daily-subject-name');
  if (subjectEl) subjectEl.innerText = '(' + subjectName + ')';

  const percent = Math.min((currentCount / dailyGoal) * 100, 100);
  const fillEl = document.getElementById('daily-progress-fill');
  if (fillEl) fillEl.style.width = percent + "%";
}

window.switchTab = (subject) => {
  currentSubject = subject;
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelector(subject === 'math' ? '.tab-btn:nth-child(1)' : '.tab-btn:nth-child(2)').classList.add('active');
  renderCurriculum();
  updateHomeProgress();
};

window.resetProgress = () => {
  let subjectName = currentSubject === 'math' ? 'Toán học' : 'Khoa học';
  document.getElementById('reset-desc').innerText = "Bạn có chắc chắn muốn xóa toàn bộ tiến trình học của môn " + subjectName + " và học lại từ đầu không?";
  document.getElementById('reset-modal').classList.remove('hidden');
};

window.confirmReset = () => {
  progress[currentSubject] = { c: 1, s: 1, l: 1 };
  localStorage.setItem('userProgress', JSON.stringify(progress));
  
  if (savedSessions[currentSubject]) {
    delete savedSessions[currentSubject];
    localStorage.setItem('savedSessionsBySubject', JSON.stringify(savedSessions));
  }
  localStorage.removeItem('savedSession');
  
  dailyProgress[currentSubject] = 0;
  localStorage.setItem('dailyProgressBySubject', JSON.stringify(dailyProgress));
  
  document.getElementById('reset-modal').classList.add('hidden');
  renderCurriculum();
  updateHomeProgress();
};

function isUnlocked(c, s, l) {
  let p = progress[currentSubject];
  if (c < p.c) return true;
  if (c === p.c && s < p.s) return true;
  if (c === p.c && s === p.s && l <= p.l) return true;
  return false;
}

function isCompleted(c, s, l) {
  let p = progress[currentSubject];
  if (c < p.c) return true;
  if (c === p.c && s < p.s) return true;
  if (c === p.c && s === p.s && l < p.l) return true;
  return false;
}

function renderCurriculum() {
  const container = document.getElementById('curriculum-container');
  container.innerHTML = '';
  const data = curriculum[currentSubject];
  let p = progress[currentSubject];
  
  data.chapters.forEach(chap => {
    let isCurrentChapter = (chap.id === p.c);
    let html = '<div class="chapter-block ' + (isCurrentChapter ? 'current' : '') + '"><div class="chapter-title">' + chap.title + '</div>';
    
    chap.stages.forEach(stage => {
      html += '<div class="stage-block"><div class="stage-title">' + stage.title + '</div><div class="level-grid">';
      
      stage.levels.forEach(level => {
        let stateClass = '';
        let icon = '';
        let locked = true;
        
        let saved = savedSessions[currentSubject];
        let isInProgress = (saved && saved.c === chap.id && saved.s === stage.id && saved.l === level.id && saved.qIndex > 0 && saved.qIndex < 20);

        if (isInProgress) {
          stateClass = 'in-progress';
          icon = '⏳ ' + saved.qIndex + '/20';
          locked = false;
        } else if (isCompleted(chap.id, stage.id, level.id)) {
          stateClass = 'completed';
          icon = '✔️';
          locked = false;
        } else if (isUnlocked(chap.id, stage.id, level.id)) {
          stateClass = 'current';
          icon = '⭐';
          locked = false;
        } else {
          stateClass = 'locked';
          icon = '🔒';
        }
        
        html += '<button class="level-btn ' + stateClass + '" ' + (locked ? 'disabled' : '') + ' onclick="startLevel(' + chap.id + ', ' + stage.id + ', ' + level.id + ')" title="' + level.title + '">' + level.title + '<br><span class="level-icon">' + icon + '</span></button>';
      });
      html += '</div>';
      
      let stageTestLocked = !(isCompleted(chap.id, stage.id, 4));
      html += '<button class="exam-btn ' + (stageTestLocked ? 'locked' : '') + '" ' + (stageTestLocked ? 'disabled' : '') + ' onclick="showExam(' + chap.id + ', ' + stage.id + ')">⚡ KIỂM TRA PHẢN XẠ 15S - ' + stage.title + ' ' + (stageTestLocked ? '🔒' : '') + '</button>';
      html += '</div>';
    });
    
    let chapTestLocked = !(isCompleted(chap.id, 5, 4));
    html += '<button class="exam-btn ' + (chapTestLocked ? 'locked' : '') + '" ' + (chapTestLocked ? 'disabled' : '') + ' onclick="showChapExam(' + chap.id + ')" style="background:var(--danger-color); box-shadow: 0 4px 0 var(--danger-shadow);">🎓 BÀI KIỂM TRA CHƯƠNG ' + chap.id + ' ' + (chapTestLocked ? '🔒' : '') + '</button>';
    html += '</div>';
    container.innerHTML += html;
  });
}

let currentExamStage = null;

window.showExam = (cId, sId) => {
  currentExamStage = { c: cId, s: sId };
  const stageInfo = (currentSubject === 'math' ? mathStagesInfo : scienceStagesInfo)['c' + cId + 's' + sId];
  let stageName = stageInfo ? stageInfo.title : "Màn " + sId;
  document.getElementById('exam-title').innerText = "📝 Bài kiểm tra " + stageName;
  document.getElementById('exam-desc').innerText = "Thử thách phản xạ từ vựng: Nối đúng 7 từ với nghĩa trong vòng 15 giây!";
  
  const startBtn = document.getElementById('btn-start-exam-now');
  if (startBtn) {
    startBtn.onclick = () => {
      document.getElementById('exam-modal').classList.add('hidden');
      startSpeedMatch(cId, sId);
    };
  }
  document.getElementById('exam-modal').classList.remove('hidden');
};

window.showChapExam = (chapId) => {
  document.getElementById('exam-title').innerText = "🎓 Bài kiểm tra Chương " + chapId;
  document.getElementById('exam-desc').innerText = "Tổng hợp toàn bộ kiến thức 5 Màn của Chương " + chapId + " (Đang hoàn thiện chấm điểm tổng kết).";
  const startBtn = document.getElementById('btn-start-exam-now');
  if (startBtn) {
    startBtn.onclick = () => {
      document.getElementById('exam-modal').classList.add('hidden');
      startSpeedMatch(chapId, 1);
    };
  }
  document.getElementById('exam-modal').classList.remove('hidden');
};

// ==========================================
// TÍNH NĂNG: THỬ THÁCH NỐI TỪ PHẢN XẠ 15S
// ==========================================
let speedTimerInterval = null;
let speedTimeLeft = 15;
let speedSelectedWord = null;
let speedSelectedMeaning = null;
let speedMatchedCount = 0;
let speedActiveList = [];

window.startSpeedMatch = (cId, sId) => {
  const stageKey = 'c' + cId + 's' + sId;
  const vocabBank = (currentSubject === 'math' ? mathVocab : scienceVocab)[stageKey] || [];
  if (vocabBank.length === 0) return alert("Chưa có dữ liệu từ vựng cho Màn này!");

  // Lấy 7 từ vựng tiêu biểu
  speedActiveList = vocabBank.slice(0, 7);
  if (speedActiveList.length < 7 && vocabBank.length > 0) {
    speedActiveList = vocabBank;
  }
  
  const stageInfo = (currentSubject === 'math' ? mathStagesInfo : scienceStagesInfo)[stageKey];
  document.getElementById('speed-stage-title').innerText = stageInfo ? stageInfo.title : "Màn " + sId;
  
  document.getElementById('speed-result-area').classList.add('hidden');
  document.getElementById('speed-match-arena').classList.remove('hidden');
  
  speedMatchedCount = 0;
  speedTimeLeft = 15;
  speedSelectedWord = null;
  speedSelectedMeaning = null;
  updateSpeedUI();

  // Render 2 cột từ tiếng Anh & nghĩa tiếng Việt đã được xáo trộn
  const wordsCol = document.getElementById('speed-words-col');
  const meaningsCol = document.getElementById('speed-meanings-col');
  wordsCol.innerHTML = '';
  meaningsCol.innerHTML = '';

  const shuffledWords = [...speedActiveList].sort(() => Math.random() - 0.5);
  const shuffledMeanings = [...speedActiveList].sort(() => Math.random() - 0.5);

  shuffledWords.forEach(item => {
    const btn = document.createElement('div');
    btn.className = 'match-chip';
    btn.innerText = item.word;
    btn.dataset.id = item.word;
    btn.onclick = () => handleSelectWord(btn, item.word);
    wordsCol.appendChild(btn);
  });

  shuffledMeanings.forEach(item => {
    const btn = document.createElement('div');
    btn.className = 'match-chip';
    btn.innerText = item.meaning;
    btn.dataset.id = item.word;
    btn.onclick = () => handleSelectMeaning(btn, item.word);
    meaningsCol.appendChild(btn);
  });

  document.getElementById('speed-match-modal').classList.remove('hidden');
  startSpeedTimer();
};

function startSpeedTimer() {
  if (speedTimerInterval) clearInterval(speedTimerInterval);
  const timerPill = document.getElementById('speed-timer');
  const timerBar = document.getElementById('speed-timer-bar');
  
  speedTimerInterval = setInterval(() => {
    speedTimeLeft -= 0.1;
    if (speedTimeLeft <= 0) {
      speedTimeLeft = 0;
      clearInterval(speedTimerInterval);
      endSpeedMatch(false);
    }
    
    let sec = Math.ceil(speedTimeLeft);
    timerPill.innerText = "⏱️ " + sec + "s";
    let pct = Math.max(0, (speedTimeLeft / 15) * 100);
    timerBar.style.width = pct + "%";
    
    if (speedTimeLeft <= 5) {
      timerPill.classList.add('urgent');
      timerBar.style.background = 'var(--danger-color)';
    } else {
      timerPill.classList.remove('urgent');
      timerBar.style.background = 'var(--primary-color)';
    }
  }, 100);
}

function handleSelectWord(element, wordId) {
  if (element.classList.contains('matched')) return;
  document.querySelectorAll('#speed-words-col .match-chip').forEach(el => el.classList.remove('selected'));
  element.classList.add('selected');
  speedSelectedWord = { element, id: wordId };
  checkSpeedPair();
}

function handleSelectMeaning(element, wordId) {
  if (element.classList.contains('matched')) return;
  document.querySelectorAll('#speed-meanings-col .match-chip').forEach(el => el.classList.remove('selected'));
  element.classList.add('selected');
  speedSelectedMeaning = { element, id: wordId };
  checkSpeedPair();
}

function checkSpeedPair() {
  if (!speedSelectedWord || !speedSelectedMeaning) return;

  const wEl = speedSelectedWord.element;
  const mEl = speedSelectedMeaning.element;

  if (speedSelectedWord.id === speedSelectedMeaning.id) {
    // Nối đúng!
    wEl.className = 'match-chip matched';
    mEl.className = 'match-chip matched';
    speedMatchedCount++;
    updateSpeedUI();
    
    speedSelectedWord = null;
    speedSelectedMeaning = null;

    if (speedMatchedCount >= speedActiveList.length) {
      clearInterval(speedTimerInterval);
      setTimeout(() => endSpeedMatch(true), 300);
    }
  } else {
    // Nối sai: rung lắc và nháy đỏ
    wEl.classList.add('wrong');
    mEl.classList.add('wrong');
    setTimeout(() => {
      wEl.classList.remove('wrong', 'selected');
      mEl.classList.remove('wrong', 'selected');
      speedSelectedWord = null;
      speedSelectedMeaning = null;
    }, 350);
  }
}

function updateSpeedUI() {
  document.getElementById('speed-score').innerText = "🎯 " + speedMatchedCount + "/" + speedActiveList.length + " cặp";
}

function endSpeedMatch(isWin) {
  document.getElementById('speed-match-arena').classList.add('hidden');
  const resultArea = document.getElementById('speed-result-area');
  resultArea.classList.remove('hidden');

  const titleEl = document.getElementById('speed-result-title');
  const descEl = document.getElementById('speed-result-desc');
  const iconEl = document.getElementById('speed-result-icon');

  if (isWin) {
    let elapsed = (15 - speedTimeLeft).toFixed(1);
    iconEl.innerText = "🏆";
    titleEl.innerText = "PHẢN XẠ XUẤT SẮC!";
    titleEl.style.color = "var(--primary-color)";
    descEl.innerText = "Chúc mừng! Bạn đã phản xạ nối chính xác 7/7 từ vựng chỉ trong " + elapsed + " giây. Kỹ năng ghi nhớ từ của bạn rất tuyệt vời!";
    incrementDailyProgress();
  } else {
    iconEl.innerText = "⏰";
    titleEl.innerText = "HẾT GIỜ RỒI!";
    titleEl.style.color = "var(--danger-color)";
    descEl.innerText = "Bạn đã hoàn thành nối đúng " + speedMatchedCount + "/" + speedActiveList.length + " cặp từ trước khi hết thời gian 15 giây. Hãy luyện tập thêm để phản xạ nhanh hơn nhé!";
  }
}

window.retrySpeedMatch = () => {
  if (currentExamStage) {
    startSpeedMatch(currentExamStage.c, currentExamStage.s);
  }
};

window.finishSpeedMatch = () => {
  if (speedTimerInterval) clearInterval(speedTimerInterval);
  document.getElementById('speed-match-modal').classList.add('hidden');
};

window.startLevel = (cId, sId, lId, startIndex = null, forceRestart = false) => {
  const chapter = curriculum[currentSubject].chapters.find(c => c.id === cId);
  const stage = chapter.stages.find(s => s.id === sId);
  const level = stage.levels.find(l => l.id === lId);
  
  currentChapter = cId;
  currentStage = sId;
  currentLevel = lId;
  
  const saved = savedSessions[currentSubject];
  const isThisSaved = (!forceRestart && saved && saved.c === cId && saved.s === sId && saved.l === lId && saved.qIndex > 0 && saved.qIndex < 20);

  if (isThisSaved && startIndex === null) {
    // Tiếp tục học số câu còn lại của ải
    currentQuestionIndex = saved.qIndex;
    if (saved.questions && saved.questions.length === 20) {
      currentQuestions = [...saved.questions];
    } else {
      currentQuestions = [...level.questions];
    }
  } else if (startIndex !== null) {
    currentQuestionIndex = startIndex;
    if (isThisSaved && saved.questions && saved.questions.length === 20) {
      currentQuestions = [...saved.questions];
    } else {
      currentQuestions = [...level.questions];
    }
  } else {
    // Bắt đầu từ đầu ải (câu 0)
    currentQuestionIndex = 0;
    currentQuestions = [...level.questions];
    if (forceRestart && saved && saved.c === cId && saved.s === sId && saved.l === lId) {
      delete savedSessions[currentSubject];
      localStorage.setItem('savedSessionsBySubject', JSON.stringify(savedSessions));
      localStorage.removeItem('savedSession');
    }
  }

  learnedVocabs = [];
  
  showScreen('lesson');
  renderQuestion();
};

window.goHome = () => {
  if (currentQuestions && currentQuestions.length > 0 && currentQuestionIndex < currentQuestions.length) {
    saveSession();
  }
  showScreen('home');
};

window.toggleVocab = () => {
  const card = document.getElementById('vocab-card');
  card.classList.toggle('hidden');
};

function setupVocabHint(q) {
  const container = document.getElementById('vocab-hint-container');
  if (q.vocab || (q.type === 'vocab_match')) {
    container.classList.remove('hidden');
    document.getElementById('vocab-card').classList.add('hidden');
    
    let v = q.vocab || {};
    let w = v.word || q.word;
    let t = v.wordType || q.wordType;
    let m = v.meaning || q.meaning || '';
    let g = v.grammar || '';
    let s = v.sentence || '';
    let tr = v.translation || '';
    
    document.getElementById('vocab-word').innerText = w;
    document.getElementById('vocab-type').innerText = t;
    document.getElementById('vocab-meaning').innerText = m;

    const grammarBox = document.getElementById('vocab-grammar-box');
    const grammarText = document.getElementById('vocab-grammar');
    if (g && grammarBox && grammarText) {
      grammarBox.classList.remove('hidden');
      grammarText.innerText = g;
    } else if (grammarBox) {
      grammarBox.classList.add('hidden');
    }

    const sentenceBox = document.getElementById('vocab-sentence-box');
    const sentenceEn = document.getElementById('vocab-sentence');
    const sentenceVi = document.getElementById('vocab-trans');
    if (s && sentenceBox && sentenceEn && sentenceVi) {
      sentenceBox.classList.remove('hidden');
      sentenceEn.innerText = "🗣️ " + s;
      sentenceVi.innerText = tr;
    } else if (sentenceBox) {
      sentenceBox.classList.add('hidden');
    }

    if (!learnedVocabs.find(x => x.word === w)) {
      learnedVocabs.push({ word: w, type: t, meaning: m, grammar: g, sentence: s });
    }
  } else {
    container.classList.add('hidden');
  }
}

function saveSession() {
  if (currentQuestions && currentQuestions.length > 0 && currentQuestionIndex < currentQuestions.length) {
    savedSessions[currentSubject] = {
      subject: currentSubject,
      c: currentChapter,
      s: currentStage,
      l: currentLevel,
      qIndex: currentQuestionIndex,
      questions: currentQuestions
    };
    localStorage.setItem('savedSessionsBySubject', JSON.stringify(savedSessions));
    localStorage.setItem('savedSession', JSON.stringify(savedSessions[currentSubject]));
  }
}

function renderQuestion() {
  const container = document.getElementById('question-container');
  container.innerHTML = '';
  currentQuestionAnswered = false;
  
  if (currentQuestionIndex >= currentQuestions.length) {
    // Hoàn thành trọn vẹn 20 câu của ải!
    if (savedSessions[currentSubject]) {
      delete savedSessions[currentSubject];
      localStorage.setItem('savedSessionsBySubject', JSON.stringify(savedSessions));
    }
    localStorage.removeItem('savedSession');

    let p = progress[currentSubject];
    if (currentChapter === p.c && currentStage === p.s && currentLevel === p.l) {
      p.l++;
      if (p.l > 4) { p.l = 1; p.s++; }
      if (p.s > 5) { p.s = 1; p.c++; }
      localStorage.setItem('userProgress', JSON.stringify(progress));
    }
    showSummary();
    return;
  }
  
  saveSession();

  container.classList.remove('slide-up');
  void container.offsetWidth; 
  container.classList.add('slide-up');

  const q = currentQuestions[currentQuestionIndex];
  setupVocabHint(q);
  
  const totalQ = currentQuestions.length;
  const lessonPercent = totalQ > 0 ? (currentQuestionIndex / totalQ) * 100 : 0;
  const fillEl = document.getElementById('lesson-progress-fill');
  if (fillEl) fillEl.style.width = lessonPercent + "%";

  const countEl = document.getElementById('lesson-progress-count');
  if (countEl) countEl.innerText = currentQuestionIndex + "/" + totalQ;

  if (q.type === 'vocab_match' || q.type === 'fill') renderMultipleChoice(container, q);
  else if (q.type === 'arrange') renderArrange(container, q);
  else if (q.type === 'speak' || q.type === 'qa_speak') renderSpeaking(container, q);
}

function renderMultipleChoice(container, q) {
  let title = q.type === 'vocab_match' ? 'Chọn nghĩa đúng của từ:' : 'Điền vào chỗ trống:';
  let questionText = q.type === 'vocab_match' ? '<span style="font-size:36px; color:var(--primary-color)">' + q.word + ' ' + q.wordType + '</span>' : q.question;
  
  let options = q.type === 'vocab_match' ? [...q.wrong, q.meaning] : [...q.options];
  options.sort(() => Math.random() - 0.5);

  let html = '<h2>' + title + '</h2><div class="question-text">' + questionText + '</div><div class="options-grid">';
  options.forEach(opt => {
    html += '<button class="btn-option" onclick="checkMultipleChoice(\'' + opt + '\', \'' + (q.type === 'vocab_match' ? q.meaning : q.answer) + '\')">' + opt + '</button>';
  });
  html += '</div><div id="feedback" class="result-area hidden"></div>';
  html += '<div class="controls"><button class="btn skip" onclick="skipQuestion()">Bỏ qua</button><button id="btn-next" class="btn primary hidden" onclick="nextQuestion()">Tiếp tục</button></div>';
  container.innerHTML = html;
}

window.checkMultipleChoice = (selected, correct) => {
  const feedback = document.getElementById('feedback');
  feedback.classList.remove('hidden');
  if (selected.includes(correct) || correct.includes(selected)) {
    feedback.className = 'result-area correct';
    feedback.innerText = '✅ Chính xác!';
    document.getElementById('btn-next').classList.remove('hidden');
    if (!currentQuestionAnswered) {
      currentQuestionAnswered = true;
      incrementDailyProgress();
    }
  } else {
    feedback.className = 'result-area incorrect';
    feedback.innerText = '❌ Sai rồi, thử lại nhé!';
  }
};

function renderArrange(container, q) {
  let html = '<h2>Sắp xếp các từ thành câu hoàn chỉnh:</h2><div class="arrange-container" id="arrange-drop"></div><div class="word-bank" id="word-bank"></div><div id="feedback" class="result-area hidden"></div><div class="controls"><button class="btn skip" onclick="skipQuestion()">Bỏ qua</button><button class="btn secondary" onclick="checkArrange(\'' + q.correct.replace(/'/g, "\\'") + '\')">Kiểm tra</button><button id="btn-next" class="btn primary hidden" onclick="nextQuestion()">Tiếp tục</button></div>';
  container.innerHTML = html;

  let shuffled = [...q.words].sort(() => Math.random() - 0.5);
  shuffled.forEach((w) => {
    let chip = document.createElement('div');
    chip.className = 'word-chip'; chip.innerText = w;
    chip.onclick = () => {
      if (chip.parentElement.id === 'word-bank') { document.getElementById('arrange-drop').appendChild(chip); chip.classList.add('in-drop'); }
      else { document.getElementById('word-bank').appendChild(chip); chip.classList.remove('in-drop'); }
    };
    document.getElementById('word-bank').appendChild(chip);
  });
}

window.checkArrange = (correctSentence) => {
  const feedback = document.getElementById('feedback');
  let userSentence = Array.from(document.getElementById('arrange-drop').children).map(c => c.innerText).join(' ');
  feedback.classList.remove('hidden');
  if (userSentence === correctSentence) {
    feedback.className = 'result-area correct'; feedback.innerText = '✅ Giỏi lắm!';
    document.getElementById('btn-next').classList.remove('hidden');
    if (!currentQuestionAnswered) {
      currentQuestionAnswered = true;
      incrementDailyProgress();
    }
  } else {
    feedback.className = 'result-area incorrect'; feedback.innerText = '❌ Vẫn chưa đúng, hãy xếp lại nhé.';
  }
};

function renderSpeaking(container, q) {
  const isQA = q.type === 'qa_speak';
  let targetText = isQA ? q.answer : q.text;
  let html = '<h2>' + (isQA ? 'Trả lời câu hỏi:' : 'Nghe và đọc theo:') + '</h2><div class="question-text">' + (isQA ? q.question : q.text) + '</div><div class="hint-text hidden" id="speak-hint">' + q.hint + '<br><strong>Gợi ý: ' + targetText + '</strong></div><div class="controls">';
  
  if (!isQA) {
    html += '<button class="btn secondary" onclick="speakText(\'' + q.text.replace(/'/g, "\\'") + '\')">🔊 Nghe mẫu</button>';
  }
  
  html += '<button class="btn primary" id="btn-record">🎤 Nói</button>';
  
  if (isQA) {
    html += '<button class="btn secondary" onclick="document.getElementById(\'speak-hint\').classList.remove(\'hidden\'); speakText(\'' + targetText.replace(/'/g, "\\'") + '\')">💡 Nghe mẫu</button>';
  }
  
  html += '</div><div id="feedback" class="result-area hidden"></div><div class="controls"><button class="btn skip" onclick="skipQuestion()">Bỏ qua</button><button id="btn-next" class="btn primary hidden" onclick="nextQuestion()">Tiếp tục</button></div>';
  
  container.innerHTML = html;
  document.getElementById('btn-record').onclick = () => startRecognition(targetText);
}

window.speakText = (text) => {
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'en-US'; u.rate = 0.9;
  window.speechSynthesis.speak(u);
}

function convertWordsToNumbers(text) {
  if (!text) return '';
  const units = {
    'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4,
    'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9,
    'ten': 10, 'eleven': 11, 'twelve': 12, 'thirteen': 13, 'fourteen': 14,
    'fifteen': 15, 'sixteen': 16, 'seventeen': 17, 'eighteen': 18, 'nineteen': 19
  };
  const tens = {
    'twenty': 20, 'thirty': 30, 'forty': 40, 'fifty': 50,
    'sixty': 60, 'seventy': 70, 'eighty': 80, 'ninety': 90
  };
  
  let res = text;
  // Ghép số kép: "twenty five" -> "25", "thirty two" -> "32"
  for (let t in tens) {
    for (let u in units) {
      if (units[u] > 0 && units[u] < 10) {
        let val = tens[t] + units[u];
        res = res.replace(new RegExp('\\b' + t + '[\\s-]+' + u + '\\b', 'gi'), val.toString());
      }
    }
    res = res.replace(new RegExp('\\b' + t + '\\b', 'gi'), tens[t].toString());
  }
  for (let u in units) {
    res = res.replace(new RegExp('\\b' + u + '\\b', 'gi'), units[u].toString());
  }
  res = res.replace(/\bhundred\b/gi, '100');
  
  // Thứ tự: first -> 1st, second -> 2nd, third -> 3rd
  res = res.replace(/\bfirst\b/gi, '1st')
           .replace(/\bsecond\b/gi, '2nd')
           .replace(/\bthird\b/gi, '3rd')
           .replace(/\bfourth\b/gi, '4th')
           .replace(/\bfifth\b/gi, '5th');

  return res;
}

function normalizeAudioText(str) {
  if (!str) return '';
  let s = str.toLowerCase();
  
  // 1. Chuyển đổi toàn bộ từ số chữ ("eight", "seven", "fifteen") thành số ("8", "7", "15")
  s = convertWordsToNumbers(s);
  
  // 2. Chuẩn hóa ký hiệu toán học phổ biến sang từ đồng nhất
  s = s.replace(/\+/g, " plus ")
       .replace(/–|-/g, " minus ")
       .replace(/=/g, " is ")
       .replace(/\*/g, " times ")
       .replace(/÷/g, " divide ")
       .replace(/\//g, " divide ");
       
  // 3. Chuẩn hóa từ đồng nghĩa trong câu toán/khoa học
  s = s.replace(/\bequals\b/g, "is")
       .replace(/\bequal to\b/g, "is")
       .replace(/\bequal\b/g, "is")
       .replace(/\bmultiplied by\b/g, "times")
       .replace(/\bdivided by\b/g, "divide")
       .replace(/\badd to\b/g, "add")
       .replace(/\bone half\b/g, "half")
       .replace(/\bone quarter\b/g, "quarter");

  // 4. Bỏ các dấu câu
  s = s.replace(/[.,!?"':;()[\]{}]/g, " ");
  
  let words = s.split(/\s+/).filter(w => w.length > 0);
  
  // Map thêm các trường hợp đặc biệt do nhận diện giọng nói
  const numMap = { 
    '1:00':'1', '2:00':'2', '3:00':'3', '4:00':'4', '5:00':'5', 
    'at':'add', 'to':'2', 'too':'2', 'for':'4' 
  };
  
  words = words.map((w, i) => {
    if (w === 'x' && !isNaN(words[i-1]) && !isNaN(words[i+1])) return 'times';
    return numMap[w] || w;
  });
  
  return words.join(' ');
}

function levenshtein(a, b) {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;
  let matrix = [];
  for (let i = 0; i <= b.length; i++) { matrix[i] = [i]; }
  for (let j = 0; j <= a.length; j++) { matrix[0][j] = j; }
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1));
      }
    }
  }
  return matrix[b.length][a.length];
}
let activeRecognition = null;
let recognitionWatchdog = null;

window.startRecognition = (targetText) => {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    alert("Trình duyệt này không hỗ trợ Web Speech API. Khuyên dùng Google Chrome, Microsoft Edge hoặc Safari trên iPhone!");
    return;
  }

  const btnRecord = document.getElementById('btn-record');
  const feedback = document.getElementById('feedback');

  // Nếu đang nghe mà bấm tiếp => Dừng lại an toàn
  if (activeRecognition) {
    try {
      activeRecognition.stop();
    } catch (e) {}
    activeRecognition = null;
    clearTimeout(recognitionWatchdog);
    if (btnRecord) {
      btnRecord.innerText = "🎤 Nói";
      btnRecord.classList.remove('recording-pulse');
    }
    return;
  }

  let recognition;
  try {
    recognition = new SpeechRecognition();
  } catch (err) {
    console.error("SpeechRecognition init error:", err);
    alert("Không thể khởi động bộ thu âm: " + err.message);
    return;
  }

  activeRecognition = recognition;
  recognition.lang = 'en-US';
  recognition.interimResults = true; // Hiển thị từ ngay khi nói trong thời gian thực
  recognition.maxAlternatives = 1;
  recognition.continuous = false;

  let recognizedAny = false;
  let finalResultText = '';

  btnRecord.innerText = "🛑 Đang nghe... (Bấm để dừng)";
  btnRecord.classList.add('recording-pulse');

  feedback.classList.remove('hidden');
  feedback.className = 'result-area';
  feedback.innerHTML = '🎙️ <em>Đang lắng nghe... Hãy nói to câu tiếng Anh vào micro!</em>';

  // Watchdog timer: Tự động dừng sau 9 giây nếu mic không bắt được âm thanh để không bao giờ bị treo
  clearTimeout(recognitionWatchdog);
  recognitionWatchdog = setTimeout(() => {
    if (activeRecognition === recognition) {
      try {
        recognition.stop();
      } catch (e) {}
    }
  }, 9000);

  recognition.onresult = (e) => {
    let interimText = '';
    for (let i = e.resultIndex; i < e.results.length; ++i) {
      if (e.results[i].isFinal) {
        finalResultText += e.results[i][0].transcript;
        recognizedAny = true;
      } else {
        interimText += e.results[i][0].transcript;
      }
    }

    let liveText = (finalResultText || interimText).trim();
    if (liveText) {
      feedback.innerHTML = '<strong>Đang nghe:</strong> <em>"' + liveText + '"</em>';
    }

    // Nếu đã có kết quả cuối cùng hoặc câu nói đủ dài
    if (recognizedAny || liveText.length >= 3) {
      let evalText = finalResultText || liveText;
      let normTrans = normalizeAudioText(evalText);
      let normTarget = normalizeAudioText(targetText);
      
      let dist = levenshtein(normTrans, normTarget);
      let maxLength = Math.max(normTrans.length, normTarget.length);
      let similarity = maxLength === 0 ? 1 : (1 - (dist / maxLength));

      // Đếm tỷ lệ từ khóa cốt lõi khớp nhau
      let targetWords = normTarget.split(/\s+/).filter(w => w.length > 0);
      let transWords = normTrans.split(/\s+/).filter(w => w.length > 0);
      let matchedWords = targetWords.filter(w => transWords.includes(w));
      let wordMatchRatio = targetWords.length > 0 ? (matchedWords.length / targetWords.length) : 0;

      let isPassed = similarity >= 0.65 || wordMatchRatio >= 0.70 || normTrans.includes(normTarget) || (normTrans.length >= 4 && normTarget.includes(normTrans));

      feedback.innerHTML = '<strong>Bạn nói:</strong> "' + evalText + '"<br>';
      if (isPassed) {
        feedback.className = 'result-area correct';
        let displayScore = Math.max(Math.round(similarity * 100), Math.round(wordMatchRatio * 100), 85);
        if (normTrans === normTarget) displayScore = 100;
        feedback.innerHTML += '✅ Rất tốt! Đã nhận diện chính xác (' + displayScore + '%)';
        const btnNext = document.getElementById('btn-next');
        if (btnNext) btnNext.classList.remove('hidden');
        if (!currentQuestionAnswered) {
          currentQuestionAnswered = true;
          incrementDailyProgress();
        }
      } else {
        feedback.className = 'result-area incorrect';
        let displayScore = Math.round(Math.max(similarity, wordMatchRatio) * 100);
        feedback.innerHTML += '❌ Phát âm chưa khớp (' + displayScore + '%). <br><small>Mục tiêu: "' + targetText + '"</small>';
      }
    }
  };

  recognition.onerror = (e) => {
    console.warn("Speech Recognition Error:", e.error);
    clearTimeout(recognitionWatchdog);
    let msg = "";
    if (e.error === 'not-allowed' || e.error === 'service-not-allowed') {
      msg = "⚠️ <strong>Quyền Micro bị chặn:</strong> Hãy bấm vào biểu tượng ổ khóa/micro trên thanh địa chỉ duyệt web và chọn <strong>'Cho phép' (Allow)</strong> rồi thử lại.";
    } else if (e.error === 'no-speech') {
      msg = "⚠️ <strong>Chưa bắt được tiếng:</strong> Không nghe thấy âm thanh. Bạn hãy nói to hơn hoặc để micro gần miệng hơn nhé!";
    } else if (e.error === 'network') {
      msg = "⚠️ <strong>Lỗi kết nối máy chủ giọng nói:</strong> Dịch vụ Speech to Text của trình duyệt cần có internet ổn định.";
    } else if (e.error === 'audio-capture') {
      msg = "⚠️ <strong>Lỗi Micro:</strong> Không tìm thấy micro hoặc micro đang bị ứng dụng khác chiếm quyền.";
    } else {
      msg = "⚠️ Đã dừng nghe (" + e.error + "). Hãy bấm 'Nói' để thử lại.";
    }

    if (!recognizedAny) {
      feedback.classList.remove('hidden');
      feedback.className = 'result-area incorrect';
      feedback.innerHTML = msg;
    }
  };

  recognition.onend = () => {
    clearTimeout(recognitionWatchdog);
    activeRecognition = null;
    if (btnRecord) {
      btnRecord.innerText = "🎤 Nói";
      btnRecord.classList.remove('recording-pulse');
    }
  };

  try {
    recognition.start();
  } catch (err) {
    console.error("Lỗi recognition.start():", err);
    activeRecognition = null;
    if (btnRecord) {
      btnRecord.innerText = "🎤 Nói";
      btnRecord.classList.remove('recording-pulse');
    }
    feedback.classList.remove('hidden');
    feedback.className = 'result-area incorrect';
    feedback.innerHTML = "⚠️ Không thể kích hoạt micro: " + err.message;
  }
};

window.skipQuestion = () => {
  let q = currentQuestions.splice(currentQuestionIndex, 1)[0];
  currentQuestions.push(q);
  saveSession();
  renderQuestion();
};
window.nextQuestion = () => { 
  currentQuestionIndex++; 
  renderQuestion(); 
};

function incrementDailyProgress() {
  if (!dailyProgress[currentSubject]) {
    dailyProgress[currentSubject] = 0;
  }
  dailyProgress[currentSubject]++;
  localStorage.setItem('dailyProgressBySubject', JSON.stringify(dailyProgress));
  updateHomeProgress();

  if (dailyProgress[currentSubject] >= dailyGoal) {
    let hideKey = 'hideCongratsToday_' + currentSubject;
    if (localStorage.getItem(hideKey) !== new Date().toDateString()) {
      let subjectName = currentSubject === 'math' ? 'Toán học' : 'Khoa học';
      let congratsDesc = document.querySelector('#congrats-modal p');
      if (congratsDesc) {
        congratsDesc.innerText = 'Bạn đã đạt mục tiêu 80 câu hôm nay (trọn vẹn 4 ải) cho môn ' + subjectName + '!';
      }
      document.getElementById('congrats-modal').classList.remove('hidden');
    }
  }
}

function showSummary() {
  document.getElementById('vocab-hint-container').classList.add('hidden');
  const list = document.getElementById('summary-vocab-list');
  list.innerHTML = '';
  learnedVocabs.forEach(v => {
    let grammarSnippet = v.grammar ? '<div style="font-size:13px; color:#0284c7; margin-top:4px;">💡 ' + v.grammar + '</div>' : '';
    let sentenceSnippet = v.sentence ? '<div style="font-size:13px; color:#64748b; font-style:italic; margin-top:3px;">🗣️ ' + v.sentence + '</div>' : '';
    list.innerHTML += '<li style="padding:10px 0; border-bottom:1px solid #eee;"><strong>' + v.word + ' ' + v.type + '</strong>: ' + v.meaning + grammarSnippet + sentenceSnippet + '</li>';
  });
  if (learnedVocabs.length === 0) list.innerHTML = "<li>Không có từ vựng mới nào trong ải này.</li>";
  showScreen('summary');
}

init();
