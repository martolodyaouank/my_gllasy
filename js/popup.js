var link = document.querySelector(".feedback-link-btn");

var popup = document.querySelector(".feedback-link-wrap");
var overlay = document.querySelector(".overlay-feedback");
var close = popup.querySelector(".close-btn");

var form = popup.querySelector(".sent-btn");
var login = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=mail-answer]");
var text = popup.querySelector("[name=write]");
var storage = localStorage.getItem("login");



link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("feedback-link-wrap-show");
  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }
  overlay.classList.add("overlay-feedback-show");
});


close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("feedback-link-wrap-show");
  overlay.classList.remove("overlay-feedback-show");
  popup.classList.remove("feedback-link-wrap-error");
});

form.addEventListener("click", function(event) {
  if (!login.value || !email.value || !text.value) {
    event.preventDefault();
    popup.classList.remove("feedback-link-wrap-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("feedback-link-wrap-error");
  } else {
    localStorage.setItem("login", login.value);
  }
});


window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("feedback-link-wrap-show")) {
      popup.classList.remove("feedback-link-wrap-show");
    }
    if (overlay.classList.contains("overlay-feedback-show")) {
      overlay.classList.remove("overlay-feedback-show");
      popup.classList.remove("feedback-link-wrap-error");
    }
  }
});
