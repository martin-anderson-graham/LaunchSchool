/* eslint-disable max-lines-per-function */
document.addEventListener('DOMContentLoaded', async function () {
  let wordListLength = 3;
  let words = await getRandomWords();

  async function getRandomWords() {
    let apiURL = 'https://random-word-api.herokuapp.com/word';
    let words = [];
    for (let idx = 0; idx < wordListLength; idx += 1) {
      let response = await fetch(apiURL);
      let word = (await response.json())[0];
      words.push(word);
    }

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
      this.allowedGuesses = 6;
      this.newGame();
    }

    newGame() {
      this.currentWord = randomWord();
      this.incorrectGuesses = 0;
      this.lettersGuessed = [];

      if (!this.currentWord) {
        document.getElementById('message').textContent = this.endMessage;
      } else {
        let div = document.getElementById('spaces');
        for (let idx = 0; idx < this.currentWord.length; idx += 1) {
          let span = document.createElement('span');
          span.textContent = ' ';
          div.appendChild(span);
        }
      }
    }

    processGuess(key) {
      this.lettersGuessed.push(key);
      let guesses = document.querySelector('#guesses');
      let span = document.createElement('span');
      span.textContent = key;
      guesses.appendChild(span);
    }
  }

  let game = new Game();

  document.addEventListener('keypress', (event) => {
    if (!event.key.match(/[a-z]/)) return;
    game.processGuess(event.key);
  });
});

