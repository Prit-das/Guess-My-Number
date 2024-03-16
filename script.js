'use strict';
//All the items in variable
const playBtn = document.querySelector('#playAgain');
let guess = document.querySelector('#guess');
const checkGuess = document.querySelector('#check');
let startGuess = document.querySelector('#start');
const chanceCount = document.querySelector('#chanceCount').innerText;

// Creating Low Score
let count = 20;
document.querySelector('#chanceCount').innerText = count;

// Creating High Score
let score = 0;
document.querySelector('#score').innerText = score;

// Creating a random number
let hiddenNumber = Math.trunc(Math.random() * 20 + 1);
console.log(hiddenNumber);

checkGuess.addEventListener('click', function () {
  count -= 1;
  document.querySelector('#chanceCount').innerText = count;
  if (count > 1) {
    if (guess.value == '') {
      // When there is no value
      startGuess.innerText = 'Please Input a Number 🔢';
      return startGuess;
    } else if (guess.value > hiddenNumber) {
      // When there is high value
      startGuess.innerText = 'Your Guess is too High📈';
    } else if (guess.value < hiddenNumber) {
      // When there is low value
      startGuess.innerText = 'Your Guess is too Low📉';
    } else if (guess.value == hiddenNumber) {
      // When match the value
      startGuess.innerText = 'Hurry Your Guess is Matched🥳';
      document.querySelector('#hiddenNumber').innerText = hiddenNumber;
      score = count;
      document.querySelector('#container').classList.add('correctClass');
      document.querySelector('#score').innerText = count;
      playBtn.classList.add('blinkbutton');
      document.querySelector('#navigate').style.display = 'flex';
    }
  } else {
    // When there are no chance left
    document.querySelector('#container').style.backgroundColor = 'maroon';
    startGuess.innerText = 'Game Over 🚫';
    document.querySelector('#chanceCount').innerText = 0;
    playBtn.classList.add('blinkbutton');
    document.querySelector('#navigate').style.display = 'flex';
  }
});

// Reloading the game
playBtn.addEventListener('click', function () {
  document.querySelector('#container').classList.remove('correctClass');
  hiddenNumber = Math.trunc(Math.random() * 20 + 1);
  // console.log(hiddenNumber);
  playBtn.classList.remove('blinkbutton');
  document.querySelector('#navigate').style.display = 'none';
  document.querySelector('#container').style.backgroundColor = 'black';
  guess.value = '';
  document.querySelector('#hiddenNumber').innerText = '?';
  startGuess.innerText = 'Start guessing...';
  count = 20;
  document.querySelector('#chanceCount').innerText = count;
  document.querySelector('#score').innerText = score;
});
