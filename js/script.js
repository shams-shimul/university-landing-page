$(function () {
  "use strict";

  // Slick settings
  if ($(".event-date-slide").length) {
    $(".event-date-slide").slick({ arrows: false, dots: true, autoplay: true });
  }
  if ($(".single-item").length) {
    $(".single-item").slick({ arrows: false, dots: true, autoplay: true });
  }
  if ($(".admission-testi_slider").length) {
    $(".admission-testi_slider").slick({ dots: true, autoplay: true });
  }
  if ($(".resources-slick").length) {
    $(".resources-slick").slick({
      infinite: true,
      dots: true,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
      ],
    });
  }
  
  // Magnific Popus settings
  if ($(".image-link").length) {
    $(".image-link").magnificPopup({
      type: "image",
      gallery: { enabled: true },
    });
  }
  if ($(".image-link2").length) {
    $(".image-link2").magnificPopup({
      type: "image",
      gallery: { enabled: true },
    });
  }

  // Mega Dropdown
  jQuery(document).on("click", ".mega-dropdown", function (e) {
    e.stopPropagation();
  });
  if ($(".dropdown-menu a.dropdown-toggle").length) {
    $(".dropdown-menu a.dropdown-toggle").on("click", function (e) {
      if (!$(this).closest(".dropdown").hasClass("show")) {
        $(this).closest(".dropdown").first().find(".show").removeClass("show");
      }
      var $subMenu = $(this).closest(".dropdown");
      $subMenu.toggleClass("show");
      $(this)
        .parents("li.nav-item.dropdown.show")
        .on("hidden.bs.dropdown", function (e) {
          $(".dropdown-submenu .show").removeClass("show");
        });
      return false;
    });
  }
  if ($(".counter").length) {
    $(".counter").counterUp({ delay: 10, time: 1000 });
  }
});
