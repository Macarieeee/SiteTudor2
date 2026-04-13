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


  document.addEventListener("DOMContentLoaded", () => {
    const reveals = document.querySelectorAll(".corporate-success .reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    reveals.forEach((el) => observer.observe(el));
  });

