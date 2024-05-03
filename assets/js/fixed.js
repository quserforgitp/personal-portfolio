(function () {
  const navbar = document.querySelector(".layout__nav");
  const hamburgerBtn = document.querySelector(".nav__hamburger-btn");

  const navlist = document.querySelector(".nav__list");
  const main = document.querySelector("main");
  let navbarHeight = navbar.getBoundingClientRect().height;
  const breakpoint = main.offsetTop - navbarHeight;
  let windowPos;
  let isFixed = false;

  function updatePos() {
    windowPos = window.scrollY;
  }

  function onScroll() {
    updatePos();

    if (windowPos >= breakpoint && !isFixed) {
      navlist.classList.remove("open");
      hamburgerBtn.classList.remove("open");

      navbar.classList.add("navbar-fixed");
      main.style.cssText = "margin-top: " + navbarHeight + "px;";
      isFixed = true;
    } else if (windowPos < breakpoint && isFixed) {
      navbar.classList.remove("navbar-fixed");
      main.style.cssText = "margin-top: " + 0;
      isFixed = false;
    } else if (windowPos >= breakpoint && isFixed) {
      navlist.classList.remove("open");
      hamburgerBtn.classList.remove("open");
    }
  }

  document.addEventListener("scroll", onScroll);
})();
