var controls = document.querySelectorAll(".slider__controls"),
var slides = document.querySelectorAll(".slider__item"),
var backgroundColors = ["#849d8f", "#8996a6", "#9d8b84"],
var previousSlide = (0, currentSlide = 0, currentColor = 0, i = 0; i < controls.length; i++);

!function(e) {
  controls[e].addEventListener("click", function() {
  previousSlide = currentSlide,
  currentColor = currentSlide = e,
  changeBackgroudSite(),
  changeActiveSlide()
})
}(i);
var changeActiveSlide = function() {
  slides[previousSlide].classList.remove("slider__item-active"),
  slides[currentSlide].classList.add("slider__item-active"),
  controls[previousSlide].classList.remove("slider__control-active"),
  controls[currentSlide].classList.add("slider__control-active")
}
, changeBackgroudSite = function() {
  document.body.style.backgroundColor = backgroundColors[currentColor]
}

function init () {
  var myMap = new ymaps.Map('map', {
    center: [59.939631, 30.333055],
    zoom: 15
  }, {
    searchControlProvider: 'yandex#search'
  }),

  myPlacemark = new ymaps.Placemark([59.939631, 30.333055], {
    hintContent: "Магазин Глейси"
  }, {
    iconLayout: 'default#image',
    iconImageHref: 'img/pin-marker.svg',
    iconImageSize: [80, 140],
    iconImageOffset: [-40, -135]
  });
  myMap.geoObjects.add(myPlacemark);
}
ymaps.ready(init);
