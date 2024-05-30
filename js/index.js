const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});



// табы
const tabItem = document.querySelectorAll('.post__right-card');
const tabContent = document.querySelectorAll('.post__inner-left');

tabItem.forEach(function (element) {
  element.addEventListener('click', open);
});

function open(evt) {
  const tabTarget = evt.currentTarget;
  const button = tabTarget.dataset.button;

  tabItem.forEach(function (item) {
    item.classList.remove('post__right-card--active');
  })

  tabTarget.classList.add('post__right-card--active');
  tabContent.forEach(function (item) {
    item.classList.remove('post__inner-left--active');
  });

  document.querySelector(`#${button}`).classList.add('post__inner-left--active');
}
