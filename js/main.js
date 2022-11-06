"use strict";

//Selections
const nav = document.querySelector(".nav");
const heroImage = document.querySelector(".hero__image");
const heroTitle = document.querySelector(".hero__title");

//Navbar

const handleLinkHover = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");

    siblings.forEach((el) => {
      el.style.transition = "all 0.2s ease-in-out";
      if (el !== link) el.style.opacity = this;
    });
  }
};

nav.addEventListener("mouseover", handleLinkHover.bind(0.5));
nav.addEventListener("mouseout", handleLinkHover.bind(1));

//Header Image Hover

heroTitle.addEventListener("mouseover", () => {
  heroImage.classList.add("bg-opacity");
});
heroTitle.addEventListener("mouseout", () => {
  heroImage.classList.remove("bg-opacity");
});

//Smooth Scroll

const scrollFunc = function (e) {
  const link = e.target;
  document
    .getElementById(link.getAttribute("href"))
    .scrollIntoView({ behavior: "smooth" });
};

nav.addEventListener("click", scrollFunc);

//Sticky Nav

window.addEventListener("scroll", () => {
  const navHeight = parseInt(window.getComputedStyle(nav).height);
  if (window.scrollY > `${navHeight}`) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});
