var callbackLink = document.querySelector(".contact-us-button");
var modal = document.querySelector(".modal");
var callbackModal = document.querySelector(".callback");
var callbackClose = callbackModal.querySelector(".reset-button");
var clientName = callbackModal.querySelector(".callback-name");
var clientEmail = callbackModal.querySelector(".callback-email");
var clientQuestion = callbackModal.querySelector(".callback-message");
var callbackForm = callbackModal.querySelector(".callback-form");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("clientName");
} catch (err) {
  isStorageSupport = false;
}

callbackLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal-shown");
  callbackModal.classList.add("callback-shown");

  if (storage) {
    clientName.value = storage;
    clientEmail.focus();
  } else {
    clientName.focus();
  }
});

callbackForm.addEventListener("submit", function (evt) {
  if (!clientName.value || !clientEmail.value || !clientQuestion.value) {
    evt.preventDefault();
    callbackModal.classList.remove("callback-error");
    callbackModal.offsetWidth = callbackModal.offsetWidth;
    callbackModal.classList.add("callback-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("clientName", clientName.value);
    }
  }
})

callbackClose.addEventListener("click", function (evt) {
  modal.classList.remove("modal-shown");
  callbackModal.classList.remove("callback-shown");
  callbackModal.classList.remove("callback-error");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains("modal-shown")) {
      evt.preventDefault();
      modal.classList.remove("modal-shown");
      callbackModal.classList.remove("callback-shown");
      callbackModal.classList.remove("callback-error");
    }
  }
})


