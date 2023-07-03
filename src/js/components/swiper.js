import Swiper, { Navigation, Pagination, Autoplay, FreeMode } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, FreeMode]);


const swiperStack = new Swiper('.swiper--stack', {
  slidesPerView: 5,
  spaceBetween: 30,
  speed: 3000,
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
    enabled: true,
  },
  loop: true,
  freeMode: true,
});