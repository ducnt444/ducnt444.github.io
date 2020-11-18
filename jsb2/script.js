
//Toán tử


//Viết chương trình cho phép nhập 2 số, tính tổng 2 số đó
/*
let a = +prompt("Nhập số thứ nhất", "");
let b = +prompt("Nhập số thứ hai", "");
if (isNaN(a) && isNaN(b)){
  alert(`Cả hai dữ liệu đều không phải là số, phép tính thất bại`)
} else if (isNaN(a)) {
  alert(`Dữ liệu thứ nhất không phải là số, phép tính thất bại`)
} else if (isNaN(b)) {
  alert(`Dữ liệu thứ hai không phải là số, phép tính thất bại`)
} else {
  alert(`Tổng hai số là ${a} + ${b} = ${a + b}`)
}
*/

//Viết chương trình cho phép nhập 2 số, in ra kết quả của tất cả các phép tính số học giữa 2 số đó
/*
let a = +prompt("Nhập số thứ nhất", "");
let b = +prompt("Nhập số thứ hai", "");

if (isNaN(a) && isNaN(b)){
  alert(`Cả hai dữ liệu đều không phải là số, phép tính thất bại`)
} else if (isNaN(a)) {
  alert(`Dữ liệu thứ nhất không phải là số, phép tính thất bại`)
} else if (isNaN(b)) {
  alert(`Dữ liệu thứ hai không phải là số, phép tính thất bại`)
} else {
  alert(`
  ${a} + ${b} = ${a + b}, 
  ${a} - ${b} = ${a - b}, 
  ${a} * ${b} = ${a * b}, 
  ${a} / ${b} = ${a / b}
  `); 
}
*/

//Viết chương trình cho phép nhập chiều dài và rộng của hình chữ nhật, tính ra chu vi của nó

/* let a = +prompt("Nhập chiều dài của hình chữ nhật", "");
let b = +prompt("Nhập chiều rộng của hình chữ nhật", "");

if (isNaN(a) && isNaN(b)){
  alert(`Cả hai dữ liệu đều không phải là số, phép tính thất bại`)
} else if (isNaN(a)) {
  alert(`Dữ liệu thứ nhất không phải là số, phép tính thất bại`)
} else if (isNaN(b)) {
  alert(`Dữ liệu thứ hai không phải là số, phép tính thất bại`)
} else {
  alert(`Chu vi hình chữ nhật là (${a}+${b})*2 = ${(a+b)*2}`); 
} */


//Viết chương trình cho phép nhập chiều dài và rộng của hình chữ nhật, tính ra diện tích của nó

/* let a = +prompt("Nhập chiều dài của hình chữ nhật", "");
let b = +prompt("Nhập nhập chiều rộng của hình chữ nhật", "");

if (isNaN(a) && isNaN(b)){
  alert(`Cả hai dữ liệu đều không phải là số, phép tính thất bại`)
} else if (isNaN(a)) {
  alert(`Dữ liệu thứ nhất không phải là số, phép tính thất bại`)
} else if (isNaN(b)) {
  alert(`Dữ liệu thứ hai không phải là số, phép tính thất bại`)
} else {
  alert(`Diện tích hình chữ nhật là ${a}*${b} = ${a*b}`); 
} */

//Viết chương trình cho phép nhập vào bán kính hình tròn, in ra kết quả đường kính, chu vi và diện tích của nó

/* let a = +prompt("Nhập bán kính hình tròn", "");

if (isNaN(a)) {
  alert(`Dữ liệu nhập vào không phải là số, phép tính thất bại`)
} else {
  alert(`
  Đường kính hình tròn là ${a} * 2 = ${a * 2} 
  Chu vi hình tròn là ${a} * 2 * π = ${a * 2 * 3.1416} 
  Diện tích hình tròn là ${a}^2 * π = ${Math.pow(a, 2) * 3.1416}
  `); 
} */

//Viết chương trình cho phép nhập vào 1 số ở đơn vị cm, chuyển đổi và in ra giá trị ở đơn vị m và km

/* let a = +prompt("Nhập một số ở đơn vị cm", "");

if (isNaN(a)) {
  alert(`Dữ liệu nhập vào không phải là số, phép tính thất bại`)
} else {
  alert(`
  Quy đổi ${a} cm sang đơn vị m: ${a} * 0.01 = ${a * 0.01} m 
  Quy đổi ${a} cm sang đơn vị km: ${a} * 0.00001 = ${a * 0.00001} km 
  `); 
} */

//Viết chương trình cho phép nhập nhiệt độ có đơn vị Celsius, in ra nhiệt độ Fahrenheit

/* let a = +prompt("Nhập nhiệt độ có đơn vị Celsius", "");

if (isNaN(a)) {
  alert(`Dữ liệu nhập vào không phải là số, phép tính thất bại`)
} else {
  alert(`
  Quy đổi ${a} Celsius sang nhiệt độ Fahrenheit: ${a}°C * (9/5) + 32 = ${a * (9/5) + 32}°F
  `); 
}  */

//Cấu trúc điều khiển

//Viết chương trình cho phép nhập 2 số, tìm số lớn nhất trong 2 số

/* let a = +prompt("Nhập số thứ nhất", "");
let b = +prompt("Nhập số thứ hai", "");

if (isNaN(a) && isNaN(b)) {
  alert(`Cả hai dữ liệu đều không phải là số, phép tính thất bại`)
} else if (isNaN(a)) {
  alert(`Dữ liệu thứ nhất không phải là số, phép tính thất bại`)
} else if (isNaN(b)) {
  alert(`Dữ liệu thứ hai không phải là số, phép tính thất bại`)
} else if (a < b) {
  alert(`${b} là số lớn nhất trong 2 số`)
} else {
  alert(`${a} là số lớn nhất trong 2 số`)
} */

//Viết chương trình cho phép nhập 3 số, tìm số lớn nhất trong 3 số
/* 
let a = +prompt("Nhập số thứ nhất", "");
let b = +prompt("Nhập số thứ hai", "");
let c = +prompt("Nhập số thứ ba", "");

if (isNaN(a) && isNaN(b) && isNaN(c) ) {
  alert(`Cả ba dữ liệu đều không phải là số, phép tính thất bại`)
} else if (isNaN(a) && isNaN(b)) {
  alert(`Dữ liệu thứ nhất và thứ hai không phải là số, phép tính thất bại`)
} else if (isNaN(a) && isNaN(c)) {
  alert(`Dữ liệu thứ nhất và thứ ba không phải là số, phép tính thất bại`)
} else if (isNaN(b) && isNaN(c)) {
  alert(`Dữ liệu thứ hai và thứ ba không phải là số, phép tính thất bại`)
} else if (isNaN(a)) {
  alert(`Dữ liệu thứ nhất không phải là số, phép tính thất bại`)
} else if (isNaN(b)) {
  alert(`Dữ liệu thứ hai không phải là số, phép tính thất bại`)
} else if (isNaN(c)) {
  alert(`Dữ liệu thứ ba không phải là số, phép tính thất bại`)
} else if (Math.max(a, b, c) == a) {
  alert(`${a} là số lớn nhất trong 3 số`)
} else if (Math.max(a, b, c) == b) {
  alert(`${b} là số lớn nhất trong 3 số`)
} else {
  alert(`${c} là số lớn nhất trong 3 số`)
} */

// Viết chương trình cho phép nhập 1 số, kiểm tra xem một số là số âm, dương, hay bằng 0

/* let a = +prompt("Nhập một số", "");

if (isNaN(a)) {
  alert(`Dữ liệu nhập vào không phải là số, phép tính thất bại`)
} else if (a > 0) {
  alert(`${a} là số dương`); 
} else if (a < 0) {
  alert(`${a} là số âm`); 
} else {
  alert(`${a} bằng 0`); 
} */

//Viết chương trình cho phép nhập 1 số, kiểm tra số đó có chia hết cho 5 và 11 hay không

/* let a = +prompt("Nhập một số", "");

if (isNaN(a)) {
  alert(`Dữ liệu nhập vào không phải là số, phép tính thất bại`)
} else if (a % 5 == 0 && a % 11 == 0) {
  alert(`${a} có chia hết cho 5 và 11`); 
} else {
  alert(`${a} không chia hết cho 5 và 11`); 
} */

//Viết chương trình cho phép nhập 1 số, kiểm tra số đó là chẵn hay lẻ

/* let a = +prompt("Nhập một số", "");

if (isNaN(a)) {
  alert(`Dữ liệu nhập vào không phải là số, phép tính thất bại`)
} else if (a % 2 == 0) {
  alert(`${a} là số chẵn`); 
} else {
  alert(`${a} là số lẻ`); 
} */

//Viết chương trình cho phép nhập 1 năm, kiểm tra số đó là năm nhuận hay không

/* let a = +prompt("Nhập số năm", "");

if (isNaN(a)) {
  alert(`Dữ liệu nhập vào không phải là số, phép tính thất bại`)
} else if (a % 4 != 0) {
  alert(`${a} không phải là năm nhuận `); 
} else if (a % 100 != 0){
  alert(`${a} là năm nhuận`); 
} else if (a % 400 != 0){
  alert(`${a} không phải là năm nhuận`); 
} else {
  alert(`${a} là năm nhuận`);
}
 */

//Viết chương trình cho phép nhập 1 ký tự, kiểm tra ký tự đó có thuộc bảng alphabet hay không (a-zA-Z)

/* let a = prompt("Nhập một ký tự", "");
let regexAlphabet = /[a-z]/i;
if (a.search(regexAlphabet) != -1) {
  alert(`${a} thuộc bảng alphabet`)
} else {
  alert(`${a} không thuộc bảng alphabet`); 
} */

//Viết chương trình cho phép nhập 1 ký tự, kiểm tra ký tự đó là nguyên âm hay phụ âm

/* let a = prompt("Nhập một ký tự", "");
let regexVowel = /[aiueo]/i;
let regexConsonant = /[a-z]/i
if (a.search(regexVowel) != -1) {
  alert(`${a} là nguyên âm`)
} else if (a.search(regexConsonant) != -1) {
  alert(`${a} là phụ âm`); 
} else {
  alert(`${a} không phải là nguyên âm hoặc phụ âm`); 
} */

//Viết chương trình cho phép nhập 1 ký tự, kiểm tra ký tự đó là chữ thường hay chữ hoa

/* let a = prompt("Nhập một ký tự", "");
let regexLower = /[a-z]/;
let regexUpper = /[A-Z]/;

if (a.search(regexLower) != -1) {
  alert(`${a} là chữ thường`)
} else if (a.search(regexUpper) != -1) {
  alert(`${a} là chữ hoa`); 
} else {
  alert(`${a} không phải là chữ cái`); 
} */

//Viết chương trình cho phép nhập 1 số là ngày trong tuần, in ra thứ tương ứng

/* let a = +prompt("Nhập một số tương ứng thứ trong tuần (2-8)", "");

switch (a) {
  case 2:
    alert(`Chắc chắn là thứ high`);
    break;
  case 3:
    alert(`Thứ ba`);
    break;
  case 4:
    alert(`Thứ tư`);
    break;
  case 5:
    alert(`Thứ năm`);
    break;
  case 6:
    alert(`TGIF!`);
    break;
  case 7:
    alert(`Thứ bảy máu chảy về đâu?`);
    break;
  case 8:
    alert(`Tin buồn: mai là thứ hai`);
    break;
  default:
    alert(`Dữ liệu nhập vào không hợp lệ (phải là số từ 2-8)`);
} */

//Viết chương trình cho phép nhập 1 tháng, in ra số ngày trong tháng

/* let a = +prompt("Chọn một tháng (1-12)", "");

switch (a) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    alert(`Tháng ${a} có 31 ngày`);
    break;
  case 2:
    alert(`Tháng ${a} có 28 ngày hoặc 29 ngày nếu là năm nhuận`);
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    alert(`Tháng ${a} có 30 ngày`);
    break;  
  default:
    alert(`Dữ liệu nhập vào không hợp lệ (phải là số từ 1-12)`);
} */

//Viết chương trình cho phép nhập 3 số a b c, in ra nghiệm phương trình bậc 2 tương ứng

/* let a = +prompt("Nhập số a", "")
let b = +prompt("Nhập số b", "");
let c = +prompt("Nhập số c", "");
let z = Math.pow(b, 2) - 4 * a * c;

if (z > 0) {
  alert(`
  Vì biệt số (b^2 - 4ac) lớn hơn 0
  => nghiệm phương trình bậc 2 ax^2 + bx + c = 0 là:
  x1 = ( -b + √(b^2 - 4ac) ) / 2a 
  = ${ ( -b + Math.sqrt(z) ) / (2 * a) } 
  x2 = ( -b - √(b^2 - 4ac) ) / 2a 
  = ${ ( -b - Math.sqrt(z) ) / (2 * a) } 
  `)
} else if (z == 0) {
  alert(`
  Vì biệt số (b^2 - 4ac) = 0 
  => nghiệm phương trình bậc 2 ax^2 + bx + c = 0 là:
  x1 = x2 = (-b) / 2a ) = ${(-b) / (2 * a)}
  `)
}
 */

//Viết chương trình đổi điểm từ hệ số 10 sang hệ chữ cho sinh viên, điểm nhập từ bàn phím

/* let a = prompt("Nhập điểm số (hệ số 10)", "");

if ((isNaN(a)) || a.search(/\s/g) != -1) {
  alert(`Dữ liệu nhập vào không hợp lệ (phải là số từ 0-10)`);
} else if (0 <= a && a < 4) {
  alert(`Điểm: F`)
} else if (4 <= a && a < 5.5) {
  alert(`Điểm: D`)
} else if (5.5 <= a && a < 7) {
  alert(`Điểm: C`)
} else if (7 <= a && a < 8.5) {
  alert(`Điểm: B`)
} else if (8.5 <= a && a <= 10) {
  alert(`Điểm: A`)
} else {
  alert(`Dữ liệu nhập vào không hợp lệ (phải là số từ 0-10)`);
}
 */

//Viết chương trình cho phép nhập lương cơ bản, tính tổng lương của nhân viên theo công thức: Lương = Lương cơ bản + HRA + DA

let a = +prompt("Nhập lương cơ bản (phải là số, lớn hơn hoặc bằng 0)", "");
var hra;
var da;

if ((isNaN(a)) || a < 0) {
  alert(`Dữ liệu nhập vào không hợp lệ (phải là số, lớn hơn hoặc bằng 0)`);
} else if (0 <= a && a < 2000000) {
  hra = a * 0.2;
  da = a * 0.8;
  alert(`Tổng lương = Lương cơ bản + HRA(20% lương cơ bản) + DA(80% lương cơ bản) = ${a} + ${hra} + ${da} = ${a + hra + da}`)
} else if (2000000 <= a && a < 5000000) {
  hra = a * 0.25;
  da = a * 0.9;
  alert(`Tổng lương = Lương cơ bản + HRA(25% lương cơ bản) + DA(90% lương cơ bản) = ${a} + ${hra} + ${da} = ${a + hra + da}`)
} else {
  hra = a * 0.3;
  da = a;
  alert(`Tổng lương = Lương cơ bản + HRA(30% lương cơ bản) + DA(100% lương cơ bản) = ${a} + ${hra} + ${da} = ${a + hra + da}`);
}
