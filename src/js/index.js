import "./import/modules";
import $ from 'jquery';
// let ir = $(".slick-slider")
function initSlider() {
   $(".slick-slider").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      dots: true, Boolean
      // arrows: false, Boolean
   });
}

// Image Slider Demo:
// https://codepen.io/vone8/pen/gOajmOo

$(document).on('ready', function () {
   initSlider();
});