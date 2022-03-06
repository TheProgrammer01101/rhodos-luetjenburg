const menuWindow = document.querySelector('.menu-window');
const buttons = document.querySelectorAll('.menu-btn, .close-btn');

const speisekarte = document.querySelector('.real-menu');

const boxMap = document.querySelector('#box-map');
const consentCheck = document.body.querySelector("#consent-check");

const preload = document.querySelector('#preload');

window.addEventListener('load', ()=> {
  if(speisekarte) {
    speisekarte.classList.add('active');
  }
  else if(boxMap) {
    consentCheck.querySelector("span").addEventListener("click",()=> {
      if (confirm(`Drücken Sie zur Bestätigung "OK".`) == true) {
          preload.classList.add('active');
          consentCheck.style.display = "none";
          let ifrm = document.createElement("iframe");
          ifrm.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4657.414056341554!2d10.586365173532068!3d54.29144756943931!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x39781fe7ce9c2748!2sRESTAURANT%20RHODOS!5e0!3m2!1sen!2sde!4v1646517152852!5m2!1sen!2sde");
          ifrm.style.border = 0;
          ifrm.id = "iframe-map";
          boxMap.appendChild(ifrm);
          ifrm.addEventListener("load", ()=> {
            preload.classList.remove('active');
            ifrm.classList.add("active");
          })
        } else {
          consentCheck.querySelector("input").checked = false;
        }
      })
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
