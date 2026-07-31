// Schimbă aici cele 3 imagini pentru fiecare pagină de serviciu.
// Cheia trebuie să corespundă atributului data-hero-slider din pagina HTML.
const HERO_SLIDES = {
  home: [
    "assets/bun (3)-min.webp",
    "assets/bun (4)-min.webp",
    "assets/bun-min.webp",
  ],
  "business-events": [
    "assets/CorporateEvents-Slider1.webp",
    "assets/CorporateEvents-Slider2.webp",
    "assets/CorporateEvents-Slider3.webp",
  ],
  "marketing-pr": [
    "assets/Marketing&PR-Slider1.webp",
    "assets/Marketing&PR-Slider2.webp",
    "assets/Marketing&PR-Slider3.webp",
  ],
  teambuilding: [
    "assets/TeamBuilding-Slider1.webp",
    "assets/TeamBuilding-Slider2.webp",
    "assets/TeamBuilding-Slider3.webp",
  ],
  incentives: [
    "assets/Incentives-Slider1.webp",
    "assets/Incentives-Slider2.webp",
    "assets/Incentives-Slider3.webp",
  ],
  "ab-experiences": [
    "assets/ABExperience-Slider1.webp",
    "assets/ABExperience-Slider2.webp",
    "assets/ABExperience-Slider3.webp",
  ],
  "business-travel": [
    "assets/BusinessTravelManagement-Slider1.webp",
    "assets/BusinessTravelManagement-Slider2.webp",
    "assets/BusinessTravelManagement-Slider3.webp",
  ],
  "business-travel-management": [
    "assets/BusinessTravelManagement-Slider1.webp",
    "assets/BusinessTravelManagement-Slider2.webp",
    "assets/BusinessTravelManagement-Slider3.webp",
  ],
  "leisure-travel": [
    "assets/bun (3)-min.webp",
    "assets/bun (4)-min.webp",
    "assets/bun-min.webp",
  ],
  "exclusive-leisure": [
    "assets/aLeisure slider 1.webp",
    "assets/aLeisure Slider 2.webp",
    "assets/aLeisure Slider 3.webp",
  ],
  service: [
    "assets/CorporateEvents-Slider1.webp",
    "assets/CorporateEvents-Slider2.webp",
    "assets/CorporateEvents-Slider3.webp",
  ],
};

document.addEventListener("DOMContentLoaded", function () {
  function initHeroSlider(hero, images, intervalTime = 5000) {
    if (!hero || !Array.isArray(images) || images.length === 0) return;

    hero.classList.add("smooth-hero-slider");

    const layerA = document.createElement("div");
    const layerB = document.createElement("div");

    layerA.className = "hero-bg-layer active";
    layerB.className = "hero-bg-layer";

    hero.prepend(layerB);
    hero.prepend(layerA);

    let current = 0;
    let showingA = true;

    layerA.style.backgroundImage = `url("${images[0]}")`;
    layerB.style.backgroundImage = `url("${images[1] || images[0]}")`;

    function changeSlide() {
      const next = (current + 1) % images.length;
      const activeLayer = showingA ? layerA : layerB;
      const nextLayer = showingA ? layerB : layerA;

      nextLayer.style.backgroundImage = `url("${images[next]}")`;

      activeLayer.classList.remove("active");
      nextLayer.classList.add("active");

      current = next;
      showingA = !showingA;
    }

    if (images.length > 1) {
      setInterval(changeSlide, intervalTime);
    }
  }

  document.querySelectorAll("[data-hero-slider]").forEach(function (hero) {
    const sliderName = hero.dataset.heroSlider;
    const intervalTime = Number(hero.dataset.heroInterval) || 5000;
    initHeroSlider(hero, HERO_SLIDES[sliderName], intervalTime);
  });
});

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


  document.addEventListener("DOMContentLoaded", function () {
    const dot = document.querySelector(".custom-cursor-dot");
    const outline = document.querySelector(".custom-cursor-outline");

    if (!dot || !outline) return;

    let mouseX = 0;
    let mouseY = 0;

    let outlineX = 0;
    let outlineY = 0;

    document.addEventListener("mousemove", function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;

      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    });

    function animateCursor() {
      outlineX += (mouseX - outlineX) * 0.12;
      outlineY += (mouseY - outlineY) * 0.12;

      outline.style.transform = `translate(${outlineX}px, ${outlineY}px) translate(-50%, -50%)`;

      requestAnimationFrame(animateCursor);
    }

    animateCursor();
  });
