'use strict';

// PRELOADER

const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", function () {
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
});

// CODE TO TOGGLE SIDEBAR

const body = document.querySelector("body"),
        nav = document.querySelector("nav"),
        selectSection = document.querySelector(".nav-links"),
        sidebarClose = document.querySelector(".sidebarClose"),
        sidebarOpen = document.querySelector(".sidebarOpen");

sidebarOpen.addEventListener("click", () => {
    nav.classList.add("active");
});

sidebarClose.addEventListener("click", () => {
    nav.classList.remove("active");
});

selectSection.addEventListener("click", () => {
    nav.classList.remove("active");
});