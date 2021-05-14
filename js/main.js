const workCasesFencesSlider = new Swiper('.work-cases__fences-slider', {
  slidesPerView: 5,
  spaceBetween: 36,
  simulateTouch: false,
  slideActiveClass: 'false',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
})
const workCasesGatesSlider = new Swiper('.work-cases__gates-slider', {
  slidesPerView: 5,
  spaceBetween: 36,
  simulateTouch: false,
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

const tabNav = document.querySelectorAll('.nav__item');
const tabContent = document.querySelectorAll('.tab');
let tabName;
const modalTabNav = document.querySelectorAll('.modal-nav__item');
const modalTabContent = document.querySelectorAll('.modal-tab');
let modalTabName;
function selectTabNav() {
  tabNav.forEach(item => {
    item.classList.remove('--active');
  });
  this.classList.add('--active');
  tabName = this.getAttribute('data-tab-name');
  selectTabContent(tabName);
}
function selectModalTabNav() {
  modalTabNav.forEach(item => {
    item.classList.remove('--active');
  });
  this.classList.add('--active');
  modalTabName = this.getAttribute('data-tab-name');
  selectModalTabContent(modalTabName);
}
function selectTabContent(tabName) {
  tabContent.forEach(item => {
    item.classList.contains(tabName) ? 
    item.classList.add('--active') : 
    item.classList.remove('--active');
    switch (tabName){
      case 'fences':{
        workCasesFencesSlider.update();
        break;
      }
      case 'gates':{
        workCasesGatesSlider.update();
        break;
      }
    }
  })
}
function selectModalTabContent(modalTabName) {
  modalTabContent.forEach(item => {
    item.classList.contains(modalTabName) ? 
    item.classList.add('--active') : 
    item.classList.remove('--active');
    // switch (modalTabName){
    //   case 'fences':{
    //     workCasesFencesSlider.update();
    //     break;
    //   }
    //   case 'gates':{
    //     workCasesGatesSlider.update();
    //     break;
    //   }
    // }
  })
}
tabNav.forEach(item => {
  item.addEventListener('click', selectTabNav)
})
modalTabNav.forEach(item => {
  item.addEventListener('click', selectModalTabNav)
})

const toScroll = (link, tab) => {
  document.getElementById(link).scrollIntoView({ behavior: 'smooth' });
  tabNav.forEach(item => {
    item.classList.remove('--active');
    tabName = item.getAttribute('data-tab-name');
    tabName === tab ? item.classList.add('--active') : null;
  });
  selectTabContent(tab);
}

const openModalFencesSlides = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');
openModalFencesSlides.forEach(slide => {
  slide.addEventListener('click', (e) => {
    e.stopPropagation();
    const modal = document.querySelector(slide.dataset.modalTarget);
    openModal(modal);
  })
})
closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  })
})
overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.--active');
  modals.forEach(modal => {
    closeModal(modal);
  })
})
function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('--active');
  overlay.classList.add('--active');
  document.body.classList.add('--scroll-hiden');
}
function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('--active');
  overlay.classList.remove('--active');
  document.body.classList.remove('--scroll-hiden');
}