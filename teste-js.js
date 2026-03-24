<script>
  (function () {
    const stack = document.getElementById("servicesStack");
    if (!stack) return;

    const cards = Array.from(stack.querySelectorAll(".service-card"));
    const desktopMq = window.matchMedia("(min-width: 992px)");

    function clamp(value, min, max) {
      return Math.min(Math.max(value, min), max);
    }

    function updateStack() {
      if (!desktopMq.matches) {
        cards.forEach((card) => {
          card.classList.remove("is-before", "is-active", "is-after");
          card.removeAttribute("data-depth");
        });
        return;
      }

      const rect = stack.getBoundingClientRect();
      const viewportH = window.innerHeight;

      const totalScrollable = Math.max(stack.offsetHeight - viewportH, 1);
      const passed = clamp(-rect.top, 0, totalScrollable);
      const progress = passed / totalScrollable;

      const activeIndex = Math.round(progress * (cards.length - 1));

      cards.forEach((card, index) => {
        card.classList.remove("is-before", "is-active", "is-after");
        card.removeAttribute("data-depth");

        if (index < activeIndex) {
          card.classList.add("is-before");
          const depth = Math.min(activeIndex - index, 3);
          card.setAttribute("data-depth", depth);
        } else if (index === activeIndex) {
          card.classList.add("is-active");
        } else {
          card.classList.add("is-after");
        }
      });
    }

    let ticking = false;

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateStack();
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateStack);
    window.addEventListener("load", updateStack);

    updateStack();
  })();
</script>