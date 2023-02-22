// import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js';
import Swiper from '/node_modules/swiper/swiper-bundle.esm.browser.min.js';
  // import Swiper styles
// import 'swiper/css/bundle';

// // import Swiper styles
// import "swiper/css";
// import "swiper/css/bundle";
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    effect: 'coverflow',
  coverflowEffect: {
    rotate: 30,
    slideShadows: false,
  },
    grabCursor: true,
    // effect: "creative",
    //   creativeEffect: {
    //     prev: {
    //       shadow: true,
    //       origin: "left center",
    //       translate: ["-5%", 0, -200],
    //       rotate: [0, 100, 0],
    //     },
    //     next: {
    //       origin: "right center",
    //       translate: ["5%", 0, -200],
    //       rotate: [0, -100, 0],
    //     },
    //   },
      autoplay: {
        delay: 2500,
      },
    
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });
  
  
// swiper;