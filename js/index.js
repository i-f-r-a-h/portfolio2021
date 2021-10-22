// Mobile navigation (inspired by https://codepen.io/riogrande/pen/gbXxdx) //
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

/* <nav class="navbar">
<!-- hamburger menu -->
<div class="hamburger-menu">
    <div class="line line-1"></div>
    <div class="line line-2"></div>
    <div class="line line-3"></div>
</div>
<!-- site navigation -->
<ul class="navbar__list">
    <li class="navbar__list-item">
        <a href="#home" class="navbar__list-link">home.</a>
    </li>
    <li class="navbar__list-item">
        <a href="#about" class="navbar__list-link">about.</a>
    </li>
    <li class="navbar__list-item">
        <a href="#portfolio" class="navbar__list-link">portfolio.</a>
    </li>
    <li class="navbar__list-item">
        <a href="#blog" class="navbar__list-link">blog.</a>
    </li>
    <li class="navbar__list-item">
        <a href="#contact" class="navbar__list-link">contact.</a>
    </li>
</ul>
</nav> */