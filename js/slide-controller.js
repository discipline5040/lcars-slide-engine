
document.addEventListener("DOMContentLoaded", function() {

  const slides = document.querySelectorAll(".slide");
  let current = 0;

  if (slides.length === 0) return;

  slides[current].classList.add("active");

  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") goTo(current + 1);
    if (e.key === "ArrowLeft") goTo(current - 1);
  });

  function goTo(index) {
    if (index < 0 || index >= slides.length) return;

    slides[current].classList.remove("active");
    current = index;
    slides[current].classList.add("active");
  }

});
