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

//enable mobile grid horizontal scroll from https://stackoverflow.com/questions/58353280/prevent-click-when-leave-drag-to-scroll-in-js
const slider = document.querySelector(".wrapper");
      const preventClick = (e) => {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
      let isDown = false;
      var isDragged = false;
      let startX;
      let scrollLeft;

      slider.addEventListener("mousedown", e => {
        isDown = true;
        slider.classList.add("active");
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
      });

      slider.addEventListener("mouseleave", () => {
        isDown = false;
        slider.classList.remove("active");
      });

      slider.addEventListener("mouseup", e => {
        isDown = false;
        const elements = document.getElementsByClassName("book");
        if(isDragged){
            for(let i = 0; i<elements.length; i++){
                  elements[i].addEventListener("click", preventClick);
            }
        }else{
            for(let i = 0; i<elements.length; i++){
                  elements[i].removeEventListener("click", preventClick);
            }
        }
        slider.classList.remove("active");
        isDragged = false;
      });

      slider.addEventListener("mousemove", e => {
        if (!isDown) return;
        isDragged =  true;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
      });

      document.getElementsByClassName("book").ondragstart = function() {
        console.log("Drag start");
      };