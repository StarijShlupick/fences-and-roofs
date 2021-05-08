const bulletButtons = ['Заборы', 'Крыши']

const ourServicesSlider = new Swiper('.our-services-slider', {
  slidesPerView: 1,
  simulateTouch: false,
  hashNavigation: {
    watchState: true
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (bulletButtons[index]) + '</span>';
      },
  }
})

const feedbackSwiper = new Swiper('.feedback-slider', {
  centeredSlides: true,
  slidesPerView: 2.15,
  spaceBetween: 99,
  simulateTouch: false,
  loop: true,
  slideActiveClass: 'swiper-slide-active',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

const ourWorkSwiper = new Swiper('.our-work-slider', {
  centeredSlides: true,
  slidesPerView: 2.15,
  spaceBetween: 99,
  simulateTouch: false,
  loop: true,
  slideActiveClass: 'swiper-slide-active',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});