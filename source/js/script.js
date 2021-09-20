var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

var sliderToggle = document.querySelector('.slider__toggle');
var sliderScale = document.querySelector('.slider__scale');
var sliderFrom = document.querySelector('.slider__from');
var sliderTo = document.querySelector('.slider__to');
var photoFrom = document.querySelector('.example__photo--before');
var photoTo = document.querySelector('.example__photo--after');

function sliderClick() {
    if (sliderToggle.classList.contains('slider__toggle--to')) {
      sliderToggle.classList.remove('slider__toggle--to');
    sliderToggle.classList.add('slider__toggle--from');
    photoFrom.classList.remove('example__photo--hidden');
    photoTo.classList.add('example__photo--hidden');
  } else {
      sliderToggle.classList.add('slider__toggle--to');
    sliderToggle.classList.remove('slider__toggle--from');
    photoFrom.classList.add('example__photo--hidden');
    photoTo.classList.remove('example__photo--hidden');
  }
}

sliderScale.addEventListener('click', sliderClick);
sliderFrom.addEventListener('click', sliderClick);
sliderTo.addEventListener('click', sliderClick);
