const body = document.querySelector('.page');
const burgerItem = document.querySelector('.burger');
const menu = document.querySelector('.header__nav');
const menuItems = document.querySelectorAll('.nav-item');
const closeItem = document.querySelector('.close-burger');

burgerItem.addEventListener('click', () => {
  menu.classList.add('header__nav--active');
  body.style.overflow = 'hidden';
});

closeItem.addEventListener('click', () => {

  menu.classList.remove('header__nav--active');
  body.style.overflow = 'scroll';
});

for (const menuItem of menuItems) {
  menuItem.addEventListener('click', () => {
    menu.classList.remove('header__nav--active');
    body.style.overflow = 'scroll';
  });
}

$(function (){
  $('.slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false,
          dots: true,
        }
      }
    ]
  });
})
