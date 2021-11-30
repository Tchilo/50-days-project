const next = document.getElementById('next');
const prev = document.getElementById('prev');
const progress = document.getElementById('progress');
const nums = document.querySelectorAll('.num');

let currentNum = 1;

// Update function
const update = () => {
  nums.forEach((num, indx) => {
    if (indx < currentNum) {
      num.classList.add('active');
    } else {
      num.classList.remove('active');
    }
  });
  const actives = document.querySelectorAll('.active');
  progress.style.width = `${((actives.length - 1) / (nums.length - 1)) * 100}%`;

  if (currentNum === 1) {
    prev.disabled = true;
  } else if (currentNum === nums.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
};

// Next btn

next.addEventListener('click', () => {
  update();
  currentNum += 1;
  if (currentNum > nums.length) {
    currentNum = nums.length;
  }
  update();
});

// prev btn
prev.addEventListener('click', () => {
  currentNum -= 1;

  if (currentNum < 1) {
    currentNum = 1;
  }
  update();
});
