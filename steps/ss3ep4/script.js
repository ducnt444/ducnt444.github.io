
//Tạo 1 trang HTML với nội dung là 3 đoạn văn. Hãy viết các function có tác dụng như sau:

//1. function changeColor(): Đổi màu chữ của 3 đoạn văn theo thứ tự xanh, vàng, đỏ.

function changeColor() {
  document.getElementById("para1").style.color = "green";
  document.getElementById("para2").style.color = "yellow";
  document.getElementById("para3").style.color = "red";
}

/* changeColor(); */

//2. function changeBgColor(color): Thay đổi màu nền của trang thành màu color.

function changeBgColor(color) {
  document.body.style.backgroundColor = color;
}

/* changeBgColor("pink");
changeBgColor("brown"); */

//3.function copyContent(paragraph1, paragraph2): Thay đổi nội dung của đoạn văn paragraph1 thành giống nội dung của đoạn văn paragraph2 (tham số truyền vào là id của 2 đoạn văn hoặc thứ tự của đoạn văn).

function copyContent(paragraph1, paragraph2) {
  document.getElementById(paragraph1).innerHTML = document.getElementById(paragraph2).innerHTML;
}

/* copyContent("para1", "para2"); */

//4. function changeFontSize(x): Thay đổi kích thước font chữ của cả 3 đoạn văn thành x pixels (x là một số nguyên).

function changeFontSize(x) { 
  //cũng có thể dùng document.get ID để thay đổi từng đoạn văn, em dùng cấu trúc này để thử áp dụng vòng lặp với DOM và cách truy xuất element khác ngoài ID
  let allPTag = document.getElementsByTagName("P");
  for (let i = 0; i < allPTag.length; i++) {
    allPTag[i].style.fontSize = x;
  }
}

/* changeFontSize("25.5px");
changeFontSize("13.5px"); */

//5. function increaseFontSize(paragraph): Tăng kích thước font chữ của đoạn văn mong muốn (tham số truyền vào là id đoạn văn hoặc thứ tự đoạn văn) lên 1 pixel so với kích thước hiện tại, kích thước tăng lên không được vượt quá 30 pixels (Sử dụng sau khi gọi hàm changeFontSize() hoặc dùng window.getComputedStyle).

function increaseFontSize(paragraph) {
  let target = document.getElementById(paragraph);
  let currentSize = parseFloat(window.getComputedStyle(target).fontSize);
  if (currentSize <= 29) {
    target.style.fontSize = `${currentSize + 1}px`;
  }
}

/* increaseFontSize("para1");
increaseFontSize("para1");
increaseFontSize("para1");
increaseFontSize("para1");
increaseFontSize("para1"); */

//6. function decreaseFontSize(paragraph): Giảm kích thước font chữ của đoạn văn mong muốn (tham số truyền vào là id đoạn văn hoặc thứ tự đoạn văn) xuống 1 pixels so với kích thước hiện tại, kích thước giảm xuống không vượt quá 10 pixels.

function decreaseFontSize(paragraph) {
  let target = document.getElementById(paragraph);
  let currentSize = parseFloat(window.getComputedStyle(target).fontSize);
  if (currentSize >= 11) {
    target.style.fontSize = `${currentSize - 1}px`;
  }
}

/* decreaseFontSize("para1");
decreaseFontSize("para1");
decreaseFontSize("para1");
decreaseFontSize("para1");
decreaseFontSize("para1");
decreaseFontSize("para1");
decreaseFontSize("para1");
decreaseFontSize("para1");
decreaseFontSize("para1"); */





