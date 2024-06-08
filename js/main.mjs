import { animateName } from "./animations/animate.mjs";
import { transitionPage } from "../js/utils/pageTransitions.mjs";

document.addEventListener("DOMContentLoaded", () => {
    animateName();
    transitionPage();
    disableScroll();
    }
);

// Prevents scrolling on the homepage as i dont want scrolling on the homepage
function disableScroll() {
    document.addEventListener("touchmove", preventDefault, { passive: false });
}