const menuWindow = document.querySelector('.menu-window');
const buttons = document.querySelectorAll('.menu-btn, .close-btn');



const speisekarte = document.querySelector('.real-menu');
const karte = document.querySelector('#map');
const preload = document.querySelector('#preload');

window.addEventListener('load', ()=> {
  if(speisekarte) {
    speisekarte.classList.add('active');
  }
  if(karte) {
    karte.classList.add('active');
  }
  preload.classList.remove('active');
});

/* Menu-Window */
buttons.forEach(btn => {
  btn.addEventListener('click', ()=> {
    menuWindow.classList.toggle('active');
    document.querySelector('.content').classList.toggle('active');

  });
});


let slidePosition = 0;
const slides = document.querySelectorAll('.img-item');
const totalSlides = slides.length;
const nextBtn = document.querySelector('#next-btn');
const prevBtn = document.querySelector('#prev-btn');
const titleMenu = document.querySelector('#seite-nummer');
let seiteNummer;

/* Speisekarte */
nextBtn.addEventListener("click", function() {
    moveToNextSlide();
    titleMenu.innerHTML = `Seite ${seiteNummer}`;
  });
prevBtn.addEventListener("click", function() {
    moveToPrevSlide();
    titleMenu.innerHTML = `Seite ${seiteNummer}`;
  });

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove('img-visible');
    slide.classList.add('img-hidden');

  }

  slides[slidePosition].classList.add('img-visible');
  slides[slidePosition].classList.remove('img-hidden');
  seiteNummer = slidePosition + 1;
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  updateSlidePosition();
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }


  updateSlidePosition();
}
