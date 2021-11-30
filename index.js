const next = document.getElementById('next');
const prev = document.getElementById('prev');
const progress = document.getElementById('progress');
const nums = document.querySelectorAll('num');

let currentNum = 1;
const update = () => {
  nums.forEach((num, indx) => {
    if (indx < currentNum) {
      num.classList.add('active');
    } else {
      num.classList.remove('active');
    }
    num.classList.add('active');
  });
};

// Next function

next.addEventListener('click', () => {
  currentNum++;
  if (currentNum > nums.length) {
    currentNum = nums.length;
  }
});

prev.addEventListener('click', () => {
  currentNum--;

  if (currentNum < 1) {
    currentNum = 1;
  }
});
