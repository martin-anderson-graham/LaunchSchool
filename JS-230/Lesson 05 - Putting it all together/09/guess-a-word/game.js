/* eslint-disable no-use-before-define */
/* eslint-disable max-lines-per-function */
document.addEventListener('DOMContentLoaded', async function () {
  let wordListLength = 3;
  let words = await getRandomWords(wordListLength);

  let message = document.getElementById('message');
  let playAgain = document.getElementById('replay').parentNode;
  let wordSpaces;
  let apples = document.getElementById('apples');

  async function getRandomWords(wordListLength) {
    let apiURL = `https://random-word-api.herokuapp.com/word?number=${wordListLength}`;
    let response = await fetch(apiURL);
    let words = await response.json();
    return words;
  }


  function randomWord() {
    var word = words[Math.floor(Math.random() * words.length)];
    words.splice(words.indexOf(word), 1);
    return word;
  }

  class Game {
    constructor() {
      this.endMessage = 'Sorry, I\'ve run out of words';
      this.loseMessage = 'You lose.';
      this.allowedGuesses = 6;
      this.newGame();
    }

    bindKeyPressEvents() {
      this.keyHandler = this.keyPressEventHandler.bind(this);
      document.addEventListener('keypress', this.keyHandler);
    }

    clearGuessesAndWords() {
      message.textContent = '';
      playAgain.hidden = true;
      this.bindKeyPressEvents();
      document.querySelectorAll('#spaces span').forEach(node => node.remove());
      document.querySelectorAll('#guesses span').forEach(node => node.remove());
      apples.classList.remove("guess_1", "guess_2", "guess_3", "guess_4", "guess_5", "guess_6");
    }

    endGame() {
      playAgain.hidden = false;
      message.textContent = this.loseMessage;
      this.unbindKeyPressEvents();
    }

    keyPressEventHandler(event) {
      if (!event.key.match(/[a-z]/)) return;
      this.processGuess(event.key);
    }

    newGame() {
      this.currentWord = randomWord();
      this.incorrectGuesses = 0;
      this.lettersGuessed = [];
      this.clearGuessesAndWords();
      if (!this.currentWord) {
        message.textContent = this.endMessage;
      } else {
        let div = document.getElementById('spaces');
        for (let idx = 0; idx < this.currentWord.length; idx += 1) {
          let span = document.createElement('span');
          span.textContent = ' ';
          div.appendChild(span);
        }
      }
      wordSpaces = document.getElementById('spaces').querySelectorAll('span');
    }

    processGuess(key) {
      if (this.lettersGuessed.includes(key)) return;
      this.lettersGuessed.push(key);
      let guesses = document.querySelector('#guesses');
      let span = document.createElement('span');
      span.textContent = key;
      guesses.appendChild(span);

      if (this.currentWord.indexOf(key) === -1) {
        this.incorrectGuesses += 1;
        this.updateApples(this.incorrectGuesses);
        if (this.incorrectGuesses >= this.allowedGuesses) {
          this.endGame();
        }
      } else {
        this.updateGuess(key);
      }

    }

    updateApples(num) {
      apples.classList.remove(`guess_${num - 1}`);
      apples.classList.add(`guess_${num}`);
    }

    updateGuess(key) {
      let indexArr = [];
      this.currentWord.split('').forEach((letter, index) => {
        if (letter === key) {
          indexArr.push(index);
        }
      });
      indexArr.forEach(idx => {
        wordSpaces.item(idx).textContent = key;
      });
    }

    unbindKeyPressEvents() {
      document.removeEventListener('keypress', this.keyHandler);
      this.keyHandler = undefined;
    }
  }

  let game = new Game();

  playAgain.addEventListener('click', (event) => {
    event.preventDefault();
    game.newGame();
  });

});

