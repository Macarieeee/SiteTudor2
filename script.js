const hero = document.querySelector('.hero-slider');

const images = [
  'bun (3).png',  // înlocuiește cu calea ta
  'bun (4).png',
  'bun (6).png'
];

let current = 0;

function changeSlide() {
  current = (current + 1) % images.length;
  hero.style.backgroundImage = `url('${images[current]}')`;
}

setInterval(changeSlide, 5000); // schimbare la 5 secunde

// Inițializare imagine de start
hero.style.backgroundImage = `url('${images[0]}')`;
