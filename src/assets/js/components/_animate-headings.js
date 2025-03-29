export default function animateHeadings() {
    document.addEventListener("DOMContentLoaded", () => {
        const headings = document.querySelectorAll(".section-heading");

        // Determine if element is in view
        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        // Grow yellow lines above and below sub-headings
        window.addEventListener("scroll", () => {
            headings.forEach((heading) => {
                if (isInViewport(heading)) {
                    setTimeout(() => {
                        heading.classList.add("animate");
                    }, 300);
                } else {
                    heading.classList.remove("animate");
                }
            });
        });
    });
}
