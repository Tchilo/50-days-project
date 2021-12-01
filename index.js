const bars = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');

bars.addEventListener('click', () => {
    container.classList.add('show-nav');
});