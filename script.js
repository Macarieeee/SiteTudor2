document.addEventListener("DOMContentLoaded", function () {
  function initHeroSlider(selector, images, intervalTime = 5000) {
    const hero = document.querySelector(selector);
    if (!hero) return;

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

  initHeroSlider(".hero-slider", [
    "assets/bun (3)-min.png",
    "assets/bun (4)-min.png",
    "assets/bun-min.png"
  ]);

  initHeroSlider(".hero-slider-btm", [
    "assets/Bt banner 1.jpg",
    "assets/BT banner 02.jpg",
    "assets/Bt banner 6.jpg"
  ]);

  initHeroSlider(".hero-bg", [
    "assets/aLeisure slider 1.jpg",
    "assets/aLeisure Slider 2.jpg",
    "assets/aLeisure Slider 3.jpeg"
  ]);
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
