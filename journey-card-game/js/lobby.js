
$(".menu-logout").click(()=> {
  $(".title-box, .loading, .modal-bg").toggleClass("hidden--fade");
  redirectPage("index")
})