import { animateName } from "./animations/animate.mjs";
import { transitionPage } from "../js/utils/pageTransitions.mjs";

document.addEventListener("DOMContentLoaded", () => {
    animateName();
    transitionPage();
    noScroll();
    }
);

function noScroll() {
    window.scrollTo(0, 0);
}