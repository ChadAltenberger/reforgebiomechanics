export default function stickySidesInit() {
    let stickySideLeftElements = document.querySelectorAll(".sticky-side-left");
    let stickySideRightElements = document.querySelectorAll(".sticky-side-right");

    function getStickyContainerAndElements() {
        stickySideLeftElements.forEach((element) => {
            // Calculate the left offset of the container
            let containerLeftOffset = element.parentElement.getBoundingClientRect().left;
            // Set the left position of the element to the negative of the container's left offset
            element.style.cssText = `margin-left: calc(${-containerLeftOffset}px - var(--bs-gutter-x) * .5);`;
        });

        stickySideRightElements.forEach((element) => {
            // Calculate the right offset of the container
            let containerRightOffset = element.parentElement.getBoundingClientRect().right;
            // Calculate the difference of window width and right offset to get distance from right edge
            let rightDistance = window.innerWidth - containerRightOffset;
            // Set the right position of the element to the negative of the container's right offset
            element.style.right = `${-rightDistance}px`;
        });
    }

    let oldWidth = window.innerWidth;

    window.addEventListener("load", getStickyContainerAndElements);

    window.addEventListener("resize", () => {
        if (window.innerWidth !== oldWidth) {
            getStickyContainerAndElements();

            oldWidth = window.innerWidth;
        }
    });
}
