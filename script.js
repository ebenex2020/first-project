/** @format */
"use strict";

const navOpen = document.querySelector(".header");

navOpen.classList.remove("nav-open");

function openNav() {
  navOpen.classList.toggle("nav-open");
}

navOpen.addEventListener("click", openNav);
