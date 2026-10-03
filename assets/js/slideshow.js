"use strict";

// Jede Bildergruppe erhält ihren eigenen Zähler und ihre eigene Bedienung.
document.querySelectorAll("[data-slideshow]").forEach((slideshow) => {
  const images = Array.from(slideshow.querySelectorAll(".slideshow__images > img"));
  const controls = slideshow.querySelector(".slideshow__controls");
  const counter = slideshow.querySelector("[data-counter]");
  const previous = slideshow.querySelector("[data-previous]");
  const next = slideshow.querySelector("[data-next]");

  if (images.length < 2) return;

  let currentIndex = 0;

  function showImage(index) {
    // Am Ende beginnt die Slideshow wieder von vorne, rückwärts entsprechend.
    currentIndex = (index + images.length) % images.length;
    images.forEach((image, imageIndex) => {
      image.hidden = imageIndex !== currentIndex;
    });
    counter.textContent = `Bild ${currentIndex + 1} von ${images.length}`;
  }

  previous.addEventListener("click", () => showImage(currentIndex - 1));
  next.addEventListener("click", () => showImage(currentIndex + 1));

  // Pfeiltasten wirken nur, wenn eine Bedienfläche dieser Slideshow fokussiert ist.
  controls.addEventListener("keydown", (event) => {
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      showImage(currentIndex + (event.key === "ArrowRight" ? 1 : -1));
    }
  });

  // Erst mit JavaScript werden Bilder ausgeblendet und die Buttons sichtbar.
  showImage(0);
  slideshow.classList.add("slideshow--ready");
  controls.hidden = false;
});
