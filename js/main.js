$(function () {
  var imgHeight = $('.fv-bc-img').outerHeight();
  var bgHeight = $('.fv').outerHeight();

  $('.header-menu').on('click', function() {
    if($(window).scrollTop() < imgHeight -50) {
      $('.bars').toggleClass('cross');
      $('.header-nav').toggleClass('open');
      $('.burger-musk').fadeToggle(300);
      $('body').toggleClass('noscroll');
    } else {
      $('.color').toggleClass('black');
      $('.bars').toggleClass('cross');
      $('.header-nav').toggleClass('open');
      $('.burger-musk').fadeToggle(300);
      $('body').toggleClass('noscroll');
    }
  })

  $(window).on('load scroll', function() {
    if($(window).scrollTop() < imgHeight -50) {
      $('.header-title').removeClass('black');
    } else {
      $('.header-title').addClass('black');
    }

    if($(window).scrollTop() < bgHeight -50) {
      $('.color').removeClass('black');
    } else {
      $('.color').addClass('black');
    }
  });
});