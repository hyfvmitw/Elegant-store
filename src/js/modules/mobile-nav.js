function mobileNav() {
	// Mobile nav button
	const navBtn = document.querySelector('.nav__burger');
	const nav = document.querySelector('.mobile-nav');
	const navFade = document.querySelector('.mobile-nav-fade');
	// const menuIcon = document.querySelector('.nav-icon');

	navBtn.onclick = function () {
		nav.classList.toggle('mobile-nav--open');
		navFade.classList.toggle('mobile-nav-fade--open');
		// menuIcon.classList.toggle('nav-icon--active');
		document.body.classList.toggle('no-scroll');
	};
}

export default mobileNav;