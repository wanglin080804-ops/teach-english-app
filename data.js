// --- ENGINE TẠO CÂU HỎI TỰ ĐỘNG ---
// Thay vì viết tay 4800 câu, chúng ta cung cấp ngân hàng từ vựng.
// Engine này sẽ tự động sinh ra hàng ngàn câu hỏi đa dạng (trắc nghiệm, sắp xếp, nói).

function generateQuestions(vocabBank, numQuestions = 20) {
  let questions = [];
  const types = ['vocab_match', 'fill', 'arrange', 'speak', 'qa_speak', 'math_calc'];
  
  for (let i = 0; i < numQuestions; i++) {
    let vOrig = vocabBank[Math.floor(Math.random() * vocabBank.length)];
    let type = types[Math.floor(Math.random() * types.length)];
    let v = { ...vOrig };
    
    if (v.template) {
      let a, b, c;
      if (v.op === '+') {
        a = Math.floor(Math.random() * 9) + 1; // 1-9
        b = Math.floor(Math.random() * 9) + 1; // 1-9
        if (Math.random() < 0.2) { a += 5; b += 5; } // Thỉnh thoảng lớn hơn một chút
        c = a + b;
      } else if (v.op === '-') {
        a = Math.floor(Math.random() * 10) + 10; // 10-19
        b = Math.floor(Math.random() * (a - 2)) + 1;
        c = a - b;
      } else if (v.op === '*') {
        a = Math.floor(Math.random() * 5) + 2; // 2-6
        b = Math.floor(Math.random() * 5) + 2; // 2-6
        c = a * b;
      } else if (v.op === '/') {
        b = Math.floor(Math.random() * 5) + 2;
        c = Math.floor(Math.random() * 5) + 2;
        a = b * c;
      } else { a = 2; b = 3; c = 5; }
      
      v.sentence = v.template.replace('{A}', a).replace('{B}', b).replace('{C}', c);
      v.translation = v.trans.replace('{A}', a).replace('{B}', b).replace('{C}', c);
      
      if (type === 'math_calc') {
        let qText = v.template.replace('{A}', a).replace('{B}', b).replace('{C}', '___');
        let options = [c.toString(), (c+10).toString(), (c-2).toString()].sort(() => Math.random() - 0.5);
        questions.push({ type: 'fill', question: qText, answer: c.toString(), options: options, vocab: v });
        continue;
      }
    } else {
      if (type === 'math_calc') type = 'fill'; 
    }
    
    if (type === 'vocab_match') {
      let wrongAnswers = vocabBank.filter(x => x.word !== v.word).map(x => x.meaning).sort(() => Math.random() - 0.5).slice(0, 2);
      if (wrongAnswers.length < 2) wrongAnswers = ['đáp án sai 1', 'đáp án sai 2'];
      questions.push({ type, word: v.word, wordType: v.wordType, meaning: v.meaning, wrong: wrongAnswers });
    } 
    else if (type === 'fill') {
      let matchStr = v.matchWord || v.word;
      let qText = v.sentence.replace(new RegExp("\\b" + matchStr + "\\b", 'gi'), '___');
      // Dự phòng nếu không cắt được chữ
      if (qText === v.sentence) {
        qText = v.sentence.replace(new RegExp(v.word, 'gi'), '___');
      }
      
      // Tạo các lựa chọn sai một cách ngẫu nhiên từ ngân hàng
      let wrongs = vocabBank.filter(x => x.word !== v.word).map(x => x.word + " " + x.wordType).slice(0, 2);
      let options = [v.word + " " + v.wordType, ...wrongs].sort(() => Math.random() - 0.5);
      questions.push({ type, question: qText, answer: v.word, options, vocab: v });
    } 
    else if (type === 'arrange') {
      // Dấu câu gắn liền với từ cuối cùng
      let words = v.sentence.split(' ');
      questions.push({ type, words: words, correct: v.sentence, vocab: v });
    } 
    else if (type === 'speak') {
      questions.push({ type, text: v.sentence, hint: 'Nghĩa tiếng Việt: ' + v.translation, vocab: v });
    } 
    else if (type === 'qa_speak') {
      questions.push({ type, question: 'Làm sao để nói câu: "' + v.translation + '" trong tiếng Anh?', answer: v.sentence, hint: 'Gợi ý: ' + v.sentence, vocab: v });
    }
  }
  return questions;
}

// --- NGÂN HÀNG TỪ VỰNG & LỘ TRÌNH ---
const mathVocab = {
  c1s1: [
    { word: 'add', wordType: '(v)', meaning: 'cộng vào', op: '+', template: 'If you add {A} to {B}, you get {C}.', trans: 'Nếu bạn cộng {A} vào {B}, bạn được {C}.' },
    { word: 'plus', wordType: '(prep)', meaning: 'cộng', op: '+', template: '{A} plus {B} is {C}.', trans: '{A} cộng {B} là {C}.' },
    { word: 'sum', wordType: '(n)', meaning: 'tổng số', op: '+', template: 'The sum of {A} and {B} is {C}.', trans: 'Tổng của {A} và {B} là {C}.' },
    { word: 'subtract', wordType: '(v)', meaning: 'trừ đi', op: '-', template: 'If you subtract {B} from {A}, you get {C}.', trans: 'Nếu bạn trừ {B} khỏi {A}, bạn được {C}.' },
    { word: 'minus', wordType: '(prep)', meaning: 'trừ', op: '-', template: '{A} minus {B} is {C}.', trans: '{A} trừ {B} là {C}.' },
    { word: 'difference', wordType: '(n)', meaning: 'hiệu số', op: '-', template: 'The difference between {A} and {B} is {C}.', trans: 'Hiệu số giữa {A} và {B} là {C}.' },
    { word: 'equal', wordType: '(v)', meaning: 'bằng', op: '+', template: '{A} plus {B} equals {C}.', trans: '{A} cộng {B} bằng {C}.', matchWord: 'equals' }
  ],
  c1s2: [
    { word: 'multiply', wordType: '(v)', meaning: 'nhân', op: '*', template: 'If you multiply {A} by {B}, you get {C}.', trans: 'Nếu bạn nhân {A} với {B}, bạn được {C}.' },
    { word: 'times', wordType: '(prep)', meaning: 'lần (nhân)', op: '*', template: '{A} times {B} is {C}.', trans: '{A} nhân {B} là {C}.' },
    { word: 'product', wordType: '(n)', meaning: 'tích số', op: '*', template: 'The product of {A} and {B} is {C}.', trans: 'Tích số của {A} và {B} là {C}.' },
    { word: 'divide', wordType: '(v)', meaning: 'chia', op: '/', template: 'If you divide {A} by {B}, you get {C}.', trans: 'Nếu bạn chia {A} cho {B}, bạn được {C}.' },
    { word: 'quotient', wordType: '(n)', meaning: 'thương số', op: '/', template: 'The quotient of {A} and {B} is {C}.', trans: 'Thương số của {A} và {B} là {C}.' }
  ]
};

const scienceVocab = {
  c1s1: [
    { word: 'absorb', wordType: '(v)', meaning: 'hấp thụ', sentence: 'Roots absorb water.', translation: 'Rễ hấp thụ nước.' },
    { word: 'root', wordType: '(n)', meaning: 'rễ cây', sentence: 'The root is under the soil.', translation: 'Rễ cây nằm dưới đất.' },
    { word: 'stem', wordType: '(n)', meaning: 'thân cây', sentence: 'The stem supports the plant.', translation: 'Thân cây nâng đỡ thực vật.' },
    { word: 'leaf', wordType: '(n)', meaning: 'lá cây', sentence: 'The leaf makes food.', translation: 'Lá cây tạo ra thức ăn.' },
    { word: 'photosynthesis', wordType: '(n)', meaning: 'quang hợp', sentence: 'Plants use photosynthesis.', translation: 'Thực vật sử dụng quang hợp.' },
    { word: 'oxygen', wordType: '(n)', meaning: 'khí oxy', sentence: 'Plants release oxygen.', translation: 'Thực vật thải ra khí oxy.' }
  ]
};

// Hàm tạo toàn bộ lộ trình
function generateCurriculum() {
  const subjects = { math: [], science: [] };
  const mathChapterTitles = ["Phép tính cơ bản", "Phân số & Số thập phân", "Hình học phẳng", "Hình học không gian", "Đo lường & Đại lượng", "Toán đố & Ứng dụng"];
  const scienceChapterTitles = ["Thực vật & Động vật", "Cơ thể người", "Vật chất & Sự biến đổi", "Năng lượng & Lực", "Trái đất & Bầu trời", "Khoa học môi trường"];

  for (let c = 1; c <= 6; c++) {
    const mathStages = [];
    const scienceStages = [];

    for (let s = 1; s <= 5; s++) {
      const mathLevels = [];
      const scienceLevels = [];
      
      // Kiểm tra xem có ngân hàng từ vựng cho Màn này không (ví dụ c1s1)
      let mathVocabBank = mathVocab["c" + c + "s" + s];
      let sciVocabBank = scienceVocab["c" + c + "s" + s];
      
      for (let l = 1; l <= 4; l++) {
        // Tự động sinh 20 câu hỏi mỗi ải
        let mQs = mathVocabBank ? generateQuestions(mathVocabBank, 20) : [{ type: 'vocab_match', word: 'demo', wordType: '(n)', meaning: 'bài đang cập nhật', wrong: ['x', 'y'] }];
        let sQs = sciVocabBank ? generateQuestions(sciVocabBank, 20) : [{ type: 'vocab_match', word: 'demo', wordType: '(n)', meaning: 'bài đang cập nhật', wrong: ['x', 'y'] }];
        
        mathLevels.push({ id: l, title: "Ải " + l, questions: mQs });
        scienceLevels.push({ id: l, title: "Ải " + l, questions: sQs });
      }
      mathStages.push({ id: s, title: "Màn " + s, levels: mathLevels });
      scienceStages.push({ id: s, title: "Màn " + s, levels: scienceLevels });
    }
    subjects.math.push({ id: c, title: "Chương " + c + ": " + mathChapterTitles[c-1], stages: mathStages });
    subjects.science.push({ id: c, title: "Chương " + c + ": " + scienceChapterTitles[c-1], stages: scienceStages });
  }
  return { math: { chapters: subjects.math }, science: { chapters: subjects.science } };
}

export const curriculum = generateCurriculum();
