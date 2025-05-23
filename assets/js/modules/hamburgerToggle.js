// assets/js/modules/hamburgerToggle.js

export function initHamburgerToggle() {
  const navbar = document.querySelector('.nav');
  const hamburger = document.querySelector('.nav__hamburger-btn');

  if (!navbar || !hamburger) return;

  hamburger.addEventListener('click', () => {
    navbar.classList.toggle('open');
    hamburger.classList.toggle('open');
  });
}
