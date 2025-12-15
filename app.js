function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
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
      let guess = parseInt(input.value, 10);
      guessCount ++;
      guessParagraph.textContent = `Guess Count: ${guessCount}`;
      if (guess > answer) {
        message.textContent = `The answer is lower than ${guess}`;
      } else if (guess < answer) {
        message.textContent = `The answer is higher than ${guess}`;
      } else  if (guess = answer) { 
        message.textContent = `You guessed correctly!`;
      }

    });

    link.addEventListener('click', (event) => {
      event.preventDefault();
      answer = getRandomNumber(1, 100);
      input.value = "";
      message.textContent = 'Guess a number from 1 to 100';
    });

    
});
