const panels = document.querySelectorAll('.panel');

// Removes the active class on any card that has it
const removeActiveClass = () => {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
};

// Adds the active class to a card after the active class has been removed
panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClass();
    panel.classList.add('active');
  });
});
