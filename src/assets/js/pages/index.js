import triggerPopup from "../components/_trigger-popup";
import { utl_ehCarouselItems } from "../base/_utils";

const navbar = document.querySelector("#main-nav");
const headerLogo = document.querySelector(".header-logo");
const headerWrapper = document.querySelector("#index-header .img-wrapper");
const scheduleWrapper = document.querySelector(".schedule-wrapper");
const grayBox = document.querySelector(".gray-box");

const testimonialCarousel = document.querySelector("#testimonial-carousel");

utl_ehCarouselItems(testimonialCarousel);

window.addEventListener("scroll", () => {
    if (window.scrollY > 144) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

setTimeout(() => {
    headerLogo.classList.add("animate");
    headerWrapper.classList.add("animate");
    grayBox.classList.add("animate");
    scheduleWrapper.classList.add("animate");
}, 300);

/* ============= TRIGGER POPUP ON PAGE LOAD ============= */
// triggerPopup("#popup");
