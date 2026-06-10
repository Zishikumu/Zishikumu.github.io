const bigh = document.querySelector(".bigh-content");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {

    const ratio = entry.intersectionRatio;

    // Slide left as it disappears
    const moveX = (1 - ratio) * 150; // 150px slide distance

    bigh.style.transform = `translateX(-${moveX}px)`;

    // Optional fade out
    bigh.style.opacity = ratio;

  });
}, {
  threshold: Array.from({ length: 101 }, (_, i) => i / 100)
});

observer.observe(bigh);