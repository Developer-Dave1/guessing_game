function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isValidGuess(num) {
  return (
    Number.isInteger(num) &&
    num >= 1 &&
    num <= 100
  );
}


document.addEventListener('DOMContentLoaded', (event) => {
  let answer = getRandomNumber(1, 100);
  let form = document.querySelector('#inputForm');
  let input = form.querySelector('#guess');
  let link = document.querySelector('#newGame');
  let message = document.querySelector('#message');
  let guessParagraph = document.querySelector('#guessParagraph');
  let submitGuessButton = document.querySelector('#guessButton');
  let guessCount = 0;


  form.addEventListener("submit", event => {
  event.preventDefault();

  const guess = Number(input.value);

  if (!isValidGuess(guess)) {
    message.textContent = "Please enter a number between 1 and 100.";
    return;
  }

  guessCount++;

  if (guess > answer) {
    message.textContent = `The answer is lower than ${guess}`;
  } else if (guess < answer) {
    message.textContent = `The answer is higher than ${guess}`;
  } else {
    message.textContent = `Correct! ${answer} is the answer.`;
    guessParagraph.textContent =
      guessCount === 1
        ? "It only took you one guess!"
        : `It took you ${guessCount} guesses.`;

    submitGuessButton.disabled = true;
  }
});


link.addEventListener('click', (event) => {
  event.preventDefault();
  answer = getRandomNumber(1, 100);
  input.value = "";
  guessParagraph.textContent = '';
  guessCount = 0;
  message.textContent = 'Guess a number from 1 to 100';
  submitGuessButton.disabled = false;
});

    
});
