(function () {
  /* DOM Elements */
  const navbar = document.querySelector(".nav");
  const hamburgerBtn = document.querySelector(".nav__hamburger-btn");
  const main = document.querySelector("main");

  /* Variables */
  let navbarHeight = navbar.getBoundingClientRect().height;
  const breakpoint = main.offsetTop - navbarHeight;
  let windowPos;
  let isFixed = false;

  /* Functions */
  function updatePos() {
    windowPos = window.scrollY;
  }

  function onScroll() {
    updatePos();

    if (windowPos >= breakpoint && !isFixed) {
      navbar.classList.remove("open");
      hamburgerBtn.classList.remove("open");

      navbar.classList.add("fixed");
      main.style.cssText = "margin-top: " + navbarHeight + "px;";
      isFixed = true;
    } else if (windowPos < breakpoint && isFixed) {
      navbar.classList.remove("fixed");
      main.style.cssText = "margin-top: " + 0;
      isFixed = false;
    } else if (windowPos >= breakpoint && isFixed) {
      navbar.classList.remove("open");
      hamburgerBtn.classList.remove("open");
    }
  }

  /* Listeners */
  document.addEventListener("scroll", onScroll);
})();
