/* ========================= NPM ======================== */

// Use following imports only where needed (not globally)
// Bootstrap modules (add as needed)
// import "bootstrap/js/dist/collapse";

// Glidejs
// import Glide from "@glidejs/glide";
// window.Glide = Glide;

/* ======================== BASE ======================== */
// Import utilities as needed
import {
    utl_setFooterYear,
    // utl_ehElements,
    // utl_toggleCookiesAlert,
    // utl_anchorScrollOffset,
} from "./base/_utils";

// Call utility functions after imported
utl_setFooterYear();
// utl_ehElements();
// utl_toggleCookiesAlert();
// utl_anchorScrollOffset();

/* ===================== COMPONENTS ===================== */
import navigationInit from "./components/_navigation.js";
navigationInit();

import animateHeadings from "./components/_animate-headings.js";
document.querySelector(".section-heading") && animateHeadings();

import carouselsInit from "./components/_carousels";
document.querySelector(".carousel") && carouselsInit();
/* ======================== PAGES ======================= */
// Individual page scripts are added in the header of specific page's index file
