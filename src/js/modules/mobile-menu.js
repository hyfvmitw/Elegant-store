function mobileMenu() {
    const closeMobileMenuBtn = document.querySelector('.menu-mobile-close')
    const mobileNav = document.querySelector(".mobile-nav")
    const mobileNavFade = document.querySelector(".mobile-nav-fade")

    closeMobileMenuBtn.onclick = function () {
        mobileNav.remove();
        mobileNavFade.remove();
    }
}

export default mobileMenu;