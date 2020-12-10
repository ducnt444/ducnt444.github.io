let reset; 
//Mỗi khi bấm dấu "=" thì reset sẽ = 1. Nếu nhập số mới trong khi reset = 1 thì sẽ kích hoạt hàm xóa màn hình để nhập giá trị mới (sau đó reset lại về 0) 
let pointStop = 0; 
// pointStop bình thường sẽ = 0. Mỗi khi bấm dấu "." thì pointStop sẽ = 1. Khi pointStop = 1 thì sẽ không thể nhập thêm dấu "." nữa, tránh TH bấm "." nhiều lần VD: 5...9. pointStop sẽ trở về 0 để mở khóa dấu "." với: hàm xóa, hàm dấu (để nhập số thập phân khác), hàm tổng kết (nếu kết quả là số nguyên). 

let clearResult = function() {  //hàm xóa
  document.getElementById("display").innerText = ""; //xóa màn hình chính
  document.getElementById("minor").innerText = ""; //xóa màn hình phụ
  pointStop = 0; //trả pointStop về 0 để mở khóa nút "."
}

let addNum = function() {   //hàm thêm số 0 - 9
  if (reset == 1) {   //check xem nếu reset đang ở trạng thái = 1 (do tổng kết)
    clearResult();    //thì kích hoạt hàm xóa màn hình để nhập dữ liệu mới
  }
  let input = document.getElementById("display").innerText;  
  if (input.length <= 11) { //check: nếu độ dài input vượt quá giới hạn 11 ký tự thì không chạy hàm
    document.getElementById("display").innerText += this.innerText; //nội dung trên màn chính sẽ + thêm nội dung từ nút gọi hàm số này. 
  }
  document.getElementById("minor").innerText = eval(document.getElementById("display").innerText.replace("×", "*").replace("÷", "/"));
  //thay đổi các giá trị "×" và "÷" trong biểu thức về dạng "*" và "/" để hàm eval tính toán biểu thức (để hiển thị lên màn phụ) 
}

let addOps = function() {  //hàm thêm dấu + - * /
  reset = 0;  //đưa reset về 0 để tiếp tục thao tác với dấu thay vì xóa màn hình
  pointStop = 0;  //đưa pointStop về 0 để mở khóa dấu "."
  let input = document.getElementById("display").innerText;
  if (input.length <= 11) { //check: nếu độ dài input vượt quá giới hạn 11 ký tự thì không chạy hàm
    document.getElementById("display").innerText += this.innerHTML; //nội dung trên màn chính sẽ + thêm nội dung từ nút gọi hàm số này.
  }
  document.getElementById("minor").innerText = eval(document.getElementById("display").innerText.replace("×", "*").replace("÷", "/"));
  //thay đổi các giá trị "×" và "÷" trong biểu thức về dạng "*" và "/" để hàm eval tính toán biểu thức (để hiển thị lên màn phụ) 
}

let backSpace = function() {
  let input = document.getElementById("display").innerText;
  document.getElementById("display").innerText = input.slice(0, input.length-1);
}

let addNePos = function() {
  reset = 0;
  let input = document.getElementById("display").innerText;
  if (input.length <= 13 && input.length > 0 ) {
    document.getElementById("display").innerText = 0 - input;
  }
  pointStop = 0;
}

let addPoint = function() {
  reset = 0;
  if (pointStop == 0) {
    let input = document.getElementById("display").innerText;
    if (input.length <= 13) {
      document.getElementById("display").innerText += this.innerHTML;
    }
      document.getElementById("minor").innerText = eval(document.getElementById("display").innerText.replace("×", "*").replace("÷", "/"));
  }
  pointStop = 1;
}

let equalBtn = function() {
  let x = document.getElementById("minor").innerText.slice(0, 12);
  document.getElementById("display").innerText = x;
  reset = 1;
  if (Number.isInteger(+x)) {
    pointStop = 0;
  }
}

let addPow2 = function() {
  let x = document.getElementById("minor").innerText.slice(0, 12);
  document.getElementById("display").innerText = eval(x * x);
  document.getElementById("minor").innerText = "";
  reset = 1;
  pointStop = 0;
}


document.getElementById("switch-btn").onclick = addNePos;
document.getElementById("back-btn").onclick = backSpace;
document.getElementById("clear-btn").onclick = clearResult;
document.getElementById("equal-btn").onclick = equalBtn;
document.getElementById("point-btn").onclick = addPoint;
document.getElementById("pow2-btn").onclick = addPow2;


for (let i = 0; i < 10; i ++) {
  document.getElementById(`num${i}`).onclick = addNum;
}

for (let i = 1; i < 5; i ++) {
  document.getElementById(`op${i}`).onclick = addOps;
}






