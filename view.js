//document.body.onload = divSlider;
// Menu responsive

var menuResponsive = document.querySelector(".nav__reponsive-li-container");
var menuResponsiveButton = document.getElementById('button-responsive');
let listMenuResponsive = document.querySelectorAll(".nav__responsive-li");
let ulMenuResponsive = document.getElementById("nav_menu");

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

// Menú responsive dinamico



// Funcion slider

function createDivSlider(element) {
  let newDiv = document.createElement("div");
  let newImg = document.createElement("img")
  newImg.src = `src/slider/zonas-comunes/comunes${element}.jpg`

  newDiv.appendChild(newImg)
  newDiv.classList.add("slide")
  newDiv.classList.add("d-none")

  slider.appendChild(newDiv)

}

const slider = document.getElementById('slider');
let slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let slidesImg = document.getElementsByClassName('slides-img');
let currentIndex = 0;
let intervalId;
let newElement;

/* for (i = 1; i <= 10; i++) {
  newElement += createDivSlider(i);
}  */

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.remove("d-none");
    }
    else {
      slide.classList.add("d-none");
    }  
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


// showSlide(currentIndex);
// startSlider()

window.addEventListener("load", () => {
  showSlide(currentIndex);
  startSlider()
}); 
//window.addEventListener("load", );



// Funcion slider 2

const slider2 = document.getElementById('slider-2');
const slides2 = document.querySelectorAll('.slide-2');
const prevBtn2 = document.getElementById('prevBtn-2');
const nextBtn2 = document.getElementById('nextBtn-2');
let currentIndex2 = 0;
let intervalId2;

function showSlide2(index) {
  slides2.forEach((slide, i) => {
    if (i === index) {
      slide.classList.remove("d-none");
    }
    else {
      slide.classList.add("d-none");
    }  
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

// Anclas menu
let zonasComunesMenu = document.getElementById("zonascomunesmenu");
let zonasComunesElement = document.getElementById("zonascomunes");
let coordZonasComunes = zonasComunesElement.getBoundingClientRect();

zonasComunesMenu.addEventListener("click", () => {
  window.scroll(0, coordZonasComunes.y - 100)
})

let apartamentosMenu = document.getElementById("apartamentosmenu");
let apartamentosElement = document.getElementById("apartamentos");
let coordApartamentos = apartamentosElement.getBoundingClientRect();

apartamentosMenu.addEventListener("click", () => {
  window.scroll(0, coordApartamentos.y - 100)
})

let ubicacionMenu = document.getElementById("ubicacionmenu");
let ubicacionElement = document.getElementById("ubicacion");
let coordUbicacion = ubicacionElement.getBoundingClientRect();

ubicacionMenu.addEventListener("click", () => {
  window.scroll(0, coordUbicacion.y - 100)
})

let entornoMenu = document.getElementById("entornomenu");
let entornoElement = document.getElementById("entorno");
let coordEntorno = entornoElement.getBoundingClientRect();

entornoMenu.addEventListener("click", () => {
  window.scroll(0, coordEntorno.y - 100)
})

let laFirmaMenu = document.getElementById("lafirmamenu");
let laFirmaElement = document.getElementById("lafirma");
let coordlaFirma = laFirmaElement.getBoundingClientRect();

laFirmaMenu.addEventListener("click", () => {
  window.scroll(0, coordlaFirma.y - 100)
})

console.log("x: " + coordApartamentos.x);
console.log("y: " + coordApartamentos.y);
