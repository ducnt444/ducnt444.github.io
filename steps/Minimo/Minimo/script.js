/*-----------bài 6-----------*/
let checkMenu = 0; //khi check == 0 thì menu sẽ ẩn, check == 1 thì menu sẽ hiện. check thay đổi qua mỗi lần click

let dropdown = function() {
  
  let menu = document.getElementById("menu");
  
  if (checkMenu == 0) {  //nếu khi click mà check đang == 0
    menu.style.visibility = "visible"; 
    menu.style.opacity  = "1";   
    checkMenu = 1;   //rồi chuyển check về == 1 
  } else if (checkMenu == 1) { //nếu khi click mà check đang == 1
    menu.style.visibility = "hidden"; 
    menu.style.opacity  = "0";
    checkMenu = 0;   //rồi chuyển check về == 0  
  }
}

document.getElementById("menu-button").onclick = dropdown;




let checkSidebar = 0; //khi check == 0 thì menu sẽ ẩn, check == 1 thì menu sẽ trượt. check thay đổi qua mỗi lần click

let slideLeft = function() {

  let bar = document.getElementById("sidebar");
  
  if (checkSidebar == 0) {  //nếu khi click mà check đang == 0
    bar.style.left = "0px";   
    checkSidebar = 1;   //rồi chuyển check về == 1 
  } else if (checkSidebar == 1) { //nếu khi click mà check đang == 1
    bar.style.left = "-272px"; 
    checkSidebar = 0;   //rồi chuyển check về == 0  
  }
}

document.getElementById("sidebar-button").onclick = slideLeft;
