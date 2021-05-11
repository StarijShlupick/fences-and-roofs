const bulletButtons = ['Заборы', 'Крыши']

const ourServicesSlider = new Swiper('.our-services-slider', {
  slidesPerView: 1,
  spaceBetween: 0,
  simulateTouch: false,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  slideActiveClass: 'false',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (bulletButtons[index]) + '</span>';
      },
  }
})
const ourServicesFencesSlider = new Swiper('.our-services__fences-slider', {
  slidesPerView: 4,
  spaceBetween: 67,
  simulateTouch: false,
  nested: true,
  slideActiveClass: 'false',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
})
const ourServicesRoofsSlider = new Swiper('.our-services__roofs-slider', {
  slidesPerView: 4,
  spaceBetween: 67,
  simulateTouch: false,
  nested: true,
  slideActiveClass: 'false',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
})

const workCasesSlider = new Swiper('.work-cases-slider', {
  slidesPerView: 1,
  spaceBetween: 0,
  simulateTouch: false,
  hashNavigation: {
    watchState: true
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  slideActiveClass: 'false',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (bulletButtons[index]) + '</span>';
      },
  }
})
const workCasesFencesSlider = new Swiper('.work-cases__fences-slider', {
  slidesPerView: 5,
  spaceBetween: 36,
  simulateTouch: false,
  nested: true,
  slideActiveClass: 'false',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
})
const workCasesRoofsSlider = new Swiper('.work-cases__roofs-slider', {
  slidesPerView: 5,
  spaceBetween: 36,
  simulateTouch: false,
  nested: true,
  slideActiveClass: 'false',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
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

const toScroll = idElement => 
document.getElementById(idElement).scrollIntoView({behavior: 'smooth'});