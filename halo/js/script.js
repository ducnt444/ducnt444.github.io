$(document).ready(function(){
  $('.hot-row').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});

/* let i = 0;

let counter = setInterval(function(){
  i += 2;
  if (i <= 100){
    $('.progress-bar').css('width', i+'%');
  } else {
    $('.progress-bar').css('width', '0%');
    i = -10;
  }  
}, 100); */

let searchBarStatus = 0;

function searchBarToggler() {
  if (searchBarStatus == 0) {
    document.getElementsByClassName("search-bar")[0].style.visibility = "visible";
    document.getElementsByClassName("search-bar")[0].style.opacity = 1;    
    searchBarStatus = 1;
  } else {
    document.getElementsByClassName("search-bar")[0].style.visibility = "hidden";
    document.getElementsByClassName("search-bar")[0].style.opacity = 0;    
    searchBarStatus = 0;
  }
}

let logregStatus = "login";
let regPart = document.getElementsByClassName("reg");
let logPart = document.getElementsByClassName("log");
let logreg = document.getElementById("logreg");

function logregSwitch() {
  if (logregStatus == "login") {
    for (let i = 0; i < logPart.length; i++) {
      logPart[i].style.display = "none";
    }

    regPart[0].style.display = "block";
    for (let i = 1; i < 3; i++) {
      regPart[i].style.display = "flex";
    }
    for (let i = 3; i < regPart.length; i++) {
      regPart[i].style.display = "block";
    }

    logregStatus = "register";
  } else {
    for (let i = 0; i < regPart.length; i++) {
      regPart[i].style.display = "none";
    }

    for (let i = 0; i < 4; i++) {
      logPart[i].style.display = "block";
    }

    logPart[4].style.display = "flex";
    logPart[5].style.display = "block";

    logregStatus = "login";
  }
}
    


/*     logPart[0].style.visibility = 'hidden !important';
   
   for (let i = 1; i < 3; i++) {
      regPart[i].style.display = "flex !important";
    }
    for (let i = 3; i < regPart.length; i++) {
      regPart[i].style.display = "block !important";
    }
    
    for (let i = 1; i < logPart.length; i++) {
      logPart[i].style.display = "none !important";
    } 
    
    console.log(logPart[0]);
    console.log(getComputedStyle(logPart[0]).display);

    logregStatus = "register";
  } else {
    for (let i = 1; i < 4; i++) {
      logPart[i].style.display = "block !important";
    }
    logPart[4].style.display = "flex !important";   
    logPart[5].style.display = "block !important";

    for (let i = 1; i < regPart.length; i++) {
      regPart[i].style.display = "none !important";
    }
    regPart[0].style.display = "none !important";
    logregStatus = "login"; */