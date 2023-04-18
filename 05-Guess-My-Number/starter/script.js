'use strict';
//what is DOM?
//Document object Model
/* Structured Representation of HTML documents. Allows javascript to access HTML elements and styles to manipulate them. */

/* document.querySelector('.message').textContent = 'Correct Number...';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 18; */

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').value = 'secretNumber';

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number..';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'You Win The Game..!';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too High...';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too low';
    score--;
    document.querySelector('.score').textContent = score;
  }
});
