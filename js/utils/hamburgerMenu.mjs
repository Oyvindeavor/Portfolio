function HamburgerToggle() {
      const hamburgerMenu = document.querySelector('.hamburger-menu img');
      const mobileMenu = document.querySelector('.mobile-menu');
      const closeMenu = document.querySelector('.close-menu img');
  
      hamburgerMenu.addEventListener('click', () => {
        mobileMenu.classList.add('show');
        console.log('clicked');
      });
  
      closeMenu.addEventListener('click', () => {
        mobileMenu.classList.remove('show');
      });
  }

export { HamburgerToggle };