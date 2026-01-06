'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = "Correct Number!";

document.querySelector('.number').textContent = '12';

document.querySelector('.score').textContent = '10';

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

*/

// Event Listener

const secretNo = Math.trunc(Math.random() * 20) + 1; // random integer between 0 to 20

let score = 20;

// document.querySelector('.number').textContent = secretNo;
console.log(secretNo);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (score === 0) document.querySelector('.message').textContent = 'You lost!';

  if (!guess) {
    document.querySelector('.message').textContent = 'No number entered!';
  } else if (guess === secretNo) {
    document.querySelector('.message').textContent = 'Correct Guess!';


    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secretNo;

  }
  // When guess is too high
  else if (guess > secretNo) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High';
      document.querySelector('.score').textContent = --score;
    } else {
      document.querySelector('.message').textContent = 'You lost!';
      document.querySelector('.score').textContent = 0;
    }
  }
  //When guess is too low
  else {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low';
      document.querySelector('.score').textContent = --score;
    } else {
      document.querySelector('.message').textContent = 'You lost!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// It reloads the whole window when the button is clicked
document.querySelector('.again').addEventListener('click', function () {
  window.location.reload();
});
