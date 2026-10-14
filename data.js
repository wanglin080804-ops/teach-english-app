// --- TEACH ENGLISH LAB: NGÂN HÀNG DỮ LIỆU CHUẨN SƯ PHẠM TIỂU HỌC ---
// Thiết kế: Cấu trúc Chương > Màn > Ải (Mỗi màn 4 ải = 80 câu/ngày, tích hợp Từ vựng, Ngữ pháp, Phát âm)
// Tích hợp bài kiểm tra phản xạ từ vựng 15s cuối Màn (Progress Test)

export const mathStagesInfo = {
  c1s1: { stage: 1, title: 'Màn 1: Các phép toán cơ bản (Cộng, Trừ, Nhân, Chia)' },
  c1s2: { stage: 2, title: 'Màn 2: So sánh & Mối quan hệ số (Comparison & Relations)' },
  c1s3: { stage: 3, title: 'Màn 3: Hệ đếm & Giá trị hàng chữ số (Place Value & Digits)' },
  c1s4: { stage: 4, title: 'Màn 4: Phép chia có dư & Chia đều (Sharing & Divisibility)' },
  c1s5: { stage: 5, title: 'Màn 5: Thứ tự phép tính & Làm tròn (Order of Operations & Rounding)' },
  c2s1: { stage: 1, title: 'Màn 1: Cấu tạo phân số cơ bản (Fraction Basics)' },
  c2s2: { stage: 2, title: 'Màn 2: So sánh & Rút gọn phân số (Equivalent Fractions)' },
  c2s3: { stage: 3, title: 'Màn 3: Số thập phân & Hàng thập phân (Decimals)' },
  c2s4: { stage: 4, title: 'Màn 4: Tỉ số & Phần trăm (Percentages & Ratio)' },
  c2s5: { stage: 5, title: 'Màn 5: Thứ tự số & Ước lượng (Ordering & Estimation)' },
  c3s1: { stage: 1, title: 'Màn 1: Các hình phẳng 2D cơ bản (2D Shapes)' },
  c3s2: { stage: 2, title: 'Màn 2: Đa giác & Tứ giác (Polygons & Quadrilaterals)' },
  c3s3: { stage: 3, title: 'Màn 3: Góc & Đường thẳng (Angles & Lines)' },
  c3s4: { stage: 4, title: 'Màn 4: Khối hình học không gian (3D Shapes)' },
  c3s5: { stage: 5, title: 'Màn 5: Đối xứng, Chu vi & Diện tích (Symmetry, Perimeter, Area)' },
  c4s1: { stage: 1, title: 'Màn 1: Đo chiều dài & Khoảng cách (Length & Distance)' },
  c4s2: { stage: 2, title: 'Màn 2: Đo khối lượng & Cân nặng (Mass & Weight)' },
  c4s3: { stage: 3, title: 'Màn 3: Dung tích & Thể tích (Capacity & Volume)' },
  c4s4: { stage: 4, title: 'Màn 4: Thời gian & Xem đồng hồ (Time & Clocks)' },
  c4s5: { stage: 5, title: 'Màn 5: Tiền tệ & Mua sắm (Money & Cost)' },
  c5s1: { stage: 1, title: 'Màn 1: Thu thập dữ liệu & Bảng đếm (Data Collection)' },
  c5s2: { stage: 2, title: 'Màn 2: Các loại biểu đồ (Charts & Graphs)' },
  c5s3: { stage: 3, title: 'Màn 3: Số trung bình & Trung vị (Averages & Mean)' },
  c5s4: { stage: 4, title: 'Màn 4: Xác suất cơ bản (Probability & Chance)' },
  c5s5: { stage: 5, title: 'Màn 5: Phân tích & Đọc biểu đồ (Data Analysis)' },
  c6s1: { stage: 1, title: 'Màn 1: Quy luật dãy số & Số đặc biệt (Number Patterns)' },
  c6s2: { stage: 2, title: 'Màn 2: Các bước giải toán đố (Word Problems)' },
  c6s3: { stage: 3, title: 'Màn 3: Lập luận & Chứng minh toán học (Reasoning)' },
  c6s4: { stage: 4, title: 'Màn 4: Câu lệnh & Thao tác toán học (Math Actions)' },
  c6s5: { stage: 5, title: 'Màn 5: Ký hiệu & Công thức toán học (Symbols & Formulas)' }
};

export const scienceStagesInfo = {
  c1s1: { stage: 1, title: 'Màn 1: Các bộ phận của cây (Plant Parts)' },
  c1s2: { stage: 2, title: 'Màn 2: Cây cần gì để lớn? (What Plants Need)' },
  c1s3: { stage: 3, title: 'Màn 3: Sự phát triển của cây (How Plants Grow)' },
  c1s4: { stage: 4, title: 'Màn 4: Vật sống & Vật không sống (Living Things)' },
  c1s5: { stage: 5, title: 'Màn 5: Cây cối trong tự nhiên (Trees in Nature)' },
  c2s1: { stage: 1, title: 'Màn 1: Các loài động vật quen thuộc (Everyday Animals)' },
  c2s2: { stage: 2, title: 'Màn 2: Các bộ phận động vật (Animal Body Parts)' },
  c2s3: { stage: 3, title: 'Màn 3: Cách động vật di chuyển (How Animals Move)' },
  c2s4: { stage: 4, title: 'Màn 4: Thức ăn của con vật (Animal Food)' },
  c2s5: { stage: 5, title: 'Màn 5: Ngôi nhà của con vật (Animal Homes)' },
  c3s1: { stage: 1, title: 'Màn 1: Các bộ phận cơ thể (Body Parts)' },
  c3s2: { stage: 2, title: 'Màn 2: Năm giác quan cơ bản (The 5 Senses)' },
  c3s3: { stage: 3, title: 'Màn 3: Mắt, Tai, Mũi & Miệng (Face Organs)' },
  c3s4: { stage: 4, title: 'Màn 4: Xương & Vận động (Bones & Movement)' },
  c3s5: { stage: 5, title: 'Màn 5: Giữ gìn sức khỏe (Healthy Habits)' },
  c4s1: { stage: 1, title: 'Màn 1: Rắn, Lỏng và Khí (States of Matter)' },
  c4s2: { stage: 2, title: 'Màn 2: Nóng & Lạnh (Hot & Cold)' },
  c4s3: { stage: 3, title: 'Màn 3: Các chất liệu quen thuộc (Common Materials)' },
  c4s4: { stage: 4, title: 'Màn 4: Đặc điểm của đồ vật (Properties)' },
  c4s5: { stage: 5, title: 'Màn 5: Nổi & Chìm trong nước (Float & Sink)' },
  c5s1: { stage: 1, title: 'Màn 1: Đẩy & Kéo (Push & Pull)' },
  c5s2: { stage: 2, title: 'Màn 2: Nam châm quen thuộc (Magnets)' },
  c5s3: { stage: 3, title: 'Màn 3: Ánh sáng & Bóng tối (Light & Shadows)' },
  c5s4: { stage: 4, title: 'Màn 4: Âm thanh quanh em (Sounds & Hearing)' },
  c5s5: { stage: 5, title: 'Màn 5: Pin & Bóng đèn (Batteries & Bulbs)' },
  c6s1: { stage: 1, title: 'Màn 1: Mặt trời, Mặt trăng & Sao (Sky & Space)' },
  c6s2: { stage: 2, title: 'Màn 2: Thời tiết bốn mùa (Weather)' },
  c6s3: { stage: 3, title: 'Màn 3: Nước & Mưa (Water & Rain)' },
  c6s4: { stage: 4, title: 'Màn 4: Đất, Cát & Đá cuội (Rocks & Soil)' },
  c6s5: { stage: 5, title: 'Màn 5: Yêu thiên nhiên quanh em (Care for Nature)' }
};

// ==========================================
// NGÂN HÀNG TỪ VỰNG TOÁN HỌC (210 TỪ)
// ==========================================
export const mathVocab = {
  // Chương 1: Số học & Phép tính cơ bản
  // Màn 1: Hoàn thành ĐỦ CẢ 4 PHÉP TÍNH: Cộng, Trừ, Nhân, Chia
  c1s1: [
    { word: 'add', wordType: '(v)', meaning: 'thêm vào, cộng', op: '+', template: 'If you add {A} to {B}, you get {C}.', trans: 'Nếu bạn cộng {A} vào {B}, bạn được {C}.', grammar: 'Cấu trúc điều kiện: If you add A to B, you get C.' },
    { word: 'plus', wordType: '(prep)', meaning: 'dấu cộng (+)', op: '+', template: '{A} plus {B} is {C}.', trans: '{A} cộng {B} là {C}.', grammar: 'Mẫu câu tính toán: A plus B is/equals C.' },
    { word: 'sum', wordType: '(n)', meaning: 'tổng số', op: '+', template: 'The sum of {A} and {B} is {C}.', trans: 'Tổng của {A} và {B} là {C}.', grammar: 'Cấu trúc danh từ: The sum of A and B is C.' },
    { word: 'subtract', wordType: '(v)', meaning: 'trừ đi, bớt đi', op: '-', template: 'If you subtract {B} from {A}, you get {C}.', trans: 'Nếu bạn trừ {B} khỏi {A}, bạn được {C}.', grammar: 'Cấu trúc giới từ: Subtract A from B (Trừ A khỏi B).' },
    { word: 'minus', wordType: '(prep)', meaning: 'dấu trừ (-)', op: '-', template: '{A} minus {B} is {C}.', trans: '{A} trừ {B} là {C}.', grammar: 'Mẫu câu cơ bản: A minus B is C.' },
    { word: 'difference', wordType: '(n)', meaning: 'hiệu số', op: '-', template: 'The difference between {A} and {B} is {C}.', trans: 'Hiệu số giữa {A} và {B} là {C}.', grammar: 'Cấu trúc: The difference between A and B is C.' },
    { word: 'multiply', wordType: '(v)', meaning: 'nhân lên', op: '*', template: 'If you multiply {A} by {B}, you get {C}.', trans: 'Nếu bạn nhân {A} với {B}, bạn được {C}.', grammar: 'Cấu trúc: Multiply A by B to get C.' },
    { word: 'times', wordType: '(prep)', meaning: 'dấu nhân (x)', op: '*', template: '{A} times {B} is {C}.', trans: '{A} nhân {B} là {C}.', grammar: 'Mẫu câu: A times B is C.' },
    { word: 'product', wordType: '(n)', meaning: 'tích số', op: '*', template: 'The product of {A} and {B} is {C}.', trans: 'Tích số của {A} và {B} là {C}.', grammar: 'Cấu trúc: The product of A and B is C.' },
    { word: 'divide', wordType: '(v)', meaning: 'chia ra', op: '/', template: 'If you divide {A} by {B}, you get {C}.', trans: 'Nếu bạn chia {A} cho {B}, bạn được {C}.', grammar: 'Cấu trúc: Divide A by B to get C.' },
    { word: 'quotient', wordType: '(n)', meaning: 'thương số', op: '/', template: 'The quotient of {A} and {B} is {C}.', trans: 'Thương số của {A} và {B} là {C}.', grammar: 'Cấu trúc: The quotient of A and B is C.' },
    { word: 'equal', wordType: '(v)', meaning: 'bằng nhau (=)', matchWord: 'equals', op: '+', template: '{A} plus {B} equals {C}.', trans: '{A} cộng {B} bằng {C}.', grammar: 'Mẫu câu vị ngữ: A plus B equals C.' }
  ],
  c1s2: [
    { word: 'total', wordType: '(n)', meaning: 'tổng cộng', sentence: 'The total number of pencils is eight.', translation: 'Tổng số bút chì là tám.', grammar: 'Cấu trúc số lượng: The total number of [noun] is [number].' },
    { word: 'increase', wordType: '(v)', meaning: 'tăng thêm', sentence: 'Increase five by three to get eight.', translation: 'Tăng năm thêm ba để được tám.', grammar: 'Câu lệnh toán học: Increase A by B to get C.' },
    { word: 'altogether', wordType: '(adv)', meaning: 'tất cả cùng nhau', sentence: 'How many apples are there altogether?', translation: 'Có tất cả bao nhiêu quả táo cùng nhau?', grammar: 'Câu hỏi số lượng tổng: How many [plural nouns] are there altogether?' },
    { word: 'decrease', wordType: '(v)', meaning: 'giảm bớt', sentence: 'Decrease ten by two to get eight.', translation: 'Giảm mười bớt hai để được tám.', grammar: 'Câu lệnh: Decrease A by B to get C.' },
    { word: 'take away', wordType: '(phr v)', meaning: 'bớt đi', matchWord: 'take away', sentence: 'Take away three from seven leaves four.', translation: 'Bớt ba khỏi bảy thì còn bốn.', grammar: 'Mẫu câu tiểu học: Take away A from B leaves C.' },
    { word: 'remain', wordType: '(v)', meaning: 'còn lại', sentence: 'Five birds remain on the tree.', translation: 'Năm chú chim còn lại trên cây.', grammar: 'Cấu trúc vị ngữ: [Number] items remain [prepositional phrase].' },
    { word: 'left', wordType: '(adj)', meaning: 'còn lại', sentence: 'How many apples are left in the basket?', translation: 'Còn lại bao nhiêu quả táo trong rổ?', grammar: 'Câu hỏi quen thuộc: How many [noun] are left?' }
  ],
  c1s3: [
    { word: 'digit', wordType: '(n)', meaning: 'chữ số', sentence: 'A two-digit number has tens and ones.', translation: 'Một số có hai chữ số gồm hàng chục và đơn vị.', grammar: 'Khái niệm: A [number]-digit number has...' },
    { word: 'place value', wordType: '(n)', meaning: 'giá trị hàng', matchWord: 'place value', sentence: 'What is the place value of digit five?', translation: 'Giá trị hàng của chữ số năm là gì?', grammar: 'Câu hỏi vị trí: What is the place value of [digit]?' },
    { word: 'ones', wordType: '(n)', meaning: 'hàng đơn vị', sentence: 'The digit seven is in the ones place.', translation: 'Chữ số bảy nằm ở hàng đơn vị.', grammar: 'Vị trí hàng: The digit [X] is in the ones place.' },
    { word: 'tens', wordType: '(n)', meaning: 'hàng chục', sentence: 'There are four tens in forty.', translation: 'Có bốn chục trong số bốn mươi.', grammar: 'Số đếm nhóm: There are [number] tens in [number].' },
    { word: 'hundreds', wordType: '(n)', meaning: 'hàng trăm', sentence: 'Write the digit in the hundreds column.', translation: 'Viết chữ số vào cột hàng trăm.', grammar: 'Chỉ dẫn: Write the digit in the hundreds column.' },
    { word: 'thousands', wordType: '(n)', meaning: 'hàng nghìn', sentence: 'Count forward by thousands from one thousand.', translation: 'Đếm tiến từng nghìn từ một nghìn.', grammar: 'Câu lệnh đếm: Count forward/backward by thousands.' },
    { word: 'numeral', wordType: '(n)', meaning: 'ký hiệu số, chữ số', sentence: 'Write the numeral for thirty-five.', translation: 'Viết chữ số cho số ba mươi lăm.', grammar: 'Yêu cầu: Write the numeral for [number word].' }
  ],
  c1s4: [
    { word: 'remainder', wordType: '(n)', meaning: 'số dư', sentence: 'Seven divided by two has remainder one.', translation: 'Bảy chia hai có số dư là một.', grammar: 'Cấu trúc phép chia có dư: A divided by B has remainder R.' },
    { word: 'share', wordType: '(v)', meaning: 'chia đều', sentence: 'Share eight candies equally between two children.', translation: 'Chia đều tám cái kẹo cho hai đứa trẻ.', grammar: 'Câu lệnh chia đều: Share A equally between/among B.' },
    { word: 'equal parts', wordType: '(n)', meaning: 'các phần bằng nhau', matchWord: 'equal parts', sentence: 'Cut the pizza into four equal parts.', translation: 'Cắt bánh pizza thành bốn phần bằng nhau.', grammar: 'Cấu trúc: Cut/Divide something into [number] equal parts.' },
    { word: 'divisible', wordType: '(adj)', meaning: 'chia hết', sentence: 'Twelve is divisible by three.', translation: 'Mười hai chia hết cho ba.', grammar: 'Cấu trúc tính từ: A is divisible by B.' },
    { word: 'half', wordType: '(n)', meaning: 'một nửa', sentence: 'Half of ten is five.', translation: 'Một nửa của mười là năm.', grammar: 'Cấu trúc phân lượng: Half of [number] is [result].' },
    { word: 'double', wordType: '(v)', meaning: 'gấp đôi', sentence: 'Double the number four to get eight.', translation: 'Gấp đôi số bốn để được tám.', grammar: 'Câu lệnh: Double the number A to get B.' },
    { word: 'triple', wordType: '(v)', meaning: 'gấp ba', sentence: 'Triple the number three to get nine.', translation: 'Gấp ba số ba để được chín.', grammar: 'Câu lệnh: Triple the number A to get B.' }
  ],
  c1s5: [
    { word: 'bracket', wordType: '(n)', meaning: 'dấu ngoặc đơn', sentence: 'Calculate operations inside the brackets first.', translation: 'Tính toán các phép tính bên trong dấu ngoặc trước.', grammar: 'Thứ tự ưu tiên: Calculate inside the brackets first.' },
    { word: 'operation', wordType: '(n)', meaning: 'phép toán', sentence: 'Addition and subtraction are inverse operations.', translation: 'Phép cộng và phép trừ là hai phép toán ngược nhau.', grammar: 'Khái niệm: [Ops] are inverse operations.' },
    { word: 'inverse', wordType: '(adj)', meaning: 'nghịch đảo, trái ngược', sentence: 'Use the inverse operation to check your calculation.', translation: 'Dùng phép toán ngược lại để kiểm tra phép tính của em.', grammar: 'Kỹ năng kiểm tra: Use the inverse operation to check.' },
    { word: 'calculate', wordType: '(v)', meaning: 'tính toán', sentence: 'Calculate the total cost of three books.', translation: 'Hãy tính toán tổng giá tiền của ba cuốn sách.', grammar: 'Câu lệnh lớp học: Calculate the total [noun].' },
    { word: 'round', wordType: '(v)', meaning: 'làm tròn số', sentence: 'Round the number to the nearest ten.', translation: 'Làm tròn số đến hàng chục gần nhất.', grammar: 'Câu lệnh: Round [number] to the nearest [place].' },
    { word: 'estimate', wordType: '(v)', meaning: 'ước lượng', sentence: 'Estimate the total sum before calculating.', translation: 'Ước lượng tổng số trước khi tính toán.', grammar: 'Chỉ dẫn sư phạm: Estimate the sum before calculating.' },
    { word: 'approximate', wordType: '(adj)', meaning: 'xấp xỉ', sentence: 'Give an approximate answer to the problem.', translation: 'Đưa ra một câu trả lời xấp xỉ cho bài toán.', grammar: 'Yêu cầu: Give an approximate answer.' }
  ],

  // Chương 2: Phân số, Số thập phân & Tỉ số
  c2s1: [
    { word: 'fraction', wordType: '(n)', meaning: 'phân số', sentence: 'A fraction represents part of a whole.', translation: 'Một phân số đại diện cho một phần của tổng thể.', grammar: 'Định nghĩa: A fraction represents part of a whole.' },
    { word: 'numerator', wordType: '(n)', meaning: 'tử số', sentence: 'The numerator is the top number of a fraction.', translation: 'Tử số là số ở phía trên của phân số.', grammar: 'Cấu tạo: The numerator is the top number.' },
    { word: 'denominator', wordType: '(n)', meaning: 'mẫu số', sentence: 'The denominator shows the total equal parts.', translation: 'Mẫu số chỉ tổng số phần bằng nhau.', grammar: 'Cấu tạo: The denominator shows the total parts.' },
    { word: 'whole', wordType: '(n)', meaning: 'toàn thể, số nguyên', sentence: 'Two halves make one whole.', translation: 'Hai nửa tạo thành một phần nguyên.', grammar: 'Mối quan hệ: [Fraction parts] make one whole.' },
    { word: 'quarter', wordType: '(n)', meaning: 'một phần tư', sentence: 'One quarter is written as one over four.', translation: 'Một phần tư được viết là một trên bốn.', grammar: 'Đọc phân số: One quarter is written as 1/4.' },
    { word: 'third', wordType: '(n)', meaning: 'một phần ba', sentence: 'Color one third of the paper strip.', translation: 'Tô màu một phần ba dải giấy.', grammar: 'Câu lệnh thực hành: Color/Shade one third of [shape].' },
    { word: 'shaded', wordType: '(adj)', meaning: 'được tô màu', sentence: 'What fraction of the circle is shaded?', translation: 'Phân số nào của hình tròn được tô màu?', grammar: 'Câu hỏi trực quan: What fraction of [shape] is shaded?' }
  ],
  c2s2: [
    { word: 'equivalent', wordType: '(adj)', meaning: 'tương đương, bằng nhau', sentence: 'One half is equivalent to two quarters.', translation: 'Một phần hai tương đương với hai phần tư.', grammar: 'So sánh tương đương: [Fraction A] is equivalent to [Fraction B].' },
    { word: 'simplify', wordType: '(v)', meaning: 'rút gọn', sentence: 'Simplify the fraction to its lowest terms.', translation: 'Rút gọn phân số về dạng tối giản.', grammar: 'Câu lệnh rút gọn: Simplify the fraction to its lowest terms.' },
    { word: 'common denominator', wordType: '(n)', meaning: 'mẫu số chung', matchWord: 'common denominator', sentence: 'Find a common denominator before adding fractions.', translation: 'Tìm mẫu số chung trước khi cộng các phân số.', grammar: 'Quy tắc: Find a common denominator before adding.' },
    { word: 'proper fraction', wordType: '(n)', meaning: 'phân số thực sự (bé hơn 1)', matchWord: 'proper fraction', sentence: 'A proper fraction is smaller than one.', translation: 'Một phân số thực sự thì nhỏ hơn một.', grammar: 'Khái niệm: A proper fraction has numerator < denominator.' },
    { word: 'improper fraction', wordType: '(n)', meaning: 'phân số lớn hơn 1', matchWord: 'improper fraction', sentence: 'Convert the improper fraction into a mixed number.', translation: 'Chuyển phân số lớn hơn một thành hỗn số.', grammar: 'Chuyển đổi: Convert improper fraction into mixed number.' },
    { word: 'mixed number', wordType: '(n)', meaning: 'hỗn số', matchWord: 'mixed number', sentence: 'A mixed number has a whole number and fraction.', translation: 'Hỗn số có một số nguyên và một phân số.', grammar: 'Định nghĩa: A mixed number has whole number and fraction.' },
    { word: 'compare', wordType: '(v)', meaning: 'so sánh', sentence: 'Compare the two fractions using symbols.', translation: 'So sánh hai phân số bằng cách dùng các ký hiệu.', grammar: 'Chỉ dẫn: Compare [A] and [B] using symbols.' }
  ],
  c2s3: [
    { word: 'decimal', wordType: '(n)', meaning: 'số thập phân', sentence: 'Write the answer as a decimal number.', translation: 'Viết câu trả lời dưới dạng một số thập phân.', grammar: 'Yêu cầu: Write the answer as a decimal number.' },
    { word: 'decimal point', wordType: '(n)', meaning: 'dấu phẩy thập phân', matchWord: 'decimal point', sentence: 'Line up the decimal point when adding numbers.', translation: 'Căn thẳng hàng dấu phẩy thập phân khi cộng các số.', grammar: 'Quy tắc: Line up the decimal point when adding.' },
    { word: 'tenths', wordType: '(n)', meaning: 'hàng phần mười', sentence: 'The first place after decimal point is tenths.', translation: 'Hàng đầu tiên sau dấu phẩy là hàng phần mười.', grammar: 'Vị trí: The first place after decimal point is tenths.' },
    { word: 'hundredths', wordType: '(n)', meaning: 'hàng phần trăm', sentence: 'Zero point zero five represents five hundredths.', translation: 'Không phẩy không năm biểu thị năm phần trăm.', grammar: 'Biểu thị: [Number] represents [X] hundredths.' },
    { word: 'thousandths', wordType: '(n)', meaning: 'hàng phần nghìn', sentence: 'The digit three is in the thousandths place.', translation: 'Chữ số ba nằm ở hàng phần nghìn.', grammar: 'Hàng số: The digit [X] is in the thousandths place.' },
    { word: 'convert', wordType: '(v)', meaning: 'đổi, chuyển đổi', sentence: 'Convert the fraction three quarters into a decimal.', translation: 'Đổi phân số ba phần tư thành số thập phân.', grammar: 'Chuyển đổi: Convert [A] into [B].' },
    { word: 'equal to', wordType: '(prep phr)', meaning: 'bằng với', matchWord: 'equal to', sentence: 'Four plus two is equal to six.', translation: 'Bốn cộng hai bằng với sáu.', grammar: 'So sánh bằng: A is equal to B.' }
  ],
  c2s4: [
    { word: 'percent', wordType: '(n)', meaning: 'phần trăm (%)', sentence: 'Fifty percent of twenty is ten.', translation: 'Năm mươi phần trăm của hai mươi là mười.', grammar: 'Tính phần trăm: [X] percent of [total] is [result].' },
    { word: 'percentage', wordType: '(n)', meaning: 'tỉ lệ phần trăm', sentence: 'Calculate the percentage of girls in the class.', translation: 'Tính tỉ lệ phần trăm số học sinh nữ trong lớp.', grammar: 'Yêu cầu: Calculate the percentage of [group].' },
    { word: 'ratio', wordType: '(n)', meaning: 'tỉ số', sentence: 'The ratio of cats to dogs is two to three.', translation: 'Tỉ số giữa mèo và chó là hai trên ba.', grammar: 'Mẫu câu: The ratio of A to B is X to Y.' },
    { word: 'proportion', wordType: '(n)', meaning: 'tỉ lệ thức', sentence: 'The recipe ingredients are in direct proportion.', translation: 'Các nguyên liệu nấu ăn theo tỉ lệ thuận.', grammar: 'Khái niệm: [Items] are in direct proportion.' },
    { word: 'discount', wordType: '(n)', meaning: 'khoản giảm giá', sentence: 'The toy has a twenty percent discount today.', translation: 'Món đồ chơi được giảm giá hai mươi phần trăm hôm nay.', grammar: 'Ứng dụng: [Item] has a [X] percent discount.' },
    { word: 'interest', wordType: '(n)', meaning: 'tiền lãi', sentence: 'The bank pays interest on your savings.', translation: 'Ngân hàng trả tiền lãi cho khoản tiết kiệm của bạn.', grammar: 'Tài chính tiểu học: Pay interest on [amount].' },
    { word: 'rate', wordType: '(n)', meaning: 'tỉ suất, tốc độ', sentence: 'The car travels at a steady rate.', translation: 'Chiếc ô tô di chuyển với tốc độ đều đặn.', grammar: 'Mô tả: Travel at a [adjective] rate.' }
  ],
  c2s5: [
    { word: 'greater than', wordType: '(prep phr)', meaning: 'lớn hơn', matchWord: 'greater than', sentence: 'Eight is greater than five.', translation: 'Tám lớn hơn năm.', grammar: 'So sánh hơn: A is greater than B.' },
    { word: 'less than', wordType: '(prep phr)', meaning: 'bé hơn', matchWord: 'less than', sentence: 'Three is less than seven.', translation: 'Ba bé hơn bảy.', grammar: 'So sánh kém: A is less than B.' },
    { word: 'ascending', wordType: '(adj)', meaning: 'tăng dần', sentence: 'Arrange the numbers in ascending order.', translation: 'Sắp xếp các số theo thứ tự tăng dần.', grammar: 'Câu lệnh: Arrange numbers in ascending order.' },
    { word: 'descending', wordType: '(adj)', meaning: 'giảm dần', sentence: 'Write the scores in descending order.', translation: 'Viết các điểm số theo thứ tự giảm dần.', grammar: 'Câu lệnh: Write items in descending order.' },
    { word: 'factor', wordType: '(n)', meaning: 'thừa số, ước số', sentence: 'Two and three are factors of six.', translation: 'Hai và ba là các thừa số của sáu.', grammar: 'Cấu trúc số học: A and B are factors of C.' },
    { word: 'multiple', wordType: '(n)', meaning: 'bội số', sentence: 'Ten is a multiple of five.', translation: 'Mười là một bội số của năm.', grammar: 'Cấu trúc: A is a multiple of B.' },
    { word: 'accurate', wordType: '(adj)', meaning: 'chính xác', sentence: 'Ensure your measurements are neat and accurate.', translation: 'Đảm bảo các phép đo của em thật cẩn thận và chính xác.', grammar: 'Yêu cầu chất lượng: Ensure your work is accurate.' }
  ],

  // Chương 3: Hình học phẳng & Không gian
  c3s1: [
    { word: 'circle', wordType: '(n)', meaning: 'hình tròn', sentence: 'A circle has a curved boundary line.', translation: 'Hình tròn có một đường viền cong cong.', grammar: 'Đặc điểm hình: A circle has [attribute].' },
    { word: 'square', wordType: '(n)', meaning: 'hình vuông', sentence: 'A square has four equal straight sides.', translation: 'Hình vuông có bốn cạnh thẳng bằng nhau.', grammar: 'Đặc điểm hình: A square has four equal sides.' },
    { word: 'rectangle', wordType: '(n)', meaning: 'hình chữ nhật', sentence: 'Opposite sides of a rectangle are equal.', translation: 'Các cạnh đối diện của hình chữ nhật bằng nhau.', grammar: 'Tính chất: Opposite sides of a rectangle are equal.' },
    { word: 'triangle', wordType: '(n)', meaning: 'hình tam giác', sentence: 'A triangle has three sides and three angles.', translation: 'Hình tam giác có ba cạnh và ba góc.', grammar: 'Đặc điểm: A triangle has three sides and three angles.' },
    { word: 'side', wordType: '(n)', meaning: 'cạnh', sentence: 'Count how many sides this shape has.', translation: 'Đếm xem hình này có bao nhiêu cạnh.', grammar: 'Câu hỏi/chỉ dẫn: Count how many sides [shape] has.' },
    { word: 'vertex', wordType: '(n)', meaning: 'đỉnh', sentence: 'A triangle has three vertices.', translation: 'Hình tam giác có ba đỉnh.', grammar: 'Số nhiều của vertex là vertices: It has [X] vertices.' },
    { word: 'corner', wordType: '(n)', meaning: 'góc, góc nhọn', sentence: 'A square has four sharp corners.', translation: 'Hình vuông có bốn góc vuông vức.', grammar: 'Từ ngữ tiểu học: A square has four corners.' }
  ],
  c3s2: [
    { word: 'polygon', wordType: '(n)', meaning: 'đa giác', sentence: 'A closed flat shape with straight sides is a polygon.', translation: 'Hình phẳng khép kín có các cạnh thẳng là đa giác.', grammar: 'Định nghĩa: A closed flat shape is a polygon.' },
    { word: 'pentagon', wordType: '(n)', meaning: 'hình ngũ giác (5 cạnh)', sentence: 'A regular pentagon has five equal sides.', translation: 'Hình ngũ giác đều có năm cạnh bằng nhau.', grammar: 'Đặc điểm: A pentagon has five sides.' },
    { word: 'hexagon', wordType: '(n)', meaning: 'hình lục giác (6 cạnh)', sentence: 'A honeycomb cell is shaped like a hexagon.', translation: 'Lỗ tổ ong có hình dạng như một hình lục giác.', grammar: 'Hình học đời sống: [Object] is shaped like a hexagon.' },
    { word: 'octagon', wordType: '(n)', meaning: 'hình bát giác (8 cạnh)', sentence: 'A red stop sign is an octagon.', translation: 'Biển báo dừng màu đỏ là một hình bát giác.', grammar: 'Thực tế: A stop sign is an octagon.' },
    { word: 'quadrilateral', wordType: '(n)', meaning: 'hình tứ giác', sentence: 'Any four-sided 2D shape is a quadrilateral.', translation: 'Bất kỳ hình phẳng bốn cạnh nào cũng là hình tứ giác.', grammar: 'Phân loại: Any four-sided shape is a quadrilateral.' },
    { word: 'parallelogram', wordType: '(n)', meaning: 'hình bình hành', sentence: 'A parallelogram has two pairs of parallel sides.', translation: 'Hình bình hành có hai cặp cạnh song song.', grammar: 'Tính chất: It has two pairs of parallel sides.' },
    { word: 'rhombus', wordType: '(n)', meaning: 'hình thoi', sentence: 'A rhombus has four equal length sides.', translation: 'Hình thoi có bốn cạnh dài bằng nhau.', grammar: 'Đặc điểm: A rhombus has four equal length sides.' }
  ],
  c3s3: [
    { word: 'angle', wordType: '(n)', meaning: 'góc', sentence: 'Measure the angle with a plastic protractor.', translation: 'Đo góc bằng một chiếc thước đo góc bằng nhựa.', grammar: 'Câu lệnh: Measure the angle with a protractor.' },
    { word: 'right angle', wordType: '(n)', meaning: 'góc vuông (90 độ)', matchWord: 'right angle', sentence: 'A right angle measures exactly ninety degrees.', translation: 'Góc vuông có số đo chính xác là chín mươi độ.', grammar: 'Quy chuẩn: A right angle measures 90 degrees.' },
    { word: 'acute angle', wordType: '(n)', meaning: 'góc nhọn', matchWord: 'acute angle', sentence: 'An acute angle is smaller than a right angle.', translation: 'Góc nhọn thì nhỏ hơn một góc vuông.', grammar: 'So sánh góc: An acute angle is smaller than 90 degrees.' },
    { word: 'obtuse angle', wordType: '(n)', meaning: 'góc tù', matchWord: 'obtuse angle', sentence: 'An obtuse angle is greater than ninety degrees.', translation: 'Góc tù thì lớn hơn chín mươi độ.', grammar: 'So sánh góc: An obtuse angle is greater than 90 degrees.' },
    { word: 'parallel', wordType: '(adj)', meaning: 'song song', sentence: 'Parallel lines never meet or cross.', translation: 'Các đường thẳng song song không bao giờ gặp hay cắt nhau.', grammar: 'Định nghĩa: Parallel lines never meet or intersect.' },
    { word: 'perpendicular', wordType: '(adj)', meaning: 'vuông góc', sentence: 'Perpendicular lines meet at a right angle.', translation: 'Các đường vuông góc cắt nhau tại một góc vuông.', grammar: 'Định nghĩa: Perpendicular lines meet at a right angle.' },
    { word: 'straight line', wordType: '(n)', meaning: 'đường thẳng', matchWord: 'straight line', sentence: 'Use a ruler to draw a straight line.', translation: 'Dùng thước kẻ để vẽ một đường thẳng.', grammar: 'Câu lệnh thực hành: Use a ruler to draw a straight line.' }
  ],
  c3s4: [
    { word: 'cube', wordType: '(n)', meaning: 'hình lập phương', sentence: 'A cube has six identical square faces.', translation: 'Hình lập phương có sáu mặt hình vuông giống hệt nhau.', grammar: 'Thuộc tính 3D: A cube has six square faces.' },
    { word: 'cuboid', wordType: '(n)', meaning: 'hình hộp chữ nhật', sentence: 'A cereal box is an example of a cuboid.', translation: 'Vỏ hộp ngũ cốc là một ví dụ về hình hộp chữ nhật.', grammar: 'Liên hệ thực tế: [Object] is an example of a cuboid.' },
    { word: 'sphere', wordType: '(n)', meaning: 'hình cầu', sentence: 'A basketball has the shape of a sphere.', translation: 'Quả bóng rổ có hình dạng một khối cầu.', grammar: 'Mô tả hình khối: It has the shape of a sphere.' },
    { word: 'cylinder', wordType: '(n)', meaning: 'hình trụ', sentence: 'A soup can has the shape of a cylinder.', translation: 'Lon súp có hình dạng của một khối hình trụ.', grammar: 'Hình khối: A cylinder has two circular bases.' },
    { word: 'cone', wordType: '(n)', meaning: 'hình nón', sentence: 'A party hat looks like a cone.', translation: 'Chiếc mũ sinh nhật trông giống như một hình nón.', grammar: 'So sánh: [Object] looks like a cone.' },
    { word: 'pyramid', wordType: '(n)', meaning: 'hình chóp', sentence: 'The pyramid has a flat square base.', translation: 'Hình chóp có một mặt đáy phẳng hình vuông.', grammar: 'Đặc điểm: A pyramid has a flat base.' },
    { word: 'face', wordType: '(n)', meaning: 'mặt (của hình khối)', sentence: 'Count the flat faces of this 3D solid.', translation: 'Đếm các mặt phẳng của khối hình không gian này.', grammar: 'Chỉ dẫn: Count the flat faces of [solid].' }
  ],
  c3s5: [
    { word: 'symmetry', wordType: '(n)', meaning: 'sự đối xứng', sentence: 'The butterfly wings show beautiful symmetry.', translation: 'Cánh bướm thể hiện sự đối xứng rất đẹp.', grammar: 'Khái niệm: [Object] shows symmetry.' },
    { word: 'line of symmetry', wordType: '(n)', meaning: 'trục đối xứng', matchWord: 'line of symmetry', sentence: 'Fold along the line of symmetry to match both halves.', translation: 'Gấp dọc theo trục đối xứng để khớp hai nửa lại.', grammar: 'Thao tác: Fold along the line of symmetry.' },
    { word: 'reflect', wordType: '(v)', meaning: 'lấy đối xứng, phản chiếu', sentence: 'Reflect the triangle across the mirror line.', translation: 'Lấy đối xứng hình tam giác qua đường gương.', grammar: 'Câu lệnh biến hình: Reflect [shape] across [line].' },
    { word: 'rotate', wordType: '(v)', meaning: 'xoay quanh', sentence: 'Rotate the shape ninety degrees clockwise.', translation: 'Xoay hình chín mươi độ theo chiều kim đồng hồ.', grammar: 'Câu lệnh: Rotate [shape] [angle] clockwise/anticlockwise.' },
    { word: 'translate', wordType: '(v)', meaning: 'tịnh tiến', sentence: 'Translate the shape two units to the right.', translation: 'Tịnh tiến hình sang phải hai đơn vị.', grammar: 'Chuyển vị: Translate [shape] [X] units to the [direction].' },
    { word: 'perimeter', wordType: '(n)', meaning: 'chu vi', sentence: 'Add all side lengths to find the perimeter.', translation: 'Cộng tất cả chiều dài các cạnh để tìm chu vi.', grammar: 'Công thức chu vi: Add all side lengths to find perimeter.' },
    { word: 'area', wordType: '(n)', meaning: 'diện tích', sentence: 'Multiply length by width to calculate the area.', translation: 'Nhân chiều dài với chiều rộng để tính diện tích.', grammar: 'Công thức diện tích: Multiply length by width for area.' }
  ],

  // Chương 4: Đo lường, Thời gian & Tiền tệ
  c4s1: [
    { word: 'length', wordType: '(n)', meaning: 'chiều dài', sentence: 'Measure the length of the classroom whiteboard.', translation: 'Đo chiều dài của bảng viết lớp học.', grammar: 'Yêu cầu: Measure the length of [object].' },
    { word: 'width', wordType: '(n)', meaning: 'chiều rộng', sentence: 'The desk has a width of sixty centimeters.', translation: 'Bàn học có chiều rộng sáu mươi xăng-ti-mét.', grammar: 'Mô tả kích thước: [Subject] has a width of [measurement].' },
    { word: 'height', wordType: '(n)', meaning: 'chiều cao', sentence: 'Stand straight against the wall to check your height.', translation: 'Đứng thẳng vào tường để kiểm tra chiều cao của em.', grammar: 'Thao tác: Stand straight to check your height.' },
    { word: 'millimeter', wordType: '(n)', meaning: 'mi-li-mét (mm)', sentence: 'Ten millimeters make one centimeter.', translation: 'Mười mi-li-mét tạo thành một xăng-ti-mét.', grammar: 'Đổi đơn vị: Ten millimeters make one centimeter.' },
    { word: 'centimeter', wordType: '(n)', meaning: 'xăng-ti-mét (cm)', sentence: 'Use a ruler marked in centimeters.', translation: 'Dùng một chiếc thước kẻ có vạch xăng-ti-mét.', grammar: 'Dụng cụ: Use a ruler marked in centimeters.' },
    { word: 'meter', wordType: '(n)', meaning: 'mét (m)', sentence: 'One meter equals one hundred centimeters.', translation: 'Một mét bằng một trăm xăng-ti-mét.', grammar: 'Quy đổi: One meter equals 100 centimeters.' },
    { word: 'kilometer', wordType: '(n)', meaning: 'ki-lô-mét (km)', sentence: 'Distance between cities is measured in kilometers.', translation: 'Khoảng cách giữa các thành phố được đo bằng ki-lô-mét.', grammar: 'Bị động: Distance is measured in kilometers.' }
  ],
  c4s2: [
    { word: 'mass', wordType: '(n)', meaning: 'khối lượng', sentence: 'Mass is the amount of matter in an object.', translation: 'Khối lượng là lượng vật chất chứa trong một vật.', grammar: 'Định nghĩa: Mass is the amount of matter in an object.' },
    { word: 'weight', wordType: '(n)', meaning: 'trọng lượng', sentence: 'Gravity gives an object its weight.', translation: 'Trọng lực tạo nên trọng lượng của vật thể.', grammar: 'Hiện tượng: Gravity gives an object its weight.' },
    { word: 'gram', wordType: '(n)', meaning: 'gam (g)', sentence: 'A paperclip has a mass of about one gram.', translation: 'Một chiếc kẹp giấy có khối lượng khoảng một gam.', grammar: 'Ước lượng: [Object] has a mass of about [X] grams.' },
    { word: 'kilogram', wordType: '(n)', meaning: 'ki-lô-gam (kg)', sentence: 'One kilogram equals one thousand grams.', translation: 'Một ki-lô-gam bằng một nghìn gam.', grammar: 'Quy đổi: One kilogram equals 1000 grams.' },
    { word: 'scale', wordType: '(n)', meaning: 'cái cân', sentence: 'Place the apples on the kitchen scale.', translation: 'Đặt những quả táo lên chiếc cân nhà bếp.', grammar: 'Thao tác: Place [item] on the scale.' },
    { word: 'heavy', wordType: '(adj)', meaning: 'nặng', sentence: 'The iron kettle is too heavy for a child.', translation: 'Chiếc ấm sắt quá nặng đối với một đứa trẻ.', grammar: 'Cấu trúc so sánh/mức độ: [Item] is too heavy for [someone].' },
    { word: 'light', wordType: '(adj)', meaning: 'nhẹ', sentence: 'A dry leaf is as light as a feather.', translation: 'Chiếc lá khô nhẹ tựa như một sợi lông hồng.', grammar: 'So sánh bằng: As light as a feather.' }
  ],
  c4s3: [
    { word: 'volume', wordType: '(n)', meaning: 'thể tích', sentence: 'Volume is the amount of 3D space occupied.', translation: 'Thể tích là lượng không gian ba chiều bị chiếm chỗ.', grammar: 'Định nghĩa: Volume is the amount of space occupied.' },
    { word: 'capacity', wordType: '(n)', meaning: 'dung tích', sentence: 'The bottle has a capacity of two liters.', translation: 'Chiếc bình có dung tích chứa hai lít.', grammar: 'Mô tả sức chứa: [Container] has a capacity of [X] liters.' },
    { word: 'milliliter', wordType: '(n)', meaning: 'mi-li-lít (ml)', sentence: 'A teaspoon holds five milliliters of medicine.', translation: 'Một thìa nhỏ chứa năm mi-li-lít thuốc.', grammar: 'Ước lượng thể tích: [Container] holds [X] milliliters.' },
    { word: 'liter', wordType: '(n)', meaning: 'lít (l)', sentence: 'Drink at least two liters of water daily.', translation: 'Hãy uống ít nhất hai lít nước mỗi ngày.', grammar: 'Lời khuyên: Drink at least [X] liters of water.' },
    { word: 'container', wordType: '(n)', meaning: 'vật chứa, bình đựng', sentence: 'Pour water into the transparent plastic container.', translation: 'Đổ nước vào trong chiếc bình nhựa trong suốt.', grammar: 'Chỉ dẫn: Pour [liquid] into the container.' },
    { word: 'pour', wordType: '(v)', meaning: 'rót, đổ', sentence: 'Pour the juice carefully without spilling.', translation: 'Rót nước trái cây cẩn thận không để tràn.', grammar: 'Câu lệnh: Pour [liquid] carefully without spilling.' },
    { word: 'full', wordType: '(adj)', meaning: 'đầy', sentence: 'The glass is half full of milk.', translation: 'Chiếc cốc đã đầy một nửa sữa.', grammar: 'Mô tả trạng thái: The glass is half/completely full of [liquid].' }
  ],
  c4s4: [
    { word: "o'clock", wordType: '(adv)', meaning: 'đúng giờ', sentence: 'The school bell rings at eight oclock in the morning.', translation: 'Chuông trường reo lúc tám giờ đúng vào buổi sáng.', grammar: 'Chỉ giờ chính xác: At [number] oclock.' },
    { word: 'minute', wordType: '(n)', meaning: 'phút', sentence: 'There are sixty minutes in one hour.', translation: 'Có sáu mươi phút trong một giờ đồng hồ.', grammar: 'Thời gian: There are 60 minutes in one hour.' },
    { word: 'hour', wordType: '(n)', meaning: 'giờ, tiếng đồng hồ', sentence: 'The math lesson lasts for one hour.', translation: 'Tiết học toán kéo dài trong một giờ đồng hồ.', grammar: 'Khoảng thời gian: [Event] lasts for [number] hours.' },
    { word: 'second', wordType: '(n)', meaning: 'giây', sentence: 'Count ten seconds before opening your eyes.', translation: 'Đếm mười giây trước khi mở mắt ra.', grammar: 'Câu lệnh: Count [number] seconds before [action].' },
    { word: 'past', wordType: '(prep)', meaning: 'hơn (giờ)', sentence: 'It is ten minutes past eight.', translation: 'Bây giờ là tám giờ mười phút (tám giờ hơn mười).', grammar: 'Đọc giờ hơn: It is [minutes] past [hour].' },
    { word: 'to', wordType: '(prep)', meaning: 'kém (giờ)', sentence: 'It is a quarter to nine.', translation: 'Bây giờ là chín giờ kém mười lăm phút.', grammar: 'Đọc giờ kém: It is [minutes] to [hour].' },
    { word: 'calendar', wordType: '(n)', meaning: 'tờ lịch, lịch', sentence: 'Check the wall calendar to find the date.', translation: 'Xem tờ lịch treo tường để tìm ngày tháng.', grammar: 'Chỉ dẫn: Check the calendar to find the date.' }
  ],
  c4s5: [
    { word: 'coin', wordType: '(n)', meaning: 'đồng xu', sentence: 'Drop a shiny coin into the piggy bank.', translation: 'Thả một đồng xu sáng loáng vào chú lợn tiết kiệm.', grammar: 'Thao tác: Drop a coin into the piggy bank.' },
    { word: 'banknote', wordType: '(n)', meaning: 'tiền giấy', sentence: 'He paid for the storybook with a ten-dollar banknote.', translation: 'Cậu ấy trả tiền cuốn truyện bằng tờ tiền giấy mười đô-la.', grammar: 'Thanh toán: Pay for [item] with a [amount] banknote.' },
    { word: 'price', wordType: '(n)', meaning: 'giá tiền', sentence: 'Look at the price tag on the notebook.', translation: 'Nhìn vào mác giá tiền trên cuốn vở ghi.', grammar: 'Mua sắm: Look at the price tag on [item].' },
    { word: 'cost', wordType: '(v)', meaning: 'có giá là', sentence: 'How much does this colorful pencil cost?', translation: 'Chiếc bút chì nhiều màu này có giá bao nhiêu?', grammar: 'Hỏi giá tiền: How much does [item] cost?' },
    { word: 'change', wordType: '(n)', meaning: 'tiền thừa', sentence: 'The cashier handed back my change.', translation: 'Người thu ngân đã đưa lại tiền thừa cho tôi.', grammar: 'Giao dịch: The cashier handed back my change.' },
    { word: 'spend', wordType: '(v)', meaning: 'tiêu tiền', sentence: 'Do not spend all your pocket money at once.', translation: 'Đừng tiêu hết toàn bộ tiền tiêu vặt cùng một lúc.', grammar: 'Khuyên bảo: Do not spend money on [items].' },
    { word: 'save', wordType: '(v)', meaning: 'tiết kiệm tiền', sentence: 'Save five coins each week for the future.', translation: 'Tiết kiệm năm đồng xu mỗi tuần cho tương lai.', grammar: 'Mục tiêu: Save [amount] each week.' }
  ],

  // Chương 5: Xử lý dữ liệu & Xác suất
  c5s1: [
    { word: 'data', wordType: '(n)', meaning: 'dữ liệu', sentence: 'Collect data about your classmates favorite sports.', translation: 'Thu thập dữ liệu về các môn thể thao yêu thích của bạn học.', grammar: 'Nghiên cứu: Collect data about [topic].' },
    { word: 'tally chart', wordType: '(n)', meaning: 'bảng kiểm đếm', matchWord: 'tally chart', sentence: 'Use tally marks to record votes on the tally chart.', translation: 'Dùng các vạch đếm để ghi lại phiếu bầu trên bảng kiểm đếm.', grammar: 'Công cụ thống kê: Record votes on the tally chart.' },
    { word: 'survey', wordType: '(n)', meaning: 'cuộc khảo sát', sentence: 'Conduct a class survey to gather answers.', translation: 'Tiến hành một cuộc khảo sát lớp học để thu thập câu trả lời.', grammar: 'Phương pháp: Conduct a survey to gather answers.' },
    { word: 'table', wordType: '(n)', meaning: 'bảng biểu', sentence: 'Organize the survey results in a neat table.', translation: 'Sắp xếp kết quả khảo sát vào một bảng biểu gọn gàng.', grammar: 'Trình bày: Organize results in a table.' },
    { word: 'row', wordType: '(n)', meaning: 'hàng ngang', sentence: 'Find the students name in the third row.', translation: 'Tìm tên học sinh ở hàng ngang thứ ba.', grammar: 'Vị trí bảng: In the [ordinal] row.' },
    { word: 'column', wordType: '(n)', meaning: 'cột dọc', sentence: 'Write the total numbers in the right column.', translation: 'Viết tổng các con số vào cột dọc bên phải.', grammar: 'Vị trí bảng: Write values in the [direction] column.' },
    { word: 'frequency', wordType: '(n)', meaning: 'tần số, số lần xuất hiện', sentence: 'Frequency shows how many times an event occurred.', translation: 'Tần số chỉ ra số lần một sự việc đã xảy ra.', grammar: 'Định nghĩa: Frequency shows how many times...' }
  ],
  c5s2: [
    { word: 'bar chart', wordType: '(n)', meaning: 'biểu đồ cột', matchWord: 'bar chart', sentence: 'Draw a colorful bar chart to compare scores.', translation: 'Vẽ một biểu đồ cột nhiều màu để so sánh điểm số.', grammar: 'Trực quan hóa: Draw a bar chart to compare [items].' },
    { word: 'pictograph', wordType: '(n)', meaning: 'biểu đồ tranh', sentence: 'Each picture on the pictograph stands for two books.', translation: 'Mỗi hình vẽ trên biểu đồ tranh đại diện cho hai cuốn sách.', grammar: 'Quy ước biểu đồ tranh: Each symbol stands for [number] items.' },
    { word: 'pie chart', wordType: '(n)', meaning: 'biểu đồ tròn', matchWord: 'pie chart', sentence: 'A pie chart shows parts of a whole circle.', translation: 'Biểu đồ tròn thể hiện các phần của một hình tròn hoàn chỉnh.', grammar: 'Đặc điểm: A pie chart shows parts of a whole.' },
    { word: 'line graph', wordType: '(n)', meaning: 'biểu đồ đường', matchWord: 'line graph', sentence: 'The line graph tracks temperature change over time.', translation: 'Biểu đồ đường theo dõi sự thay đổi nhiệt độ theo thời gian.', grammar: 'Công dụng: A line graph tracks changes over time.' },
    { word: 'axis', wordType: '(n)', meaning: 'trục tọa độ', sentence: 'Label the horizontal x-axis clearly.', translation: 'Dán nhãn trục ngang x thật rõ ràng.', grammar: 'Vẽ đồ thị: Label the horizontal/vertical axis.' },
    { word: 'scale', wordType: '(n)', meaning: 'thang chia độ', sentence: 'Choose a suitable scale of five units per square.', translation: 'Chọn thang chia độ phù hợp gồm năm đơn vị mỗi ô vuông.', grammar: 'Quy chuẩn: Choose a suitable scale of [X] units.' },
    { word: 'key', wordType: '(n)', meaning: 'chú giải biểu đồ', sentence: 'Read the chart key to understand the symbols.', translation: 'Đọc phần chú giải biểu đồ để hiểu các ký hiệu.', grammar: 'Đọc biểu đồ: Read the key to understand symbols.' }
  ],
  c5s3: [
    { word: 'average', wordType: '(n)', meaning: 'số trung bình', sentence: 'Find the average test score of the group.', translation: 'Tìm điểm kiểm tra trung bình của cả nhóm.', grammar: 'Yêu cầu: Find the average [value] of [group].' },
    { word: 'mean', wordType: '(n)', meaning: 'giá trị trung bình cộng', sentence: 'Add all numbers and divide by count to find mean.', translation: 'Cộng tất cả các số và chia cho số lượng để tìm trung bình cộng.', grammar: 'Quy tắc: Add numbers and divide by count to find mean.' },
    { word: 'median', wordType: '(n)', meaning: 'số trung vị', sentence: 'The median is the middle value in an ordered list.', translation: 'Số trung vị là giá trị ở chính giữa trong danh sách đã xếp thứ tự.', grammar: 'Định nghĩa: The median is the middle value.' },
    { word: 'mode', wordType: '(n)', meaning: 'mốt (giá trị gặp nhiều nhất)', sentence: 'The mode is the number that appears most often.', translation: 'Mốt là con số xuất hiện nhiều lần nhất.', grammar: 'Định nghĩa: The mode is the number that appears most often.' },
    { word: 'range', wordType: '(n)', meaning: 'khoảng biến thiên', sentence: 'Subtract the lowest value from the highest for range.', translation: 'Lấy giá trị cao nhất trừ giá trị thấp nhất để có khoảng biến thiên.', grammar: 'Công thức: Subtract lowest from highest for range.' },
    { word: 'maximum', wordType: '(n)', meaning: 'giá trị lớn nhất', sentence: 'Identify the maximum temperature recorded this week.', translation: 'Xác định nhiệt độ cao nhất ghi nhận được trong tuần này.', grammar: 'Chỉ định: Identify the maximum value.' },
    { word: 'minimum', wordType: '(n)', meaning: 'giá trị nhỏ nhất', sentence: 'The minimum score required to pass is fifty.', translation: 'Điểm số nhỏ nhất cần có để vượt qua là năm mươi.', grammar: 'Tiêu chuẩn: The minimum score required is [number].' }
  ],
  c5s4: [
    { word: 'chance', wordType: '(n)', meaning: 'cơ hội, khả năng', sentence: 'There is a fair chance of winning the board game.', translation: 'Có một cơ hội công bằng để chiến thắng trò chơi cờ bàn.', grammar: 'Xác suất đời sống: There is a [adjective] chance of [V-ing].' },
    { word: 'certain', wordType: '(adj)', meaning: 'chắc chắn xảy ra', sentence: 'It is certain that the sun rises every morning.', translation: 'Chắc chắn một điều rằng mặt trời mọc mỗi buổi sáng.', grammar: 'Mức độ xác suất 100%: It is certain that [clause].' },
    { word: 'impossible', wordType: '(adj)', meaning: 'không thể xảy ra', sentence: 'It is impossible to roll an eight on a normal die.', translation: 'Không thể nào gieo được số tám trên con súc sắc bình thường.', grammar: 'Mức độ xác suất 0%: It is impossible to [verb].' },
    { word: 'likely', wordType: '(adj)', meaning: 'có khả năng xảy ra cao', sentence: 'It is likely to rain because dark clouds gathered.', translation: 'Rất có khả năng trời mưa vì mây đen đã kéo đến.', grammar: 'Khả năng cao: It is likely to [verb].' },
    { word: 'unlikely', wordType: '(adj)', meaning: 'ít có khả năng xảy ra', sentence: 'It is unlikely that the pond will freeze in summer.', translation: 'Ít có khả năng ao nước sẽ đóng băng vào mùa hè.', grammar: 'Khả năng thấp: It is unlikely that [clause].' },
    { word: 'event', wordType: '(n)', meaning: 'biến cố, sự kiện', sentence: 'Flipping heads on a coin is a single event.', translation: 'Tung được mặt ngửa của đồng xu là một biến cố đơn lẻ.', grammar: 'Thuật ngữ xác suất: [Action] is a single event.' },
    { word: 'outcome', wordType: '(n)', meaning: 'kết quả có thể có', sentence: 'List all possible outcomes of spinning the wheel.', translation: 'Liệt kê tất cả kết quả có thể có khi quay bánh xe.', grammar: 'Yêu cầu: List all possible outcomes of [action].' }
  ],
  c5s5: [
    { word: 'trend', wordType: '(n)', meaning: 'xu hướng', sentence: 'The line shows an upward trend in reading scores.', translation: 'Đường biểu diễn cho thấy một xu hướng đi lên trong điểm đọc.', grammar: 'Phân tích: The graph shows an upward/downward trend.' },
    { word: 'interpret', wordType: '(v)', meaning: 'diễn giải, đọc hiểu', sentence: 'Interpret the findings presented in the chart.', translation: 'Diễn giải những phát hiện được trình bày trong biểu đồ.', grammar: 'Câu lệnh: Interpret the findings presented in [chart].' },
    { word: 'conclusion', wordType: '(n)', meaning: 'kết luận', sentence: 'Draw a sensible conclusion from your survey data.', translation: 'Rút ra một kết luận hợp lý từ dữ liệu khảo sát của em.', grammar: 'Kỹ năng: Draw a conclusion from [data].' },
    { word: 'pattern', wordType: '(n)', meaning: 'quy luật, mô thức', sentence: 'Notice the repeating pattern in the data points.', translation: 'Hãy chú ý quy luật lặp lại trong các điểm dữ liệu.', grammar: 'Quan sát: Notice the repeating pattern in [data].' },
    { word: 'predict', wordType: '(v)', meaning: 'dự đoán', sentence: 'Predict what will happen next based on trends.', translation: 'Dự đoán điều gì sẽ xảy ra tiếp theo dựa vào xu hướng.', grammar: 'Suy luận: Predict what will happen based on [evidence].' },
    { word: 'represent', wordType: '(v)', meaning: 'biểu diễn, đại diện', sentence: 'Let each bar represent one class of pupils.', translation: 'Hãy để mỗi cột biểu diễn một lớp học sinh.', grammar: 'Quy ước: Let [symbol] represent [meaning].' },
    { word: 'compare', wordType: '(v)', meaning: 'so sánh đối chiếu', sentence: 'Compare the heights of both bar columns.', translation: 'So sánh chiều cao của cả hai cột biểu đồ.', grammar: 'Chỉ dẫn: Compare [A] and [B] to find the difference.' }
  ],

  // Chương 6: Toán đố, Quy luật & Lập luận
  c6s1: [
    { word: 'sequence', wordType: '(n)', meaning: 'dãy số theo quy luật', sentence: 'Fill in the missing numbers in this sequence.', translation: 'Điền các con số còn thiếu vào trong dãy số này.', grammar: 'Chỉ dẫn: Fill in the missing numbers in this sequence.' },
    { word: 'rule', wordType: '(n)', meaning: 'quy tắc', sentence: 'What is the rule for this number pattern?', translation: 'Quy tắc cho quy luật số này là gì?', grammar: 'Câu hỏi khám phá: What is the rule for this pattern?' },
    { word: 'term', wordType: '(n)', meaning: 'số hạng', sentence: 'The fifth term in the pattern is twenty-five.', translation: 'Số hạng thứ năm trong quy luật là hai mươi lăm.', grammar: 'Vị trí số hạng: The [ordinal] term in the pattern is [number].' },
    { word: 'even number', wordType: '(n)', meaning: 'số chẵn', matchWord: 'even number', sentence: 'An even number ends in zero, two, four, six, or eight.', translation: 'Số chẵn tận cùng bằng không, hai, bốn, sáu hoặc tám.', grammar: 'Quy tắc số học: An even number ends in 0, 2, 4, 6, 8.' },
    { word: 'odd number', wordType: '(n)', meaning: 'số lẻ', matchWord: 'odd number', sentence: 'An odd number cannot be divided equally by two.', translation: 'Số lẻ không thể chia đều cho hai.', grammar: 'Định nghĩa: An odd number cannot be divided equally by two.' },
    { word: 'consecutive', wordType: '(adj)', meaning: 'liên tiếp', sentence: 'Name three consecutive numbers after seven.', translation: 'Nêu tên ba số liên tiếp đứng sau số bảy.', grammar: 'Yêu cầu: Name three consecutive numbers after [number].' },
    { word: 'prime number', wordType: '(n)', meaning: 'số nguyên tố', matchWord: 'prime number', sentence: 'A prime number has only two factors: one and itself.', translation: 'Số nguyên tố chỉ có hai ước số: một và chính nó.', grammar: 'Định nghĩa: A prime number has only two factors.' }
  ],
  c6s2: [
    { word: 'problem', wordType: '(n)', meaning: 'bài toán, vấn đề', sentence: 'Read the word problem twice before solving.', translation: 'Đọc bài toán đố hai lần trước khi giải.', grammar: 'Lời khuyên sư phạm: Read the problem twice before solving.' },
    { word: 'solve', wordType: '(v)', meaning: 'giải (bài toán)', sentence: 'Use drawing to solve the word problem.', translation: 'Dùng hình vẽ để giải bài toán đố.', grammar: 'Chiến thuật: Use [strategy] to solve the problem.' },
    { word: 'solution', wordType: '(n)', meaning: 'lời giải, đáp số', sentence: 'Write the complete solution step by step.', translation: 'Viết lời giải hoàn chỉnh theo từng bước một.', grammar: 'Trình bày: Write the solution step by step.' },
    { word: 'step', wordType: '(n)', meaning: 'bước giải', sentence: 'What is the first step in solving this riddle?', translation: 'Bước đầu tiên trong việc giải câu đố này là gì?', grammar: 'Câu hỏi tư duy: What is the first step in solving...?' },
    { word: 'method', wordType: '(n)', meaning: 'phương pháp', sentence: 'Choose the quickest method to multiply numbers.', translation: 'Chọn phương pháp nhanh nhất để nhân các con số.', grammar: 'Lựa chọn cách làm: Choose the most efficient method.' },
    { word: 'check', wordType: '(v)', meaning: 'kiểm tra lại', sentence: 'Always check your answers with inverse operations.', translation: 'Luôn kiểm tra lại câu trả lời bằng các phép tính ngược lại.', grammar: 'Thói quen tốt: Always check your answers with [operation].' },
    { word: 'underline', wordType: '(v)', meaning: 'gạch chân', sentence: 'Underline key numbers and words in the question.', translation: 'Gạch chân các con số và từ khóa trong câu hỏi.', grammar: 'Kỹ năng đọc đề: Underline key numbers and words.' }
  ],
  c6s3: [
    { word: 'explain', wordType: '(v)', meaning: 'giải thích', sentence: 'Explain how you found your answer to the class.', translation: 'Hãy giải thích cách em tìm ra câu trả lời cho cả lớp.', grammar: 'Giao tiếp toán học: Explain how you found your answer.' },
    { word: 'justify', wordType: '(v)', meaning: 'chứng minh, biện minh', sentence: 'Justify your mathematical reasoning with examples.', translation: 'Biện minh cho lập luận toán học của em bằng các ví dụ.', grammar: 'Yêu cầu lập luận: Justify your reasoning with examples.' },
    { word: 'prove', wordType: '(v)', meaning: 'chứng minh là đúng', sentence: 'Can you prove that this statement is always true?', translation: 'Em có thể chứng minh nhận định này luôn đúng không?', grammar: 'Câu hỏi thách thức: Can you prove that [clause]?' },
    { word: 'true', wordType: '(adj)', meaning: 'đúng', sentence: 'Decide if the math statement is true or false.', translation: 'Hãy xác định xem câu toán học đó là đúng hay sai.', grammar: 'Dạng bài tập: Decide if the statement is true or false.' },
    { word: 'false', wordType: '(adj)', meaning: 'sai', sentence: 'The calculation is false because of an addition error.', translation: 'Phép tính đó bị sai vì một lỗi cộng nhầm.', grammar: 'Đánh giá: The calculation is false because [reason].' },
    { word: 'reason', wordType: '(n)', meaning: 'lý do, lập luận', sentence: 'Give a clear reason for your mathematical choice.', translation: 'Đưa ra một lý do rõ ràng cho sự lựa chọn toán học của em.', grammar: 'Yêu cầu: Give a clear reason for your answer.' },
    { word: 'strategy', wordType: '(n)', meaning: 'chiến lược giải', sentence: 'Working backwards is a powerful solving strategy.', translation: 'Làm ngược từ dưới lên là một chiến lược giải toán mạnh mẽ.', grammar: 'Giới thiệu chiến lược: [Method] is a powerful strategy.' }
  ],
  c6s4: [
    { word: 'measure', wordType: '(v)', meaning: 'đo lường', sentence: 'Measure the length of your pencil in millimeters.', translation: 'Đo chiều dài chiếc bút chì của em bằng mi-li-mét.', grammar: 'Câu lệnh: Measure the [attribute] of [object] in [unit].' },
    { word: 'draw', wordType: '(v)', meaning: 'vẽ hình', sentence: 'Draw a rectangle with sides of five and three units.', translation: 'Vẽ một hình chữ nhật có các cạnh năm và ba đơn vị.', grammar: 'Chỉ dẫn thực hành: Draw a [shape] with [dimensions].' },
    { word: 'circle', wordType: '(v)', meaning: 'khoanh tròn', sentence: 'Circle the correct multiple of six on the worksheet.', translation: 'Khoanh tròn bội số đúng của sáu trên phiếu bài tập.', grammar: 'Câu lệnh đề bài: Circle the correct [answer].' },
    { word: 'cross out', wordType: '(phr v)', meaning: 'gạch bỏ', matchWord: 'cross out', sentence: 'Cross out any incorrect answers on the board.', translation: 'Gạch bỏ bất kỳ câu trả lời sai nào trên bảng.', grammar: 'Thao tác: Cross out incorrect answers.' },
    { word: 'match', wordType: '(v)', meaning: 'nối cặp', sentence: 'Match each fraction to its equivalent percentage.', translation: 'Nối từng phân số với tỉ lệ phần trăm tương đương của nó.', grammar: 'Dạng bài nối: Match [item A] to [item B].' },
    { word: 'label', wordType: '(v)', meaning: 'ghi nhãn, đặt tên', sentence: 'Label each angle as acute, obtuse, or right.', translation: 'Ghi nhãn mỗi góc là góc nhọn, góc tù hay góc vuông.', grammar: 'Chỉ dẫn: Label each [item] as [category].' },
    { word: 'unit', wordType: '(n)', meaning: 'đơn vị đo', sentence: 'Always remember to write the correct unit.', translation: 'Luôn luôn nhớ phải viết đơn vị đo chính xác.', grammar: 'Nhắc nhở học sinh: Always write the correct unit.' }
  ],
  c6s5: [
    { word: 'symbol', wordType: '(n)', meaning: 'ký hiệu toán học', sentence: 'The plus symbol represents addition.', translation: 'Ký hiệu dấu cộng đại diện cho phép cộng.', grammar: 'Quy ước: The [symbol name] represents [operation].' },
    { word: 'equation', wordType: '(n)', meaning: 'phương trình, biểu thức bằng nhau', sentence: 'Balance both sides of the mathematical equation.', translation: 'Làm cân bằng cả hai vế của biểu thức toán học.', grammar: 'Khái niệm: Balance both sides of the equation.' },
    { word: 'sum', wordType: '(n)', meaning: 'tổng số', sentence: 'The sum of all angles in a triangle is 180 degrees.', translation: 'Tổng tất cả các góc trong một hình tam giác là 180 độ.', grammar: 'Định lý: The sum of angles is 180 degrees.' },
    { word: 'product', wordType: '(n)', meaning: 'tích số', sentence: 'The product of two even numbers is always even.', translation: 'Tích số của hai số chẵn luôn luôn là số chẵn.', grammar: 'Quy luật: The product of even numbers is even.' },
    { word: 'difference', wordType: '(n)', meaning: 'hiệu số', sentence: 'Find the difference between highest and lowest marks.', translation: 'Tìm hiệu số giữa điểm cao nhất và điểm thấp nhất.', grammar: 'Tính toán: Find the difference between A and B.' },
    { word: 'quotient', wordType: '(n)', meaning: 'thương số', sentence: 'A quotient is the result of division.', translation: 'Thương số là kết quả của một phép chia.', grammar: 'Định nghĩa: A quotient is the result of division.' },
    { word: 'equal', wordType: '(v)', meaning: 'bằng nhau', sentence: 'Two quarters equal one half.', translation: 'Hai phần tư bằng một phần hai.', grammar: 'Mẫu câu so sánh: Two quarters equal one half.' }
  ]
};

// ==========================================
// NGÂN HÀNG TỪ VỰNG KHOA HỌC (210 TỪ)
// ==========================================
export const scienceVocab = {
  // Chương 1: Cây cối quanh em (Plants & Nature)
  c1s1: [
    { word: 'leaf', wordType: '(n)', meaning: 'lá cây', sentence: 'The green leaf is small.', translation: 'Chiếc lá màu xanh thì nhỏ.', grammar: 'Tính từ đứng trước danh từ: The green leaf is small.' },
    { word: 'root', wordType: '(n)', meaning: 'rễ cây', sentence: 'Roots grow in the soil.', translation: 'Rễ cây mọc ở trong đất.', grammar: 'Thì hiện tại đơn: Roots grow in the soil.' },
    { word: 'stem', wordType: '(n)', meaning: 'thân cây', sentence: 'The stem holds the flower.', translation: 'Thân cây nâng đỡ bông hoa.', grammar: 'Cấu tạo cây: The stem holds the flower.' },
    { word: 'flower', wordType: '(n)', meaning: 'bông hoa', sentence: 'The yellow flower is pretty.', translation: 'Bông hoa màu vàng rất đẹp.', grammar: 'Mẫu câu miêu tả: The flower is pretty.' },
    { word: 'seed', wordType: '(n)', meaning: 'hạt giống', sentence: 'A seed grows into a plant.', translation: 'Một hạt giống lớn lên thành cái cây.', grammar: 'Vòng đời cơ bản: A seed grows into a plant.' },
    { word: 'tree', wordType: '(n)', meaning: 'cái cây', sentence: 'Birds sing in the big tree.', translation: 'Chim hót trên cái cây to.', grammar: 'Vị trí: in the big tree.' },
    { word: 'fruit', wordType: '(n)', meaning: 'trái cây, quả', sentence: 'Apples are sweet red fruit.', translation: 'Táo là loại trái cây màu đỏ ngọt ngào.', grammar: 'Phân loại: Apples are sweet fruit.' }
  ],
  c1s2: [
    { word: 'sun', wordType: '(n)', meaning: 'mặt trời', sentence: 'The sun is warm and bright.', translation: 'Mặt trời ấm áp và rực rỡ.', grammar: 'Tính từ miêu tả: The sun is warm and bright.' },
    { word: 'water', wordType: '(n)', meaning: 'nước', sentence: 'Plants need water to grow.', translation: 'Cây cối cần nước để lớn lên.', grammar: 'Nhu cầu sống: Plants need water to grow.' },
    { word: 'soil', wordType: '(n)', meaning: 'đất trồng', sentence: 'We put seeds in dark soil.', translation: 'Chúng em gieo hạt vào đất mùn tối màu.', grammar: 'Hành động: Put seeds in dark soil.' },
    { word: 'air', wordType: '(n)', meaning: 'không khí', sentence: 'All plants need fresh air.', translation: 'Mọi loài cây đều cần không khí trong lành.', grammar: 'Nhu cầu: Plants need fresh air.' },
    { word: 'grow', wordType: '(v)', meaning: 'lớn lên, phát triển', sentence: 'Little plants grow very fast.', translation: 'Những cây nhỏ lớn lên rất nhanh.', grammar: 'Động từ chỉ sự phát triển: Plants grow fast.' },
    { word: 'green', wordType: '(adj)', meaning: 'màu xanh lá', sentence: 'The leaves are fresh and green.', translation: 'Những chiếc lá tươi và xanh.', grammar: 'Màu sắc: Leaves are fresh and green.' },
    { word: 'light', wordType: '(n)', meaning: 'ánh sáng', sentence: 'Plants need sunlight to live.', translation: 'Cây cối cần ánh sáng mặt trời để sống.', grammar: 'Nguồn sống: Plants need sunlight to live.' }
  ],
  c1s3: [
    { word: 'plant', wordType: '(v)', meaning: 'trồng cây', sentence: 'I help plant a new tree.', translation: 'Em giúp trồng một cái cây mới.', grammar: 'Động từ hành động: Help plant a tree.' },
    { word: 'sprout', wordType: '(n)', meaning: 'mầm cây', sentence: 'A green sprout comes up.', translation: 'Một mầm cây xanh nhú lên.', grammar: 'Sự nảy mầm: A sprout comes up.' },
    { word: 'drop', wordType: '(v)', meaning: 'rụng xuống, rơi', sentence: 'Brown leaves drop from the branch.', translation: 'Những chiếc lá màu nâu rụng xuống từ cành cây.', grammar: 'Hiện tượng tự nhiên: Leaves drop from branches.' },
    { word: 'tall', wordType: '(adj)', meaning: 'cao', sentence: 'Sunflowers can grow very tall.', translation: 'Hoa hướng dương có thể mọc rất cao.', grammar: 'Tính từ miêu tả: Grow very tall.' },
    { word: 'open', wordType: '(v)', meaning: 'nở ra, mở ra', sentence: 'Flowers open in the morning.', translation: 'Hoa nở ra vào buổi sáng.', grammar: 'Thói quen của hoa: Flowers open in the morning.' },
    { word: 'fresh', wordType: '(adj)', meaning: 'tươi tắn, trong lành', sentence: 'Fresh air feels very good.', translation: 'Không khí trong lành cho cảm giác rất dễ chịu.', grammar: 'Cảm giác: Fresh air feels good.' },
    { word: 'garden', wordType: '(n)', meaning: 'khu vườn', sentence: 'We have flowers in the garden.', translation: 'Chúng em có hoa trong khu vườn.', grammar: 'Nơi chốn: in the garden.' }
  ],
  c1s4: [
    { word: 'living', wordType: '(adj)', meaning: 'vật sống, còn sống', sentence: 'Cats and dogs are living things.', translation: 'Mèo và chó là những vật sống.', grammar: 'Phân loại: Living things grow and eat.' },
    { word: 'non-living', wordType: '(adj)', meaning: 'vật không sống, vô sinh', matchWord: 'non-living', sentence: 'A toy car is a non-living thing.', translation: 'Chiếc ô tô đồ chơi là vật không sống.', grammar: 'Phân loại: Toys are non-living things.' },
    { word: 'move', wordType: '(v)', meaning: 'di chuyển, cử động', sentence: 'Animals can run and move.', translation: 'Động vật có thể chạy và di chuyển.', grammar: 'Động từ: Animals can move.' },
    { word: 'breathe', wordType: '(v)', meaning: 'thở, hô hấp', sentence: 'Living things breathe air to live.', translation: 'Sinh vật sống thở không khí để sống.', grammar: 'Hành động sống: Breathe air to live.' },
    { word: 'eat', wordType: '(v)', meaning: 'ăn', sentence: 'Little rabbits like to eat carrots.', translation: 'Những chú thỏ nhỏ thích ăn cà rốt.', grammar: 'Thói quen: Like to eat carrots.' },
    { word: 'drink', wordType: '(v)', meaning: 'uống', sentence: 'We drink clean water every day.', translation: 'Chúng ta uống nước sạch mỗi ngày.', grammar: 'Nhu cầu nước: Drink clean water.' },
    { word: 'rock', wordType: '(n)', meaning: 'hòn đá', sentence: 'A hard rock is not alive.', translation: 'Hòn đá cứng không phải vật sống.', grammar: 'Vô sinh: A rock is not alive.' }
  ],
  c1s5: [
    { word: 'forest', wordType: '(n)', meaning: 'khu rừng', sentence: 'Many tall trees live in the forest.', translation: 'Nhiều cây cao sống trong khu rừng.', grammar: 'Môi trường sống: Trees live in the forest.' },
    { word: 'grass', wordType: '(n)', meaning: 'cỏ', sentence: 'Cows eat green grass outside.', translation: 'Những chú bò ăn cỏ xanh bên ngoài.', grammar: 'Thức ăn tự nhiên: Eat green grass.' },
    { word: 'wood', wordType: '(n)', meaning: 'gỗ', sentence: 'This study desk is made of wood.', translation: 'Bàn học này được làm từ gỗ.', grammar: 'Chất liệu: Made of wood.' },
    { word: 'branch', wordType: '(n)', meaning: 'cành cây', sentence: 'A bird sits on the branch.', translation: 'Một chú chim đậu trên cành cây.', grammar: 'Vị trí: Sit on the branch.' },
    { word: 'park', wordType: '(n)', meaning: 'công viên', sentence: 'We play ball in the park.', translation: 'Chúng em chơi bóng trong công viên.', grammar: 'Địa điểm: Play in the park.' },
    { word: 'shade', wordType: '(n)', meaning: 'bóng râm', sentence: 'Sit in the cool shade.', translation: 'Hãy ngồi trong bóng râm mát mẻ.', grammar: 'Thời tiết mát mẻ: In the cool shade.' },
    { word: 'nature', wordType: '(n)', meaning: 'thiên nhiên', sentence: 'We love and protect nature.', translation: 'Chúng ta yêu và bảo vệ thiên nhiên.', grammar: 'Ý thức: Love and protect nature.' }
  ],

  // Chương 2: Thế giới động vật (Animals & Habitats)
  c2s1: [
    { word: 'cat', wordType: '(n)', meaning: 'con mèo', sentence: 'The cat likes warm milk.', translation: 'Con mèo thích sữa ấm.', grammar: 'Sở thích con vật: The cat likes milk.' },
    { word: 'dog', wordType: '(n)', meaning: 'con chó', sentence: 'The happy dog wags its tail.', translation: 'Chú chó vui vẻ vẫy đuôi.', grammar: 'Hành động: The dog wags its tail.' },
    { word: 'bird', wordType: '(n)', meaning: 'con chim', sentence: 'A blue bird can fly high.', translation: 'Một chú chim xanh có thể bay cao.', grammar: 'Khả năng: A bird can fly.' },
    { word: 'fish', wordType: '(n)', meaning: 'con cá', sentence: 'Fish swim in the clear river.', translation: 'Cá bơi trong dòng sông trong xanh.', grammar: 'Môi trường sống: Fish swim in water.' },
    { word: 'duck', wordType: '(n)', meaning: 'con vịt', sentence: 'Yellow ducks swim in the pond.', translation: 'Những chú vịt vàng bơi trong ao.', grammar: 'Số nhiều: Ducks swim in the pond.' },
    { word: 'frog', wordType: '(n)', meaning: 'con ếch', sentence: 'The green frog jumps very far.', translation: 'Chú ếch xanh nhảy rất xa.', grammar: 'Động từ di chuyển: The frog jumps.' },
    { word: 'horse', wordType: '(n)', meaning: 'con ngựa', sentence: 'A strong horse runs fast.', translation: 'Một chú ngựa khỏe chạy rất nhanh.', grammar: 'Miêu tả: A strong horse runs fast.' }
  ],
  c2s2: [
    { word: 'wing', wordType: '(n)', meaning: 'cánh', sentence: 'Birds have two wings to fly.', translation: 'Chim có hai cánh để bay.', grammar: 'Bộ phận cơ thể: Birds have two wings.' },
    { word: 'tail', wordType: '(n)', meaning: 'cái đuôi', sentence: 'A monkey has a long tail.', translation: 'Con khỉ có một cái đuôi dài.', grammar: 'Miêu tả đặc điểm: Has a long tail.' },
    { word: 'fur', wordType: '(n)', meaning: 'lông mao', sentence: 'Rabbits have soft white fur.', translation: 'Thỏ có bộ lông mao trắng mềm mại.', grammar: 'Lông thú: Has soft fur.' },
    { word: 'feather', wordType: '(n)', meaning: 'lông vũ', sentence: 'The duck has smooth feathers.', translation: 'Con vịt có những chiếc lông vũ mượt mà.', grammar: 'Lông chim: Smooth feathers.' },
    { word: 'beak', wordType: '(n)', meaning: 'cái mỏ (chim)', sentence: 'Birds use their beak to eat.', translation: 'Chim dùng mỏ để ăn.', grammar: 'Công dụng cơ quan: Use their beak to eat.' },
    { word: 'leg', wordType: '(n)', meaning: 'cái chân', sentence: 'A frog has two long legs.', translation: 'Một con ếch có hai cái chân dài.', grammar: 'Đặc điểm: Has two long legs.' },
    { word: 'fin', wordType: '(n)', meaning: 'vây cá', sentence: 'Fish use fins to swim.', translation: 'Cá dùng vây để bơi lội.', grammar: 'Chức năng cơ quan: Use fins to swim.' }
  ],
  c2s3: [
    { word: 'fly', wordType: '(v)', meaning: 'bay', sentence: 'Birds can fly in the sky.', translation: 'Chim có thể bay trên bầu trời.', grammar: 'Động từ di chuyển: Fly in the sky.' },
    { word: 'swim', wordType: '(v)', meaning: 'bơi', sentence: 'Dolphins swim fast in the sea.', translation: 'Cá heo bơi nhanh dưới biển.', grammar: 'Hành động dưới nước: Swim in the sea.' },
    { word: 'hop', wordType: '(v)', meaning: 'nhảy lò cò, nhảy ngắn', sentence: 'Rabbits hop on the grass.', translation: 'Những chú thỏ nhảy trên cỏ.', grammar: 'Cách di chuyển: Rabbits hop.' },
    { word: 'run', wordType: '(v)', meaning: 'chạy', sentence: 'Horses can run very fast.', translation: 'Ngựa có thể chạy rất nhanh.', grammar: 'Khả năng: Can run very fast.' },
    { word: 'walk', wordType: '(v)', meaning: 'đi bộ', sentence: 'Elephants walk slowly in forest.', translation: 'Những chú voi đi bộ chầm chậm trong rừng.', grammar: 'Tốc độ: Walk slowly.' },
    { word: 'climb', wordType: '(v)', meaning: 'trèo, leo', sentence: 'Monkeys climb tall trees.', translation: 'Khỉ trèo lên những cây cao.', grammar: 'Hành động: Climb tall trees.' },
    { word: 'crawl', wordType: '(v)', meaning: 'bò', sentence: 'Turtles crawl on the sand.', translation: 'Rùa bò trên cát.', grammar: 'Di chuyển chậm: Crawl on the sand.' }
  ],
  c2s4: [
    { word: 'meat', wordType: '(n)', meaning: 'thịt', sentence: 'Lions like to eat fresh meat.', translation: 'Sư tử thích ăn thịt tươi.', grammar: 'Thức ăn: Eat fresh meat.' },
    { word: 'grass', wordType: '(n)', meaning: 'cỏ', sentence: 'Horses eat sweet green grass.', translation: 'Ngựa ăn cỏ xanh ngon lành.', grammar: 'Thức ăn động vật ăn cỏ: Eat green grass.' },
    { word: 'bug', wordType: '(n)', meaning: 'con bọ, côn trùng nhỏ', sentence: 'Spiders catch small bugs to eat.', translation: 'Nhện bắt các con bọ nhỏ để ăn.', grammar: 'Săn mồi đơn giản: Catch small bugs.' },
    { word: 'seed', wordType: '(n)', meaning: 'hạt', sentence: 'Little birds peck small seeds.', translation: 'Những chú chim nhỏ mổ các hạt nhỏ.', grammar: 'Hành động ăn: Peck small seeds.' },
    { word: 'hunt', wordType: '(v)', meaning: 'săn bắt', sentence: 'Owls hunt mice at night.', translation: 'Cú mèo săn chuột vào ban đêm.', grammar: 'Tập tính săn mồi: Hunt at night.' },
    { word: 'hungry', wordType: '(adj)', meaning: 'đói bụng', sentence: 'The little puppies are hungry.', translation: 'Những chú cún nhỏ đang đói bụng.', grammar: 'Trạng thái: Puppies are hungry.' },
    { word: 'feed', wordType: '(v)', meaning: 'cho ăn', sentence: 'I feed my lovely cat.', translation: 'Em cho chú mèo đáng yêu ăn.', grammar: 'Chăm sóc thú cưng: Feed my cat.' }
  ],
  c2s5: [
    { word: 'nest', wordType: '(n)', meaning: 'tổ chim', sentence: 'The mother bird builds a nest.', translation: 'Chim mẹ xây một cái tổ.', grammar: 'Nơi ở: Builds a nest.' },
    { word: 'cave', wordType: '(n)', meaning: 'hang động', sentence: 'Bears sleep in a dark cave.', translation: 'Những chú gấu ngủ trong hang tối.', grammar: 'Nơi trú ẩn: Sleep in a cave.' },
    { word: 'pond', wordType: '(n)', meaning: 'cái ao', sentence: 'Ducks swim in the small pond.', translation: 'Những chú vịt bơi trong ao nhỏ.', grammar: 'Nơi sống: Swim in the pond.' },
    { word: 'sea', wordType: '(n)', meaning: 'biển', sentence: 'Big whales live in the sea.', translation: 'Những con cá voi to lớn sống dưới biển.', grammar: 'Môi trường biển: Live in the sea.' },
    { word: 'farm', wordType: '(n)', meaning: 'trang trại', sentence: 'Cows and sheep live on a farm.', translation: 'Bò và cừu sống ở trang trại.', grammar: 'Vị trí: on a farm.' },
    { word: 'zoo', wordType: '(n)', meaning: 'sở thú', sentence: 'Children see tigers at the zoo.', translation: 'Các bạn nhỏ xem hổ ở sở thú.', grammar: 'Địa điểm: at the zoo.' },
    { word: 'home', wordType: '(n)', meaning: 'ngôi nhà, tổ ấm', sentence: 'Every animal needs a safe home.', translation: 'Mỗi con vật đều cần một ngôi nhà an toàn.', grammar: 'Nhu cầu an toàn: Needs a safe home.' }
  ],

  // Chương 3: Cơ thể em & 5 Giác quan (Body & 5 Senses)
  c3s1: [
    { word: 'head', wordType: '(n)', meaning: 'cái đầu', sentence: 'Wear a nice hat on your head.', translation: 'Hãy đội một chiếc mũ xinh lên đầu.', grammar: 'Vị trí: on your head.' },
    { word: 'arm', wordType: '(n)', meaning: 'cánh tay', sentence: 'I lift the bag with my arm.', translation: 'Em nhấc chiếc túi bằng cánh tay.', grammar: 'Bộ phận cử động: with my arm.' },
    { word: 'leg', wordType: '(n)', meaning: 'cái chân', sentence: 'We have two strong legs.', translation: 'Chúng ta có hai cái chân khỏe.', grammar: 'Số lượng: two strong legs.' },
    { word: 'hand', wordType: '(n)', meaning: 'bàn tay', sentence: 'Wash your hands with soap.', translation: 'Hãy rửa tay bằng xà phòng.', grammar: 'Vệ sinh: Wash your hands.' },
    { word: 'foot', wordType: '(n)', meaning: 'bàn chân', sentence: 'Kick the ball with your foot.', translation: 'Hãy đá bóng bằng bàn chân.', grammar: 'Bộ phận vận động: with your foot.' },
    { word: 'face', wordType: '(n)', meaning: 'khuôn mặt', sentence: 'Wash your face with clean water.', translation: 'Hãy rửa mặt bằng nước sạch.', grammar: 'Hành động: Wash your face.' },
    { word: 'body', wordType: '(n)', meaning: 'cơ thể', sentence: 'Healthy food is good for body.', translation: 'Thức ăn lành mạnh rất tốt cho cơ thể.', grammar: 'Dinh dưỡng: Good for your body.' }
  ],
  c3s2: [
    { word: 'see', wordType: '(v)', meaning: 'nhìn thấy', sentence: 'We see colors with our eyes.', translation: 'Chúng ta nhìn thấy màu sắc bằng mắt.', grammar: 'Giác quan nhìn: See with our eyes.' },
    { word: 'hear', wordType: '(v)', meaning: 'nghe thấy', sentence: 'We hear sounds with our ears.', translation: 'Chúng ta nghe âm thanh bằng tai.', grammar: 'Giác quan nghe: Hear with our ears.' },
    { word: 'smell', wordType: '(v)', meaning: 'ngửi thấy', sentence: 'We smell sweet roses with our nose.', translation: 'Chúng ta ngửi hoa hồng thơm bằng mũi.', grammar: 'Giác quan ngửi: Smell with our nose.' },
    { word: 'taste', wordType: '(v)', meaning: 'nếm vị', sentence: 'We taste sweet candy with tongue.', translation: 'Chúng ta nếm kẹo ngọt bằng lưỡi.', grammar: 'Giác quan nếm: Taste with tongue.' },
    { word: 'touch', wordType: '(v)', meaning: 'chạm vào, sờ', sentence: 'We touch soft toys with hands.', translation: 'Chúng ta chạm vào đồ chơi mềm bằng tay.', grammar: 'Giác quan xúc giác: Touch with hands.' },
    { word: 'look', wordType: '(v)', meaning: 'nhìn ngắm', sentence: 'Look at the blue rainbow.', translation: 'Hãy nhìn chiếc cầu vồng màu xanh kia.', grammar: 'Câu mệnh lệnh: Look at the rainbow.' },
    { word: 'listen', wordType: '(v)', meaning: 'lắng nghe', sentence: 'Listen to the happy music.', translation: 'Hãy lắng nghe bản nhạc vui tươi nhé.', grammar: 'Lắng nghe: Listen to music.' }
  ],
  c3s3: [
    { word: 'eye', wordType: '(n)', meaning: 'con mắt', sentence: 'Close your eyes and sleep.', translation: 'Hãy nhắm mắt lại và ngủ nào.', grammar: 'Bộ phận mặt: Close your eyes.' },
    { word: 'ear', wordType: '(n)', meaning: 'cái tai', sentence: 'Rabbits have two long ears.', translation: 'Thỏ có hai cái tai dài.', grammar: 'Đặc điểm: two long ears.' },
    { word: 'nose', wordType: '(n)', meaning: 'cái mũi', sentence: 'My dog has a wet black nose.', translation: 'Chú chó của em có cái mũi đen ươn ướt.', grammar: 'Miêu tả: A wet black nose.' },
    { word: 'mouth', wordType: '(n)', meaning: 'cái miệng', sentence: 'Open your mouth and smile.', translation: 'Hãy mở miệng ra và mỉm cười nhé.', grammar: 'Mệnh lệnh: Open your mouth.' },
    { word: 'tooth', wordType: '(n)', meaning: 'chiếc răng', sentence: 'Brush your teeth every day.', translation: 'Hãy đánh răng mỗi ngày nhé.', grammar: 'Vệ sinh răng miệng: Brush your teeth.' },
    { word: 'tongue', wordType: '(n)', meaning: 'cái lưỡi', sentence: 'Cats use tongue to clean fur.', translation: 'Mèo dùng lưỡi để liếm sạch lông.', grammar: 'Chức năng: Use tongue to clean.' },
    { word: 'hair', wordType: '(n)', meaning: 'mái tóc', sentence: 'She combs her brown hair.', translation: 'Bạn ấy chải mái tóc màu nâu.', grammar: 'Chăm sóc cá nhân: Comb your hair.' }
  ],
  c3s4: [
    { word: 'bone', wordType: '(n)', meaning: 'xương', sentence: 'Milk helps build strong bones.', translation: 'Sữa giúp xây dựng xương chắc khỏe.', grammar: 'Dinh dưỡng xương: Build strong bones.' },
    { word: 'muscle', wordType: '(n)', meaning: 'cơ bắp', sentence: 'Muscles help our body move.', translation: 'Cơ bắp giúp cơ thể chúng ta di chuyển.', grammar: 'Chức năng cơ bắp: Help the body move.' },
    { word: 'heart', wordType: '(n)', meaning: 'trái tim', sentence: 'The heart pumps blood all day.', translation: 'Trái tim bơm máu suốt cả ngày.', grammar: 'Tuần hoàn: Heart pumps blood.' },
    { word: 'strong', wordType: '(adj)', meaning: 'khỏe mạnh', sentence: 'Healthy food makes you strong.', translation: 'Thức ăn lành mạnh làm cho em khỏe mạnh.', grammar: 'Mẫu câu: Makes you strong.' },
    { word: 'jump', wordType: '(v)', meaning: 'nhảy lên', sentence: 'We can jump up and down.', translation: 'Chúng ta có thể nhảy lên nhảy xuống.', grammar: 'Vận động: Jump up and down.' },
    { word: 'bend', wordType: '(v)', meaning: 'gập lại, uốn cong', sentence: 'Bend your knees to touch feet.', translation: 'Hãy gập đầu gối để chạm vào chân nhé.', grammar: 'Vận động: Bend your knees.' },
    { word: 'run', wordType: '(v)', meaning: 'chạy bộ', sentence: 'Children run happily in yard.', translation: 'Các bạn nhỏ chạy chơi vui vẻ trong sân.', grammar: 'Vận động ngoài trời: Run in the yard.' }
  ],
  c3s5: [
    { word: 'clean', wordType: '(adj)', meaning: 'sạch sẽ', sentence: 'Always keep your hands clean.', translation: 'Luôn giữ cho đôi bàn tay sạch sẽ.', grammar: 'Giữ vệ sinh: Keep hands clean.' },
    { word: 'wash', wordType: '(v)', meaning: 'rửa, giặt', sentence: 'Wash hands before you eat.', translation: 'Hãy rửa tay trước khi ăn nhé.', grammar: 'Thói quen tốt: Wash hands before eating.' },
    { word: 'sleep', wordType: '(v)', meaning: 'ngủ', sentence: 'Children sleep eight hours a night.', translation: 'Trẻ em ngủ tám tiếng mỗi đêm.', grammar: 'Giấc ngủ: Sleep eight hours.' },
    { word: 'fruit', wordType: '(n)', meaning: 'hoa quả', sentence: 'Eat fresh fruit every day.', translation: 'Hãy ăn hoa quả tươi mỗi ngày nhé.', grammar: 'Ăn uống lành mạnh: Eat fresh fruit.' },
    { word: 'milk', wordType: '(n)', meaning: 'sữa', sentence: 'Drink a glass of warm milk.', translation: 'Hãy uống một ly sữa ấm nhé.', grammar: 'Uống sữa: Drink warm milk.' },
    { word: 'healthy', wordType: '(adj)', meaning: 'khỏe khoắn, lành mạnh', sentence: 'Apples are good and healthy.', translation: 'Táo ngon và rất lành mạnh.', grammar: 'Tính từ: Good and healthy.' },
    { word: 'fit', wordType: '(adj)', meaning: 'vừa vặn, cân đối', sentence: 'Running helps you stay fit.', translation: 'Chạy bộ giúp em giữ dáng khỏe khoắn.', grammar: 'Sức khỏe: Stay fit.' }
  ],

  // Chương 4: Đồ vật & Chất liệu quanh ta (Materials & States)
  c4s1: [
    { word: 'solid', wordType: '(n)', meaning: 'chất rắn', sentence: 'A wooden chair is a solid.', translation: 'Chiếc ghế gỗ là một chất rắn.', grammar: 'Thể rắn: A chair is a solid.' },
    { word: 'liquid', wordType: '(n)', meaning: 'chất lỏng', sentence: 'Orange juice is a cool liquid.', translation: 'Nước cam ép là một chất lỏng mát lành.', grammar: 'Thể lỏng: Juice is a liquid.' },
    { word: 'gas', wordType: '(n)', meaning: 'chất khí', sentence: 'Air in the room is a gas.', translation: 'Không khí trong phòng là chất khí.', grammar: 'Thể khí: Air is a gas.' },
    { word: 'ice', wordType: '(n)', meaning: 'nước đá, băng', sentence: 'Cold ice floats on water.', translation: 'Nước đá lạnh nổi trên mặt nước.', grammar: 'Đá nổi: Ice floats on water.' },
    { word: 'water', wordType: '(n)', meaning: 'nước', sentence: 'Water flows down the cup.', translation: 'Nước chảy xuống chiếc cốc.', grammar: 'Chảy: Water flows down.' },
    { word: 'steam', wordType: '(n)', meaning: 'hơi nước', sentence: 'Hot steam rises from the tea.', translation: 'Hơi nước nóng bốc lên từ tách trà.', grammar: 'Bay hơi: Steam rises.' },
    { word: 'air', wordType: '(n)', meaning: 'không khí', sentence: 'We blow air into the balloon.', translation: 'Chúng em thổi không khí vào quả bóng bay.', grammar: 'Thổi khí: Blow air into balloon.' }
  ],
  c4s2: [
    { word: 'hot', wordType: '(adj)', meaning: 'nóng', sentence: 'Hot soup is good in winter.', translation: 'Súp nóng rất ngon vào mùa đông.', grammar: 'Nhiệt độ cao: Hot soup is good.' },
    { word: 'cold', wordType: '(adj)', meaning: 'lạnh', sentence: 'Snow in the yard is very cold.', translation: 'Tuyết ngoài sân rất là lạnh.', grammar: 'Nhiệt độ thấp: Snow is cold.' },
    { word: 'warm', wordType: '(adj)', meaning: 'ấm áp', sentence: 'The sun feels nice and warm.', translation: 'Mặt trời cho cảm giác ấm áp dễ chịu.', grammar: 'Ấm: Nice and warm.' },
    { word: 'cool', wordType: '(adj)', meaning: 'mát mẻ', sentence: 'Drink a glass of cool water.', translation: 'Hãy uống một ly nước mát nhé.', grammar: 'Mát: Cool water.' },
    { word: 'melt', wordType: '(v)', meaning: 'tan chảy', sentence: 'Ice cream will melt in the sun.', translation: 'Kem sẽ tan chảy dưới ánh nắng.', grammar: 'Hiện tượng tan chảy: Melt in the sun.' },
    { word: 'freeze', wordType: '(v)', meaning: 'đóng băng', sentence: 'Water will freeze into cold ice.', translation: 'Nước sẽ đóng băng thành đá lạnh.', grammar: 'Đông đặc: Freeze into ice.' },
    { word: 'boil', wordType: '(v)', meaning: 'sôi lên', sentence: 'Hot water bubbles when it boils.', translation: 'Nước nóng sủi bọt khi sôi lên.', grammar: 'Nước sôi: Bubbles when it boils.' }
  ],
  c4s3: [
    { word: 'wood', wordType: '(n)', meaning: 'gỗ', sentence: 'This brown table is made of wood.', translation: 'Chiếc bàn nâu này được làm từ gỗ.', grammar: 'Vật liệu: Made of wood.' },
    { word: 'metal', wordType: '(n)', meaning: 'kim loại', sentence: 'Keys and spoons are made of metal.', translation: 'Chìa khóa và thìa làm bằng kim loại.', grammar: 'Kim loại: Made of metal.' },
    { word: 'plastic', wordType: '(n)', meaning: 'nhựa', sentence: 'Toy bricks are made of plastic.', translation: 'Những viên gạch đồ chơi làm bằng nhựa.', grammar: 'Nhựa: Made of plastic.' },
    { word: 'glass', wordType: '(n)', meaning: 'thủy tinh, kính', sentence: 'Windows are made of clear glass.', translation: 'Cửa sổ được làm bằng kính trong suốt.', grammar: 'Thủy tinh: Made of clear glass.' },
    { word: 'paper', wordType: '(n)', meaning: 'giấy', sentence: 'We write notes on white paper.', translation: 'Chúng em viết ghi chú lên giấy trắng.', grammar: 'Giấy: On white paper.' },
    { word: 'rock', wordType: '(n)', meaning: 'đá', sentence: 'The garden wall is made of rock.', translation: 'Bức tường vườn được làm từ đá.', grammar: 'Đá tự nhiên: Made of rock.' },
    { word: 'cloth', wordType: '(n)', meaning: 'vải', sentence: 'My shirt is made of soft cloth.', translation: 'Áo của em làm bằng vải mềm.', grammar: 'Chất liệu vải: Made of soft cloth.' }
  ],
  c4s4: [
    { word: 'hard', wordType: '(adj)', meaning: 'cứng', sentence: 'A heavy brick is hard.', translation: 'Viên gạch nặng thì cứng.', grammar: 'Tính chất cứng: A brick is hard.' },
    { word: 'soft', wordType: '(adj)', meaning: 'mềm mại', sentence: 'The small white kitten is soft.', translation: 'Chú mèo con màu trắng thì mềm mại.', grammar: 'Mềm: The kitten is soft.' },
    { word: 'heavy', wordType: '(adj)', meaning: 'nặng', sentence: 'A big stone is very heavy.', translation: 'Hòn đá to thì rất nặng.', grammar: 'Nặng: A stone is heavy.' },
    { word: 'light', wordType: '(adj)', meaning: 'nhẹ', sentence: 'A bird feather is very light.', translation: 'Chiếc lông chim thì rất nhẹ.', grammar: 'Trọng lượng nhẹ: Very light.' },
    { word: 'rough', wordType: '(adj)', meaning: 'thô ráp, sần sùi', sentence: 'Tree bark feels bumpy and rough.', translation: 'Vỏ cây sần sùi và thô ráp.', grammar: 'Bề mặt ráp: Feels rough.' },
    { word: 'smooth', wordType: '(adj)', meaning: 'trơn mịn, nhẵn', sentence: 'A glass cup feels very smooth.', translation: 'Chiếc cốc thủy tinh sờ vào rất nhẵn mịn.', grammar: 'Bề mặt nhẵn: Feels very smooth.' },
    { word: 'bendy', wordType: '(adj)', meaning: 'dẻo, dễ uốn cong', sentence: 'A rubber ruler is bendy.', translation: 'Cây thước cao su thì dẻo dễ uốn.', grammar: 'Uốn cong: A ruler is bendy.' }
  ],
  c4s5: [
    { word: 'float', wordType: '(v)', meaning: 'nổi trên nước', sentence: 'Wooden toys float on the water.', translation: 'Đồ chơi bằng gỗ nổi trên mặt nước.', grammar: 'Hiện tượng nổi: Float on water.' },
    { word: 'sink', wordType: '(v)', meaning: 'chìm xuống nước', sentence: 'Heavy coins sink in the pond.', translation: 'Những đồng xu nặng chìm trong ao.', grammar: 'Hiện tượng chìm: Sink in the pond.' },
    { word: 'boat', wordType: '(n)', meaning: 'chiếc thuyền', sentence: 'A toy boat sails in the pool.', translation: 'Chiếc thuyền đồ chơi trôi trong bể bơi.', grammar: 'Thuyền bơi: Boat sails in pool.' },
    { word: 'stone', wordType: '(n)', meaning: 'hòn đá cuội', sentence: 'The heavy stone sinks fast.', translation: 'Hòn đá nặng chìm xuống rất nhanh.', grammar: 'Chìm nhanh: Stone sinks fast.' },
    { word: 'drop', wordType: '(v)', meaning: 'làm rơi, thả xuống', sentence: 'Do not drop the glass cup.', translation: 'Đừng làm rơi chiếc cốc thủy tinh nhé.', grammar: 'Cảnh báo: Do not drop the cup.' },
    { word: 'wet', wordType: '(adj)', meaning: 'ướt', sentence: 'Rain makes the grass wet.', translation: 'Mưa làm cho bãi cỏ bị ướt.', grammar: 'Trạng thái ướt: Makes grass wet.' },
    { word: 'dry', wordType: '(adj)', meaning: 'khô ráo', sentence: 'Dry your hands with a towel.', translation: 'Hãy lau khô tay bằng chiếc khăn nhé.', grammar: 'Làm khô: Dry your hands.' }
  ],

  // Chương 5: Lực, Ánh sáng & Âm thanh (Forces, Light, Sound)
  c5s1: [
    { word: 'push', wordType: '(v)', meaning: 'đẩy', sentence: 'Push the door to open it.', translation: 'Hãy đẩy cửa để mở ra nhé.', grammar: 'Lực đẩy: Push the door to open.' },
    { word: 'pull', wordType: '(v)', meaning: 'kéo', sentence: 'Pull the box across the room.', translation: 'Hãy kéo chiếc hộp băng qua phòng.', grammar: 'Lực kéo: Pull the box.' },
    { word: 'move', wordType: '(v)', meaning: 'chuyển động, di chuyển', sentence: 'Wind makes green leaves move.', translation: 'Gió làm những chiếc lá xanh lay động.', grammar: 'Chuyển động: Leaves move.' },
    { word: 'stop', wordType: '(v)', meaning: 'dừng lại', sentence: 'Cars stop at the red light.', translation: 'Ô tô dừng lại khi gặp đèn đỏ.', grammar: 'Dừng xe: Stop at the red light.' },
    { word: 'fast', wordType: '(adv)', meaning: 'nhanh', sentence: 'Rabbits can run very fast.', translation: 'Những chú thỏ có thể chạy rất nhanh.', grammar: 'Trạng từ: Run very fast.' },
    { word: 'slow', wordType: '(adj)', meaning: 'chậm chạp', sentence: 'The green turtle is very slow.', translation: 'Chú rùa xanh thì rất chậm chạp.', grammar: 'Tính từ: Turtle is slow.' },
    { word: 'roll', wordType: '(v)', meaning: 'lăn', sentence: 'Kick the ball to make it roll.', translation: 'Đá quả bóng để làm nó lăn đi nhé.', grammar: 'Lăn bóng: Make it roll.' }
  ],
  c5s2: [
    { word: 'magnet', wordType: '(n)', meaning: 'thanh nam châm', sentence: 'The magnet sticks to the fridge.', translation: 'Thanh nam châm dính vào tủ lạnh.', grammar: 'Nam châm: Magnet sticks to fridge.' },
    { word: 'stick', wordType: '(v)', meaning: 'dính vào', sentence: 'Pins stick to the strong magnet.', translation: 'Những chiếc ghim dính vào thanh nam châm mạnh.', grammar: 'Hút dính: Stick to the magnet.' },
    { word: 'metal', wordType: '(n)', meaning: 'kim loại', sentence: 'Magnets pull things made of metal.', translation: 'Nam châm hút những thứ làm bằng kim loại.', grammar: 'Tính từ từ tính: Made of metal.' },
    { word: 'iron', wordType: '(n)', meaning: 'sắt', sentence: 'Nails are made of strong iron.', translation: 'Những chiếc đinh được làm từ sắt cứng chắc.', grammar: 'Kim loại sắt: Made of iron.' },
    { word: 'attract', wordType: '(v)', meaning: 'hút nhau', sentence: 'Different poles attract each other.', translation: 'Hai cực khác dấu hút nhau.', grammar: 'Từ cực hút: Poles attract each other.' },
    { word: 'push away', wordType: '(v)', meaning: 'đẩy nhau ra', matchWord: 'push away', sentence: 'Same poles will push away.', translation: 'Hai cực giống nhau sẽ đẩy nhau ra.', grammar: 'Từ cực đẩy: Same poles push away.' },
    { word: 'hold', wordType: '(v)', meaning: 'giữ chặt', sentence: 'A magnet can hold small paper.', translation: 'Thanh nam châm có thể giữ tờ giấy nhỏ.', grammar: 'Giữ giấy: Hold small paper.' }
  ],
  c5s3: [
    { word: 'light', wordType: '(n)', meaning: 'ánh sáng', sentence: 'Turn on the lamp for light.', translation: 'Hãy bật đèn để có ánh sáng nhé.', grammar: 'Ánh sáng: Lamp gives light.' },
    { word: 'dark', wordType: '(adj)', meaning: 'tối tăm', sentence: 'The room gets dark at night.', translation: 'Căn phòng trở nên tối vào ban đêm.', grammar: 'Tối: Gets dark at night.' },
    { word: 'sun', wordType: '(n)', meaning: 'mặt trời', sentence: 'The sun gives us bright light.', translation: 'Mặt trời đem lại cho chúng ta ánh sáng rực rỡ.', grammar: 'Nguồn sáng: Sun gives light.' },
    { word: 'lamp', wordType: '(n)', meaning: 'cái đèn', sentence: 'A desk lamp helps me read.', translation: 'Chiếc đèn bàn giúp em đọc sách.', grammar: 'Dụng cụ chiếu sáng: Lamp helps me read.' },
    { word: 'shadow', wordType: '(n)', meaning: 'cái bóng', sentence: 'Walking in sunshine makes a shadow.', translation: 'Đi dưới nắng sẽ tạo ra cái bóng.', grammar: 'Tạo bóng: Makes a shadow.' },
    { word: 'bright', wordType: '(adj)', meaning: 'sáng rực', sentence: 'The yellow star shines bright.', translation: 'Ngôi sao vàng tỏa sáng rực rỡ.', grammar: 'Tỏa sáng: Shines bright.' },
    { word: 'night', wordType: '(n)', meaning: 'ban đêm', sentence: 'We look at stars at night.', translation: 'Chúng em ngắm các ngôi sao vào ban đêm.', grammar: 'Thời gian: at night.' }
  ],
  c5s4: [
    { word: 'sound', wordType: '(n)', meaning: 'âm thanh', sentence: 'Bells make a cheerful sound.', translation: 'Những chiếc chuông phát ra âm thanh vui tươi.', grammar: 'Âm thanh: Make a cheerful sound.' },
    { word: 'hear', wordType: '(v)', meaning: 'nghe thấy', sentence: 'I can hear the soft rain.', translation: 'Em có thể nghe thấy tiếng mưa êm đềm.', grammar: 'Thính giác: Hear the soft rain.' },
    { word: 'loud', wordType: '(adj)', meaning: 'to, ầm ĩ', sentence: 'Thunder makes a loud noise.', translation: 'Sấm sét tạo ra tiếng động rất to.', grammar: 'Âm lượng to: A loud noise.' },
    { word: 'quiet', wordType: '(adj)', meaning: 'yên lặng, nhỏ nhẹ', sentence: 'Please be quiet in the room.', translation: 'Xin hãy giữ yên lặng trong phòng nhé.', grammar: 'Giữ yên lặng: Please be quiet.' },
    { word: 'music', wordType: '(n)', meaning: 'âm nhạc', sentence: 'We listen to happy music.', translation: 'Chúng em nghe những bản nhạc vui tươi.', grammar: 'Âm nhạc: Listen to music.' },
    { word: 'sing', wordType: '(v)', meaning: 'hát', sentence: 'Birds sing sweet songs in trees.', translation: 'Chim hót những bài ca ngọt ngào trên cây.', grammar: 'Tiếng chim hót: Birds sing songs.' },
    { word: 'noise', wordType: '(n)', meaning: 'tiếng ồn', sentence: 'Cars on the road make noise.', translation: 'Ô tô trên đường tạo ra tiếng ồn.', grammar: 'Tiếng ồn: Cars make noise.' }
  ],
  c5s5: [
    { word: 'battery', wordType: '(n)', meaning: 'cục pin', sentence: 'A toy car needs a battery.', translation: 'Chiếc ô tô đồ chơi cần một cục pin.', grammar: 'Nguồn pin: Needs a battery.' },
    { word: 'bulb', wordType: '(n)', meaning: 'bóng đèn', sentence: 'The little bulb gives off light.', translation: 'Bóng đèn nhỏ phát ra ánh sáng.', grammar: 'Phát sáng: Bulb gives off light.' },
    { word: 'wire', wordType: '(n)', meaning: 'dây điện', sentence: 'Electricity runs through wire.', translation: 'Dòng điện chạy qua dây dẫn.', grammar: 'Dây dẫn: Runs through wire.' },
    { word: 'switch', wordType: '(n)', meaning: 'công tắc', sentence: 'Press the switch to turn lights on.', translation: 'Bấm công tắc để mở đèn lên nhé.', grammar: 'Công tắc: Press the switch.' },
    { word: 'on', wordType: '(adv)', meaning: 'bật lên, mở', sentence: 'Turn the desk lamp on.', translation: 'Hãy bật chiếc đèn bàn lên nhé.', grammar: 'Bật đèn: Turn on.' },
    { word: 'off', wordType: '(adv)', meaning: 'tắt đi', sentence: 'Turn the lights off when sleeping.', translation: 'Hãy tắt đèn khi đi ngủ nhé.', grammar: 'Tắt đèn: Turn off.' },
    { word: 'light up', wordType: '(v)', meaning: 'thắp sáng, sáng lên', matchWord: 'light up', sentence: 'Flashlights light up the room.', translation: 'Đèn pin thắp sáng cả căn phòng.', grammar: 'Cụm động từ: Light up the room.' }
  ],

  // Chương 6: Bầu trời, Thời tiết & Trái đất (Earth & Space)
  c6s1: [
    { word: 'sun', wordType: '(n)', meaning: 'mặt trời', sentence: 'The morning sun is very bright.', translation: 'Mặt trời buổi sớm rất rực rỡ.', grammar: 'Mặt trời mọc: Morning sun is bright.' },
    { word: 'moon', wordType: '(n)', meaning: 'mặt trăng', sentence: 'The round moon shines at night.', translation: 'Mặt trăng tròn tỏa sáng vào ban đêm.', grammar: 'Mặt trăng đêm: Moon shines at night.' },
    { word: 'star', wordType: '(n)', meaning: 'ngôi sao', sentence: 'Little stars twinkle in the sky.', translation: 'Những ngôi sao nhỏ lấp lánh trên bầu trời.', grammar: 'Sao trời: Stars twinkle in the sky.' },
    { word: 'sky', wordType: '(n)', meaning: 'bầu trời', sentence: 'The sky is clear and blue.', translation: 'Bầu trời trong xanh và không một gợn mây.', grammar: 'Bầu trời xanh: The sky is blue.' },
    { word: 'earth', wordType: '(n)', meaning: 'trái đất', sentence: 'We live together on Earth.', translation: 'Chúng ta cùng sống trên Trái đất.', grammar: 'Hành tinh: Live on Earth.' },
    { word: 'day', wordType: '(n)', meaning: 'ban ngày', sentence: 'The sun shines in the day.', translation: 'Mặt trời chiếu sáng vào ban ngày.', grammar: 'Ban ngày: In the day.' },
    { word: 'night', wordType: '(n)', meaning: 'ban đêm', sentence: 'We go to sleep at night.', translation: 'Chúng em đi ngủ vào ban đêm.', grammar: 'Ban đêm: at night.' }
  ],
  c6s2: [
    { word: 'sunny', wordType: '(adj)', meaning: 'nhiều nắng', sentence: 'Today is a warm sunny day.', translation: 'Hôm nay là một ngày nhiều nắng ấm áp.', grammar: 'Thời tiết nắng: A sunny day.' },
    { word: 'rainy', wordType: '(adj)', meaning: 'có mưa', sentence: 'Take an umbrella on rainy days.', translation: 'Hãy mang theo ô vào những ngày mưa nhé.', grammar: 'Thời tiết mưa: on rainy days.' },
    { word: 'windy', wordType: '(adj)', meaning: 'có gió, lộng gió', sentence: 'We fly kites on a windy day.', translation: 'Chúng em thả diều vào một ngày lộng gió.', grammar: 'Thời tiết có gió: on a windy day.' },
    { word: 'cloudy', wordType: '(adj)', meaning: 'nhiều mây', sentence: 'The grey sky is very cloudy.', translation: 'Bầu trời màu xám có rất nhiều mây.', grammar: 'Nhiều mây: Sky is cloudy.' },
    { word: 'hot', wordType: '(adj)', meaning: 'nóng bức', sentence: 'Summer days are very hot.', translation: 'Những ngày mùa hè rất là nóng bức.', grammar: 'Mùa hè nóng: Days are hot.' },
    { word: 'cold', wordType: '(adj)', meaning: 'lạnh giá', sentence: 'Winter mornings feel very cold.', translation: 'Những buổi sáng mùa đông cho cảm giác rất lạnh.', grammar: 'Mùa đông lạnh: Mornings feel cold.' },
    { word: 'weather', wordType: '(n)', meaning: 'thời tiết', sentence: 'What is the weather like today?', translation: 'Thời tiết hôm nay như thế nào?', grammar: 'Câu hỏi thời tiết: What is the weather like?' }
  ],
  c6s3: [
    { word: 'rain', wordType: '(n)', meaning: 'cơn mưa', sentence: 'Rain falls from the grey clouds.', translation: 'Mưa rơi xuống từ những đám mây xám.', grammar: 'Mưa rơi: Rain falls from clouds.' },
    { word: 'cloud', wordType: '(n)', meaning: 'đám mây', sentence: 'White fluffy clouds float in sky.', translation: 'Những đám mây trắng xốp trôi trên bầu trời.', grammar: 'Mây trôi: Clouds float in sky.' },
    { word: 'river', wordType: '(n)', meaning: 'dòng sông', sentence: 'Fresh water flows in the river.', translation: 'Nước ngọt chảy trong dòng sông.', grammar: 'Nước sông: Flows in the river.' },
    { word: 'sea', wordType: '(n)', meaning: 'biển', sentence: 'Fish swim in the salty sea.', translation: 'Cá bơi trong làn nước biển mặn.', grammar: 'Biển mặn: In the salty sea.' },
    { word: 'puddle', wordType: '(n)', meaning: 'vũng nước mưa', sentence: 'Boots splash in the rain puddle.', translation: 'Những chiếc ủng lội bì bõm trong vũng nước mưa.', grammar: 'Vũng nước: In the rain puddle.' },
    { word: 'wet', wordType: '(adj)', meaning: 'ướt', sentence: 'Do not play in the wet grass.', translation: 'Đừng chơi trên bãi cỏ ướt nhé.', grammar: 'Cỏ ướt: In the wet grass.' },
    { word: 'drop', wordType: '(n)', meaning: 'giọt nước', sentence: 'Raindrops tap on the window glass.', translation: 'Những giọt mưa gõ lách tách trên cửa kính.', grammar: 'Giọt mưa: Raindrops tap on glass.' }
  ],
  c6s4: [
    { word: 'rock', wordType: '(n)', meaning: 'tảng đá', sentence: 'A grey rock sits in the garden.', translation: 'Một tảng đá màu xám nằm trong vườn.', grammar: 'Đá: A rock in the garden.' },
    { word: 'stone', wordType: '(n)', meaning: 'hòn đá cuội', sentence: 'Smooth stones sit by the stream.', translation: 'Những hòn đá cuội nhẵn nhụi nằm bên bờ suối.', grammar: 'Đá cuội: Smooth stones.' },
    { word: 'sand', wordType: '(n)', meaning: 'cát', sentence: 'Children build castles with sand.', translation: 'Các bạn nhỏ xây lâu đài bằng cát.', grammar: 'Cát biển: Build castles with sand.' },
    { word: 'soil', wordType: '(n)', meaning: 'đất mùn', sentence: 'Worms live in dark damp soil.', translation: 'Những chú giun sống trong đất ẩm màu tối.', grammar: 'Đất: Live in damp soil.' },
    { word: 'mud', wordType: '(n)', meaning: 'bùn đất', sentence: 'Pigs like to roll in cool mud.', translation: 'Những chú lợn thích lăn trong bùn mát.', grammar: 'Bùn mát: In cool mud.' },
    { word: 'hill', wordType: '(n)', meaning: 'ngọn đồi', sentence: 'We run up the green hill.', translation: 'Chúng em chạy lên ngọn đồi xanh.', grammar: 'Địa hình đồi: Run up the hill.' },
    { word: 'beach', wordType: '(n)', meaning: 'bãi biển', sentence: 'We pick up shells on the beach.', translation: 'Chúng em nhặt vỏ sò trên bãi biển.', grammar: 'Bãi biển: on the beach.' }
  ],
  c6s5: [
    { word: 'clean', wordType: '(adj)', meaning: 'sạch sẽ', sentence: 'Keep our schoolyard tidy and clean.', translation: 'Hãy giữ cho sân trường gọn gàng và sạch sẽ nhé.', grammar: 'Giữ sạch: Tidy and clean.' },
    { word: 'trash', wordType: '(n)', meaning: 'rác rưởi', sentence: 'Put trash into the trash bin.', translation: 'Hãy bỏ rác vào thùng rác nhé.', grammar: 'Vứt rác: Put trash into bin.' },
    { word: 'tree', wordType: '(n)', meaning: 'cây xanh', sentence: 'Planting a tree helps the Earth.', translation: 'Trồng một cái cây giúp ích cho Trái đất.', grammar: 'Trồng cây: Planting a tree.' },
    { word: 'plant', wordType: '(v)', meaning: 'gieo trồng', sentence: 'We plant small flowers at home.', translation: 'Chúng em trồng những bông hoa nhỏ ở nhà.', grammar: 'Trồng hoa: Plant flowers.' },
    { word: 'recycle', wordType: '(v)', meaning: 'tái chế', sentence: 'Recycle old paper and bottles.', translation: 'Hãy tái chế giấy cũ và chai lọ nhé.', grammar: 'Tái chế: Recycle paper and bottles.' },
    { word: 'save', wordType: '(v)', meaning: 'tiết kiệm, gìn giữ', sentence: 'Turn off the tap to save water.', translation: 'Hãy khóa vòi nước để tiết kiệm nước nhé.', grammar: 'Tiết kiệm nước: Save water.' },
    { word: 'help', wordType: '(v)', meaning: 'giúp đỡ, chung tay', sentence: 'We help keep the Earth green.', translation: 'Chúng em chung tay giữ cho Trái đất luôn xanh.', grammar: 'Bảo vệ hành tinh: Help keep the Earth green.' }
  ]
};

// --- HÀM TẠO 1 CÂU HỎI ĐƠN LẺ VỚI LOGIC LINH HOẠT ---
function createSingleQuestion(vOrig, type, vocabBank, fullPool = null) {
  let v = { ...vOrig };
  const pool = (fullPool && fullPool.length >= 3) ? fullPool : vocabBank;
  
  if (v.template && v.op) {
    let a, b, c;
    if (v.op === '+') {
      a = Math.floor(Math.random() * 9) + 1;
      b = Math.floor(Math.random() * 9) + 1;
      c = a + b;
    } else if (v.op === '-') {
      a = Math.floor(Math.random() * 10) + 10;
      b = Math.floor(Math.random() * (a - 2)) + 1;
      c = a - b;
    } else if (v.op === '*') {
      a = Math.floor(Math.random() * 5) + 2;
      b = Math.floor(Math.random() * 5) + 2;
      c = a * b;
    } else if (v.op === '/') {
      b = Math.floor(Math.random() * 5) + 2;
      c = Math.floor(Math.random() * 5) + 2;
      a = b * c;
    } else { a = 2; b = 3; c = 5; }
    
    v.sentence = v.template.replace('{A}', a).replace('{B}', b).replace('{C}', c);
    v.translation = v.trans.replace('{A}', a).replace('{B}', b).replace('{C}', c);
    v.opA = a;
    v.opB = b;
    v.opC = c;
    
    if (type === 'math_calc') {
      let qText = v.template.replace('{A}', a).replace('{B}', b).replace('{C}', '___');
      let options = [c.toString(), (c + 10).toString(), Math.max(1, c - 2).toString()].sort(() => Math.random() - 0.5);
      return { type: 'fill', question: qText, answer: c.toString(), options: options, vocab: v };
    }
  } else {
    if (type === 'math_calc') type = 'fill'; 
  }
  
  if (type === 'vocab_match') {
    // Lọc bỏ triệt để các đáp án trùng lặp hoặc na ná nhau (vd: không để "cộng" cạnh "cộng vào", "trừ" cạnh "trừ đi")
    const rootWords = ['cộng', 'trừ', 'nhân', 'chia', 'tổng', 'hiệu', 'tích', 'thương', 'bằng', 'lớn hơn', 'nhỏ hơn', 'phân số', 'thập phân'];
    const currentRoots = rootWords.filter(rw => v.meaning.toLowerCase().includes(rw));

    let candidatePool = pool.filter(x => {
      if (x.word === v.word) return false;
      if (x.meaning === v.meaning) return false;
      
      let xMeaningLower = x.meaning.toLowerCase();
      // Nếu từ đối thủ có chung gốc nghĩa thì loại bỏ
      for (let rw of currentRoots) {
        if (xMeaningLower.includes(rw)) return false;
      }
      return true;
    });

    let wrongAnswers = candidatePool
      .sort(() => Math.random() - 0.5)
      .slice(0, 2)
      .map(x => x.meaning);

    if (wrongAnswers.length < 2) {
      const defaultDistractors = ['trừ đi, bớt đi', 'nhân lên', 'chia ra', 'bằng nhau (=)', 'hình vuông', 'phân số'];
      const filteredDefaults = defaultDistractors.filter(d => !currentRoots.some(rw => d.includes(rw)));
      wrongAnswers = filteredDefaults.slice(0, 2);
    }

    return { 
      type, 
      word: v.word, 
      wordType: v.wordType, 
      meaning: v.meaning, 
      wrong: wrongAnswers,
      vocab: v
    };
  } 
  else if (type === 'fill') {
    let matchStr = v.matchWord || v.word;
    let escapedMatch = matchStr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    let qText = v.sentence.replace(new RegExp("\\b" + escapedMatch + "\\b", 'i'), '___');
    if (qText === v.sentence) {
      let escapedWord = v.word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      qText = v.sentence.replace(new RegExp(escapedWord, 'i'), '___');
    }
    if (qText === v.sentence) {
      qText = v.sentence + " (Chọn từ đúng điền vào câu)";
    }
    
    // Ưu tiên các từ cùng từ loại nhưng khác từ
    let wrongs = pool
      .filter(x => x.word !== v.word && (x.wordType === v.wordType || !v.wordType))
      .map(x => x.word + " " + x.wordType)
      .sort(() => Math.random() - 0.5)
      .slice(0, 2);

    if (wrongs.length < 2) {
      wrongs = pool
        .filter(x => x.word !== v.word)
        .map(x => x.word + " " + x.wordType)
        .sort(() => Math.random() - 0.5)
        .slice(0, 2);
    }

    let options = [v.word + " " + v.wordType, ...wrongs].sort(() => Math.random() - 0.5);
    return { type, question: qText, answer: v.word, options, vocab: v };
  } 
  else if (type === 'arrange') {
    let words = v.sentence.split(' ');
    let validAnswers = [v.sentence];

    // Xử lý tính chất giao hoán (Commutative Property) của phép cộng (+) và phép nhân (*)
    // Ví dụ: "1 plus 6 equals 7." <-> "6 plus 1 equals 7."
    if (v.template && (v.op === '+' || v.op === '*')) {
      let altA = v.opB !== undefined ? v.opB : '{B}';
      let altB = v.opA !== undefined ? v.opA : '{A}';
      let altC = v.opC !== undefined ? v.opC : '{C}';
      let altSentence = v.template.replace('{A}', altA).replace('{B}', altB).replace('{C}', altC);
      if (altSentence !== v.sentence && !validAnswers.includes(altSentence)) {
        validAnswers.push(altSentence);
      }
    }
    return { type, words: words, correct: v.sentence, validAnswers, vocab: v };
  } 
  else if (type === 'speak') {
    return { type, text: v.sentence, hint: 'Nghĩa tiếng Việt: ' + v.translation, vocab: v };
  } 
  else if (type === 'qa_speak') {
    return { 
      type, 
      question: 'Làm sao để nói câu: "' + v.translation + '" trong tiếng Anh?', 
      answer: v.sentence, 
      hint: 'Gợi ý: ' + v.sentence, 
      vocab: v 
    };
  }
}

// --- ENGINE TẠO CÂU HỎI TỰ ĐỘNG CHUẨN SƯ PHẠM TIỂU HỌC ---
export function generateQuestions(vocabBank, numQuestions = 20, fullPool = null) {
  let questions = [];
  
  // 1. Nhóm từ vựng (7 câu)
  const vocabTypes = ['vocab_match', 'fill'];
  for (let i = 0; i < 7; i++) {
    let v = vocabBank[i % vocabBank.length];
    let type = vocabTypes[i % vocabTypes.length];
    let q = createSingleQuestion(v, type, vocabBank, fullPool);
    if (q) questions.push(q);
  }
  
  // 2. Nhóm ngữ pháp & cấu trúc câu (7 câu)
  const grammarTypes = ['arrange', 'fill', 'math_calc'];
  for (let i = 0; i < 7; i++) {
    let v = vocabBank[i % vocabBank.length];
    let type = grammarTypes[i % grammarTypes.length];
    let q = createSingleQuestion(v, type, vocabBank, fullPool);
    if (q) questions.push(q);
  }
  
  // 3. Nhóm phát âm & luyện nói (6 câu)
  const speechTypes = ['speak', 'qa_speak'];
  for (let i = 0; i < 6; i++) {
    let v = vocabBank[i % vocabBank.length];
    let type = speechTypes[i % speechTypes.length];
    let q = createSingleQuestion(v, type, vocabBank, fullPool);
    if (q) questions.push(q);
  }
  
  // Nếu tổng câu chưa đủ numQuestions thì bổ sung thêm
  while (questions.length < numQuestions) {
    let v = vocabBank[Math.floor(Math.random() * vocabBank.length)];
    let types = ['vocab_match', 'fill', 'arrange', 'speak', 'qa_speak', 'math_calc'];
    let type = types[Math.floor(Math.random() * types.length)];
    let q = createSingleQuestion(v, type, vocabBank, fullPool);
    if (q) questions.push(q);
  }
  
  // Trộn đều để trải nghiệm người học xen kẽ, thú vị
  return questions.sort(() => Math.random() - 0.5);
}

// --- HÀM TẠO LỘ TRÌNH CHUẨN: CHƯƠNG > MÀN > ẢI (4 Ải mỗi Màn = 80 câu) ---
function generateCurriculum() {
  const subjects = { math: [], science: [] };
  
  const mathChapterTitles = [
    "Số học & Phép tính cơ bản",
    "Phân số, Thập phân & Tỉ số",
    "Hình học phẳng & Không gian",
    "Đo lường, Thời gian & Tiền tệ",
    "Xử lý dữ liệu & Xác suất",
    "Toán đố, Quy luật & Lập luận"
  ];
  
  const scienceChapterTitles = [
    "Thực vật & Thế giới sinh vật",
    "Động vật, Môi trường & Hệ sinh thái",
    "Cơ thể người & Sức khỏe",
    "Vật chất & Tính chất vật liệu",
    "Lực, Năng lượng, Ánh sáng & Âm thanh",
    "Trái đất, Vũ trụ & Môi trường"
  ];

  for (let c = 1; c <= 6; c++) {
    const mathStages = [];
    const scienceStages = [];

    for (let s = 1; s <= 5; s++) {
      const mathLevels = [];
      const scienceLevels = [];
      const stageKey = "c" + c + "s" + s;
      
      let mathVocabBank = mathVocab[stageKey] || [];
      let sciVocabBank = scienceVocab[stageKey] || [];
      
      let mathStageTitle = mathStagesInfo[stageKey] ? mathStagesInfo[stageKey].title : "Màn " + s;
      let sciStageTitle = scienceStagesInfo[stageKey] ? scienceStagesInfo[stageKey].title : "Màn " + s;
      
      // ĐẶC BIỆT: MÀN 1 MÔN TOÁN (c1s1)
      // 4 Ải hoàn thành trọn vẹn 4 phép toán cơ bản: Cộng, Trừ, Nhân, Chia!
      let mBankForLevels = [mathVocabBank, mathVocabBank, mathVocabBank, mathVocabBank];
      if (c === 1 && s === 1) {
        const addBank = mathVocabBank.filter(x => ['add', 'plus', 'sum', 'equal'].includes(x.word));
        const subBank = mathVocabBank.filter(x => ['subtract', 'minus', 'difference', 'equal'].includes(x.word));
        const mulBank = mathVocabBank.filter(x => ['multiply', 'times', 'product', 'equal'].includes(x.word));
        const divBank = mathVocabBank.filter(x => ['divide', 'quotient', 'equal'].includes(x.word));
        mBankForLevels = [
          addBank.length ? addBank : mathVocabBank,
          subBank.length ? subBank : mathVocabBank,
          mulBank.length ? mulBank : mathVocabBank,
          divBank.length ? divBank : mathVocabBank
        ];
      }

      // Mỗi Màn có đúng 4 Ải (Level 1 -> 4)
      for (let l = 1; l <= 4; l++) {
        let mBank = mBankForLevels[l-1] || mathVocabBank;
        let mQs = generateQuestions(mBank, 20, mathVocabBank);
        let sQs = generateQuestions(sciVocabBank, 20, sciVocabBank);
        
        mathLevels.push({ id: l, title: "Ải " + l, questions: mQs });
        scienceLevels.push({ id: l, title: "Ải " + l, questions: sQs });
      }
      
      mathStages.push({ id: s, title: mathStageTitle, levels: mathLevels, stageKey: stageKey });
      scienceStages.push({ id: s, title: sciStageTitle, levels: scienceLevels, stageKey: stageKey });
    }
    
    subjects.math.push({ id: c, title: "Chương " + c + ": " + mathChapterTitles[c-1], stages: mathStages });
    subjects.science.push({ id: c, title: "Chương " + c + ": " + scienceChapterTitles[c-1], stages: scienceStages });
  }
  
  return { math: { chapters: subjects.math }, science: { chapters: subjects.science } };
}

export const curriculum = generateCurriculum();

// --- HÀM TẠO 30 CÂU HỎI CHO BÀI KIỂM TRA TỔNG HỢP CỦA MÀN ---
// 29 câu tổng hợp từ cả 4 ải (từ vựng, ngữ pháp, sắp xếp câu, luyện nói) + Câu 30: Chặng về đích phản xạ từ vựng 15s!
export function generateStageExamQuestions(cId, sId, subject) {
  const stageKey = "c" + cId + "s" + sId;
  let bank = (subject === 'math' ? mathVocab : scienceVocab)[stageKey] || [];
  
  // 29 câu tổng hợp bao quát kiến thức cả 4 ải của Màn
  let examQuestions = generateQuestions(bank, 29, bank);
  
  if (examQuestions.length > 29) {
    examQuestions = examQuestions.slice(0, 29);
  }
  
  // Chuẩn bị 7 cặp từ vựng tiêu biểu cho câu 30 chặng về đích
  let pairs = bank.slice(0, 7).map(item => ({
    word: item.word,
    meaning: item.meaning
  }));
  if (pairs.length < 7 && bank.length > 0) {
    pairs = bank.map(item => ({ word: item.word, meaning: item.meaning }));
  }

  // Câu 30: Chặng về đích Thử thách phản xạ từ vựng 15s
  examQuestions.push({
    type: 'speed_match_final',
    cId: cId,
    sId: sId,
    subject: subject,
    pairs: pairs,
    title: '⚡ Thử thách phản xạ từ vựng 15s (Chặng về đích)'
  });
  
  return examQuestions;
}

