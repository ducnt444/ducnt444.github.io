//slick
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
