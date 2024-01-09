import Swiper, { Navigation, Pagination, Autoplay, FreeMode } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, FreeMode]);


const swiperStack = new Swiper('.swiper--stack', {
  slidesPerView: 2,
  spaceBetween: 30,
  speed: 3000,
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
    enabled: true,
  },
  loop: true,
  freeMode: true,
  breakpoints: {
    1024: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    576: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    320: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  }
});

const swiperReviews = new Swiper('.swiper--reviews', {
  navigation: {
    nextEl: ".reviews__nav-btn--next",
    prevEl: ".reviews__nav-btn--prev",
  },
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  }
});

const swiperPromoPortfolio = new Swiper('.swiper--portfolio', {
  navigation: {
    nextEl: ".promo-portfolio__nav-btn--next",
    prevEl: ".promo-portfolio__nav-btn--prev",
  },
  spaceBetween: 30,
  loop: true,

  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },

  pagination: {
    el: ".dynamic-pagination",
    dynamicBullets: true,
  },
});
