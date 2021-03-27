$(function () {

  $('.top-slider__content').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });

  var container1 = document.querySelector('[data-ref="container-1"]');
  var container2 = document.querySelector('[data-ref="container-2"]');

  var mixer1 = mixitup(container1);
  var mixer2 = mixitup(container2);
});