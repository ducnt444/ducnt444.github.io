

if (!localStorage.getItem("Journey usernames")) {
  localStorage.setItem("Journey usernames", "[]")
}

let usernames = JSON.parse(localStorage.getItem("Journey usernames"))

function transitionSwipeUp() {
  setTimeout(()=>{
    $(".transition-screen").addClass("transition")
    $(".transition-screen").css("top", `0vh`)
  }, 2000)
}

function transitionSwipeDown() {
  setTimeout(()=>{
    $(".transition-screen").addClass("transition")
    $(".transition-screen").css("top", `100vh`)
  }, 2500)
}

function redirectPage(targetPage) {
  transitionSwipeUp()
  setTimeout(()=> {
    window.location.replace(`${targetPage}.html`);
  }, 4000)
}

$(document).ready(
  transitionSwipeDown()
);

$(".test-btn1").click(() => {
  transitionSwipeUp()
});

$(".test-btn2").click(() => {
  transitionSwipeDown()
});