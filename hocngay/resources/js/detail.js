$(".aside-toggler").on("click", function() {
    $(".aside-left").toggleClass("aside-left-active");
    $(".customized-overlay").toggleClass("customized-overlay-active");
})
$(".customized-overlay").on("click", function() {
    $(".aside-left").toggleClass("aside-left-active");
    $(".customized-overlay").toggleClass("customized-overlay-active");
})
