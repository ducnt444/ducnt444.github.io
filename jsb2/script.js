
//Toán tử


//Viết chương trình cho phép nhập 2 số, tính tổng 2 số đó
/*
let a = +prompt("Nhập số thứ nhất", "");
let b = +prompt("Nhập số thứ hai", "");
if (isNaN(a)) {
  alert(`Dữ liệu thứ nhất không phải là số, phép tính thất bại`)
} else if (isNaN(b)) {
  alert(`Dữ liệu thứ hai không phải là số, phép tính thất bại`)
} else {
  alert(`Tổng hai số là ${a + b}`)
}
*/

//Viết chương trình cho phép nhập 2 số, in ra kết quả của tất cả các phép tính số học giữa 2 số đó
/*
let a = +prompt("Nhập số thứ nhất", "");
let b = +prompt("Nhập số thứ hai", "");

if (isNaN(a)) {
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
/*
let a = +prompt("Nhập nhập chiều dài của hình chữ nhật", "");
let b = +prompt("Nhập nhập chiều rộng của hình chữ nhật", "");

if (isNaN(a)) {
  alert(`Dữ liệu thứ nhất không phải là số, phép tính thất bại`)
} else if (isNaN(b)) {
  alert(`Dữ liệu thứ hai không phải là số, phép tính thất bại`)
} else {
  alert(`Chu vi hình chữ nhật là (a+b)*2 = ${(a+b)*2}`); 
}
*/

//Viết chương trình cho phép nhập chiều dài và rộng của hình chữ nhật, tính ra diện tích của nó

let a = +prompt("Nhập nhập chiều dài của hình chữ nhật", "");
let b = +prompt("Nhập nhập chiều rộng của hình chữ nhật", "");

if (isNaN(a)) {
  alert(`Dữ liệu thứ nhất không phải là số, phép tính thất bại`)
} else if (isNaN(b)) {
  alert(`Dữ liệu thứ hai không phải là số, phép tính thất bại`)
} else {
  alert(`Chu vi hình chữ nhật là a*b = 3${a*b}`); 
}
