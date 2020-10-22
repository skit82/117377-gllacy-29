for (var controls = document.querySelectorAll(".slider__controls-btn"), slides = document.querySelectorAll(".slider__item"), backgroundColors = ["#849d8f", "#8996a6", "#9d8b84"], previousSlide = 0, currentSlide = 0, currentColor = 0, i = 0; i < controls.length; i++)
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

var mapImage = document.querySelector(".address__img");
function init () {
  mapImage.classList.add("map-hide");
  var myMap = new ymaps.Map('map', {
    center: [59.939228, 30.329364],
    zoom: 16
  }, {
    searchControlProvider: 'yandex#search'
  }),

  myPlacemark = new ymaps.Placemark([59.938635, 30.323118], {
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

feedbackLink = document.querySelector(".address__btn")
popupOverlay = document.querySelector(".overlay")
popupClose = popupOverlay.querySelector(".modal__close-btn")
feedbackForm = popupOverlay.querySelector(".modal__form")
feedbackName = feedbackForm.querySelector("[name=feedback-name]")
feedbackEmail = feedbackForm.querySelector("[name=feedback-email]")
feedbackMessage = feedbackForm.querySelector("[name=feedback-message]");

feedbackLink.addEventListener("click", function(e) {
    e.preventDefault(),
    popupOverlay.classList.add("overlay-show"),
    feedbackName.focus()
})

popupClose.addEventListener("click", function(e) {
    e.preventDefault(),
    popupOverlay.classList.remove("overlay-show"),
    feedbackName.classList.remove("modal-invalid"),
    feedbackEmail.classList.remove("modal-invalid"),
    feedbackMessage.classList.remove("modal-invalid")
})

feedbackForm.addEventListener("submit", function(e) {
    feedbackName.value ? feedbackName.classList.remove("modal-invalid") : (e.preventDefault(),
    feedbackName.classList.add("modal-invalid")),
    feedbackEmail.value ? feedbackEmail.classList.remove("modal-invalid") : (e.preventDefault(),
    feedbackEmail.classList.add("modal-invalid")),
    feedbackMessage.value ? feedbackMessage.classList.remove("modal-invalid") : (e.preventDefault(),
    feedbackMessage.classList.add("modal-invalid"))
})

window.addEventListener("keydown", function(e) {
    27 === e.keyCode && (e.preventDefault(),
    popupOverlay.classList.contains("overlay-show") && (popupOverlay.classList.remove("overlay-show"),
    feedbackName.classList.remove("modal-invalid"),
    feedbackEmail.classList.remove("modal-invalid"),
    feedbackMessage.classList.remove("modal-invalid")))
});
