

if (!localStorage.getItem("Journey usernames")) {
  localStorage.setItem("Journey usernames", "[]")
}

let usernames = JSON.parse(localStorage.getItem("Journey usernames"))

let transitionPosition = 100

function transitionSwipeUp() {
  if (transitionPosition > -100) {
    transitionPosition -= 100;
    $(".transition-screen").css("top", `${transitionPosition}vh`)
  }
}

function transitionSwipeDown() {
  if (transitionPosition < 100) {
    transitionPosition += 100;
    $(".transition-screen").css("top", `${transitionPosition}vh`)
  }
}

function renderMulligan() {
  $(".modal-bg").toggleClass("hidden--fade")
}

$(".log-reg-wrapper").click(() => {
  $(".login-box h1:not(.success-header), .login-box p, .login-box button").toggleClass("hidden")
})

$(".btn--register").click(() => {
  let usernameInputValue = $(".login-box input").val()

  usernames.push(usernameInputValue)

  localStorage.setItem("Journey usernames", JSON.stringify(usernames))

  $(".login-box, .loading, .modal-bg").toggleClass("hidden--fade")
  
  setTimeout(() => {
    $(".loading").toggleClass("hidden")
    transitionSwipeUp()
  }, 2000);

  setTimeout(() => {
    window.location.replace("mulligan.html");
  }, 4000);

})


$(".test-btn1").click(() => {
  transitionSwipeUp()
})

$(".test-btn2").click(() => {
  transitionSwipeDown()
})