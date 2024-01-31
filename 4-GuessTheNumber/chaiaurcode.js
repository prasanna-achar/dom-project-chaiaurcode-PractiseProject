let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.getElementById('subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}
validateGuess = (guess) => {
  if (isNaN(guess)) {
    alert('Please Enter a Valid Number');
  } else if (guess > 100 && guess < 1) {
    alert('Please enter a number greater than 1 and lesser than 100.');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
};

checkGuess = (guess) => {
  if (guess === randomNumber) {
    displayMessage(`You guessed it Right`);
    endGame();
  } else if (guess > randomNumber) {
    displayMessage(`Your guess is High`);
  } else if (guess < randomNumber) {
    displayMessage(`Your guess is low`);
  } else {
    displayMessage(`Your guess is Wrong`);
  }
};

displayGuess = (guess) => {
  userInput.value = ``;
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
};

displayMessage = (message) => {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
};

endGame = () => {
  userInput.value = ``;
  userInput.setAttribute(`disabled`, ``);
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
};

newGame = () => {
  const newGameButton = document.querySelector(`#newGame`);
  newGameButton.addEventListener(`click`, (e) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    nemGuess = 1;
    guessSlot.innerHTML = ``;
    remaining, (innerHTML = `${11 - numGuess}`);
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
};
