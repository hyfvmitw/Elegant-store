// Галерея и лайтбоксы от Fancybox
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

Fancybox.bind('[data-fancybox]', {
	// Your custom options
});

// Мобильная навигация
import mobileNav from './modules/mobile-nav.js';
mobileNav();

// Закрытие мобильной навигация
import mobileMenu from './modules/mobile-menu.js';
mobileMenu();

// Закрытие Tagline
import tagline from './modules/tagline.js';
tagline();

// Swiper 
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
const swiper = new Swiper('.swiper', {
	slidesPerView: 5,
	spaceBetween: 12,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	breakpoints: {
        800: {
          spaceBetween: 24,
        },
      },
	// Navigation arrows
	// navigation: {
	// 	nextEl: '.swiper-button-next',
	// 	prevEl: '.swiper-button-prev',
	// },

});