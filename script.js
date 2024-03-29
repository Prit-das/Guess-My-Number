'use strict';
//All the items in variable
const playBtn = document.querySelector('#playAgain');
const checkGuess = document.querySelector('#check');
let startGuess = document.querySelector('#start');
const chanceCount = document.querySelector('#chanceCount').innerText;

// Creating a state variable for Remaining Chances
let count = 20;
document.querySelector('#chanceCount').innerText = count;

// Creating a state variable for High Score
let score = 0;
document.querySelector('#score').innerText = score;

// Creating a random number
let hiddenNumber = Math.trunc(Math.random() * 20 + 1);
console.log(hiddenNumber);

checkGuess.addEventListener('click', function () {
  //Undo the Caution effect
  document.querySelector('#guess').classList.remove('waring');

  //Taking the input field value and converting to the number
  let guess = Number(document.querySelector('#guess').value);
  document.querySelector('#chanceCount').innerText = count;

  //Validating the user guess
  if (count >= 1) {
    // When there is no value
    if (!guess) {
      startGuess.innerText = 'Please Input a Number 🔢';
    }
    // When Input is higher than 20
    else if (guess > 20) {
      document.querySelector('#guess').classList.add('waring');
      startGuess.innerText = `Shouldn't be greater than 20 ⚠️`;
    }
    // When Guess is Wrong
    else if (guess !== hiddenNumber) {
      startGuess.innerText =
        guess > hiddenNumber
          ? 'Your Guess is too High📈'
          : 'Your Guess is too Low📉';
      count--;
      document.querySelector('#chanceCount').innerText = count;
    }
    // When match the value
    else if (guess === hiddenNumber) {
      startGuess.innerText = 'Hurry Your Guess is Matched🥳';

      //Implimenting Confetti
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti({
        confettiColors: [
          '#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7',
        ],
      });
      document.querySelector('#hiddenNumber').innerText = hiddenNumber;
      score = count;
      document.querySelector('#container').classList.add('correctClass');
      document.querySelector('#score').innerText = score;
      playBtn.classList.add('blinkbutton');
      document.querySelector('#navigate').style.display = 'flex';
    }
  }
  // When there are no chance left
  else {
    document.querySelector('#container').style.backgroundColor = 'maroon';
    startGuess.innerText = 'Game Over 🚫';
    document.querySelector('#chanceCount').innerText = count;
    playBtn.classList.add('blinkbutton');
    document.querySelector('#navigate').style.display = 'flex';
  }
});

// Reloading the game
playBtn.addEventListener('click', function () {
  document.querySelector('#container').classList.remove('correctClass');
  document.querySelector('#guess').classList.remove('waring');
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

/* Taken out after line number 44 as the code does the same.

  // When there is high value
  else if (guess > hiddenNumber) {
    startGuess.innerText = 'Your Guess is too High📈';
    count--;
    document.querySelector('#chanceCount').innerText = count;
  }
  // When there is low value
  else if (guess < hiddenNumber) {
    startGuess.innerText = 'Your Guess is too Low📉';
    count--;
    document.querySelector('#chanceCount').innerText = count;
  }
*/