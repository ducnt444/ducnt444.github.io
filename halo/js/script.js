$(document).ready(function(){
  $('.slider-row').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: false,
    arrows: true,
    prevArrow: "<button type='button' class='slick-prev pull-left'><img src ='img/img--misc/prev-arrow--black.png'></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><img src ='img/img--misc/next-arrow--black.png'></button>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
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
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});


/* --------------- search bar toggler --------------- */
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

/* --------------- hết search bar toggler --------------- */



/* --------------- login/register toggler --------------- */
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

/* --------------- hết login/register toggler --------------- */



/* --------------- swap detail image --------------- */

let mainImg = document.getElementsByClassName("details__main-img")[0];

let subImgs = document.getElementsByClassName("details__sub-img");

for (let i = 0; i < subImgs.length; i++) {
  function changeMainImg() {
    mainImg.src = `img/img--details/detail__sub-img-${i}.jpg`
  }
  subImgs[i].addEventListener("click", changeMainImg);
}

/* --------------- hết swap detail image --------------- */



/* --------------- .main-info__toggler-indicator --------------- */
let mainInfoToggler = document.getElementsByClassName("main-info__toggler");

function mainInfoIndicatorToggler1() {
  if (this.childNodes[1].childNodes[0].className.match(/(?:^|\s)fa-chevron-up(?!\S)/)) {
    this.childNodes[1].childNodes[0].className = "fas fa-chevron-down";
  } else {
    this.childNodes[1].childNodes[0].className = "fas fa-chevron-up";
  }
}

/* mainInfoToggler[0].addEventListener("click", mainInfoIndicatorToggler1);  */

function mainInfoIndicatorToggler2() {
  if (this.childNodes[1].childNodes[1].className.match(/(?:^|\s)fa-chevron-up(?!\S)/)) {
    this.childNodes[1].childNodes[1].className = "fas fa-chevron-down";
  } else {
    this.childNodes[1].childNodes[1].className = "fas fa-chevron-up";
  }
}

for (let i = 1; i < mainInfoToggler.length; i++) {
  mainInfoToggler[i].addEventListener("click", mainInfoIndicatorToggler2)
}
/* --------------- hết .main-info__toggler-indicator --------------- */



/* --------------- sample image toggler --------------- */
let sampleImgModal = document.querySelector("#sample--full-size img");
let imgToggler = document.querySelectorAll("#sample img");


/* console.log(imgToggler[2].src);
sampleImgModal.src = "img/img--details/sample-2.png"; */

function sampleToggler() {
  sampleImgModal.src = this.src;
}

for (let i = 0; i < imgToggler.length; i++) {
  imgToggler[i].addEventListener("click", sampleToggler)
}

let mainImgModal = document.querySelector("#main-img--full-size img");

/* function mainImgToggler() {
  mainImgModal.src = mainImg.style.backgroundImage
} */

/* console.log(mainImg.style.backgroundImage); */

/* --------------- hết sample image toggler --------------- */



/* --------------- quantity calc --------------- */

/* ---------- grand final calc ---------- */
function grandFinalCalc() {
  let grandTotal = document.getElementsByClassName("cart__grand-total")[0];

  let grandTotalNum = 0;
  
  let allMultiple = document.getElementsByClassName("col--multiple-price");
  
  for (let i = 1; i < allMultiple.length; i++) {
    let eachMultiple = parseInt(allMultiple[i].innerHTML.slice(12, allMultiple[i].innerHTML.length - 1).replace(/\./g, ""))
    grandTotalNum += eachMultiple;
  }
  
  grandTotal.innerHTML = `Tổng giá trị giỏ hàng: ${grandTotalNum.toLocaleString()}đ`
}

grandFinalCalc();


/* ---------- add calc ---------- */
let addQuantityBtn = document.getElementsByClassName("quantity__plus");

for (let i = 0; i < addQuantityBtn.length; i++) {
  addQuantityBtn[i].addEventListener("click", function() {
    let currentNum = +this.previousElementSibling.innerHTML;
    
    this.previousElementSibling.innerHTML = currentNum + 1;

    let singlePrice = this.parentElement.previousElementSibling.innerHTML;

    let singlePriceNum = +singlePrice.slice(9, singlePrice.length - 1).replace(/\./g, "");

    let multiplePriceValue = +this.previousElementSibling.innerHTML * singlePriceNum;

    this.parentElement.nextElementSibling.innerHTML = `Thành tiền: ${multiplePriceValue.toLocaleString()}đ`
  });

  addQuantityBtn[i].addEventListener("click", grandFinalCalc);
}


/* ---------- minus calc ---------- */
let minusQuantityBtn = document.getElementsByClassName("quantity__minus");

for (let i = 0; i < minusQuantityBtn.length; i++) {
  minusQuantityBtn[i].addEventListener("click", function() {
    let currentNum = +this.nextElementSibling.innerHTML;

    if (currentNum > 1) {
      this.nextElementSibling.innerHTML = currentNum - 1;
    }

    let singlePrice = this.parentElement.previousElementSibling.innerHTML;

    let singlePriceNum = +singlePrice.slice(9, singlePrice.length - 1).replace(/\./g, "");

    let multiplePriceValue = +this.nextElementSibling.innerHTML * singlePriceNum;

    this.parentElement.nextElementSibling.innerHTML = `Thành tiền: ${multiplePriceValue.toLocaleString()}đ`
  });

  minusQuantityBtn[i].addEventListener("click", grandFinalCalc);
}

/* --------------- hết quantity calc --------------- */



/* --------------- remove cart item --------------- */

/* ---------- check empty cart ---------- */
function checkEmptyCart() {
  let checkEmptyGrandTotal = document.getElementsByClassName("cart__grand-total")[0].innerHTML
  if (checkEmptyGrandTotal == "Tổng giá trị giỏ hàng: 0đ") {
    document.getElementsByClassName("cart__grand-total")[0].innerHTML = "Giỏ hàng trống"
  }
}

/* ---------- remove item ---------- */
let removeItemBtn = document.querySelectorAll(".col--remove.display-till-md");

for (let i = 0; i < removeItemBtn.length; i++) {
  removeItemBtn[i].addEventListener("click", function() {
    this.parentElement.parentElement.remove();
    let grandTotal = document.getElementsByClassName("cart__grand-total")[0];

    let grandTotalNum = 0;

    let allMultiple = document.getElementsByClassName("col--multiple-price");

    for (let i = 1; i < allMultiple.length; i++) {
      let eachMultiple = +allMultiple[i].innerHTML.slice(12, allMultiple[i].innerHTML.length - 1).replace(/\./g, "");
      grandTotalNum += eachMultiple;
    }

    grandTotal.innerHTML = `Tổng giá trị giỏ hàng: ${grandTotalNum.toLocaleString()}đ`
  });

  removeItemBtn[i].addEventListener("click", checkEmptyCart);
}

/* --------------- hết remove cart item --------------- */
















/* test timer banner
let i = 0;

let counter = setInterval(function(){
  i += 2;
  if (i <= 100){
    $('.progress-bar').css('width', i+'%');
  } else {
    $('.progress-bar').css('width', '0%');
    i = -10;
  }  
}, 100); */