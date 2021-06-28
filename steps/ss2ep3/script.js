
/*-----------bài 6-----------*/
let count6 = 0;

let dropdown6 = function() {
  let target = document.getElementById("menu-container6");
  
  if (count6 == 0) {
    target.style.top = "0px";
    count6 = 1;
  } else if (count6 == 1) {
    target.style.top = "-215px";
    count6 = 0;
  }
}

/*-----------bài 7-----------*/
let count7 = 0;

let dropdown7 = function() {
  let target1 = document.getElementById("menu-container7");
  let target2 = document.getElementById("logo7");

  if (count7 == 0) {
    target1.style.visibility = "visible";
    target1.style.opacity = "1";
    target2.style.visibility = "visible";
    target2.style.opacity = "1";
    
    count7 = 1;
  } else if (count7 == 1) {
    target1.style.visibility = "hidden";
    target1.style.opacity = "0";
    target2.style.visibility = "hidden";
    target2.style.opacity = "0";
    count7 = 0;
  }
}

document.getElementById("button6").onclick = dropdown6;
document.getElementById("button7").onclick = dropdown7;

