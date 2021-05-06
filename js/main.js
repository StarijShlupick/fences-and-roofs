const ourWorkSwiper = new Swiper('.our-work-slider', {
  centeredSlides: true,
  slidesPerView: 2.15,
  spaceBetween: 65,
  simulateTouch: false,
  loop: true,
  slideActiveClass: 'swiper-slide-active',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});