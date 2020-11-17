
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
let regexAlphabet = /[a-z]/gi;
if (a.search(regexAlphabet) != -1) {
  alert(`${a} thuộc bảng alphabet`)
} else {
  alert(`${a} không thuộc bảng alphabet`); 
} */

