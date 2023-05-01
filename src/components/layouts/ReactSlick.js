import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export default function SimpleSlider({sld,sld1,sld2,sld3,sld4,sld5}) {
  var breakpoint = {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
  };
  var settings = {
    autoplay:true,
    autoplaySpeed: 2000,
    dots: true,
    draggable: true,
  mobileFirst: true,
  infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows:false,
    responsive: [{
      breakpoint: breakpoint.sm,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
      {
        breakpoint: breakpoint.md,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: breakpoint.lg,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: breakpoint.xl,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    <Slider {...settings} >
      <div className="col-md-4 p-2"><div>{sld}</div> </div>
      <div className="col-md-4 p-2"><div>{sld1}</div> </div>
      <div className="col-md-4 p-2"><div>{sld2}</div> </div>
      <div className="col-md-4 p-2"><div>{sld3}</div> </div>
      <div className="col-md-4 p-2"><div>{sld4}</div> </div>
      <div className="col-md-4 p-2"><div>{sld5}</div> </div>
    </Slider>
  );
}
/*
Codig


$('.add-remove').slick({
  slidesToShow: 3,
  slidesToScroll: 3
});
$('.js-add-slide').on('click', function() {
  slideIndex++;
  $('.add-remove').slick('slickAdd','<div><h3>' + slideIndex + '</h3></div>');
});

$('.js-remove-slide').on('click', function() {
  $('.add-remove').slick('slickRemove',slideIndex - 1);
  if (slideIndex !== 0){
    slideIndex--;
  }
});
	


*/
