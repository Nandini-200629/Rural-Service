// 🌟 Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// 🌙 Dark Mode Toggle
const toggleBtn = document.getElementById("darkModeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i> Light Mode';
  } else {
    toggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i> Dark Mode';
  }
});

// 🎇 Scroll Animation for Service Cards
const cards = document.querySelectorAll(".service-card");
window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.8;
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.classList.add("show");
    } else {
      card.classList.remove("show");
    }
  });
});

// 💬 Welcome Popup
window.addEventListener("load", () => {
  setTimeout(() => {
    alert("👋 Welcome to Rural Help Center — making rural life easier!");
  }, 800);
});
