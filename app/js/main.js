$(function () {

  $(".star").rateYo({
    starWidth: "12px",
    readOnly: true,
    ratedFill: "#ffcc00",
    normalFill: "#d6d6d6",
    spacing: "8px"
  });

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data){
    $('.filter-price__from').text(data.from);
    $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  })



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
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
        breakpoint: 968,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 440,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  $('.user-menu__items').on('click', function () {
    $('.user-menu').toggleClass('user-menu--active');
    $('.products__item').toggleClass('.products__item--list');
    $('.products__content').toggleClass('.products__content--list');
  });

  $('.menu-btn').on('click', function () {
    $('.menu').toggleClass('menu--active');
    $('.menu-btn').toggleClass('menu-btn--active');
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