const bars = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');
const ul = document.querySelector('.ul');

bars.addEventListener('click', () => {
    container.classList.add('show-nav');
    ul.classList.remove('d-none');

});

close.addEventListener('click', () => {
    container.classList.remove('show-nav');
});