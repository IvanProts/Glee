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
  var product1 = document.querySelector('[data-ref="product"]');
  var design = document.querySelector('[data-ref="design"]');

  var config = {
    controls: {
    scope: "local",
  },
};

var mixer = mixitup(product1, config);
var mixer2 = mixitup(design, config);

});