

if (!localStorage.getItem("Journey usernames")) {
  localStorage.setItem("Journey usernames", "[]")
}

let usernames = JSON.parse(localStorage.getItem("Journey usernames"))

let transitionPosition = 100

function transitionSwipeUp() {
  transitionPosition -= 100;
  $(".transition-screen").css("top", `${transitionPosition}vh`)
}

function transitionSwipeDown() {
  transitionPosition += 100;
  $(".transition-screen").css("top", `${transitionPosition}vh`)
}

function renderMenu(user) {
  $(".title-box").html(`
  <h1 class="menu-header text-center">${user}</h1>
  <div class="menu-btn-group d-flex flex-column justify-content-center align-items-center">
    <button class="btn btn--continue" href="lobby.html">Continue</button>
    <button class="btn btn--new" type="button">New game</button>
  </div>

  `)
}

$(".log-reg-wrapper").click(() => {
  $(".title-box h1:not(.menu-header), .title-box p, .title-box button").toggleClass("hidden")
})

$(".btn--login").click(() => {
  let usernameInputValue = $(".title-box input").val()
  renderMenu(usernameInputValue);
})

$(".title-box").on("click", ".btn--new", () => {
  $(".title-box, .loading, .modal-bg").toggleClass("hidden--fade")
  setTimeout(()=> {
    transitionSwipeUp()
  }, 2000)
  setTimeout(()=> {
    window.location.replace("lobby.html");
  }, 4000)
})

$(".btn--register").click(() => {
  let usernameInputValue = $(".title-box input").val()
  renderMenu(usernameInputValue);

  usernames.push(usernameInputValue)
  localStorage.setItem("Journey usernames", JSON.stringify(usernames))

/*   $(".title-box, .loading, .modal-bg").toggleClass("hidden--fade")
  
  setTimeout(() => {
    $(".loading").toggleClass("hidden")
    transitionSwipeUp()
  }, 2000);
  
  <button class="btn btn--desk" type="button">Profile</button>
  <button class="btn btn--other" type="button">Other</button>

  setTimeout(() => {
    window.location.replace("mulligan.html");
  }, 2000); */


})


$(".test-btn1").click(() => {
  transitionSwipeUp()
})

$(".test-btn2").click(() => {
  transitionSwipeDown()
})