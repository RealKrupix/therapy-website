const primaryNav = document.querySelector("#primary-navigation");
const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu-nav");
const logo = document.querySelector("#logo");
const body = document.querySelector("body");
const mobileNavElement = document.querySelector(".mobile-tab-nav")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("is-opened")
    primaryNav.classList.toggle("opened");
    menu.classList.toggle("hidden");
    logo.classList.toggle("hidden");
    body.classList.toggle("no-scroll");
  });

  mobileNavElement.addEventListener("click", () => {
    hamburger.classList.toggle("is-opened")
    primaryNav.classList.toggle("opened");
    menu.classList.toggle("hidden");
    logo.classList.toggle("hidden");
    body.classList.toggle("no-scroll");
  });
  