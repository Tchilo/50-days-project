const lables = document.querySelectorAll('.form-control label');

lables.forEach((label) => {
  label.innerHTML = label.innerText.split('')
    .map((letter, indx) => `<span style="transition-delay:${indx * 30}ms">${letter}</span>`)
    .join('');
});