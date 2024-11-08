$(document).ready(function () {
  $(".navbar-toggler").click(function () {
    $("body").toggleClass("menu-show");
  });
});

$(document).ready(function () {
  $(".nav-item .nav-link").click(function () {
    $(".nav-item .nav-link").removeClass("active");
    // $(".tab").addClass("active"); // instead of this do the below
    $(this).addClass("active");
  });
});

$("#country_selector").countrySelect({
  // responsiveDropdown:true,
  // onlyCountries: ['in', 'us'],
  preferredCountries: ["us"],
});




$(".destination-carousel").owlCarousel({
  margin: 20,
  autoplay: false,
  dots: false,
  nav: true,
  navText: [
    "<div class='next'><i class='fa fa-caret-left prev-slide' aria-hidden='true'></i></div>",
    "<div class='previous'><i class='fa fa-caret-right next-slide' aria-hidden='true'></i></div>",
  ],
  loop: true,
  autoplayHoverPause: true,
  // rtl: direction,
  responsive: {
    0: {
      items: 1,
      slideBy: 1,
    },
  },
});

$(".inspiration-carousel").owlCarousel({
  margin: 20,
  autoplay: false,
  dots: false,
  nav: true,
  navText: [
    "<div class='next'><i class='fa fa-caret-left prev-slide' aria-hidden='true'></i></div>",
    "<div class='previous'><i class='fa fa-caret-right next-slide' aria-hidden='true'></i></div>",
  ],
  loop: true,
  autoplayHoverPause: true,
  // rtl: direction,
  responsive: {
    0: {
      items: 1.2,
      margin: 0,
      slideBy: 1,
    },
    768: {
      items: 1.5,
      slideBy: 1,
    },
    1024: {
      items: 2,
      slideBy: 1,
    },
  },
});


// $(".vibe-carousel").owlCarousel({
//   items: 3,
//   loop: false,
//   mouseDrag: false,
//   touchDrag: false,
//   pullDrag: false,
//   rewind: true,
//   autoplay: true,
//   margin: 0,
//   dots: false,
//   nav: true
// });


$(".siteintro-right").owlCarousel({
  autoplay: false,
  dots: false,
  nav: false,
  loop: true,
  autoplayHoverPause: true,
  // rtl: direction,
  responsive: {
    0: {
      items: 1,
      slideBy: 1,
    },
    768: {
      items: 2,
      slideBy: 1,
    },
    991: {
      items: 1,
      slideBy: 1,
    },
  },
});


$(".most-popular-carousel").owlCarousel({
  autoplay: false,
  dots: true,
  nav: false,
  loop: true,
  autoplayHoverPause: true,
  // rtl: direction,
  responsive: {
    0: {
      items: 1,
      slideBy: 1,
    },
  },
});


$(".insta-card").owlCarousel({
  margin: 20,
  autoplay: false,
  dots: false,
  nav: true,
  navText: [
    "<div class='next'><i class='fa fa-caret-left prev-slide' aria-hidden='true'></i></div>",
    "<div class='previous'><i class='fa fa-caret-right next-slide' aria-hidden='true'></i></div>",
  ],
  loop: true,
  autoplayHoverPause: true,
  // rtl: direction,
  responsive: {
    0: {
      items: 1.2,
      slideBy: 1,
      nav: false,
    },
   
    768: {
      items: 3,
      slideBy: 1,
    },
  },
});


$(".recent-carousel").owlCarousel({
  margin: 10,
  autoplay: false,
  dots: false,
  nav: true,
  navText: [
    "<div class='next'><i class='fa fa-caret-left prev-slide' aria-hidden='true'></i></div>",
    "<div class='previous'><i class='fa fa-caret-right next-slide' aria-hidden='true'></i></div>",
  ],
  loop: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      slideBy: 1,
    },
    475: {
      items: 2,
      slideBy: 1,
    },
    675: {
      items: 3,
      slideBy: 1,
    },
    991: {
      items: 4,
      slideBy: 1,
    },
  },
});


$(".destrips-card").owlCarousel({
  margin: 20,
  autoplay: false,
  dots: false,
  nav: true,
  navText: [
    "<div class='next'><i class='fa fa-caret-left prev-slide' aria-hidden='true'></i></div>",
    "<div class='previous'><i class='fa fa-caret-right next-slide' aria-hidden='true'></i></div>",
  ],
  loop: true,
  autoplayHoverPause: true,
  // rtl: direction,
  responsive: {
    0: {
      items: 1.2,
      slideBy: 1,
      nav: false,
    },
   
    768: {
      items: 3,
      slideBy: 1,
    },
  },
});


$(document).ready(function () {
  jQuery('<div class="quantity-nav"><button class="quantity-button quantity-up"><i class="fa-solid fa-plus" aria-hidden="true"></i></button><button class="quantity-button quantity-down"><i class="fa-solid fa-minus" aria-hidden="true"></i></button></div>').insertAfter('.destsearchQuantity input');
  jQuery('.destsearchQuantity').each(function () {
    var spinner = jQuery(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

    btnUp.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

  });
});