// menu click incon hide and show


function showMenu(){
    var navlinks = document.getElementById("navlinks");
    navlinks.style.right="0";
}
function hideMenu(){
    navlinks.style.right = "-200px";
}


// see more 
function toggleInfo() {
    var infoDiv = document.getElementById("infoDiv");
    if (infoDiv.style.display === "none") {
      infoDiv.style.display = "block";
      info1.a
    } else {
      infoDiv.style.display = "none";
    }
  }
// function carosell(){
//   // carosell home page 
// const carouselSlide = document.querySelector(".carousel-slide");
// const carouselItems = document.querySelectorAll(".carousel-item");
// const itemWidth = carouselItems[0].clientWidth;
// const slidesToShow = 3; // Mostra 3 slides em simultâneo
// let counter = 0;

// function moveSlide() {
//   carouselSlide.style.transition = "transform 0.3s ease-in-out";
//   carouselSlide.style.transform = `translateX(${-itemWidth * counter}px)`;
// }

// function nextSlide() {
//   if (counter >= carouselItems.length - slidesToShow) return;
//   counter++;
//   moveSlide();
// }

// function prevSlide() {
//   if (counter <= 0) return;
//   counter--;
//   moveSlide();
// }

// carouselSlide.style.width = `${itemWidth * slidesToShow}px`;
// carouselSlide.style.transform = `translateX(${-itemWidth * counter}px)`;

// setInterval(nextSlide, 3000); // Alterna os slides automaticamente a cada 3 segundos

// }

const carouselSlide = document.querySelector('.carousel-slide');
const carouselItems = document.querySelectorAll('.carousel-item');

let counter = 0;
const slideWidth = carouselItems[0].clientWidth;

document.querySelector('.next-button').addEventListener('click', () => {
    if (counter >= carouselItems.length - 1) return;
    counter++;
    carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
});

document.querySelector('.prev-button').addEventListener('click', () => {
    if (counter <= 0) return;
    counter--;
    carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
});
