const workCasesFencesSlider = new Swiper('.work-cases__fences-slider', {
  slidesPerView: 4,
  simulateTouch: false,
  slideActiveClass: 'false',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1880: {
      slidesPerView: 4,
      spaceBetween: 99,
    },
    1670: {
      slidesPerView: 3.8,
    },
    1580: {
      slidesPerView: 3.7,
    },
    1400: {
      slidesPerView: 3.85,
    },
    1280: {
      slidesPerView: 2.7,
    },
    1080: {
      slidesPerView: 2.85,
    },
    1000: {
      slidesPerView: 2.84,
    },
    880: {
      slidesPerView: 2.4,
    },
    800: {
      slidesPerView: 1.7,
    },
    681: {
      slidesPerView: 1.8,
    },
    620: {
      slidesPerView: 0.93,
    },
    270: {
      slidesPerView: 0.93,
    }
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
  },
  breakpoints: {
    1880: {
      slidesPerView: 5,
    },
    1670: {
      slidesPerView: 3.73,
    },
    1580: {
      slidesPerView: 3.7,
    },
    1400: {
      slidesPerView: 3.85,
    },
    1280: {
      slidesPerView: 2.7,
    },
    1080: {
      slidesPerView: 2.85,
    },
    1000: {
      slidesPerView: 2.84,
    },
    880: {
      slidesPerView: 2.5,
    },
    800: {
      slidesPerView: 1.7,
    },
    680: {
      slidesPerView: 1.8,
    },
    620: {
      slidesPerView: 0.93,
    },
    270: {
      slidesPerView: 0.93,
    }
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
  },
  breakpoints: {
    1680: {
      slidesPerView: 2.15,
      spaceBetween: 99,
    },
    1480: {
      slidesPerView: 2,
      spaceBetween: 99,
    },
    1050: {
      slidesPerView: 1.5,
      spaceBetween: 99,
    },
    870: {
      slidesPerView: 1.2,
      spaceBetween: 99,
    },
    270: {
      slidesPerView: 1.15,
      spaceBetween: 99,
    }
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
  },
  breakpoints: {
    1680: {
      slidesPerView: 2.15,
      spaceBetween: 99,
    },
    1480: {
      slidesPerView: 2,
      spaceBetween: 99,
    },
    1050: {
      slidesPerView: 1.5,
      spaceBetween: 99,
    },
    870: {
      slidesPerView: 1.2,
      spaceBetween: 99,
    },
    270: {
      slidesPerView: 1.15,
      spaceBetween: 99,
    }
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
  modalTabName = this.getAttribute('data-tab-name');
  allActiveTabs = document.querySelectorAll('[data-tab-name="' + modalTabName + '"]');
  allActiveTabs.forEach(item => {
    item.classList.add('--active');
  })
  selectModalTabContent(modalTabName);
}
function selectTabContent(tabName) {
  tabContent.forEach(item => {
    item.classList.contains(tabName) ?
      item.classList.add('--active') :
      item.classList.remove('--active');
    switch (tabName) {
      case 'fences': {
        workCasesFencesSlider.update();
        break;
      }
      case 'gates': {
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
const overlayOrder = document.getElementById('overlay-order');
const needHelpButton = document.querySelector('.need-help');
openModalFencesSlides.forEach(slide => {
  slide.addEventListener('click', (e) => {
    e.stopPropagation();
    const modal = document.querySelector(slide.dataset.modalTarget);
    openModal(modal);
  })
})
closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.--active');
    modals.forEach(modal => {
      closeModal(modal);
    })
  })
})
overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.--active');
  modals.forEach(modal => {
    closeModal(modal);
  })
})
overlayOrder.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.--active');
  modals.forEach(modal => {
    closeModal(modal);
  })
})
function openModal(modal) {
  if (modal == null) return;
  if (modal.id === 'modal-econom' ||
    modal.id === 'modal-standart' ||
    modal.id === 'modal-premium') {
    needHelpButton.classList.add('--action')
    overlay.classList.add('--active');
    modal.classList.add('--active');
    document.body.classList.add('--scroll-hiden');
  } else {
    overlayOrder.classList.add('--active');
    modal.classList.add('--active');
    document.body.classList.add('--scroll-hiden');
  }
}
function closeModal(modal) {
  if (modal == null) return;
  if (modal.id === 'modal-econom' ||
    modal.id === 'modal-standart' ||
    modal.id === 'modal-premium') {
    needHelpButton.classList.remove('--action')
    overlay.classList.remove('--active');
    modal.classList.remove('--active');
    document.body.classList.remove('--scroll-hiden');
  } else {
    overlayOrder.classList.remove('--active');
    modal.classList.remove('--active');
    document.body.classList.remove('--scroll-hiden');
  }
}

needHelpButton.addEventListener('click', () => {
  needHelpButton.classList.remove('--action')
})

const burgerMenu = document.querySelector('.header__menu-burger');
const menuLink = document.querySelectorAll('.header__menu-burger-li');
const phoneRecallLink = document.querySelector('.burger-phone__recall');
const burgerLogo = document.querySelector('.menu__burger');
const closeBurgerBtn = document.querySelector('.menu__close-button');
burgerLogo.addEventListener('click', toggleBurger);
phoneRecallLink.addEventListener('click', toggleBurger);
menuLink.forEach(link => {
  link.addEventListener('click', toggleBurger);
});
closeBurgerBtn.addEventListener('click', toggleBurger);
function toggleBurger() {
  burgerMenu.classList.toggle('--active');
  document.body.classList.toggle('--scroll-hiden');
};

const colorsContainer = document.querySelectorAll('.colors__container');
colorsContainer.forEach(container => {
  container.addEventListener('mousewheel', function (e) {
    this.scrollLeft -= (e.wheelDelta);
    e.preventDefault();
  }, false);
})