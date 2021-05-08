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

$(".btn--register").click(() => {
  let usernameInputValue = $(".title-box input").val()
  renderMenu(usernameInputValue);

  usernames.push(usernameInputValue)
  localStorage.setItem("Journey usernames", JSON.stringify(usernames))
})

$(".title-box").on("click", ".btn--new", () => {
  $(".title-box, .loading, .modal-bg").toggleClass("hidden--fade");
  redirectPage("lobby")
})