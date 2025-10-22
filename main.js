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
