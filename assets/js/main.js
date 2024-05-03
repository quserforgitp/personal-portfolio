(function () {
    // HTML elements
    const navbar = document.querySelector('.nav__list');
    const hamburger = document.querySelector('.nav__hamburger-btn');

    // Listeners
    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('open');
        hamburger.classList.toggle('open');
    });
})()


