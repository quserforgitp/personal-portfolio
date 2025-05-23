// assets/js/modules/navbarSticky.js

export function initStickyNavbar() {
  const navbar = document.querySelector('.nav');
  const hamburgerBtn = document.querySelector('.nav__hamburger-btn');
  const main = document.querySelector('main');

  if (!navbar || !hamburgerBtn || !main) return;

  let navbarHeight = navbar.getBoundingClientRect().height;
  const breakpoint = main.offsetTop - navbarHeight;
  let isFixed = false;

  document.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (scrollY >= breakpoint && !isFixed) {
      navbar.classList.remove('open');
      hamburgerBtn.classList.remove('open');
      navbar.classList.add('fixed');
      main.style.marginTop = navbarHeight + 'px';
      isFixed = true;
    } else if (scrollY < breakpoint && isFixed) {
      navbar.classList.remove('fixed');
      main.style.marginTop = '0px';
      isFixed = false;
    } else if (scrollY >= breakpoint && isFixed) {
      navbar.classList.remove('open');
      hamburgerBtn.classList.remove('open');
    }
  });
}
