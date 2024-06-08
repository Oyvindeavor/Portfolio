import { animateName } from "./animations/animate.mjs";
import { transitionPage } from "../js/utils/pageTransitions.mjs";
import { HamburgerToggle } from "../js/utils/hamburgerMenu.mjs";

document.addEventListener("DOMContentLoaded", () => {
    animateName();
    transitionPage();
    HamburgerToggle();
}
);


