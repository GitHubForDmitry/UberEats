'use strict';
window.onscroll = function () {
    scrollFunction();
    myFunction();

};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("btn-top").style.display = "block";
    } else {
        document.getElementById("btn-top").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  let padY = document.querySelector(".padding-y");
  if (window.pageYOffset > sticky) {
    padY.style.paddingTop = "102px";
    header.classList.add("sticky");
  } else {
    padY.style.paddingTop = "";
    header.classList.remove("sticky");
  }
}

window.addEventListener('DOMContentLoaded', (event) => {
  let body = document.querySelector(".body");
  let bgPage = document.querySelector(".bgPage");
  let wrapper = document.querySelector(".wrapper");
  setInterval(function(){
    body.style.display = "block";
    bgPage.style.display = "none";
    wrapper.style.display = "block";
     }, 4000);
  body.style.display = "none";
  bgPage.style.display = "block";
  wrapper.style.display = "none";

});
