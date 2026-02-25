fetch("deck/slides.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("deck-container").innerHTML = html;
    initSlides();
  });

function initSlides() {
  const slides = document.querySelectorAll(".slide");
  let current = 0;

  slides[current].classList.add("active");

  document.addEventListener("keydown", e => {
    if (e.key === "ArrowRight") goTo(current + 1);
    if (e.key === "ArrowLeft") goTo(current - 1);
  });

  function goTo(index) {
    if (index < 0 || index >= slides.length) return;

    slides[current].classList.remove("active");
    current = index;
    slides[current].classList.add("active");
  }
}
