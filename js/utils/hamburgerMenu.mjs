function HamburgerToggle() {
      const hamburgerMenu = document.querySelector('.hamburger-menu img');
      const mobileMenu = document.querySelector('.mobile-menu');
      const closeMenu = document.querySelector('.close-menu img');
  
      hamburgerMenu.addEventListener('click', () => {
        mobileMenu.classList.add('show');
        document.body.classList.add('no-scroll');
      });
  
      closeMenu.addEventListener('click', () => {
        mobileMenu.classList.remove('show');
        document.body.classList.remove('no-scroll');
      });
  }

export { HamburgerToggle };