import { animateName } from "./animations/animate.mjs";
import { transitionPage } from "../js/utils/pageTransitions.mjs";

document.addEventListener("DOMContentLoaded", () => {
    animateName();
    transitionPage();
    }
);

// Prevents scrolling on the homepage as i dont want scrolling on the homepage
