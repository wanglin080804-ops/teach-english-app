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
  c1s1: { stage: 1, title: 'Màn 1: Các bộ phận thực vật (Plant Anatomy)' },
  c1s2: { stage: 2, title: 'Màn 2: Quang hợp & Nhu cầu cây (Plant Growth)' },
  c1s3: { stage: 3, title: 'Màn 3: Thụ phấn & Phát tán hạt (Pollination)' },
  c1s4: { stage: 4, title: 'Màn 4: Phân loại sinh vật (Living Things)' },
  c1s5: { stage: 5, title: 'Màn 5: Vòng đời sinh vật (Life Cycles)' },
  c2s1: { stage: 1, title: 'Màn 1: Động vật có xương sống (Vertebrates)' },
  c2s2: { stage: 2, title: 'Màn 2: Chế độ ăn & Chuỗi thức ăn (Food Chains)' },
  c2s3: { stage: 3, title: 'Màn 3: Lưới thức ăn & Hệ sinh thái (Ecosystems)' },
  c2s4: { stage: 4, title: 'Màn 4: Môi trường sống (Habitats)' },
  c2s5: { stage: 5, title: 'Màn 5: Sự thích nghi & Sinh tồn (Adaptation)' },
  c3s1: { stage: 1, title: 'Màn 1: Năm giác quan (The Five Senses)' },
  c3s2: { stage: 2, title: 'Màn 2: Hệ xương & Cơ bắp (Skeletal System)' },
  c3s3: { stage: 3, title: 'Màn 3: Hệ tuần hoàn & Hô hấp (Circulation)' },
  c3s4: { stage: 4, title: 'Màn 4: Hệ tiêu hóa (Digestive System)' },
  c3s5: { stage: 5, title: 'Màn 5: Dinh dưỡng & Vệ sinh (Health & Nutrition)' },
  c4s1: { stage: 1, title: 'Màn 1: Ba trạng thái vật chất (States of Matter)' },
  c4s2: { stage: 2, title: 'Màn 2: Sự chuyển thể của vật chất (Changes of State)' },
  c4s3: { stage: 3, title: 'Màn 3: Tính chất vật liệu (Material Properties)' },
  c4s4: { stage: 4, title: 'Màn 4: Dung dịch & Sự hòa tan (Dissolving)' },
  c4s5: { stage: 5, title: 'Màn 5: Biến đổi vật lý & Hóa học (Changes)' },
  c5s1: { stage: 1, title: 'Màn 1: Lực & Sự chuyển động (Forces & Motion)' },
  c5s2: { stage: 2, title: 'Màn 2: Nam châm & Từ tính (Magnets)' },
  c5s3: { stage: 3, title: 'Màn 3: Ánh sáng & Bóng râm (Light & Shadows)' },
  c5s4: { stage: 4, title: 'Màn 4: Âm thanh & Độ rung (Sound & Vibrations)' },
  c5s5: { stage: 5, title: 'Màn 5: Điện & Mạch điện (Electricity)' },
  c6s1: { stage: 1, title: 'Màn 1: Hệ mặt trời & Các hành tinh (Solar System)' },
  c6s2: { stage: 2, title: 'Màn 2: Thời tiết & Chu trình nước (Water Cycle)' },
  c6s3: { stage: 3, title: 'Màn 3: Đất đá & Khoáng sản (Rocks & Soil)' },
  c6s4: { stage: 4, title: 'Màn 4: Bảo vệ môi trường & Quy tắc 3R (Conservation)' },
  c6s5: { stage: 5, title: 'Màn 5: Phương pháp nghiên cứu khoa học (Inquiry)' }
};

// ==========================================
// NGÂN HÀNG TỪ VỰNG TOÁN HỌC (210 TỪ)
// ==========================================
export const mathVocab = {
  // Chương 1: Số học & Phép tính cơ bản
  // Màn 1: Hoàn thành ĐỦ CẢ 4 PHÉP TÍNH: Cộng, Trừ, Nhân, Chia
  c1s1: [
    { word: 'add', wordType: '(v)', meaning: 'cộng vào', op: '+', template: 'If you add {A} to {B}, you get {C}.', trans: 'Nếu bạn cộng {A} vào {B}, bạn được {C}.', grammar: 'Cấu trúc điều kiện: If you add A to B, you get C.' },
    { word: 'plus', wordType: '(prep)', meaning: 'cộng', op: '+', template: '{A} plus {B} is {C}.', trans: '{A} cộng {B} là {C}.', grammar: 'Mẫu câu tính toán: A plus B is/equals C.' },
    { word: 'sum', wordType: '(n)', meaning: 'tổng số', op: '+', template: 'The sum of {A} and {B} is {C}.', trans: 'Tổng của {A} và {B} là {C}.', grammar: 'Cấu trúc danh từ: The sum of A and B is C.' },
    { word: 'subtract', wordType: '(v)', meaning: 'trừ đi', op: '-', template: 'If you subtract {B} from {A}, you get {C}.', trans: 'Nếu bạn trừ {B} khỏi {A}, bạn được {C}.', grammar: 'Cấu trúc giới từ: Subtract A from B (Trừ A khỏi B).' },
    { word: 'minus', wordType: '(prep)', meaning: 'trừ', op: '-', template: '{A} minus {B} is {C}.', trans: '{A} trừ {B} là {C}.', grammar: 'Mẫu câu cơ bản: A minus B is C.' },
    { word: 'difference', wordType: '(n)', meaning: 'hiệu số', op: '-', template: 'The difference between {A} and {B} is {C}.', trans: 'Hiệu số giữa {A} và {B} là {C}.', grammar: 'Cấu trúc: The difference between A and B is C.' },
    { word: 'multiply', wordType: '(v)', meaning: 'nhân', op: '*', template: 'If you multiply {A} by {B}, you get {C}.', trans: 'Nếu bạn nhân {A} với {B}, bạn được {C}.', grammar: 'Cấu trúc: Multiply A by B to get C.' },
    { word: 'times', wordType: '(prep)', meaning: 'lần, nhân', op: '*', template: '{A} times {B} is {C}.', trans: '{A} nhân {B} là {C}.', grammar: 'Mẫu câu: A times B is C.' },
    { word: 'product', wordType: '(n)', meaning: 'tích số', op: '*', template: 'The product of {A} and {B} is {C}.', trans: 'Tích số của {A} và {B} là {C}.', grammar: 'Cấu trúc: The product of A and B is C.' },
    { word: 'divide', wordType: '(v)', meaning: 'chia', op: '/', template: 'If you divide {A} by {B}, you get {C}.', trans: 'Nếu bạn chia {A} cho {B}, bạn được {C}.', grammar: 'Cấu trúc: Divide A by B to get C.' },
    { word: 'quotient', wordType: '(n)', meaning: 'thương số', op: '/', template: 'The quotient of {A} and {B} is {C}.', trans: 'Thương số của {A} và {B} là {C}.', grammar: 'Cấu trúc: The quotient of A and B is C.' },
    { word: 'equal', wordType: '(v)', meaning: 'bằng', matchWord: 'equals', op: '+', template: '{A} plus {B} equals {C}.', trans: '{A} cộng {B} bằng {C}.', grammar: 'Mẫu câu vị ngữ: A plus B equals C.' }
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
  // Chương 1: Thực vật & Thế giới sinh vật
  c1s1: [
    { word: 'root', wordType: '(n)', meaning: 'rễ cây', sentence: 'Roots anchor the plant firmly in the soil.', translation: 'Rễ cây giữ chặt cây ở trong lòng đất.', grammar: 'Thì hiện tại đơn chỉ chức năng: Roots anchor the plant.' },
    { word: 'stem', wordType: '(n)', meaning: 'thân cây', sentence: 'The stem transports water upward to the leaves.', translation: 'Thân cây vận chuyển nước hướng lên các tán lá.', grammar: 'Chức năng cơ quan: The stem transports [substance] to [part].' },
    { word: 'leaf', wordType: '(n)', meaning: 'lá cây', sentence: 'The green leaf makes food using sunlight.', translation: 'Chiếc lá xanh tạo ra thức ăn nhờ sử dụng ánh nắng mặt trời.', grammar: 'Mệnh đề hiện tại: The leaf makes food using sunlight.' },
    { word: 'flower', wordType: '(n)', meaning: 'bông hoa', sentence: 'Bright flowers attract flying insects like bees.', translation: 'Những bông hoa rực rỡ thu hút các loài côn trùng bay như ong.', grammar: 'Thích nghi sinh thái: Flowers attract [animals].' },
    { word: 'seed', wordType: '(n)', meaning: 'hạt giống', sentence: 'A seed needs moisture and warmth to sprout.', translation: 'Một hạt giống cần độ ẩm và hơi ấm để nảy mầm.', grammar: 'Điều kiện nảy mầm: A seed needs A and B to [verb].' },
    { word: 'fruit', wordType: '(n)', meaning: 'quả, trái cây', sentence: 'The juicy fruit protects the developing seeds inside.', translation: 'Trái cây mọng nước bảo vệ những hạt giống đang phát triển bên trong.', grammar: 'Chức năng: Fruit protects seeds inside.' },
    { word: 'petal', wordType: '(n)', meaning: 'cánh hoa', sentence: 'Colorful petals guide butterflies to sweet nectar.', translation: 'Các cánh hoa sặc sỡ dẫn lối bướm đến với mật hoa ngọt ngào.', grammar: 'Cấu tạo sinh học: Petals guide [insects] to [nectar].' }
  ],
  c1s2: [
    { word: 'germinate', wordType: '(v)', meaning: 'nảy mầm', sentence: 'Bean seeds germinate quickly in moist soil.', translation: 'Hạt đậu nảy mầm nhanh chóng trong đất ẩm.', grammar: 'Hiện tượng sinh học: Seeds germinate in [conditions].' },
    { word: 'absorb', wordType: '(v)', meaning: 'hấp thụ', sentence: 'Roots absorb water and vital minerals from soil.', translation: 'Rễ cây hấp thụ nước và các khoáng chất thiết yếu từ đất.', grammar: 'Hành động sinh lý: Roots absorb [nutrients] from soil.' },
    { word: 'photosynthesis', wordType: '(n)', meaning: 'quang hợp', sentence: 'Green plants use photosynthesis to produce glucose.', translation: 'Cây xanh sử dụng quang hợp để sản xuất đường glucose.', grammar: 'Quá trình sinh học: Plants use photosynthesis to produce [food].' },
    { word: 'chlorophyll', wordType: '(n)', meaning: 'chất diệp lục', sentence: 'Chlorophyll gives plants their vibrant green color.', translation: 'Chất diệp lục mang lại cho thực vật màu xanh tràn đầy sức sống.', grammar: 'Đặc tính sắc tố: Chlorophyll gives plants their green color.' },
    { word: 'sunlight', wordType: '(n)', meaning: 'ánh nắng mặt trời', sentence: 'Leaves capture energy directly from sunlight.', translation: 'Lá cây hấp thu năng lượng trực tiếp từ ánh nắng mặt trời.', grammar: 'Nguồn năng lượng: Plants capture energy from sunlight.' },
    { word: 'oxygen', wordType: '(n)', meaning: 'khí ô-xy', sentence: 'Plants release oxygen during the daytime.', translation: 'Cây xanh nhả khí ô-xy vào ban ngày.', grammar: 'Trao đổi khí: Plants release oxygen during daytime.' },
    { word: 'carbon dioxide', wordType: '(n)', meaning: 'khí các-bô-níc (CO2)', matchWord: 'carbon dioxide', sentence: 'Plants take in carbon dioxide through tiny pores.', translation: 'Thực vật hít vào khí các-bô-níc qua các lỗ khí khổng nhỏ.', grammar: 'Trao đổi khí: Plants take in carbon dioxide.' }
  ],
  c1s3: [
    { word: 'pollination', wordType: '(n)', meaning: 'sự thụ phấn', sentence: 'Pollination is essential for plants to produce seeds.', translation: 'Sự thụ phấn là thiết yếu để thực vật sinh ra hạt giống.', grammar: 'Cấu trúc thiết yếu: [Process] is essential for [purpose].' },
    { word: 'pollen', wordType: '(n)', meaning: 'phấn hoa', sentence: 'Yellow pollen grains stick to the bees fuzzy legs.', translation: 'Những hạt phấn hoa vàng dính vào đôi chân nhiều lông của chú ong.', grammar: 'Mô tả hiện tượng: Pollen sticks to [insects].' },
    { word: 'nectar', wordType: '(n)', meaning: 'mật hoa', sentence: 'Sweet nectar is an energetic reward for pollinators.', translation: 'Mật hoa ngọt ngào là phần thưởng giàu năng lượng cho các con vật thụ phấn.', grammar: 'Khái niệm sinh học: Nectar is a reward for pollinators.' },
    { word: 'disperse', wordType: '(v)', meaning: 'phát tán', sentence: 'Dandelion seeds disperse floating on gentle breezes.', translation: 'Hạt bồ công anh phát tán trôi bồng bềnh theo làn gió nhẹ.', grammar: 'Phương thức phát tán: Seeds disperse by [wind/water/animals].' },
    { word: 'seedling', wordType: '(n)', meaning: 'cây mầm, cây con', sentence: 'Water the delicate seedling every morning.', translation: 'Hãy tưới nước cho cây mầm non nớt mỗi buổi sáng.', grammar: 'Chăm sóc sinh vật: Water the seedling regularly.' },
    { word: 'wilt', wordType: '(v)', meaning: 'héo rũ', sentence: 'Without water, plant leaves will wilt and drop.', translation: 'Nếu không có nước, lá cây sẽ bị héo rũ và rụng xuống.', grammar: 'Điều kiện thiếu thốn: Without water, plants wilt.' },
    { word: 'soil', wordType: '(n)', meaning: 'đất trồng', sentence: 'Healthy soil contains organic matter and nutrients.', translation: 'Đất trồng màu mỡ chứa chất hữu cơ và các chất dinh dưỡng.', grammar: 'Môi trường sống: Healthy soil contains [elements].' }
  ],
  c1s4: [
    { word: 'organism', wordType: '(n)', meaning: 'sinh vật, cơ thể sống', sentence: 'Every living organism needs food, water, and air.', translation: 'Mỗi sinh vật sống đều cần thức ăn, nước uống và không khí.', grammar: 'Nhu cầu cơ bản: Every living organism needs [essentials].' },
    { word: 'alive', wordType: '(adj)', meaning: 'còn sống', sentence: 'Is a fast-flowing river really alive?', translation: 'Một dòng sông chảy xiết có thực sự còn sống không?', grammar: 'Câu hỏi phân biệt: Is [object] really alive?' },
    { word: 'non-living', wordType: '(adj)', meaning: 'vật không sống, vô sinh', matchWord: 'non-living', sentence: 'Rocks and plastic toys are non-living things.', translation: 'Đá cuội và đồ chơi bằng nhựa là những vật không sống.', grammar: 'Phân loại: [Items] are non-living things.' },
    { word: 'classify', wordType: '(v)', meaning: 'phân loại', sentence: 'Scientists classify organisms into different kingdoms.', translation: 'Các nhà khoa học phân loại sinh vật thành các giới khác nhau.', grammar: 'Kỹ năng khoa học: Classify organisms into [groups].' },
    { word: 'reproduce', wordType: '(v)', meaning: 'sinh sản', sentence: 'All living creatures reproduce to make new offspring.', translation: 'Tất cả sinh vật sống đều sinh sản để tạo ra thế hệ con mới.', grammar: 'Đặc trưng sự sống: Living things reproduce to make offspring.' },
    { word: 'grow', wordType: '(v)', meaning: 'lớn lên, phát triển', sentence: 'Living things feed, respire, and grow over time.', translation: 'Các sinh vật sống ăn uống, hô hấp và lớn lên theo thời gian.', grammar: 'Đặc trưng: Living things grow over time.' },
    { word: 'respond', wordType: '(v)', meaning: 'phản ứng với kích thích', sentence: 'Sunflowers respond to light by turning toward it.', translation: 'Hoa hướng dương phản ứng với ánh sáng bằng cách quay về phía nó.', grammar: 'Cảm ứng sinh học: Plants respond to [stimulus] by [action].' }
  ],
  c1s5: [
    { word: 'life cycle', wordType: '(n)', meaning: 'vòng đời', matchWord: 'life cycle', sentence: 'The diagram illustrates the life cycle of a frog.', translation: 'Sơ đồ minh họa vòng đời của một chú ếch.', grammar: 'Mô tả quy trình: The diagram illustrates the life cycle of [animal].' },
    { word: 'stage', wordType: '(n)', meaning: 'giai đoạn', sentence: 'The egg is the first stage in a bird life.', translation: 'Trứng là giai đoạn đầu tiên trong cuộc đời của loài chim.', grammar: 'Thứ tự giai đoạn: [Item] is the first/second stage.' },
    { word: 'hatch', wordType: '(v)', meaning: 'nở (ra từ trứng)', sentence: 'Tiny baby turtles hatch from eggs buried in sand.', translation: 'Những chú rùa con tí hon nở ra từ những quả trứng vùi trong cát.', grammar: 'Sinh sản: Baby animals hatch from eggs.' },
    { word: 'metamorphosis', wordType: '(n)', meaning: 'sự biến thái hoàn toàn', sentence: 'Caterpillars undergo metamorphosis to become butterflies.', translation: 'Sâu bướm trải qua sự biến thái để biến thành những cánh bướm.', grammar: 'Hiện tượng: [Animals] undergo metamorphosis to become [adult].' },
    { word: 'pupa', wordType: '(n)', meaning: 'nhộng, kén', sentence: 'The insect rests inside the protective pupa casing.', translation: 'Con côn trùng nghỉ ngơi bên trong lớp vỏ nhộng bảo vệ.', grammar: 'Giai đoạn nhộng: The insect rests inside the pupa.' },
    { word: 'adult', wordType: '(n)', meaning: 'con trưởng thành', sentence: 'An adult frog breathes with lungs on land.', translation: 'Một chú ếch trưởng thành thở bằng phổi ở trên cạn.', grammar: 'Đặc điểm cá thể lớn: An adult [animal] has [features].' },
    { word: 'offspring', wordType: '(n)', meaning: 'con non, thế hệ sau', sentence: 'Adult birds feed their hungry offspring in the nest.', translation: 'Những chú chim trưởng thành mớm mồi cho bầy con non đói lử trong tổ.', grammar: 'Tình mẫu tử sinh học: Parents protect their offspring.' }
  ],

  // Chương 2: Động vật, Môi trường & Hệ sinh thái
  c2s1: [
    { word: 'mammal', wordType: '(n)', meaning: 'động vật có vú', sentence: 'Mammals are warm-blooded and have warm fur.', translation: 'Động vật có vú là động vật máu nóng và có bộ lông ấm áp.', grammar: 'Đặc điểm nhóm: Mammals are warm-blooded and have fur.' },
    { word: 'reptile', wordType: '(n)', meaning: 'loài bò sát', sentence: 'A snake is a cold-blooded reptile with dry scales.', translation: 'Rắn là loài bò sát máu lạnh có vảy khô ráp.', grammar: 'Đặc điểm: Reptiles have dry scales and lay eggs.' },
    { word: 'amphibian', wordType: '(n)', meaning: 'loài lưỡng cư', sentence: 'Amphibians can live both in fresh water and on land.', translation: 'Loài lưỡng cư có thể sống cả ở dưới nước ngọt lẫn trên cạn.', grammar: 'Môi trường sống: Amphibians live both in water and on land.' },
    { word: 'bird', wordType: '(n)', meaning: 'loài chim', sentence: 'Every bird has feathers, a beak, and wings.', translation: 'Mỗi loài chim đều có lông vũ, một chiếc mỏ và đôi cánh.', grammar: 'Đặc trưng: Birds have feathers, beaks, and wings.' },
    { word: 'fish', wordType: '(n)', meaning: 'loài cá', sentence: 'Fish use gills to breathe dissolved oxygen in water.', translation: 'Cá dùng mang để thở lượng ô-xy hòa tan trong nước.', grammar: 'Cơ quan hô hấp: Fish use gills to breathe in water.' },
    { word: 'vertebrate', wordType: '(n)', meaning: 'động vật có xương sống', sentence: 'Animals with a strong backbone are called vertebrates.', translation: 'Những động vật có xương sống chắc khỏe được gọi là động vật có xương sống.', grammar: 'Định nghĩa: Animals with a backbone are vertebrates.' },
    { word: 'invertebrate', wordType: '(n)', meaning: 'động vật không xương sống', sentence: 'Insects and worms are common invertebrates.', translation: 'Côn trùng và giun đất là những động vật không xương sống phổ biến.', grammar: 'Ví dụ: [Creatures] are common invertebrates.' }
  ],
  c2s2: [
    { word: 'herbivore', wordType: '(n)', meaning: 'động vật ăn thực vật', sentence: 'A giant elephant is a herbivore eating leaves and grass.', translation: 'Chú voi khổng lồ là động vật ăn cỏ chuyên ăn lá và cỏ.', grammar: 'Chế độ ăn: [Animal] is a herbivore eating plants.' },
    { word: 'carnivore', wordType: '(n)', meaning: 'động vật ăn thịt', sentence: 'Lions and tigers are ferocious carnivores.', translation: 'Sư tử và hổ là những loài động vật ăn thịt hung dữ.', grammar: 'Phân loại dinh dưỡng: [Animals] are carnivores.' },
    { word: 'omnivore', wordType: '(n)', meaning: 'động vật ăn tạp', sentence: 'Humans and brown bears are natural omnivores.', translation: 'Con người và gấu nâu là những loài ăn tạp tự nhiên.', grammar: 'Thực đơn phong phú: Omnivores eat both plants and meat.' },
    { word: 'predator', wordType: '(n)', meaning: 'kẻ săn mồi', sentence: 'The swift hawk is a skilled predator hunting mice.', translation: 'Chim ưng nhanh nhẹn là kẻ săn mồi điêu luyện chuyên săn chuột.', grammar: 'Quan hệ săn mồi: [Animal] is a predator hunting [prey].' },
    { word: 'prey', wordType: '(n)', meaning: 'con mồi', sentence: 'Small mice are prey for owls and snakes.', translation: 'Những chú chuột nhắt nhỏ là con mồi cho cú mèo và loài rắn.', grammar: 'Quan hệ con mồi: [Animal] is prey for [predators].' },
    { word: 'food chain', wordType: '(n)', meaning: 'chuỗi thức ăn', matchWord: 'food chain', sentence: 'A simple food chain starts with a green plant.', translation: 'Một chuỗi thức ăn đơn giản bắt đầu bằng một cây xanh.', grammar: 'Quy luật chuỗi thức ăn: A food chain starts with [producer].' },
    { word: 'producer', wordType: '(n)', meaning: 'sinh vật sản xuất', sentence: 'Plants are producers because they manufacture food.', translation: 'Cây cối là sinh vật sản xuất vì chúng tự tạo ra thức ăn.', grammar: 'Vai trò sinh thái: Plants are producers because...' }
  ],
  c2s3: [
    { word: 'consumer', wordType: '(n)', meaning: 'sinh vật tiêu thụ', sentence: 'Animals are consumers that eat other living things.', translation: 'Động vật là sinh vật tiêu thụ ăn các sinh vật sống khác.', grammar: 'Định nghĩa: Consumers eat other living organisms.' },
    { word: 'decomposer', wordType: '(n)', meaning: 'sinh vật phân hủy', sentence: 'Mushrooms and bacteria act as essential decomposers.', translation: 'Nấm và vi khuẩn đóng vai trò là những sinh vật phân hủy thiết yếu.', grammar: 'Vai trò: [Fungi/Bacteria] act as decomposers.' },
    { word: 'food web', wordType: '(n)', meaning: 'lưới thức ăn', matchWord: 'food web', sentence: 'Connected food chains form an intricate food web.', translation: 'Các chuỗi thức ăn gắn kết với nhau tạo thành một lưới thức ăn chằng chịt.', grammar: 'Cấu trúc phức hợp: Connected food chains form a food web.' },
    { word: 'energy', wordType: '(n)', meaning: 'năng lượng', sentence: 'The sun provides all the energy for life on Earth.', translation: 'Mặt trời cung cấp toàn bộ năng lượng cho sự sống trên Trái đất.', grammar: 'Dòng năng lượng: The sun provides energy for life.' },
    { word: 'ecosystem', wordType: '(n)', meaning: 'hệ sinh thái', sentence: 'A coral reef is a diverse marine ecosystem.', translation: 'Rạn san hô là một hệ sinh thái biển vô cùng phong phú.', grammar: 'Môi trường sống sinh thái: [Habitat] is a [adjective] ecosystem.' },
    { word: 'nutrient', wordType: '(n)', meaning: 'chất dinh dưỡng', sentence: 'Soil rich in nutrients helps green vegetables grow.', translation: 'Đất giàu chất dinh dưỡng giúp rau xanh tươi tốt.', grammar: 'Tính chất hỗ trợ: Soil rich in nutrients helps plants grow.' },
    { word: 'decay', wordType: '(v)', meaning: 'thối rữa, phân hủy', sentence: 'Fallen leaves decay and return minerals to the ground.', translation: 'Lá rụng phân hủy và trả lại các chất khoáng về cho đất mẹ.', grammar: 'Chu trình vật chất: Organic matter decays and returns to soil.' }
  ],
  c2s4: [
    { word: 'habitat', wordType: '(n)', meaning: 'môi trường sống tự nhiên', sentence: 'A dark cave is a natural habitat for bats.', translation: 'Hang động tối tăm là môi trường sống tự nhiên của loài dơi.', grammar: 'Nơi cư trú: [Place] is a natural habitat for [animals].' },
    { word: 'desert', wordType: '(n)', meaning: 'sa mạc', sentence: 'Camels store water to endure the harsh dry desert.', translation: 'Lạc đà trữ nước để chịu đựng vùng sa mạc khô hạn khắc nghiệt.', grammar: 'Thích nghi khí hậu: Animals survive in the dry desert.' },
    { word: 'ocean', wordType: '(n)', meaning: 'đại dương', sentence: 'The vast ocean is home to blue whales and dolphins.', translation: 'Đại dương bao la là ngôi nhà của cá voi xanh và cá heo.', grammar: 'Môi trường đại dương: The ocean is home to [creatures].' },
    { word: 'forest', wordType: '(n)', meaning: 'rừng cây', sentence: 'Tall pine trees dominate the temperate forest.', translation: 'Những cây thông cao vút thống trị khu rừng ôn đới.', grammar: 'Thảm thực vật: Trees dominate the forest.' },
    { word: 'grassland', wordType: '(n)', meaning: 'đồng cỏ', sentence: 'Zebra herds graze peacefully across the wide grassland.', translation: 'Những đàn ngựa vằn gặm cỏ thanh bình khắp vùng đồng cỏ rộng lớn.', grammar: 'Đồng cỏ: Herds graze across the grassland.' },
    { word: 'wetland', wordType: '(n)', meaning: 'vùng đất ngập nước', sentence: 'Mangrove wetlands protect the shore from sea waves.', translation: 'Vùng đất ngập nước rừng ngập mặn bảo vệ bờ biển khỏi sóng biển.', grammar: 'Vai trò bảo vệ: Wetlands protect the environment.' },
    { word: 'shelter', wordType: '(n)', meaning: 'nơi trú ẩn', sentence: 'Animals build shelters to keep their newborn babies safe.', translation: 'Động vật xây nơi trú ẩn để giữ cho con non mới sinh an toàn.', grammar: 'Bản năng sinh tồn: Animals build shelters to keep babies safe.' }
  ],
  c2s5: [
    { word: 'adapt', wordType: '(v)', meaning: 'thích nghi', sentence: 'Cactus plants adapt to dry climates with sharp spines.', translation: 'Cây xương rồng thích nghi với khí hậu khô hạn nhờ gai nhọn.', grammar: 'Cấu trúc thích nghi: Plants adapt to [conditions] with [features].' },
    { word: 'adaptation', wordType: '(n)', meaning: 'đặc điểm thích nghi', sentence: 'Thick white fur is an adaptation for polar bears.', translation: 'Bộ lông dày màu trắng là một đặc điểm thích nghi cho gấu bắc cực.', grammar: 'Khái niệm: [Feature] is an adaptation for [animal].' },
    { word: 'camouflage', wordType: '(n)', meaning: 'sự ngụy trang', sentence: 'Chameleons use color camouflage to hide from danger.', translation: 'Tắc kè hoa dùng khả năng ngụy trang đổi màu để trốn khỏi nguy hiểm.', grammar: 'Cơ chế tự vệ: Animals use camouflage to hide from danger.' },
    { word: 'hibernate', wordType: '(v)', meaning: 'ngủ đông', sentence: 'Black bears hibernate in caves during frosty winters.', translation: 'Gấu đen ngủ đông trong hang suốt những mùa đông băng giá.', grammar: 'Tập tính mùa đông: Animals hibernate during winter.' },
    { word: 'migrate', wordType: '(v)', meaning: 'di cư', sentence: 'Many swallow birds migrate south to find warm weather.', translation: 'Nhiều loài chim én di cư về phương nam để tìm thời tiết ấm áp.', grammar: 'Tập tính di cư: Birds migrate to find warm weather.' },
    { word: 'survive', wordType: '(v)', meaning: 'sinh tồn, sống sót', sentence: 'Animals must find enough food to survive the dry season.', translation: 'Động vật phải tìm đủ thức ăn để sinh tồn qua mùa khô.', grammar: 'Mục đích sinh tồn: Animals must [action] to survive.' },
    { word: 'extinct', wordType: '(adj)', meaning: 'tuyệt chủng', sentence: 'Dinosaurs became extinct millions of years ago.', translation: 'Khủng long đã bị tuyệt chủng hàng triệu năm trước.', grammar: 'Biến mất vĩnh viễn: [Species] became extinct years ago.' }
  ],

  // Chương 3: Cơ thể người & Sức khỏe
  c3s1: [
    { word: 'sense', wordType: '(n)', meaning: 'giác quan', sentence: 'Humans have five amazing senses to explore the surroundings.', translation: 'Con người có năm giác quan tuyệt vời để khám phá thế giới xung quanh.', grammar: 'Số lượng: Humans have five senses to explore.' },
    { word: 'sight', wordType: '(n)', meaning: 'thị giác', sentence: 'Our eyes provide the wonderful sense of sight.', translation: 'Đôi mắt mang lại cho chúng ta thị giác tuyệt diệu.', grammar: 'Cơ quan giác quan: Eyes provide the sense of sight.' },
    { word: 'hearing', wordType: '(n)', meaning: 'thính giác', sentence: 'Ears capture vibrations to give us hearing.', translation: 'Đôi tai bắt các rung động để đem lại thính giác cho chúng ta.', grammar: 'Cơ chế thính giác: Ears capture vibrations for hearing.' },
    { word: 'smell', wordType: '(n)', meaning: 'khứu giác', sentence: 'The nose can smell thousands of distinct scents.', translation: 'Chiếc mũi có thể ngửi thấy hàng nghìn mùi hương khác nhau.', grammar: 'Chức năng mũi: The nose can smell distinct scents.' },
    { word: 'taste', wordType: '(n)', meaning: 'vị giác', sentence: 'Taste buds on your tongue detect sweet and sour.', translation: 'Các chồi vị giác trên lưỡi phát hiện vị ngọt và chua.', grammar: 'Vị giác: Taste buds detect sweet, salty, and sour.' },
    { word: 'touch', wordType: '(n)', meaning: 'xúc giác', sentence: 'Skin has receptors to detect temperature and touch.', translation: 'Làn da có các thụ thể để nhận biết nhiệt độ và xúc giác.', grammar: 'Thụ thể da: Skin has receptors to detect touch.' },
    { word: 'skin', wordType: '(n)', meaning: 'làn da', sentence: 'Skin is the largest protective organ of our body.', translation: 'Làn da là cơ quan bảo vệ lớn nhất của cơ thể chúng ta.', grammar: 'Đặc điểm giải phẫu: Skin is the largest organ of the body.' }
  ],
  c3s2: [
    { word: 'skeleton', wordType: '(n)', meaning: 'bộ xương', sentence: 'The human skeleton contains over two hundred bones.', translation: 'Bộ xương người chứa hơn hai trăm chiếc xương.', grammar: 'Số lượng xương: The skeleton contains over 200 bones.' },
    { word: 'bone', wordType: '(n)', meaning: 'xương', sentence: 'Calcium helps our bones grow dense and strong.', translation: 'Can-xi giúp xương của chúng ta phát triển đặc và chắc khỏe.', grammar: 'Dinh dưỡng xương: Calcium helps bones grow strong.' },
    { word: 'muscle', wordType: '(n)', meaning: 'cơ bắp', sentence: 'Muscles pull on bones to move our arms and legs.', translation: 'Các cơ bắp kéo xương để cử động cánh tay và đôi chân.', grammar: 'Cơ chế vận động: Muscles pull on bones to move limbs.' },
    { word: 'joint', wordType: '(n)', meaning: 'khớp xương', sentence: 'A joint is a location where two bones connect.', translation: 'Khớp xương là vị trí nơi hai khúc xương nối với nhau.', grammar: 'Định nghĩa giải phẫu: A joint is where two bones meet.' },
    { word: 'skull', wordType: '(n)', meaning: 'hộp sọ', sentence: 'The hard skull protects the brain from external injury.', translation: 'Hộp sọ cứng cáp bảo vệ bộ não khỏi những chấn thương bên ngoài.', grammar: 'Chức năng bảo vệ: The skull protects the brain.' },
    { word: 'spine', wordType: '(n)', meaning: 'cột sống', sentence: 'Keep your spine straight when carrying heavy backpacks.', translation: 'Giữ cột sống thẳng khi đeo những chiếc ba-lô nặng.', grammar: 'Tư thế đúng: Keep your spine straight.' },
    { word: 'rib', wordType: '(n)', meaning: 'xương sườn', sentence: 'The curved ribs form a protective cage around lungs.', translation: 'Những chiếc xương sườn cong tạo thành lồng bảo vệ quanh hai lá phổi.', grammar: 'Bảo vệ nội tạng: Ribs form a cage around the heart and lungs.' }
  ],
  c3s3: [
    { word: 'heart', wordType: '(n)', meaning: 'trái tim', sentence: 'The heart pumps oxygen-rich blood day and night.', translation: 'Trái tim bơm dòng máu giàu ô-xy suốt cả ngày lẫn đêm.', grammar: 'Hoạt động tuần hoàn: The heart pumps blood continuously.' },
    { word: 'blood', wordType: '(n)', meaning: 'máu', sentence: 'Red blood cells deliver oxygen to every muscle cell.', translation: 'Các tế bào hồng cầu vận chuyển ô-xy đến từng tế bào cơ.', grammar: 'Vận chuyển chất: Blood cells deliver oxygen to cells.' },
    { word: 'blood vessel', wordType: '(n)', meaning: 'mạch máu', matchWord: 'blood vessel', sentence: 'Arteries and veins are types of blood vessels.', translation: 'Động mạch và tĩnh mạch là các loại mạch máu.', grammar: 'Cấu tạo: Arteries and veins are blood vessels.' },
    { word: 'lungs', wordType: '(n)', meaning: 'hai lá phổi', sentence: 'Our lungs expand like balloons when we breathe in air.', translation: 'Hai lá phổi phồng to như quả bóng khi chúng ta hít không khí vào.', grammar: 'Hô hấp trực quan: Lungs expand like balloons.' },
    { word: 'breathe', wordType: '(v)', meaning: 'hô hấp, thở', sentence: 'We breathe in oxygen and breathe out carbon dioxide.', translation: 'Chúng ta hít vào khí ô-xy và thở ra khí các-bô-níc.', grammar: 'Chu trình hít thở: Breathe in oxygen and breathe out CO2.' },
    { word: 'inhale', wordType: '(v)', meaning: 'hít vào', sentence: 'Inhale fresh morning air through your clean nose.', translation: 'Hít bầu không khí buổi sớm trong lành qua chiếc mũi sạch sẽ.', grammar: 'Hành động: Inhale fresh air through your nose.' },
    { word: 'exhale', wordType: '(v)', meaning: 'thở ra', sentence: 'Exhale slowly to relax your racing heart rate.', translation: 'Thở ra chầm chậm để thư giãn nhịp tim đang đập nhanh.', grammar: 'Thư giãn: Exhale slowly to relax.' }
  ],
  c3s4: [
    { word: 'digest', wordType: '(v)', meaning: 'tiêu hóa', sentence: 'Our bodies digest meals to extract fuel for energy.', translation: 'Cơ thể chúng ta tiêu hóa các bữa ăn để rút ra nhiên liệu tạo năng lượng.', grammar: 'Mục đích tiêu hóa: The body digests food to extract energy.' },
    { word: 'stomach', wordType: '(n)', meaning: 'dạ dày', sentence: 'Strong stomach acids break food into a smooth mixture.', translation: 'A-xít dạ dày mạnh mẽ nghiền thức ăn thành một hỗn hợp mịn.', grammar: 'Chức năng dạ dày: Stomach acids break down food.' },
    { word: 'intestine', wordType: '(n)', meaning: 'đường ruột', sentence: 'The long small intestine absorbs nutrients into the blood.', translation: 'Đoạn ruột non dài hấp thụ các chất dinh dưỡng đi vào máu.', grammar: 'Hấp thụ dinh dưỡng: The small intestine absorbs nutrients.' },
    { word: 'chew', wordType: '(v)', meaning: 'nhai', sentence: 'Chew your solid food thoroughly before you swallow it.', translation: 'Hãy nhai kỹ thức ăn đặc trước khi em nuốt xuống.', grammar: 'Thói quen ăn uống: Chew your food thoroughly before swallowing.' },
    { word: 'swallow', wordType: '(v)', meaning: 'nuốt', sentence: 'Drink a sip of pure water to swallow medicine.', translation: 'Uống một ngụm nước tinh khiết để nuốt viên thuốc dễ dàng.', grammar: 'Thao tác: Drink water to swallow medicine.' },
    { word: 'saliva', wordType: '(n)', meaning: 'nước bọt, nước miếng', sentence: 'Saliva in the mouth starts the chemical digestion.', translation: 'Nước bọt trong khoang miệng bắt đầu quá trình tiêu hóa hóa học.', grammar: 'Enzyme nước bọt: Saliva in the mouth starts digestion.' },
    { word: 'esophagus', wordType: '(n)', meaning: 'thực quản', sentence: 'Food slides down the muscular esophagus to the stomach.', translation: 'Thức ăn trượt xuống ống thực quản cơ bắp để vào dạ dày.', grammar: 'Đường đi của thức ăn: Food slides down the esophagus.' }
  ],
  c3s5: [
    { word: 'healthy', wordType: '(adj)', meaning: 'khỏe mạnh, lành mạnh', sentence: 'Fresh green vegetables are part of a healthy lifestyle.', translation: 'Rau xanh tươi là một phần của lối sống khỏe mạnh.', grammar: 'Lối sống: Vegetables are part of a healthy diet.' },
    { word: 'balanced diet', wordType: '(n)', meaning: 'chế độ ăn cân đối', matchWord: 'balanced diet', sentence: 'A balanced diet includes grains, proteins, and fruits.', translation: 'Một chế độ ăn cân đối bao gồm ngũ cốc, đạm và hoa quả.', grammar: 'Dinh dưỡng cân đối: A balanced diet includes [food groups].' },
    { word: 'vitamin', wordType: '(n)', meaning: 'vi-ta-min', sentence: 'Oranges are bursting with natural vitamin C.', translation: 'Những quả cam mọng nước chứa đầy vi-ta-min C tự nhiên.', grammar: 'Nguồn vi-ta-min: [Fruit] is bursting with vitamin C.' },
    { word: 'mineral', wordType: '(n)', meaning: 'khoáng chất', sentence: 'Iron is a critical mineral for healthy red blood.', translation: 'Sắt là một khoáng chất thiết yếu cho dòng máu đỏ khỏe mạnh.', grammar: 'Khoáng chất dinh dưỡng: [Mineral] is critical for [function].' },
    { word: 'protein', wordType: '(n)', meaning: 'chất đạm, protein', sentence: 'Eggs, beans, and lean fish are rich in protein.', translation: 'Trứng, các loại đậu và cá nạc rất giàu chất đạm.', grammar: 'Thực phẩm giàu đạm: [Foods] are rich in protein.' },
    { word: 'hygiene', wordType: '(n)', meaning: 'vệ sinh thân thể', sentence: 'Washing dirty hands before lunch is good hygiene.', translation: 'Rửa sạch đôi tay bẩn trước giờ ăn trưa là vệ sinh tốt.', grammar: 'Quy tắc vệ sinh: Washing hands is good hygiene.' },
    { word: 'exercise', wordType: '(n)', meaning: 'tập thể dục, vận động', sentence: 'Regular physical exercise keeps your lungs and heart fit.', translation: 'Tập thể dục thường xuyên giữ cho phổi và tim của em khỏe khoắn.', grammar: 'Tác dụng thể dục: Exercise keeps your heart and body fit.' }
  ],

  // Chương 4: Vật chất & Tính chất vật liệu
  c4s1: [
    { word: 'matter', wordType: '(n)', meaning: 'vật chất', sentence: 'Matter is anything that has mass and occupies volume.', translation: 'Vật chất là bất cứ thứ gì có khối lượng và chiếm thể tích.', grammar: 'Định nghĩa khoa học: Matter has mass and occupies volume.' },
    { word: 'solid', wordType: '(n)', meaning: 'chất rắn', sentence: 'A solid has a definite shape and fixed volume.', translation: 'Chất rắn có một hình dạng xác định và thể tích cố định.', grammar: 'Đặc tính thể rắn: A solid has a definite shape and volume.' },
    { word: 'liquid', wordType: '(n)', meaning: 'chất lỏng', sentence: 'A liquid takes the exact shape of its container.', translation: 'Chất lỏng nhận hình dạng chính xác của chiếc bình chứa nó.', grammar: 'Đặc tính thể lỏng: A liquid takes the shape of its container.' },
    { word: 'gas', wordType: '(n)', meaning: 'chất khí', sentence: 'Gas expands freely to fill any empty space.', translation: 'Chất khí lan tỏa tự do để lấp đầy bất kỳ khoảng trống nào.', grammar: 'Đặc tính thể khí: Gas expands to fill space.' },
    { word: 'particle', wordType: '(n)', meaning: 'hạt vi mô, phân tử', sentence: 'Particles in a cold solid are packed tightly together.', translation: 'Các hạt trong chất rắn lạnh được xếp khít chặt lại với nhau.', grammar: 'Mô hình hạt: Particles in a solid are packed tightly.' },
    { word: 'shape', wordType: '(n)', meaning: 'hình dạng', sentence: 'Clay can easily be squished into any new shape.', translation: 'Đất nặn có thể dễ dàng bị bóp thành bất kỳ hình dạng mới nào.', grammar: 'Tính chất hình học: Change into a new shape.' },
    { word: 'state', wordType: '(n)', meaning: 'trạng thái, thể', sentence: 'Water can exist in three physical states: solid, liquid, gas.', translation: 'Nước có thể tồn tại ở ba thể vật lý: rắn, lỏng, khí.', grammar: 'Ba thể vật chất: Water exists in three physical states.' }
  ],
  c4s2: [
    { word: 'melt', wordType: '(v)', meaning: 'tan chảy', sentence: 'Ice cubes melt quickly under warm sunshine.', translation: 'Các viên đá lạnh tan chảy nhanh chóng dưới ánh nắng ấm áp.', grammar: 'Chuyển thể rắn sang lỏng: [Solids] melt when heated.' },
    { word: 'freeze', wordType: '(v)', meaning: 'đóng băng, đông đặc', sentence: 'Liquid water will freeze into ice at zero degrees.', translation: 'Nước lỏng sẽ đóng băng thành đá ở nhiệt độ không độ C.', grammar: 'Chuyển thể lỏng sang rắn: Water freezes at 0 degrees.' },
    { word: 'evaporate', wordType: '(v)', meaning: 'bay hơi', sentence: 'Water drops evaporate when warmed by the sun.', translation: 'Các giọt nước bay hơi khi được sưởi ấm bởi ánh mặt trời.', grammar: 'Chuyển thể lỏng sang khí: Water evaporates when heated.' },
    { word: 'condense', wordType: '(v)', meaning: 'ngưng tụ', sentence: 'Hot steam will condense into cool drops on glass.', translation: 'Hơi nước nóng sẽ ngưng tụ thành các giọt mát lạnh trên mặt kính.', grammar: 'Chuyển thể khí sang lỏng: Steam condenses into water.' },
    { word: 'boil', wordType: '(v)', meaning: 'sôi', sentence: 'Pure water begins to boil at one hundred degrees.', translation: 'Nước tinh khiết bắt đầu sôi ở một trăm độ C.', grammar: 'Điểm sôi: Water boils at 100 degrees Celsius.' },
    { word: 'temperature', wordType: '(n)', meaning: 'nhiệt độ', sentence: 'The thermometer reading shows a high outdoor temperature.', translation: 'Số đo trên nhiệt kế cho thấy nhiệt độ ngoài trời rất cao.', grammar: 'Đo lường: The thermometer shows temperature.' },
    { word: 'thermometer', wordType: '(n)', meaning: 'nhiệt kế', sentence: 'A clinical thermometer measures our internal body heat.', translation: 'Nhiệt kế y tế đo nhiệt độ bên trong cơ thể chúng ta.', grammar: 'Dụng cụ thí nghiệm: A thermometer measures heat.' }
  ],
  c4s3: [
    { word: 'flexible', wordType: '(adj)', meaning: 'dẻo, dễ uốn', sentence: 'Rubber bands are flexible and bend without snapping.', translation: 'Dây thun cao su rất dẻo và uốn cong mà không bị đứt gãy.', grammar: 'Tính chất cơ học: [Material] is flexible and bends.' },
    { word: 'rigid', wordType: '(adj)', meaning: 'cứng nhắc, không uốn được', sentence: 'Thick steel rulers are rigid and remain straight.', translation: 'Thước thép dày rất cứng cáp và luôn giữ thẳng tắp.', grammar: 'Tính chất: [Material] is rigid and holds shape.' },
    { word: 'transparent', wordType: '(adj)', meaning: 'trong suốt', sentence: 'Glass windows are transparent so bright light passes.', translation: 'Cửa sổ kính trong suốt nên ánh sáng rực rỡ có thể đi xuyên qua.', grammar: 'Tính chất quang học: [Material] is transparent, light passes.' },
    { word: 'opaque', wordType: '(adj)', meaning: 'mờ đục, chắn sáng', sentence: 'Wood is opaque and casts a dark shadow behind.', translation: 'Gỗ là vật liệu chắn sáng và tạo ra một cái bóng đen phía sau.', grammar: 'Tạo bóng: Opaque materials block light.' },
    { word: 'waterproof', wordType: '(adj)', meaning: 'chống thấm nước', sentence: 'A plastic raincoat is completely waterproof.', translation: 'Áo mưa bằng nhựa hoàn toàn chống thấm nước.', grammar: 'Khả năng ngăn nước: [Material] is waterproof.' },
    { word: 'absorbent', wordType: '(adj)', meaning: 'thấm hút tốt', sentence: 'Cotton paper towels are soft and very absorbent.', translation: 'Khăn giấy bằng cotton rất mềm và thấm hút rất tốt.', grammar: 'Khả năng hút nước: Paper towels are absorbent.' },
    { word: 'durable', wordType: '(adj)', meaning: 'bền bỉ', sentence: 'Leather safety shoes are durable for rough work.', translation: 'Giày bảo hộ bằng da rất bền bỉ cho công việc gồ ghề vất vả.', grammar: 'Độ bền: [Material] is durable for tough use.' }
  ],
  c4s4: [
    { word: 'dissolve', wordType: '(v)', meaning: 'hòa tan', sentence: 'Stir white sugar granules to dissolve them in tea.', translation: 'Hãy khuấy các hạt đường trắng để hòa tan chúng trong tách trà.', grammar: 'Hành động hòa tan: Stir to dissolve solute in liquid.' },
    { word: 'soluble', wordType: '(adj)', meaning: 'có thể hòa tan', sentence: 'Table salt is highly soluble in warm water.', translation: 'Muối ăn có thể hòa tan rất tốt trong nước ấm.', grammar: 'Tính chất hòa tan: Salt is soluble in water.' },
    { word: 'insoluble', wordType: '(adj)', meaning: 'không tan được', sentence: 'Yellow sand is insoluble and settles at the bottom.', translation: 'Cát vàng không thể hòa tan và lắng xuống dưới đáy.', grammar: 'Tính chất: Sand is insoluble in water.' },
    { word: 'mixture', wordType: '(n)', meaning: 'hỗn hợp', sentence: 'Trail mix is a dry mixture of nuts and raisins.', translation: 'Món ăn vặt là một hỗn hợp khô gồm các loại hạt và nho khô.', grammar: 'Định nghĩa: A mixture contains different substances.' },
    { word: 'solution', wordType: '(n)', meaning: 'dung dịch', sentence: 'Clear saltwater is a transparent chemical solution.', translation: 'Nước muối trong vắt là một dung dịch hóa học trong suốt.', grammar: 'Khái niệm dung dịch: Saltwater is a solution.' },
    { word: 'filter', wordType: '(v)', meaning: 'lọc', sentence: 'Filter the muddy river water through porous paper.', translation: 'Lọc nước sông đục ngầu qua một tấm giấy có lỗ xốp.', grammar: 'Tách chất: Filter the liquid through filter paper.' },
    { word: 'separate', wordType: '(v)', meaning: 'tách riêng biệt', sentence: 'Use a strong magnet to separate metal paperclips.', translation: 'Dùng một thanh nam châm mạnh để tách các kẹp giấy kim loại ra.', grammar: 'Phương pháp tách: Use [tool] to separate [substances].' }
  ],
  c4s5: [
    { word: 'reversible', wordType: '(adj)', meaning: 'thuận nghịch, đảo ngược được', sentence: 'Melting ice back into liquid is a reversible change.', translation: 'Làm tan chảy đá trở lại thành chất lỏng là biến đổi thuận nghịch.', grammar: 'Biến đổi thuận nghịch: Melting is a reversible change.' },
    { word: 'irreversible', wordType: '(adj)', meaning: 'bất thuận nghịch, không thể đảo ngược', sentence: 'Baking cookie dough is an irreversible chemical change.', translation: 'Nướng bột bánh quy là một sự biến đổi hóa học không thể đảo ngược.', grammar: 'Biến đổi vĩnh viễn: Baking is an irreversible change.' },
    { word: 'burn', wordType: '(v)', meaning: 'cháy, đốt cháy', sentence: 'Dry firewood will burn and leave black powdery ash.', translation: 'Củi khô sẽ cháy và để lại tro bụi màu đen.', grammar: 'Phản ứng cháy: Firewood burns to produce ash.' },
    { word: 'rust', wordType: '(n)', meaning: 'rỉ sét', sentence: 'Wet iron nails develop reddish-brown rust over time.', translation: 'Những chiếc đinh sắt bị ướt sẽ sinh ra rỉ sét màu nâu đỏ theo thời gian.', grammar: 'Oxy hóa: Iron reacts with water to form rust.' },
    { word: 'reaction', wordType: '(n)', meaning: 'phản ứng hóa học', sentence: 'Mixing vinegar and baking soda causes a fizzy reaction.', translation: 'Trộn giấm và bột nở tạo ra một phản ứng sủi bọt xèo xèo.', grammar: 'Hiện tượng phản ứng: Mixing A and B causes a reaction.' },
    { word: 'substance', wordType: '(n)', meaning: 'chất', sentence: 'A brand new substance is created in the experiment.', translation: 'Một chất hoàn toàn mới được tạo ra trong cuộc thí nghiệm.', grammar: 'Sản phẩm phản ứng: A new substance is created.' },
    { word: 'bubble', wordType: '(n)', meaning: 'bọt khí, bong bóng', sentence: 'Gas bubbles rise vigorously to the foaming surface.', translation: 'Những bong bóng khí nổi lên cuồn cuộn lên bề mặt sủi bọt.', grammar: 'Dấu hiệu nhận biết: Gas bubbles rise to the surface.' }
  ],

  // Chương 5: Lực, Năng lượng, Ánh sáng & Âm thanh
  c5s1: [
    { word: 'push', wordType: '(v)', meaning: 'đẩy', sentence: 'Push the heavy wooden door to open the room.', translation: 'Hãy đẩy cánh cửa gỗ nặng nề để mở căn phòng.', grammar: 'Tác dụng lực: Push the door to open it.' },
    { word: 'pull', wordType: '(v)', meaning: 'kéo', sentence: 'Pull the rope hard during the tug-of-war game.', translation: 'Hãy kéo sợi dây thật mạnh trong trò chơi kéo co.', grammar: 'Tác dụng lực: Pull the rope with both hands.' },
    { word: 'gravity', wordType: '(n)', meaning: 'trọng lực, lực hút Trái đất', sentence: 'Gravity pulls falling ripe apples straight to Earth.', translation: 'Trọng lực kéo những quả táo chín rơi thẳng xuống Trái đất.', grammar: 'Định luật vạn vật hấp dẫn: Gravity pulls objects downward.' },
    { word: 'friction', wordType: '(n)', meaning: 'lực ma sát', sentence: 'Rough sandpaper produces high frictional resistance.', translation: 'Giấy ráp xù xì sinh ra lực ma sát cản trở rất lớn.', grammar: 'Ma sát bề mặt: Rough surfaces create high friction.' },
    { word: 'motion', wordType: '(n)', meaning: 'chuyển động', sentence: 'A rolling ball stays in continuous rolling motion.', translation: 'Quả bóng đang lăn tiếp tục duy trì chuyển động lăn liên tục.', grammar: 'Trạng thái động lực: Objects stay in motion.' },
    { word: 'speed', wordType: '(n)', meaning: 'tốc độ', sentence: 'The red bicycle travels at a steady road speed.', translation: 'Chiếc xe đạp màu đỏ di chuyển với một tốc độ ổn định trên đường.', grammar: 'Độ nhanh chậm: Travel at a steady speed.' },
    { word: 'surface', wordType: '(n)', meaning: 'bề mặt', sentence: 'Ice has an extremely slippery, frictionless surface.', translation: 'Băng tuyết có một bề mặt cực kỳ trơn trượt hầu như không có ma sát.', grammar: 'Đặc điểm tiếp xúc: The surface is smooth and slippery.' }
  ],
  c5s2: [
    { word: 'magnet', wordType: '(n)', meaning: 'thanh nam châm', sentence: 'A bar magnet attracts small steel pins nearby.', translation: 'Một thanh nam châm hút những chiếc ghim thép nhỏ ở gần.', grammar: 'Từ tính: A magnet attracts iron and steel.' },
    { word: 'attract', wordType: '(v)', meaning: 'hút (nhau)', sentence: 'Opposite magnetic poles attract each other closely.', translation: 'Các cực từ trái dấu hút chặt lấy nhau.', grammar: 'Quy tắc từ cực: Opposite poles attract each other.' },
    { word: 'repel', wordType: '(v)', meaning: 'đẩy (nhau)', sentence: 'Identical magnetic poles repel each other strongly.', translation: 'Các cực từ cùng dấu đẩy nhau ra rất mạnh mẽ.', grammar: 'Quy tắc từ cực: Like poles repel each other.' },
    { word: 'pole', wordType: '(n)', meaning: 'cực (nam châm)', sentence: 'Every magnet has a North pole and South pole.', translation: 'Mỗi thanh nam châm đều có một cực Bắc và một cực Nam.', grammar: 'Cực từ: Every magnet has North and South poles.' },
    { word: 'magnetic field', wordType: '(n)', meaning: 'từ trường', matchWord: 'magnetic field', sentence: 'Iron filings trace invisible lines of a magnetic field.', translation: 'Mạt sắt vạch ra những đường vô hình của từ trường.', grammar: 'Trường lực: Filings trace lines of a magnetic field.' },
    { word: 'magnetic', wordType: '(adj)', meaning: 'có từ tính (bị nam châm hút)', sentence: 'Steel and iron are classic magnetic materials.', translation: 'Thép và sắt là những vật liệu có từ tính kinh điển.', grammar: 'Phân loại vật liệu: [Metals] are magnetic materials.' },
    { word: 'non-magnetic', wordType: '(adj)', meaning: 'không có từ tính', matchWord: 'non-magnetic', sentence: 'Wood, glass, and copper are non-magnetic objects.', translation: 'Gỗ, thủy tinh và đồng là những vật thể không có từ tính.', grammar: 'Phân loại: Wood and plastic are non-magnetic.' }
  ],
  c5s3: [
    { word: 'light', wordType: '(n)', meaning: 'ánh sáng', sentence: 'Light travels in straight lines across the room.', translation: 'Ánh sáng truyền đi theo đường thẳng băng qua căn phòng.', grammar: 'Định luật truyền ánh sáng: Light travels in straight lines.' },
    { word: 'shadow', wordType: '(n)', meaning: 'bóng râm, bóng tối', sentence: 'An opaque body blocks rays to cast a shadow.', translation: 'Một vật thể chắn sáng chặn các tia sáng để tạo nên bóng râm.', grammar: 'Sự tạo bóng: Blocking light casts a dark shadow.' },
    { word: 'reflect', wordType: '(v)', meaning: 'phản chiếu, phản xạ', sentence: 'Smooth shiny mirrors reflect light beams accurately.', translation: 'Những chiếc gương sáng bóng phản xạ các chùm ánh sáng chuẩn xác.', grammar: 'Định luật phản xạ: Mirrors reflect light beams.' },
    { word: 'source', wordType: '(n)', meaning: 'nguồn phát', sentence: 'The burning Sun is our primary source of light.', translation: 'Mặt trời rực lửa là nguồn phát ánh sáng chính yếu của chúng ta.', grammar: 'Nguồn năng lượng: The sun is our primary source of light.' },
    { word: 'beam', wordType: '(n)', meaning: 'chùm tia sáng', sentence: 'A bright beam from the flashlight cuts through fog.', translation: 'Một chùm tia sáng rực rỡ từ đèn pin cắt xuyên qua màn sương mù.', grammar: 'Tia sáng: A beam of light shines through [space].' },
    { word: 'mirror', wordType: '(n)', meaning: 'chiếc gương', sentence: 'Look into the bathroom mirror to see your reflection.', translation: 'Hãy nhìn vào chiếc gương phòng tắm để thấy hình ảnh phản chiếu của em.', grammar: 'Dụng cụ quang học: Look into the mirror to see reflections.' },
    { word: 'bright', wordType: '(adj)', meaning: 'sáng rực', sentence: 'Do not look directly at the bright midday sun.', translation: 'Đừng nhìn thẳng trực tiếp vào mặt trời giữa trưa sáng rực rỡ.', grammar: 'Cảnh báo an toàn: Do not look at bright sunlight.' }
  ],
  c5s4: [
    { word: 'sound', wordType: '(n)', meaning: 'âm thanh', sentence: 'Sound is produced whenever an object vibrates rapidly.', translation: 'Âm thanh được sinh ra bất cứ khi nào một vật rung động nhanh chóng.', grammar: 'Nguồn gốc âm thanh: Sound is produced when objects vibrate.' },
    { word: 'vibrate', wordType: '(v)', meaning: 'rung động', sentence: 'Guitar strings vibrate back and forth when plucked.', translation: 'Dây đàn ghi-ta rung động qua lại khi được gảy lên.', grammar: 'Cơ chế phát âm: Strings vibrate back and forth.' },
    { word: 'pitch', wordType: '(n)', meaning: 'cao độ (trầm/bổng)', sentence: 'A tiny whistle creates a sound of high pitch.', translation: 'Một chiếc còi tí hon tạo ra âm thanh có cao độ bổng vút.', grammar: 'Đặc trưng âm học: A whistle creates high pitch.' },
    { word: 'volume', wordType: '(n)', meaning: 'âm lượng (to/nhỏ)', sentence: 'Turn down the speaker volume to protect young ears.', translation: 'Vặn nhỏ âm lượng loa xuống để bảo vệ đôi tai non trẻ.', grammar: 'Điều chỉnh âm: Turn down the volume to protect ears.' },
    { word: 'loud', wordType: '(adj)', meaning: 'to, ầm ĩ', sentence: 'A crashing thunderstorm makes a very loud bang.', translation: 'Cơn giông bão sấm chớp ầm ĩ tạo ra tiếng nổ rất to.', grammar: 'Cường độ âm thanh: Thunder makes a loud noise.' },
    { word: 'quiet', wordType: '(adj)', meaning: 'êm dịu, nhỏ nhẹ', sentence: 'A gentle whisper in the library should be quiet.', translation: 'Lời thì thầm dịu dàng trong thư viện cần phải nhỏ nhẹ.', grammar: 'Mô tả âm lượng: A whisper is gentle and quiet.' },
    { word: 'echo', wordType: '(n)', meaning: 'tiếng vang, âm dội lại', sentence: 'Shout in an empty cave to hear your own echo.', translation: 'Hãy hét lên trong một hang động trống để nghe tiếng vang của chính em.', grammar: 'Hiện tượng phản xạ âm: Shout to hear an echo.' }
  ],
  c5s5: [
    { word: 'electricity', wordType: '(n)', meaning: 'dòng điện', sentence: 'Electricity flows along copper wires to illuminate lamps.', translation: 'Dòng điện chạy dọc theo các dây đồng để thắp sáng bóng đèn.', grammar: 'Dòng điện: Electricity flows along wires to power lamps.' },
    { word: 'circuit', wordType: '(n)', meaning: 'mạch điện', sentence: 'A complete unbroken loop is called a closed circuit.', translation: 'Một vòng khép kín không đứt đoạn được gọi là một mạch điện kín.', grammar: 'Mạch điện: A complete loop forms a closed circuit.' },
    { word: 'battery', wordType: '(n)', meaning: 'cục pin', sentence: 'A chemical battery supplies voltage to the circuit.', translation: 'Cục pin hóa học cung cấp điện áp cho mạch điện.', grammar: 'Nguồn điện di động: A battery supplies energy to the circuit.' },
    { word: 'wire', wordType: '(n)', meaning: 'dây dẫn điện', sentence: 'Insulated copper wire safely conducts electric power.', translation: 'Dây đồng có bọc cách điện dẫn dòng điện một cách an toàn.', grammar: 'Dẫn điện: Copper wire conducts electric power.' },
    { word: 'conductor', wordType: '(n)', meaning: 'chất dẫn điện tốt', sentence: 'Silver, gold, and copper metals are great conductors.', translation: 'Các kim loại bạc, vàng và đồng là những chất dẫn điện tuyệt vời.', grammar: 'Đặc tính dẫn điện: Metals are good electrical conductors.' },
    { word: 'insulator', wordType: '(n)', meaning: 'chất cách điện', sentence: 'Rubber handles act as safe protective insulators.', translation: 'Tay cầm bằng cao su đóng vai trò là những chất cách điện an toàn.', grammar: 'An toàn điện: Rubber acts as a protective insulator.' },
    { word: 'renewable', wordType: '(adj)', meaning: 'tái tạo được', sentence: 'Wind and solar generators provide clean renewable power.', translation: 'Máy phát điện gió và mặt trời cung cấp nguồn năng lượng tái tạo sạch sẽ.', grammar: 'Năng lượng tương lai: Solar power is a clean renewable energy.' }
  ],

  // Chương 6: Trái đất, Vũ trụ & Môi trường
  c6s1: [
    { word: 'solar system', wordType: '(n)', meaning: 'hệ mặt trời', matchWord: 'solar system', sentence: 'Eight planets orbit our Sun in the solar system.', translation: 'Tám hành tinh quay quanh Mặt trời của chúng ta trong hệ mặt trời.', grammar: 'Thiên văn học: Eight planets orbit the sun in our solar system.' },
    { word: 'planet', wordType: '(n)', meaning: 'hành tinh', sentence: 'Earth is the third rocky planet from the Sun.', translation: 'Trái đất là hành tinh đá thứ ba tính từ Mặt trời.', grammar: 'Vị trí hành tinh: Earth is the third planet from the sun.' },
    { word: 'orbit', wordType: '(v)', meaning: 'quay theo quỹ đạo', sentence: 'The Moon takes four weeks to orbit planet Earth.', translation: 'Mặt trăng mất bốn tuần để quay theo quỹ đạo quanh hành tinh Trái đất.', grammar: 'Chuyển động vũ trụ: The moon orbits around the Earth.' },
    { word: 'moon', wordType: '(n)', meaning: 'mặt trăng', sentence: 'The bright Moon reflects golden sunlight toward Earth.', translation: 'Mặt trăng sáng rực phản chiếu ánh nắng vàng về phía Trái đất.', grammar: 'Đặc điểm thiên thể: The moon reflects light from the sun.' },
    { word: 'star', wordType: '(n)', meaning: 'ngôi sao', sentence: 'Distant shining stars twinkle softly in the night.', translation: 'Những ngôi sao chiếu sáng xa xăm lấp lánh nhẹ nhàng trong đêm.', grammar: 'Vũ trụ: Distant stars twinkle in the night sky.' },
    { word: 'rotate', wordType: '(v)', meaning: 'tự xoay quanh trục', sentence: 'Earth takes twenty-four hours to rotate once.', translation: 'Trái đất mất hai mươi bốn giờ để tự xoay một vòng quanh trục.', grammar: 'Chu kỳ ngày đêm: Earth rotates once every 24 hours.' },
    { word: 'axis', wordType: '(n)', meaning: 'trục quay Trái đất', sentence: 'Day and night happen because Earth spins on its axis.', translation: 'Ngày và đêm xảy ra vì Trái đất tự quay quanh trục của nó.', grammar: 'Giải thích hiện tượng: Day and night happen as Earth spins on its axis.' }
  ],
  c6s2: [
    { word: 'weather', wordType: '(n)', meaning: 'thời tiết', sentence: 'Meteorologists study conditions to forecast daily weather.', translation: 'Các nhà khí tượng học nghiên cứu các điều kiện để dự báo thời tiết hàng ngày.', grammar: 'Khoa học thời tiết: Study conditions to forecast weather.' },
    { word: 'water cycle', wordType: '(n)', meaning: 'chu trình nước', matchWord: 'water cycle', sentence: 'The continuous water cycle recycles moisture on Earth.', translation: 'Chu trình nước liên tục tái tuần hoàn hơi ẩm trên Trái đất.', grammar: 'Chu trình tự nhiên: The water cycle recycles water on Earth.' },
    { word: 'precipitation', wordType: '(n)', meaning: 'lượng giáng thủy (mưa/tuyết)', sentence: 'Rain, hail, and fluffy snow are forms of precipitation.', translation: 'Mưa, mưa đá và tuyết xốp là các dạng của lượng giáng thủy.', grammar: 'Phân loại giáng thủy: Rain and snow are forms of precipitation.' },
    { word: 'cloud', wordType: '(n)', meaning: 'đám mây', sentence: 'Floating clouds contain millions of tiny water droplets.', translation: 'Những đám mây lơ lửng chứa hàng triệu giọt nước nhỏ xíu.', grammar: 'Cấu tạo mây: Clouds contain millions of water droplets.' },
    { word: 'rain', wordType: '(n)', meaning: 'cơn mưa', sentence: 'Spring rain nourishes thirsty wild plants in forests.', translation: 'Cơn mưa mùa xuân nuôi dưỡng cây cối đang khát trong những cánh rừng.', grammar: 'Tác dụng: Rain nourishes plants and fills rivers.' },
    { word: 'wind', wordType: '(n)', meaning: 'cơn gió', sentence: 'Gentle blowing wind turns giant blades of windmills.', translation: 'Cơn gió thổi nhè nhẹ làm quay những cánh quạt khổng lồ của cối xay gió.', grammar: 'Năng lượng gió: Wind turns the blades of windmills.' },
    { word: 'storm', wordType: '(n)', meaning: 'cơn giông bão', sentence: 'A violent storm brings thunderous lightning strikes.', translation: 'Cơn bão dữ dội mang theo những cú sét đánh sấm sét rền vang.', grammar: 'Hiện tượng thời tiết cực đoan: A storm brings wind and lightning.' }
  ],
  c6s3: [
    { word: 'rock', wordType: '(n)', meaning: 'đá', sentence: 'Granite is a very hard, enduring igneous rock.', translation: 'Đá hoa cương là một loại đá magma rất cứng và bền vững.', grammar: 'Địa chất học: Granite is a hard igneous rock.' },
    { word: 'mineral', wordType: '(n)', meaning: 'khoáng vật', sentence: 'A mineral has an orderly, repeating crystal structure.', translation: 'Một khoáng vật có cấu trúc tinh thể trật tự và lặp lại.', grammar: 'Khái niệm khoáng vật: A mineral has a crystal structure.' },
    { word: 'fossil', wordType: '(n)', meaning: 'hóa thạch', sentence: 'Scientists discover fossil bones preserved in sandstone.', translation: 'Các nhà khoa học phát hiện xương hóa thạch được bảo tồn trong đá sa thạch.', grammar: 'Bảo tồn dấu tích: Fossil bones are preserved in rock layers.' },
    { word: 'volcano', wordType: '(n)', meaning: 'núi lửa', sentence: 'Red-hot liquid magma erupts out of an active volcano.', translation: 'Magma lỏng đỏ rực phun trào ra khỏi một ngọn núi lửa đang hoạt động.', grammar: 'Hiện tượng địa chất: Magma erupts out of a volcano.' },
    { word: 'earthquake', wordType: '(n)', meaning: 'trận động đất', sentence: 'Shifting tectonic plates trigger a sudden strong earthquake.', translation: 'Các mảng kiến tạo dịch chuyển gây ra một trận động đất dữ dội bất ngờ.', grammar: 'Nguyên nhân địa chấn: Shifting plates trigger an earthquake.' },
    { word: 'erosion', wordType: '(n)', meaning: 'sự xói mòn đất đá', sentence: 'Fast rushing river water causes steep rock erosion.', translation: 'Dòng nước sông chảy xiết gây ra sự xói mòn đá hiểm trở.', grammar: 'Hiện tượng bào mòn: Water and wind cause rock erosion.' },
    { word: 'mountain', wordType: '(n)', meaning: 'ngọn núi cao', sentence: 'Crisp cold snow covers the rocky peak of a mountain.', translation: 'Tuyết lạnh giòn tan bao phủ đỉnh đá gồ ghề của ngọn núi.', grammar: 'Địa hình: Snow covers the peak of the mountain.' }
  ],
  c6s4: [
    { word: 'pollution', wordType: '(n)', meaning: 'sự ô nhiễm môi trường', sentence: 'Smoky chimney exhaust causes hazardous air pollution.', translation: 'Khói xả ra từ ống khói gây ra ô nhiễm không khí nguy hại.', grammar: 'Tác hại môi trường: Waste causes air and water pollution.' },
    { word: 'recycle', wordType: '(v)', meaning: 'tái chế', sentence: 'Recycle clean paper, plastics, and aluminum cans.', translation: 'Hãy tái chế giấy sạch, đồ nhựa và vỏ lon nhôm.', grammar: 'Hành động 3R: Recycle paper, plastic, and glass.' },
    { word: 'reduce', wordType: '(v)', meaning: 'giảm thiểu tiêu thụ rác', sentence: 'Reduce plastic bag usage when you go shopping.', translation: 'Hãy giảm thiểu việc sử dụng túi ni-lông khi em đi mua sắm.', grammar: 'Hành động 3R: Reduce plastic usage when shopping.' },
    { word: 'reuse', wordType: '(v)', meaning: 'tái sử dụng', sentence: 'Reuse glass jars to store sweet cookies or jam.', translation: 'Hãy tái sử dụng những chiếc lọ thủy tinh để đựng bánh quy ngọt hoặc mứt.', grammar: 'Hành động 3R: Reuse containers to store items.' },
    { word: 'environment', wordType: '(n)', meaning: 'môi trường sống', sentence: 'Planting leafy green trees purifies our shared environment.', translation: 'Trồng cây xanh tốt làm thanh lọc môi trường sống chung của chúng ta.', grammar: 'Bảo vệ môi trường: Planting trees purifies our environment.' },
    { word: 'global warming', wordType: '(n)', meaning: 'sự ấm lên toàn cầu', matchWord: 'global warming', sentence: 'Carbon emissions are speeding up global warming trends.', translation: 'Lượng phát thải các-bon đang đẩy nhanh các xu hướng ấm lên toàn cầu.', grammar: 'Biến đổi khí hậu: Emissions contribute to global warming.' },
    { word: 'protect', wordType: '(v)', meaning: 'bảo vệ, gìn giữ', sentence: 'We must protect wild animals from losing habitats.', translation: 'Chúng ta phải bảo vệ các loài động vật hoang dã khỏi mất môi trường sống.', grammar: 'Trách nhiệm sinh thái: We must protect animals from habitat loss.' }
  ],
  c6s5: [
    { word: 'observe', wordType: '(v)', meaning: 'quan sát kỹ càng', sentence: 'Observe the green insect through a clear magnifying glass.', translation: 'Hãy quan sát chú côn trùng màu xanh qua một chiếc kính lúp trong suốt.', grammar: 'Kỹ năng nghiên cứu: Observe the specimen through a magnifying glass.' },
    { word: 'experiment', wordType: '(n)', meaning: 'thí nghiệm khoa học', sentence: 'Wear safety goggles before starting the science experiment.', translation: 'Đeo kính bảo hộ an toàn trước khi bắt đầu bài thí nghiệm khoa học.', grammar: 'An toàn phòng lab: Wear goggles during the science experiment.' },
    { word: 'hypothesis', wordType: '(n)', meaning: 'giả thuyết khoa học', sentence: 'Form a testable hypothesis before you begin measurements.', translation: 'Hãy lập một giả thuyết có thể kiểm chứng trước khi em đo đạc.', grammar: 'Phương pháp khoa học: Form a hypothesis before testing.' },
    { word: 'record', wordType: '(v)', meaning: 'ghi chép số liệu', sentence: 'Record each temperature reading accurately in your log.', translation: 'Hãy ghi chép từng số đo nhiệt độ chuẩn xác vào sổ theo dõi của em.', grammar: 'Kỹ năng ghi số liệu: Record each reading in your table.' },
    { word: 'conclusion', wordType: '(n)', meaning: 'kết luận khoa học', sentence: 'Write a valid conclusion based on lab evidence.', translation: 'Viết một kết luận chuẩn xác dựa vào các bằng chứng trong phòng thí nghiệm.', grammar: 'Rút ra kết luận: Write a conclusion based on evidence.' },
    { word: 'investigate', wordType: '(v)', meaning: 'điều tra, khảo cứu', sentence: 'Investigate how warm temperature changes dissolving rates.', translation: 'Khảo cứu xem nhiệt độ ấm làm thay đổi tốc độ hòa tan ra sao.', grammar: 'Khám phá: Investigate how A affects B.' },
    { word: 'compare', wordType: '(v)', meaning: 'so sánh đối chiếu', sentence: 'Compare height differences between both sunflower pots.', translation: 'So sánh sự khác biệt về chiều cao giữa cả hai chậu hoa hướng dương.', grammar: 'Đối chiếu khoa học: Compare differences between two groups.' }
  ]
};

// --- HÀM TẠO 1 CÂU HỎI ĐƠN LẺ VỚI LOGIC LINH HOẠT ---
function createSingleQuestion(vOrig, type, vocabBank) {
  let v = { ...vOrig };
  
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
    
    if (type === 'math_calc') {
      let qText = v.template.replace('{A}', a).replace('{B}', b).replace('{C}', '___');
      let options = [c.toString(), (c + 10).toString(), Math.max(1, c - 2).toString()].sort(() => Math.random() - 0.5);
      return { type: 'fill', question: qText, answer: c.toString(), options: options, vocab: v };
    }
  } else {
    if (type === 'math_calc') type = 'fill'; 
  }
  
  if (type === 'vocab_match') {
    let wrongAnswers = vocabBank
      .filter(x => x.word !== v.word)
      .map(x => x.meaning)
      .sort(() => Math.random() - 0.5)
      .slice(0, 2);
    if (wrongAnswers.length < 2) wrongAnswers = ['đáp án mẫu A', 'đáp án mẫu B'];
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
    
    let wrongs = vocabBank
      .filter(x => x.word !== v.word)
      .map(x => x.word + " " + x.wordType)
      .sort(() => Math.random() - 0.5)
      .slice(0, 2);
    let options = [v.word + " " + v.wordType, ...wrongs].sort(() => Math.random() - 0.5);
    return { type, question: qText, answer: v.word, options, vocab: v };
  } 
  else if (type === 'arrange') {
    let words = v.sentence.split(' ');
    return { type, words: words, correct: v.sentence, vocab: v };
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
// ĐẢM BẢO MỖI ẢI LUYỆN ĐỦ CẢ 3 TRỤ CỘT:
// 1. Từ vựng (7 câu)
// 2. Ngữ pháp & Cấu trúc câu (7 câu)
// 3. Phát âm & Luyện nói phản xạ (6 câu)
// Tổng cộng = 20 câu / Ải (xáo trộn ngẫu nhiên)
export function generateQuestions(vocabBank, numQuestions = 20) {
  let questions = [];
  
  // 1. Nhóm từ vựng (7 câu)
  const vocabTypes = ['vocab_match', 'fill'];
  for (let i = 0; i < 7; i++) {
    let v = vocabBank[i % vocabBank.length];
    let type = vocabTypes[i % vocabTypes.length];
    let q = createSingleQuestion(v, type, vocabBank);
    if (q) questions.push(q);
  }
  
  // 2. Nhóm ngữ pháp & cấu trúc câu (7 câu)
  const grammarTypes = ['arrange', 'fill', 'math_calc'];
  for (let i = 0; i < 7; i++) {
    let v = vocabBank[i % vocabBank.length];
    let type = grammarTypes[i % grammarTypes.length];
    let q = createSingleQuestion(v, type, vocabBank);
    if (q) questions.push(q);
  }
  
  // 3. Nhóm phát âm & luyện nói (6 câu)
  const speechTypes = ['speak', 'qa_speak'];
  for (let i = 0; i < 6; i++) {
    let v = vocabBank[i % vocabBank.length];
    let type = speechTypes[i % speechTypes.length];
    let q = createSingleQuestion(v, type, vocabBank);
    if (q) questions.push(q);
  }
  
  // Nếu tổng câu chưa đủ numQuestions thì bổ sung thêm
  while (questions.length < numQuestions) {
    let v = vocabBank[Math.floor(Math.random() * vocabBank.length)];
    let types = ['vocab_match', 'fill', 'arrange', 'speak', 'qa_speak', 'math_calc'];
    let type = types[Math.floor(Math.random() * types.length)];
    let q = createSingleQuestion(v, type, vocabBank);
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
        let mQs = generateQuestions(mBank, 20);
        let sQs = generateQuestions(sciVocabBank, 20);
        
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
