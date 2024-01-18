const preloader = document.querySelector(".preloader-wrapper");
window.onload = function () {
  preloader.classList.add("preloader-hidden");
  setInterval(function () {
    preloader.classList.add("preloader-hidden");
  },1000);
};

const burgerBtn = document.querySelector(".header__burger");
const headerNav = document.querySelector(".header__nav");

burgerBtn.addEventListener("click", function () {
  burgerBtn.classList.toggle("active");
  headerNav.classList.toggle("header__nav--mobile");
});
