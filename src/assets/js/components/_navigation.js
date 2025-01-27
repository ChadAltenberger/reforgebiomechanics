import { Offcanvas } from "bootstrap";

export default function navigationInit() {
    document.addEventListener("DOMContentLoaded", function () {
        // Get all dropdown toggles
        const dropdownToggles = document.querySelectorAll(".nav-item.dropdown");
        const toggler = document.querySelector(".animated-toggler");
        const bsOffcanvas = new Offcanvas("#offcanvas-navbar");
        const mainNav = document.querySelector("#offcanvas-navbar");

        toggler.addEventListener("click", () => {
            toggler.classList.add("opened");
            setTimeout(() => {
                bsOffcanvas.show();
                // toggler.classList.remove("opened");
            }, 350);
        });

        document.querySelector("#offcanvas-navbar").addEventListener("hidden.bs.offcanvas", () => {
            toggler.classList.remove("opened");
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
