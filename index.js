const btnOpen = document.querySelectorAll('.faq-toggle');
btnOpen.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle('active');
  });
});