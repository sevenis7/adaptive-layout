new Swiper('.swiper', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  }
})

new Accordion('.accordion-list', {
  elementClass: 'accordion',
  triggerClass: 'accordion__control',
  panelClass: 'accordion__content',
  activeClass: 'accordion_active'
});

let tabsBtn = document.querySelectorAll('.tabs-nav__button');
let tabsItem = document.querySelectorAll('.tabs-item');
let tabsImg = document.querySelectorAll('.tabs-image');

tabsBtn.forEach( el => {
  el.addEventListener('click', e => {
    const path = e.currentTarget.dataset.path;
    const img = e.currentTarget.dataset.img

    tabsBtn.forEach( btn => btn.classList.remove('tabs-nav__button_active'));
    e.currentTarget.classList.add('tabs-nav__button_active');

    tabsItem.forEach( el => el.classList.remove('tabs-item_active'));
    document.querySelector(`[data-target=${path}]`).classList.add('tabs-item_active');

    tabsImg.forEach( x => x.classList.remove('tabs-image_active'));
    document.querySelector(`[data-img-target=${img}]`).classList.add('tabs-image_active');
  })
}
)

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = document.querySelectorAll('.nav__link');

burger.addEventListener('click', () => {
  burger.classList.toggle('burger_active');
  menu.classList.toggle('header__nav_active');
  document.body.classList.toggle('stop-scroll');
})

console.log(menuLinks)
menuLinks.forEach( el => el.addEventListener('click', () => {
  burger.classList.remove('burger_active');
  menu.classList.remove('header__nav_active');
  document.body.classList.remove('stop-scroll');
}))
