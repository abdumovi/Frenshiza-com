$(document).ready(function(){
  $('.costmers__row').slick({
    arrows:true,
    dots:false,
    speed: 300,
    adaptiveHeight:true,
    slidesToShow: 2.5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.2,
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,

          
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,

          
        }
      }
    ]
  });
})


