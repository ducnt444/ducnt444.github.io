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


/* 
------------------------- search bar toggler ------------------------- 
*/
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

/* 
------------------------- hết search bar toggler ------------------------- 
*/



/* 
------------------------- login/register toggler ------------------------- 
*/

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

/* 
------------------------- hết login/register toggler ------------------------- 
*/



/* 
------------------------- swap detail image ------------------------- 
*/

let mainImg = document.getElementsByClassName("details__main-img")[0];

let subImgs = document.getElementsByClassName("details__sub-img");

for (let i = 0; i < subImgs.length; i++) {
  function changeMainImg() {
    mainImg.src = `img/img--details/detail__sub-img-${i}.jpg`
  }
  subImgs[i].addEventListener("click", changeMainImg);
}

/* 
------------------------- hết swap detail image ------------------------- 
*/



/* 
------------------------- .main-info__toggler-indicator ------------------------- 
*/
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
/* 
------------------------- hết .main-info__toggler-indicator ------------------------- 
*/



/* 
------------------------- sample full screen ------------------------- 
*/
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

/* 
------------------------- hết sample full screen ------------------------- 
*/



/* 
------------------------- quantity calc ------------------------- 
*/

/* --------------- grand final calc --------------- */
function grandFinalCalc() {
  //xác định element grand total
  let grandTotal = document.getElementsByClassName("cart__grand-total")[0];

  if(grandTotal != undefined) {
    //xác định khởi điểm cho giá trị của element grand total
    let grandTotalNum = 0;
    
    //xác định 1 array chứa các multiple
    let allMultiple = document.getElementsByClassName("col--multiple-price");
    
    //loop trong array chứa các multiple (bỏ index 0 là label)
    for (let i = 1; i < allMultiple.length; i++) {
      //mỗi lần loop: 
      let eachMultiple = 
      parseInt( 
        allMultiple[i].innerHTML //lấy value của từng multiple
        .match(/\d/g) //lọc ra 1 array chứa số tiền
        .join('')  //nối về thành 1 string, là số tiền của từng multiple
      )

      grandTotalNum += eachMultiple; //+= vào giá trị grand total mỗi loop
    }
    
    grandTotal.innerHTML = `Tổng giá trị giỏ hàng: ${grandTotalNum
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ`;  
  } 


}

grandFinalCalc();


/* --------------- add calc --------------- */
let addQuantityBtn = document.getElementsByClassName("quantity__plus");

for (let i = 0; i < addQuantityBtn.length; i++) {
  addQuantityBtn[i].addEventListener("click", function() {
    //Xác định giá trị số đếm hiện tại: element trước nút + (số hóa)
    let currentNum = parseInt(this.previousElementSibling.innerHTML);
    
    //khi click: tăng giá trị của element trước nút + (chính là số đếm hiện tại) thêm 1
    this.previousElementSibling.innerHTML = currentNum + 1;

    //xác định đơn giá
    let singlePrice = 
    //là element nằm trước (col--single-price) element cha của nút + (col--quantity)
    this.parentElement.previousElementSibling.innerHTML
    //rồi lọc ra 1 array chứa các số (chỉ lấy số giá tiền)
    .match(/\d/g)
    //rồi nối lại thành string số giá tiền
    .join('');
    
    //xác định giá trị của thành tiền = 
    let multiplePrice = 
    //giá trị element trước nút + (số đếm hiện tại, số hóa)
    parseInt(this.previousElementSibling.innerHTML) 
    * 
    //singlePrice (số hóa)
    parseInt(singlePrice);
    console.log(multiplePrice);
    //update thành tiền
    let multipleInner = this.parentElement.nextElementSibling.innerHTML;
    this.parentElement.nextElementSibling.innerHTML = multipleInner
      .replace(/\./g, "")
      .replace(
        /\d+/,
        multiplePrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
      );
  });

  addQuantityBtn[i].addEventListener("click", grandFinalCalc);
}


/* --------------- minus calc --------------- */
let minusQuantityBtn = document.getElementsByClassName("quantity__minus");

for (let i = 0; i < minusQuantityBtn.length; i++) {
  minusQuantityBtn[i].addEventListener("click", function() {
    //Xác định giá trị số đếm hiện tại: element sau nút - (số hóa)
    let currentNum = parseInt(this.nextElementSibling.innerHTML);
    console.log(currentNum);
    //Tránh trường hợp số đếm <= 0
    if (currentNum > 1) {
      //khi click: giảm giá trị của element sau nút - (chính là số đếm hiện tại) đi 1
      this.nextElementSibling.innerHTML = currentNum - 1;
    }

    //xác định đơn giá
    let singlePrice = 
    //là element nằm trước (col--single-price) element cha của nút + (col--quantity)
    this.parentElement.previousElementSibling.innerHTML
    //rồi lọc ra 1 array chứa các số (chỉ lấy số giá tiền)
    .match(/\d/g)
    //rồi nối lại thành string số giá tiền
    .join('');

    //xác định giá trị của thành tiền = 
    let multiplePrice = 
    //giá trị element trước nút + (số đếm hiện tại, số hóa)
    parseInt(this.nextElementSibling.innerHTML) 
    * 
    //singlePrice (số hóa)
    parseInt(singlePrice);

    //update thành tiền
    let multipleInner = this.parentElement.nextElementSibling.innerHTML;
    this.parentElement.nextElementSibling.innerHTML = multipleInner
      .replace(/\./g, "")
      .replace(
        /\d+/,
        multiplePrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
      );
  });

  minusQuantityBtn[i].addEventListener("click", grandFinalCalc);
}

/* 
-------------------- hết quantity calc --------------------
 */



/* 
------------------------- remove cart item ------------------------- 
*/

/* --------------- check empty cart --------------- */
function checkEmptyCart() {
  let checkEmptyGrandTotal = document.getElementsByClassName("cart__grand-total")[0].innerHTML
  if (checkEmptyGrandTotal == "Tổng giá trị giỏ hàng: 0đ") {
    document.getElementsByClassName("cart__grand-total")[0].innerHTML = "Giỏ hàng trống"
  }
}

/* --------------- remove item --------------- */
let removeItemBtn = document.querySelectorAll(".col--remove");

for (let i = 0; i < removeItemBtn.length; i++) {
  removeItemBtn[i].addEventListener("click", function() {
    this.parentElement.parentElement.remove();
  });

  removeItemBtn[i].addEventListener("click", grandFinalCalc);

  removeItemBtn[i].addEventListener("click", checkEmptyCart);
}

/* 
------------------------- hết remove cart item -------------------------
*/





/* 
-------------------- summary invoice -------------------- 
*/

/* ---------- live invoice ---------- */

let inputCoupon = document.querySelector(".coupon__input");
let displayCoupon = document.querySelector(".coupon__content");
let summaryGrandTotal = document.querySelector(".summary__grand-total span");

if (inputCoupon != null) {
  inputCoupon.addEventListener("input", function() {
    if (inputCoupon.value.toUpperCase() == "KM2021") {
      displayCoupon.style.display = "block";
      summaryGrandTotal.innerText = "389.270.000đ"
    } else {
      displayCoupon.style.display = "none";
      summaryGrandTotal.innerText = "390.270.000đ"
    }
  
  })
}


/* ---------- hết live invoice ---------- */


/* 
-------------------- hết summary invoice -------------------- 
*/



/* 
------------------------- card animation ------------------------- 
*/

/* --------------- quay thẻ trước sau --------------- */

/* ---------- quay thẻ ra sau ---------- */
//xác định ô input CVV

let inputCVV = document.getElementById("visa-master-input__cvv");
//event: khi focus ô input CVV (bấm vào, chưa cần type)
if (inputCVV != null) {
  inputCVV.addEventListener("focus", function(){
    //quay thẻ ra sau
    document.querySelectorAll(".payment-card__content")[1].style.transform = "rotateY(180deg)";
  });
  
}

/* ---------- quay thẻ ra trước ---------- */
//Xác định các input sẽ khiến thẻ quay ra trước (mọi input trừ CVV)
let frontInput = document.querySelectorAll("#visa-master-card .front-input");

//loop lên mọi ô input front 
for (let i = 0; i < frontInput.length; i++) {
  //để gán event: khi focus các ô front
  frontInput[i].addEventListener("focus", function() {
    //thì check xem hiện tại card có đang được quay ra sau không
    if (document.querySelectorAll(".payment-card__content")[1].style.transform = "rotateY(180deg)") {
      //nếu có thì hủy giá trị quay, card sẽ về bình thường
      document.querySelectorAll(".payment-card__content")[1].style.transform = "none"
    }
  })
}

/* --------------- hết quay thẻ trước sau --------------- */

/* --------------- update input lên thẻ --------------- */

//Xác định ô input
let inputValue = document.querySelectorAll(".payment-card__input .form-control");

//Xác định ô display
let displayValue = document.querySelectorAll(".display-value");

//Xác định ô input bank
let inputBank = document.getElementById("input__bank");

//Xác định ô display brand ngân hàng
let brandImg = document.querySelector(".payment-card__brands");

//Xác định mặt trước của domestic card
let domesticFront = document.querySelector("#domestic-card .front");

//Gán sự kiện cho input bank
if (inputBank != null) {
  inputBank.addEventListener("input", function(){
    if (inputBank.value == "BIDV (Ngân hàng Đầu tư và Phát triển Việt Nam)") {
      brandImg.src = "/halo/img/img--payment/bidv-logo-min.png";
      domesticFront.style.backgroundImage = 'url("/halo/img/img--payment/digital-data.jpg")';
      domesticFront.style.color = "white";
      domesticFront.style.backgroundSize = "cover";
    } else {
      brandImg.src = "/halo/img/img--payment/vcb-logo.png";
      domesticFront.style.backgroundImage = 'url("/halo/img/img--payment/vcb-card.png")';
      domesticFront.style.color = "black";
      domesticFront.style.backgroundSize = "contain";
    }
  })
}



//Gán sự kiện cho input số thẻ
//event: khi nhập input số thẻ (domestic = [1], visa = [5]), 
if (inputValue.length != 0 ) {
  for (let i = 1; i < inputValue.length; i+=4) {
    inputValue[i].addEventListener("input", function(){
      //sẽ update lên display (-1 tương ứng vì bank không có display)
      displayValue[i-1].innerText =
      //dưới dạng: mỗi 4 số lại có dấu cách
      inputValue[i].value.replace(/\B(?=(\d{4})+(?!\d))/g, " ");
    });
  }

  //Gán sự kiện cho các input khác
  //loop: mọi ô input (trừ bank =[0], domestic = [1], visa = [5])
  let notNumOrBank = [2, 3, 4, 6, 7, 8, 9]
  for (let i = 0; i < notNumOrBank.length; i++) {
    //event: khi nhập input
    inputValue[notNumOrBank[i]].addEventListener("input", function() {
    //sẽ update lên display
    displayValue[notNumOrBank[i]-1].innerHTML = inputValue[notNumOrBank[i]].value.toUpperCase();
    })
  }
}



/* --------------- hết update input lên thẻ --------------- */



/* test
let inputNum = document.getElementById("input__num");

inputNum.addEventListener("input", function(){
  let result = "" + inputNum.value;
  document.querySelector(".front__num").innerText = 
  result.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
});

inputCVV.addEventListener("input", function(){
  document.querySelector(".cvv").innerHTML = "" + inputCVV.value;
});
 */


/* 
------------------------- hết card animation ------------------------- 
*/



/* 
------------------------- faq toggler ------------------------- 
*/
let faqToggler = document.querySelectorAll(".faq__item--question");

/* for(let i = 0; i < faqToggler.length; i++) {
  faqToggler[i].addEventListener("click", function(){
   this.querySelector("i").toggleClass("fa-plus").toggleClass("fa-minus")
  })
} */

$(document).ready(function(){
  $(faqToggler).click(function(){
    $(this.querySelector("i")).toggleClass("fa-plus").toggleClass("fa-minus");
  });
});


/* 
------------------------- hết faq toggler ------------------------- 
*/


/* 
------------------------- scroll to method ------------------------- 
*/
let methodToggler = document.querySelector(".payment__toggler");

if (methodToggler != null) {
  methodToggler.addEventListener("click", function(){
    setTimeout(function(){
      window.scrollTo({
        top: 800,
        behavior: 'smooth'
      });
    }, 150)
  })
}

/* 
------------------------- hết scroll to method ------------------------- 
*/








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