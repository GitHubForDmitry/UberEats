'use strict';
window.onscroll = function () {
    scrollFunction();
    myFunction();
};

// btn top
function scrollFunction() {
  let btn = document.getElementById("btn-top");
  let btnImg = document.querySelector(".btnImg");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      btn.style.display = "block";
      btnImg.classList.add("bounce");
    } else {
      btn.style.display = "none";
      btnImg.classList.remove("bounce");
    }
}

// header fixed
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function myFunction() {
  let header = document.getElementById("myHeader");
  let sticky = header.offsetTop;
  let padY = document.querySelector(".padding-y");
  if (window.pageYOffset > sticky) {
    padY.style.paddingTop = "102px";
    header.classList.add("sticky");
  } else {
    padY.style.paddingTop = "";
    header.classList.remove("sticky");
  }
}

// preload window
window.addEventListener('DOMContentLoaded', (event) => {
  let body = document.querySelector(".body");
  let bgPage = document.querySelector(".bgPage");
  let wrapper = document.querySelector(".wrapper");
  // setInterval(function(){
    body.style.display = "block";
    bgPage.style.display = "none";
    wrapper.style.display = "block";
  // }, 3600);
  // body.style.display = "none";
  // bgPage.style.display = "block";
  // wrapper.style.display = "none";
});

// Modal window
document.querySelectorAll('.modal-show').forEach(function (element) {
  element.onclick = showModal;
});

document.querySelectorAll('.modal-close').forEach(function (element) {
  //закрываем окно на кнопке закрыть
  element.onclick = closeModal;
});

document.querySelectorAll('.modal-wrap').forEach(function (element) {
  //закрываем окно на клике в области серой
  element.onclick = closeModal;
});

function showModal() {
  let modalId = this.dataset.modal;
  let modal = document.querySelector('.modal');
  modal.classList.remove('hide');
  document.querySelector(modalId).classList.remove('hide');
  document.onkeydown = function (event) {
    //закрываем окно на кнопку Esc
    if (event.keyCode == 27) closeModal();
  }
}

function closeModal() {
  let modal = document.querySelectorAll('.modal');

  document.querySelectorAll('.modal-wrap').forEach(function (element) {
    element.classList.add('hide');
  });
  modal.forEach(function (element) {
    element.classList.add('hide');
  });
  document.onkeydown = null;
}


// Ajax request
function submitHandler(e) {
  e.preventDefault();

  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      console.log("SUCCESS", this);
    }
  };

  request.open(this.method, this.action, true);
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  let sign = document.querySelector('.auth__sign');
  let reg = document.querySelector('.auth__register');
  let name = document.querySelector('#name');
  let email = document.querySelector('#email');
  let userName = document.querySelector('#user-name');
  userName.innerHTML= "Привет, " + name.value;

      sign.style.display = "none";
      reg.style.display = "none";
      closeModal();
}

function validateEmail() {
  let email = document.getElementById("email");

  email.addEventListener("input", function (event) {
    if (email.validity.typeMismatch) {
      email.setCustomValidity("Введите корректный e-mail");
    } else {
      email.setCustomValidity("");
    }
  });
}
validateEmail();

document.querySelectorAll("#form").forEach(form =>
    form.addEventListener("submit", submitHandler)
);
let submitBtn = document.querySelector('#submitBtn');
submitBtn.onclick = function () {
  console.log('work');
  if (name.value !== null && email.value !== null) {
    submitBtn.removeAttribute("disabled");
  }
};
