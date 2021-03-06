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

const btn = document.querySelector(".btn-toggle");

btn.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
});