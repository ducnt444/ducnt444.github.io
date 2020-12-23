/*-----------bài 6-----------*/
let check = 0; //khi check6 == 0 thì menu sẽ ẩn, check6 == 1 thì menu sẽ hiện. check6 thay đổi qua mỗi lần click

let dropdown = function() {
  let menu = document.getElementById("menu");
  
  if (check == 0) {  //nếu khi click mà check đang == 0
    menu.style.visibility = "visible"; 
    menu.style.opacity  = "1";   
    check = 1;   //rồi chuyển check về == 1 
  } else if (check == 1) { //nếu khi click mà check đang == 1
    menu.style.visibility = "hidden"; 
    menu.style.opacity  = "0";
    check = 0;   //rồi chuyển check về == 0  
  }
}

document.getElementById("menu-button").onclick = dropdown;
