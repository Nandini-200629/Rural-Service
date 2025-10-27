// Typing animation for hero title
const text = "Welcome to Rural Service Center";
let i = 0;
function typingEffect() {
  if (i < text.length) {
    document.querySelector(".typing-text").innerHTML = text.substring(0, i+1) + "<span>|</span>";
    i++;
    setTimeout(typingEffect, 80);
  }
}
window.onload = typingEffect;

// Scroll animation for services
const serviceCards = document.querySelectorAll(".service-card");
window.addEventListener("scroll", () => {
  serviceCards.forEach(card => {
    const position = card.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      card.classList.add("show");
    }
  });
});

// Back to Top Button
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 400) backToTop.style.display = "block";
  else backToTop.style.display = "none";
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
