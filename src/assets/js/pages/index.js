import triggerPopup from "../components/_trigger-popup.js";
import animateHeadings from "../components/_animate-headings.js";

animateHeadings();

const navbar = document.querySelector("#main-nav");
const navLogo = navbar.querySelector(".nav-logo");
const headerWrapper = document.querySelector("#index-header .img-wrapper");

window.addEventListener("scroll", () => {
    if (window.scrollY > 5) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

headerWrapper.classList.add("animate");
/* ============= TRIGGER POPUP ON PAGE LOAD ============= */
// triggerPopup("#popup");
