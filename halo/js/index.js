
$(window).on('load', function() {
  if (sessionStorage.getItem("updates") != "off") {
    $('#updates').modal('show');
  }
  sessionStorage.setItem("updates", "off");
});
