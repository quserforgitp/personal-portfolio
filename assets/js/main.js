// assets/js/main.js

import { initPortfolioSlider } from './modules/portfolioSlider.js';
import { initStickyNavbar } from './modules/navbarSticky.js';
import { initHamburgerToggle } from './modules/hamburgerToggle.js';

document.addEventListener('DOMContentLoaded', () => {
  initStickyNavbar();
  initHamburgerToggle();
  initPortfolioSlider();
});