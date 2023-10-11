// Menu responsive

var menuResponsive = document.querySelector(".nav__reponsive-li-container");
var menuResponsiveButton = document.getElementById('button-responsive');
let listMenuResponsive = document.querySelectorAll(".nav__responsive-li")

menuResponsiveButton.addEventListener("click", () => {
  menuResponsive.classList.toggle("nav__li-container-transition");
});

listMenuResponsive.forEach ( menu => {
  menu.addEventListener("click", () => {
    menuResponsive.classList.remove("nav__li-container-transition");
  });
});

// Cambio de color fondo menú

window.addEventListener("scroll", () => {
  let fixedMenu = document.getElementById("nav_menu")
  fixedMenu.classList.toggle("bg-menu-scroll", window.scrollY > 0)
});

// Funcion slider

const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;
let intervalId;

function showSlide(index) {
  slides.forEach((slide, i) => {
      slide.classList.toggle("d-none", i === index);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

function startSlider() {
  intervalId = setInterval(nextSlide, 3000);
}

function stopSlider() {
  clearInterval(intervalId);
}

slider.addEventListener('mouseenter', stopSlider);
slider.addEventListener('mouseleave', startSlider);

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

showSlide(currentIndex);
startSlider();

// Funcion slider 2

const slider2 = document.getElementById('slider-2');
const slides2 = document.querySelectorAll('.slide-2');
const prevBtn2 = document.getElementById('prevBtn-2');
const nextBtn2 = document.getElementById('nextBtn-2');
let currentIndex2 = 0;
let intervalId2;

function showSlide2(index) {
  slides2.forEach((slide, i) => {
      slide.classList.toggle("d-none", i === index);
  });
}

function nextSlide2() {
  currentIndex2 = (currentIndex2 + 1) % slides2.length;
  showSlide2(currentIndex2);
}

function prevSlide2() {
  currentIndex2 = (currentIndex2 - 1 + slides2.length) % slides2.length;
  showSlide2(currentIndex2);
}

function startSlider2() {
  intervalId2 = setInterval(nextSlide2, 3000);
}

function stopSlider2() {
  clearInterval(intervalId2);
}

slider2.addEventListener('mouseenter', stopSlider2);
slider2.addEventListener('mouseleave', startSlider2);

prevBtn2.addEventListener('click', prevSlide2);
nextBtn2.addEventListener('click', nextSlide2);

showSlide2(currentIndex2);
startSlider2();
