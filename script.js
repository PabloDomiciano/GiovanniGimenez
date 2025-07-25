// Inicializa animações
AOS.init({
  duration: 800,
  once: true,
});

// FAQ Accordion
document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const item = question.parentNode;
    item.classList.toggle("active");

    // Altera o ícone
    const icon = question.querySelector("span:last-child");
    if (item.classList.contains("active")) {
      icon.textContent = "-";
    } else {
      icon.textContent = "+";
    }
  });
});

// Header scroll effect
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)";
  } else {
    header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.05)";
  }
});

// Mobile menu toggle
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenuBtn.classList.toggle("active");
  mobileMenu.classList.toggle("active");

  // Impede a rolagem do corpo quando o menu está aberto
  if (mobileMenu.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
});

// Close mobile menu when clicking a link
document
  .querySelectorAll(".mobile-menu .nav-link, .mobile-menu .btn")
  .forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenuBtn.classList.remove("active");
      mobileMenu.classList.remove("active");
      document.body.style.overflow = "auto";
    });
  });

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
    mobileMenuBtn.classList.remove("active");
    mobileMenu.classList.remove("active");
    document.body.style.overflow = "auto";
  }
});
