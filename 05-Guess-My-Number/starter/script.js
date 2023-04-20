'use strict';
//what is DOM?
//Document object Model
/* Structured Representation of HTML documents. Allows javascript to access HTML elements and styles to manipulate them. */

/* document.querySelector('.message').textContent = 'Correct Number...';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 18; */

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const showMessage = function (number) {
  document.querySelector('.number').textContent = number;
};
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);
  //When there is no output
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number..!';
    displayMessage('No Number..!');
    //when player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'You win the Game..!';
    displayMessage('You win the Game..!');
    // document.querySelector('.number').textContent = secretNumber;
    showMessage(secretNumber);
    //When guess is too high
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      /* document.querySelector('.message').textContent =
          guess > secretNumber ? 'Too High..!' : 'Too Low..!'; */
      displayMessage(guess > secretNumber ? 'Too High..!' : 'Too Low..!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You Lose the Game..!';
      displayMessage('You Lose the Game..!');
      document.querySelector('.score').textContent = 0;
    }
  }
  //when guess is too high
  /* else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High..!';
      score--;
      document.querySelector('.score').textContent = score;
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else {
      document.querySelector('.message').textContent = 'You Lose the Game..!';
      document.querySelector('.score').textContent = 0;
    }
    //when guess is too low
  } */
  /* else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low..!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lose the Game..!';
      document.querySelector('.score').textContent = 0;
    }
  } */
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ' ';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
