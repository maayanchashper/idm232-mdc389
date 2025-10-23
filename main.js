// main.js
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-btn');
  const navMenu = document.querySelector('.nav-menu');

  if (!menuBtn || !navMenu) return;

  menuBtn.addEventListener('click', () => {
    const isOpen = menuBtn.classList.toggle('open');
    navMenu.classList.toggle('open');

    // accessibility attributes
    menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    navMenu.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
  });
});

// Dropdown toggle
document.querySelectorAll(".dropdown .filter").forEach(btn => {
  btn.addEventListener("click", e => {
    const dropdown = e.target.closest(".dropdown");
    dropdown.classList.toggle("show");

    // Close other dropdowns
    document.querySelectorAll(".dropdown").forEach(d => {
      if (d !== dropdown) d.classList.remove("show");
    });
  });
});

// Replace button text when selecting an option
document.querySelectorAll(".dropdown-content button").forEach(option => {
  option.addEventListener("click", e => {
    const dropdown = e.target.closest(".dropdown");
    const mainBtn = dropdown.querySelector(".filter");
    mainBtn.textContent = e.target.textContent;
    dropdown.classList.remove("show");
  });
});

// Close dropdowns when clicking outside
window.addEventListener("click", e => {
  if (!e.target.closest(".dropdown")) {
    document.querySelectorAll(".dropdown").forEach(d => d.classList.remove("show"));
  }
});
