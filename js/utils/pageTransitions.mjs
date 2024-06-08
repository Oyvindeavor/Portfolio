function transitionPage() {
    const navLinks = document.querySelectorAll(".header-container a");
    const body = document.querySelector("body");
  

    body.style.transition = "opacity 0.4s ease-in-out";
  
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault(); 
        const href = link.getAttribute("href");
        body.style.opacity = '0';
        setTimeout(() => {
          window.location.href = href; 
        }, 500); 
      });
    });
  }
  
  export { transitionPage };