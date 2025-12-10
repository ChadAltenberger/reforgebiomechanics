import { Offcanvas } from "bootstrap";
import { utl_pageId } from "../base/_utils.js";

export default function navigationInit() {
    document.addEventListener("DOMContentLoaded", function () {
        // Get all dropdown toggles
        const dropdownToggles = document.querySelectorAll(".nav-item.dropdown");
        const toggler = document.querySelector(".animated-toggler");
        const bsOffcanvas = new Offcanvas("#offcanvas-navbar");
        const headerLogo = document.querySelector(".header-logo");

        toggler.addEventListener("click", () => {
            toggler.classList.add("opened");
            setTimeout(() => {
                bsOffcanvas.show();

                utl_pageId() === "main-index" && (headerLogo.style.zIndex = "0");
            }, 350);
        });

        document.querySelector("#offcanvas-navbar").addEventListener("hidden.bs.offcanvas", () => {
            toggler.classList.remove("opened");
            headerLogo.style.zIndex = "9999";
        });

        // Remove default click behavior from dropdown items
        dropdownToggles.forEach((toggle) => {
            const dropdownMenu = toggle.querySelector(".dropdown-menu");

            toggle.addEventListener("show.bs.dropdown", (e) => {
                e.preventDefault();
            });
        });
    });
}
