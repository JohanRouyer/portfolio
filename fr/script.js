const menuHamburger = document.querySelector('.hamburger-btn');
const navLinks = document.querySelector('.nav-links');

let menuOpen = false;

menuHamburger.addEventListener('click', () => {
  if (!menuOpen) {
    menuHamburger.classList.add('open');
    navLinks.classList.add('open');
    menuOpen = true;
  } else {
    menuHamburger.classList.remove('open');
    navLinks.classList.remove('open');
    menuOpen = false;
  }
});