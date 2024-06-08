function animateFirstLetter() {
  const firstLetter = document.querySelector("#ø");
  const htmlIcon = document.querySelector("#ø img");

  firstLetter.addEventListener("mouseover", () => {
    htmlIcon.classList.add("animateHtmlIcon");
  });
  firstLetter.addEventListener("mouseout", () => {
    htmlIcon.classList.remove("animateHtmlIcon");
  });
}

function animateSecondLetter() {
  const secondLetter = document.querySelector("#y");
  const cssIcon = document.querySelector("#y img");

  secondLetter.addEventListener("mouseover", () => {
    cssIcon.classList.add("animateCssIcon");
    secondLetter.style.rotate = "5deg";
  });
  secondLetter.addEventListener("mouseout", () => {
    cssIcon.classList.remove("animateCssIcon");
    secondLetter.style.rotate = "0deg";
  });
}

function animateThirdLetter() {
  const thirdLetter = document.querySelector("#v");
  const jsIcon = document.querySelector("#v img");
  const header = document.querySelector(".header-container");
  let borderBottomTimeout;

  thirdLetter.addEventListener("mouseenter", () => {
    jsIcon.classList.add("animateJsIcon");
    clearTimeout(borderBottomTimeout);

    borderBottomTimeout = setTimeout(() => {
      if (jsIcon.classList.contains("animateJsIcon")) {
        header.style.borderBottom = "1px solid yellow";
      }
    }, 800);
  });

  thirdLetter.addEventListener("mouseleave", () => {
    jsIcon.classList.remove("animateJsIcon");
    header.style.borderBottom = "none";
    clearTimeout(borderBottomTimeout);
  });
}

function animateFourthLetter() {
  const fourthLetter = document.querySelector("#i");
  const reactIcon = document.querySelector("#i img");

  fourthLetter.addEventListener("mouseover", () => {
    reactIcon.classList.add("animateReactIcon");
  });
  fourthLetter.addEventListener("mouseout", () => {
    reactIcon.classList.remove("animateReactIcon");
  });
}

function animateFifthLetter() {
  const sixthLetter = document.querySelector("#n");
  const nodeIcon = document.querySelector("#n img");

  sixthLetter.addEventListener("mouseover", () => {
    nodeIcon.classList.add("animateBootstrapIcon");
    nodeIcon.classList.add("bootstrap-transform");
  });
  sixthLetter.addEventListener("mouseout", () => {
    nodeIcon.classList.remove("bootstrap-transform");
    nodeIcon.classList.remove("animateBootstrapIcon");
  });
}

function animateName() {
  animateFirstLetter();
  animateSecondLetter();
  animateThirdLetter();
  animateFourthLetter();
  animateFifthLetter();
}

export { animateName };
