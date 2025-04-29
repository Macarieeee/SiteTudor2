const hero = document.querySelector('.hero-slider');

const images = [
  'bun (3)-min.png',  
  'bun (4)-min.png',
  'bun-min.png'
];

let current = 0;

function changeSlide() {
  current = (current + 1) % images.length;
  hero.style.backgroundImage = `url('${images[current]}')`;
}

setInterval(changeSlide, 5000); 

hero.style.backgroundImage = `url('${images[0]}')`;

