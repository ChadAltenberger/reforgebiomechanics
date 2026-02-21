/* ====== FORMAT TEMPLATE LITERALS AS REGULAR HTML ====== */
const html = String.raw;

/* ================= GET PAGE'S BODY ID ================= */
const utl_pageId = () => document.querySelector("body").getAttribute("id");

/* ========= GET AND SET CURRENT YEAR IN FOOTER ========= */
const utl_setFooterYear = () => (document.querySelector("#current-year").innerHTML = new Date().getFullYear());

/* ================ EQUAL HEIGHT ELEMENTS =============== */
const utl_ehElements = ({ async = false } = {}) => {
    let containerClasses = []; // Set empty array to store each container-classList

    function getAndSetHeights() {
        let ehContainers = document.querySelectorAll(".eh-container");
        for (let i = 0; i < ehContainers.length; i++) {
            // Add differentiating numbers to 'eh-container' classes (keeps equal-height elements contained to their appropriate containers)
            ehContainers[i].classList.replace("eh-container", `eh-container-${i}`);

            // Set the classList of each container to a '.'-separated string
            let containerClass = `.${ehContainers[i].classList.toString().replace(/ /g, ".")}`;

            containerClasses.push(containerClass);

            let equalHeightEls = document.querySelectorAll(
                `${containerClass} .eh`, // Target the equal-height elements within their eh-containers
            );

            let equalHeightElsArr = Array.from(equalHeightEls); // Convert NodeList to an Array

            // Get heights of each element and put in a new array (equalHeightValues)
            let equalHeightValues = equalHeightElsArr.map((el) => {
                return el.scrollHeight;
            });

            let maxHeight = Math.max(...equalHeightValues); // Get height of tallest element

            equalHeightElsArr.forEach((el) => {
                el.style.minHeight = `${maxHeight}px`;
            });
        }
    }

    function resizeHeights() {
        containerClasses.forEach((container) => {
            let elements = document.querySelectorAll(`${container} .eh`);
            let elementsArr = Array.from(elements);
            let maxHeight = 0;

            elementsArr.forEach((el) => {
                el.style.minHeight = "auto";
                if (el.scrollHeight > maxHeight) {
                    maxHeight = el.scrollHeight;
                }
            });

            elementsArr.forEach((el) => {
                el.style.minHeight = `${maxHeight}px`;
            });
        });
    }

    // Run immediately if this was triggered by async data
    if (async) {
        getAndSetHeights();
    } else {
        // Otherwise, wait for the full page load
        if (document.readyState === "complete") {
            getAndSetHeights();
        } else {
            window.addEventListener("load", getAndSetHeights);
        }
    }

    // Add resize event listener with throttling
    let resizeRaf;

    window.addEventListener("resize", () => {
        if (resizeRaf) return;
        resizeRaf = requestAnimationFrame(() => {
            resizeHeights();
            resizeRaf = null;
        });
    });
};

/* ========== MAKE CAROUSEL ITEMS EQUAL HEIGHTS ========= */
const utl_ehCarouselItems = (carousel) => {
    function normalizeSlideHeights() {
        const items = carousel.querySelectorAll(".carousel-item");

        let maxHeight = 0;

        // Reset the height and overflow properties
        items.forEach((item) => {
            Object.assign(item.style, {
                minHeight: "0",
                height: "auto",
                // Temporarily set css to allow for accurate height calculations
                overflow: "visible",
                display: "block",
                visibility: "hidden",
            });

            const itemHeight = item.offsetHeight; // Get heights of each item
            maxHeight = Math.max(maxHeight, itemHeight); // Compare maxHeight to current itemHeight & return larger of two

            // Reset display & visibility properties of each item to original values
            Object.assign(item.style, {
                display: "",
                visibility: "",
            });
        });

        // Set heights of each item to the maxHeight & reset overflow
        items.forEach((item) => {
            Object.assign(item.style, {
                height: `${maxHeight}px`,
                overflow: "",
            });
        });
    }

    // Add resize event listener with debouncing
    let resizeTimeout;

    function passHandler(event) {
        let oldWidth = window.innerWidth;

        window.addEventListener(event, () => {
            if (event === "load") {
                normalizeSlideHeights();
            } else if (event === "resize" || event === "orientationchange") {
                if (window.innerWidth !== oldWidth) {
                    clearTimeout(resizeTimeout);
                    // Give browser a chance to reset heights before resizing
                    resizeTimeout = setTimeout(normalizeSlideHeights, 100); // Reduce frequent execution
                    // normalizeSlideHeights();

                    oldWidth = window.innerWidth;
                }
            }
        });
    }

    passHandler("load");
    passHandler("resize");
    passHandler("orientationchange");
};

/* ======= RETURN FOCUS TO MODAL TRIGGER ON CLOSE ======= */
// Be sure to include function call on specific pages AFTER dynamically loaded modals (ex. staff modals)
const utl_handleModalClose = () => {
    const modals = document.querySelectorAll(".modal");
    if (modals.length === 0) return;

    modals.forEach((modal) => {
        if (modal.dataset.utlHandled) return; // If modal has already had the eventListener added (has data-utl-handled attribute), ignore it.

        modal.addEventListener("hide.bs.modal", () => {
            if (document.activeElement instanceof HTMLElement) {
                document.activeElement.blur();
            }
        });

        modal.dataset.utlHandled = "true"; // Add the data-utl-handled attribute so it doesn't get eventListener added more than once
    });
};

/* ============== PARSE DATA WITH PAPAPARSE ============= */
const utl_parseData = (data, Papa) => {
    // Return a Promise which contains Papa.parse method and will either resolve with parsed data or reject with an error
    return new Promise((resolve, reject) => {
        Papa.parse(data, {
            download: true,
            header: true,
            complete: resolve, // If completes with no errors, Promise will resolve and any subsequent code will be executed
            error: reject, // If any error with parsing, Promise will reject and no subsequent code will be executed
        });
    });
};

/* ===== OFFSET SCROLL POSITIONS OF ANCHOR ELEMENTS ===== */
const utl_anchorScrollOffset = () => {
    const offsetElements = document.querySelectorAll("[data-sa-offset]");

    function getOffsetValues() {
        offsetElements.forEach((element) => {
            const offsetValues = element
                .getAttribute("data-sa-offset")
                .split(",")
                .map((value) => value.trim());
            let scrollMarginTop;

            if (offsetValues.length === 1) {
                // Use the single offset value
                scrollMarginTop = offsetValues[0];
            } else {
                // Use the responsive code for two values
                if (window.innerWidth >= 992) {
                    // Desktop
                    scrollMarginTop = offsetValues[1]; // Use the second offset value for larger screens
                } else {
                    // Mobile
                    scrollMarginTop = offsetValues[0]; // Use the first offset value for smaller screens
                }
            }

            console.log(scrollMarginTop);
            element.style.cssText = `scroll-margin-top: ${scrollMarginTop};`;
        });
    }

    getOffsetValues();

    // Add resize event listener with throttling
    let resizeRaf;

    window.addEventListener("resize", () => {
        if (resizeRaf) return;
        resizeRaf = requestAnimationFrame(() => {
            getOffsetValues();
            resizeRaf = null;
        });
    });
};

/* ====== TOGGLE COOKIES ALERT/SET SESSION STORAGE ====== */
const utl_toggleCookiesAlert = () => {
    document.addEventListener("DOMContentLoaded", () => {
        const cookiesAlert = document.querySelector("#cookies-alert");

        // Check if the flag exists in sessionStorage
        if (!sessionStorage.getItem("cookiesAlertDisplayed")) {
            // If the flag doesn't exist, display the cookies alert after a delay
            setTimeout(() => {
                cookiesAlert.classList.add("visible");
            }, 2000);
        }

        cookiesAlert.querySelector(".close").addEventListener("click", () => {
            cookiesAlert.classList.remove("visible");

            setTimeout(() => {
                cookiesAlert.remove();
            }, 300);

            // Set the flag in sessionStorage indicating that the alert has been displayed
            sessionStorage.setItem("cookiesAlertDisplayed", true);
        });
    });
};

/* ================ EXPORT ALL UTILITIES ================ */
export { html, utl_pageId, utl_setFooterYear, utl_ehElements, utl_ehCarouselItems, utl_handleModalClose, utl_parseData, utl_anchorScrollOffset, utl_toggleCookiesAlert };
