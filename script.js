// ===== NAVBAR TOGGLE (Mobile Menu) =====
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });
}

// ===== STICKY NAVBAR ON SCROLL =====
window.addEventListener("scroll", () => {
  const navbar = document.querySelector("header");
  if (window.scrollY > 50) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

// ===== SMOOTH SCROLLING =====
const links = document.querySelectorAll("a[href^='#']");
links.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    // Close menu after clicking (mobile)
    navLinks.classList.remove("active");
    menuToggle.classList.remove("active");
  });
});
