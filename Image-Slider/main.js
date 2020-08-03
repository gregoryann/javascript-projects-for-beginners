  
const slideImage = document.querySelectorAll(".slide-image");
const slidesContainer = document.querySelector(".slides-container");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const navigationDots = document.querySelector(".navigation-dots");

let numberOfImages = slideImage.length;
let slideWidth = slideImage[0].clientWidth;
let currentSlide = 0;


function init() {
    /*   
      slideImage[0] = 0
      slideImage[1] = 100%
      slideImage[2] = 200%
      */
  
    slideImage.forEach((img, i) => {
      img.style.left = i * 100 + "%";
    });
  
    slideImage[0].classList.add("active");
  
    createNavigationDots();
  }
  
  init();


  // Create navigation dots

function createNavigationDots() {
    for (let i = 0; i < numberOfImages; i++) {
      const dot = document.createElement("div");
      dot.classList.add("single-dot");
      navigationDots.appendChild(dot);
  
      dot.addEventListener("click", () => {
        goToSlide(i);
      });
    }
  
    navigationDots.children[0].classList.add("active");
  }