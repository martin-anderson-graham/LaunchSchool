document.addEventListener('DOMContentLoaded', () => {
  function guessSubmit(event) {
    let guess = input.value;
    guess = parseInt(guess, 10);
    event.preventDefault();

    let color, text;
    if (Number.isNaN(guess)) {
      color = 'orange';
      text = 'I do not think that is a number';
    }
    else if (guess < 1 || guess > 100) {
      color = 'orange';
      text = 'The number is between 1 and 100';
    }
    else if (guess < answer) {
      color = 'red';
      text = "Your guess is too low"
    } else if (guess > answer) {
      color = 'blue';
      text = "Your guess is too high";
    } else if (guess === answer) {
      color = 'green';
      text = 'You nailed it!';
      event.target.disabled = true;
    }

    input.value = null;
    input.setAttribute('placeholder', `${guess}`)
    input.focus();
    updateMessage(color, text);
  }

  function updateMessage(color, text) {
    let paragraph = document.querySelector('p');
    
    paragraph.textContent = text;
    paragraph.style.color = color;
  }

  let answer = Math.floor(Math.random() * 100) + 1;
  let input = document.querySelector('#guess');

  document.querySelector('input[type="submit"]')
    .addEventListener('click', guessSubmit);

  document.querySelector('a').addEventListener('click', (event) => {
    input.setAttribute('placeholder', '');
    answer = Math.floor(Math.random() * 100) + 1;
    updateMessage('green', 'Guess a random number')
    document.querySelector('input[type="submit"]').disabled = false;
    input.focus();
  });
});