import { curriculum } from './data.js';

let currentSubject = 'math';
let currentQuestions = [];
let currentQuestionIndex = 0;
let currentChapter = 0;
let currentStage = 0;
let currentLevel = 0;

let dailyGoal = 60;
let dailyProgress = parseInt(localStorage.getItem('dailyProgress') || '0');
let todayStr = new Date().toDateString();
if (localStorage.getItem('dailyProgressDate') !== todayStr) {
  dailyProgress = 0;
  localStorage.setItem('dailyProgress', 0);
  localStorage.setItem('dailyProgressDate', todayStr);
}
let learnedVocabs = [];

let progress = JSON.parse(localStorage.getItem('userProgress')) || {
  math: { c: 1, s: 1, l: 1 },
  science: { c: 1, s: 1, l: 1 }
};

let savedSession = JSON.parse(localStorage.getItem('savedSession'));

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
  if (savedSession) {
    let subjectName = savedSession.subject === 'math' ? 'Toán học' : 'Khoa học';
    document.getElementById('welcome-text').innerText = "Lần trước bạn đang làm dở Câu " + (savedSession.qIndex + 1) + " của Ải " + savedSession.l + ", Màn " + savedSession.s + ", Chương " + savedSession.c + " môn " + subjectName + ".";
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
  localStorage.removeItem('savedSession');
  savedSession = null;
};

window.closeCongrats = (continueLesson) => {
  const cb = document.getElementById('dont-remind-today');
  if (cb && cb.checked) {
    localStorage.setItem('hideCongratsToday', new Date().toDateString());
  }
  document.getElementById('congrats-modal').classList.add('hidden');
  if (!continueLesson) {
    goHome();
  }
};

window.resumeSession = () => {
  document.getElementById('welcome-modal').classList.add('hidden');
  switchTab(savedSession.subject);
  startLevel(savedSession.c, savedSession.s, savedSession.l, savedSession.qIndex);
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
  document.getElementById('daily-progress-text').innerText = dailyProgress + "/" + dailyGoal;
  const percent = Math.min((dailyProgress / dailyGoal) * 100, 100);
  document.getElementById('daily-progress-fill').style.width = percent + "%";
}

window.switchTab = (subject) => {
  currentSubject = subject;
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelector(subject === 'math' ? '.tab-btn:nth-child(1)' : '.tab-btn:nth-child(2)').classList.add('active');
  renderCurriculum();
};

window.resetProgress = () => {
  let subjectName = currentSubject === 'math' ? 'Toán học' : 'Khoa học';
  document.getElementById('reset-desc').innerText = "Bạn có chắc chắn muốn xóa toàn bộ tiến trình học của môn " + subjectName + " và học lại từ đầu không?";
  document.getElementById('reset-modal').classList.remove('hidden');
};

window.confirmReset = () => {
  progress[currentSubject] = { c: 1, s: 1, l: 1 };
  localStorage.setItem('userProgress', JSON.stringify(progress));
  
  if (savedSession && savedSession.subject === currentSubject) {
    localStorage.removeItem('savedSession');
    savedSession = null;
  }
  
  dailyProgress = 0;
  localStorage.setItem('dailyProgress', 0);
  
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
        
        if (isCompleted(chap.id, stage.id, level.id)) { stateClass = 'completed'; icon = '✔️'; locked = false; }
        else if (isUnlocked(chap.id, stage.id, level.id)) { stateClass = 'current'; icon = '⭐'; locked = false; }
        else { stateClass = 'locked'; icon = '🔒'; }
        
        html += '<button class="level-btn ' + stateClass + '" ' + (locked ? 'disabled' : '') + ' onclick="startLevel(' + chap.id + ', ' + stage.id + ', ' + level.id + ')">' + level.title + '<br>' + icon + '</button>';
      });
      html += '</div>';
      
      let stageTestLocked = !(isCompleted(chap.id, stage.id, 4));
      html += '<button class="exam-btn ' + (stageTestLocked ? 'locked' : '') + '" ' + (stageTestLocked ? 'disabled' : '') + ' onclick="showExam(\'Màn ' + stage.id + '\', 30, 15)">📝 Kiểm tra Màn ' + stage.id + ' ' + (stageTestLocked ? '🔒' : '') + '</button>';
      html += '</div>';
    });
    
    let chapTestLocked = !(isCompleted(chap.id, 5, 4));
    html += '<button class="exam-btn ' + (chapTestLocked ? 'locked' : '') + '" ' + (chapTestLocked ? 'disabled' : '') + ' onclick="showExam(\'Chương ' + chap.id + '\', 60, 45)" style="background:var(--danger-color); box-shadow: 0 4px 0 var(--danger-shadow);">🎓 BÀI KIỂM TRA CHƯƠNG ' + chap.id + ' ' + (chapTestLocked ? '🔒' : '') + '</button>';
    html += '</div>';
    container.innerHTML += html;
  });
}

window.showExam = (name, qCount, minutes) => {
  document.getElementById('exam-title').innerText = "📝 Bài thi " + name;
  document.getElementById('exam-desc').innerText = "Thời gian: " + minutes + " phút - " + qCount + " câu hỏi.";
  document.getElementById('exam-modal').classList.remove('hidden');
}

window.startLevel = (cId, sId, lId, startIndex = 0) => {
  const chapter = curriculum[currentSubject].chapters.find(c => c.id === cId);
  const stage = chapter.stages.find(s => s.id === sId);
  const level = stage.levels.find(l => l.id === lId);
  
  currentChapter = cId;
  currentStage = sId;
  currentLevel = lId;
  
  currentQuestions = [...level.questions];
  currentQuestionIndex = startIndex;
  learnedVocabs = [];
  
  showScreen('lesson');
  renderQuestion();
};

window.goHome = () => {
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
    
    let w = q.vocab ? q.vocab.word : q.word;
    let t = q.vocab ? q.vocab.wordType : q.wordType;
    let m = q.vocab ? q.vocab.meaning : (q.type === 'vocab_match' ? q.meaning : '');
    
    document.getElementById('vocab-word').innerText = w;
    document.getElementById('vocab-type').innerText = t;
    document.getElementById('vocab-meaning').innerText = m;

    if (!learnedVocabs.find(x => x.word === w)) learnedVocabs.push({word: w, type: t, meaning: m});
  } else {
    container.classList.add('hidden');
  }
}

function saveSession() {
  localStorage.setItem('savedSession', JSON.stringify({
    subject: currentSubject,
    c: currentChapter,
    s: currentStage,
    l: currentLevel,
    qIndex: currentQuestionIndex
  }));
}

function renderQuestion() {
  const container = document.getElementById('question-container');
  container.innerHTML = '';
  
  if (currentQuestionIndex >= currentQuestions.length) {
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
  
  const lessonPercent = (currentQuestionIndex / currentQuestions.length) * 100;
  document.getElementById('lesson-progress-fill').style.width = lessonPercent + "%";

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
    incrementDailyProgress();
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
    incrementDailyProgress();
  } else {
    feedback.className = 'result-area incorrect'; feedback.innerText = '❌ Vẫn chưa đúng, hãy xếp lại nhé.';
  }
}

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

function normalizeAudioText(str) {
  let s = str.toLowerCase();
  
  // Google Speech to Text often converts spoken math into symbols. We need to convert them back to words to match our target.
  s = s.replace(/\+/g, " plus ")
       .replace(/-/g, " minus ")
       .replace(/=/g, " equals ")
       .replace(/\*/g, " times ")
       .replace(/÷/g, " divide ");
       
  const numMap = { '1:00':'1', '2:00':'2', '3:00':'3', '4:00':'4', '5:00':'5', 'at':'add', 'to':'2', 'too':'2' };
  s = s.replace(/[.,!?"':;]/g, " ");
  
  let words = s.split(/\s+/).filter(w => w.length > 0);
  
  // Handle 'x' as times if between numbers
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

window.startRecognition = (targetText) => {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) return alert("Trình duyệt không hỗ trợ nhận diện giọng nói!");

  const recognition = new SpeechRecognition(); recognition.lang = 'en-US';
  const btnRecord = document.getElementById('btn-record'); const feedback = document.getElementById('feedback');
  btnRecord.innerText = "🎙️ Đang nghe..."; recognition.start();

  recognition.onresult = (e) => {
    let transcript = e.results[0][0].transcript;
    let normTrans = normalizeAudioText(transcript);
    let normTarget = normalizeAudioText(targetText);
    
    let dist = levenshtein(normTrans, normTarget);
    let maxLength = Math.max(normTrans.length, normTarget.length);
    let similarity = maxLength === 0 ? 1 : (1 - (dist / maxLength));
    
    feedback.classList.remove('hidden');
    feedback.innerHTML = '<strong>Bạn nói:</strong> ' + transcript + '<br>';
    if (similarity >= 0.75) {
      feedback.className = 'result-area correct'; feedback.innerHTML += '✅ Rất tốt! (Chấp nhận)';
      document.getElementById('btn-next').classList.remove('hidden'); incrementDailyProgress();
    } else {
      feedback.className = 'result-area incorrect'; feedback.innerHTML += '❌ Đọc sai câu hoặc phát âm chưa chuẩn, bạn thử lại nhé!';
    }
  };
  recognition.onspeechend = () => { btnRecord.innerText = "🎤 Nói"; recognition.stop(); };
}

window.skipQuestion = () => {
  let q = currentQuestions.splice(currentQuestionIndex, 1)[0];
  currentQuestions.push(q);
  renderQuestion();
};
window.nextQuestion = () => { 
  currentQuestionIndex++; 
  renderQuestion(); 
};

function incrementDailyProgress() {
  dailyProgress++; localStorage.setItem('dailyProgress', dailyProgress);
  if (dailyProgress >= dailyGoal) {
    if (localStorage.getItem('hideCongratsToday') !== new Date().toDateString()) {
      document.getElementById('congrats-modal').classList.remove('hidden');
    }
  }
}

function showSummary() {
  document.getElementById('vocab-hint-container').classList.add('hidden');
  const list = document.getElementById('summary-vocab-list');
  list.innerHTML = '';
  learnedVocabs.forEach(v => { list.innerHTML += '<li><strong>' + v.word + ' ' + v.type + '</strong>: ' + v.meaning + '</li>'; });
  if (learnedVocabs.length === 0) list.innerHTML = "<li>Không có từ vựng mới nào trong ải này.</li>";
  showScreen('summary');
}

init();
