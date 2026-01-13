'use strict';
feather.replace();

$('.js-heroSlider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  speed: 600,
  arrows: true,
  dots: true,
  infinite: true,
  pauseOnHover: false,
});

$(function () {
  $('.js-heroSlider').slick({
    dots: true,
    arrows: true
  });
});
