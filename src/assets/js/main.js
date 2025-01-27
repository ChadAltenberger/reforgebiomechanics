/* ========================= NPM ======================== */
// jQuery
// import "./base/_jquery-global.js";

// Popper.js (* tooltip, popover, dropdown)
// import * as Popper from "@popperjs/core";

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
} from "./base/_utilities.js";

// Call utility functions after imported
utl_setFooterYear();
// utl_ehElements();
// utl_toggleCookiesAlert();
// utl_anchorScrollOffset();

/* ===================== COMPONENTS ===================== */
import navigationInit from "./components/_navigation.js";
navigationInit();

/* ======================== PAGES ======================= */
// Individual page scripts are added in the header of specific page's index file
