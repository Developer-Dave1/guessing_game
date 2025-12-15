function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isValidInteger(num) {
  if (!Number.isInteger(num)) return false;
  if (typeof num !== 'number') return false; 
  if (String(num).length > 3) return false;

  return true;
}

document.addEventListener('DOMContentLoaded', (event) => {
  let answer = getRandomNumber(1, 100);
  let form = document.querySelector('#inputForm');
  let input = form.querySelector('#guess');
  let link = document.querySelector('a');
  let message = document.querySelector('p');
  let guessParagraph = document.querySelector('#guessParagraph');
  let guessCount = 0;


    form.addEventListener('submit', event => {
      event.preventDefault();
      if (!isValidInteger(input.value)) {
        message.textContent = 'Invalid input. Please enter a three-digit number.';
      } 
      
      let guess = parseInt(input.value, 10);
      
      if (guess > answer) {
        message.textContent = `The answer is lower than ${guess}`;
        guessCount ++;
      } else if (guess < answer) {
        message.textContent = `The answer is higher than ${guess}`;
        guessCount ++;
      } else  if (guess === answer) { 
        guessCount ++;
        message.textContent = `You guessed correctly!`;
        guessParagraph.textContent = `It took you ${guessCount} guesses to get the correct answer.`
      }

    });

    link.addEventListener('click', (event) => {
      event.preventDefault();
      answer = getRandomNumber(1, 100);
      input.value = "";
      guessParagraph.textContent = '';
      guessCount = 0;
      message.textContent = 'Guess a number from 1 to 100';
    });

    
});
