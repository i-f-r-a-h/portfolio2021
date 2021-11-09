// Mobile navigation (inspiblack by https://codepen.io/riogrande/pen/gbXxdx) //

const menuIcon = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar');
const menuLink = document.querySelector('.navbar__list-link');
const a = document.querySelectorAll('a');
//when the hamburger is clicked, menu opens
menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('change');
});
//when a link is clicked, menu closes
a.forEach(item => {
  item.addEventListener('click', () => {
    navbar.classList.remove('change');
  });
});

//enable mobile grid horizontal scroll from https://stackoverflow.com/questions/58353280/prevent-click-when-leave-drag-to-scroll-in-js
