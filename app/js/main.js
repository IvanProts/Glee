$(function () {

  $('.top-slider__content').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });

  $('.partners__slider').slick({
    arrows: false,
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 2000
  });

  var mixerTwo = mixitup('.products__items', {
    selectors: {
      target: '.products-item'
    },
  });

  var mixerOne = mixitup('.design__content', {
    selectors: {
      target: '.design__item'
    },
  });
});