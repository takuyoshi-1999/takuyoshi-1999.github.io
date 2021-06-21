$(window).on('load', function() {
  $('.fv-img-title').addClass('opacity');
  $('.pg-fv').css({'filter':'grayscale(0)', 'transition': '3s'});
});

$('#page-top').on('click', function() {
  $('html, body').animate({scrollTop:0}, 500);
});

$('.burger-btn').on('click', function() {
  $('.header-box').fadeToggle();
  $('.btn-line').toggleClass('open');
});

if(window.matchMedia('(max-width: 768px)').matches) {
  $('a[href^="#"]').click(function() { 
    $('.header-box').fadeOut();
    $('.btn-line').removeClass('open');
  });
}

$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

const skillsItem = $('#skillsAni').offset().top;
const worksList = $('#worksAni').offset().top;
const about = $('#aboutAni').offset().top;
const contact = $('#contactAni').offset().top;

$(window).on('scroll', function() {
  let scroll = $(this).scrollTop();
  if(scroll >= skillsItem) {
    $('.skills-item').addClass('opacity');
  } else {
    $('.skills-item').removeClass('opacity');
  }
});

$(window).on('scroll', function() {
  let scroll = $(this).scrollTop();
  if(scroll >= worksList) {
    $('.fv-wrapper').addClass('filter');
  } else {
    $('.fv-wrapper').removeClass('filter');
  }
});

$(window).on('scroll', function() {
  let scroll = $(this).scrollTop();
  if(scroll >= worksList) {
    $('.w-img').addClass('filter-none');
    $('.works').addClass('filter');
  } else {
    $('.w-img').removeClass('filter-none');
    $('.works').removeClass('filter');
  }
});

$(window).on('scroll', function() {
  let scroll = $(this).scrollTop();
  if(scroll >= about) {
    $('.about-img').addClass('filter');
  } else {
    $('.about-img').removeClass('filter');
  }
});
