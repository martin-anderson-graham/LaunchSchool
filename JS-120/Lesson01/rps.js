/* eslint-disable max-lines-per-function */
let readline = require('readline-sync');

function createPlayer() {
  return {
    move: null,
    score: 0,
    moveList: {},
    validMoves: ['rock', 'paper', 'scissors', 'lizard', 'spock'],
  };
}

function createHuman() {
  let playerObject = createPlayer();

  let humanObject = {
    choose() {
      let choice;
      while (true) {
        console.log(`Please choose ${playerObject.validMoves.join(' ')}:`);
        choice = readline.question();
        if (playerObject.validMoves.includes(choice)) break;
        console.log('Sorry, that is an invalid choice');
      }
      this.move = choice;
      this.moveList[this.move] = this.moveList[this.move] + 1 || 1;
    },
  };
  return Object.assign(playerObject, humanObject);
}

function createComputer() {
  let playerObject = createPlayer();

  let computerObject = {
    move: null,

    choose() {
      const choices = playerObject.validMoves;
      let randomIndex = Math.floor(Math.random() * choices.length);
      this.move = choices[randomIndex];
      this.moveList[this.move] = this.moveList[this.move] + 1 || 1;
    },
  };
  return Object.assign(playerObject, computerObject);
}

const RPSgame = {
  human: createHuman(),
  computer: createComputer(),
  winningGameScore: 5,

  displayWelcomeMessage() {
    console.log(`Welcome to ${this.human.validMoves.join('-')}!`);
  },

  displayGoodbyeMessage() {
    console.log(`Thanks for ${this.human.validMoves.join('-')}.`);
  },

  displayRoundWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    console.log(`You chose: ${this.human.move}.`);
    console.log(`Computer chose: ${this.computer.move}.`);

    if ((humanMove === 'rock' && (computerMove === 'scissors' || computerMove === 'lizard')) ||
      (humanMove === 'paper' && (computerMove === 'rock' || computerMove === 'spock')) ||
      (humanMove === 'scissors' && (computerMove === 'paper' || computerMove === 'lizard')) ||
      (humanMove === 'lizard' && (computerMove === 'paper' || computerMove === 'spock')) ||
      (humanMove === 'spock' && (computerMove === 'scissors' || computerMove === 'rock'))) {
      console.log('You win!');
      this.human.score++;
    } else if (humanMove === computerMove) {
      console.log("You tied.");
    } else {
      console.log("The computer won");
      this.computer.score++;
    }
    console.log(`Your score: ${this.human.score} - computer score: ${this.computer.score}`);
  },

  displayGameWinner() {
    let result = ` with a score of ${this.human.score}-${this.computer.score}.`;
    if (this.human.score === this.winningGameScore) {
      result = 'You win the game' + result;
    } else {
      result = 'The computer wins the game' + result;
    }
    console.log(result);
  },

  playAgain() {
    let choice;
    while (true) {
      console.log("Do you want to play again?  y/n");
      choice = readline.question();
      if (['y', 'n'].includes(choice.toLowerCase()[0])) break;
      console.log("Sorry, invalid input");
    }
    return choice.toLowerCase()[0] === 'y';
  },

  play() {
    this.displayWelcomeMessage();
    while (true) {
      while ((this.human.score < this.winningGameScore) &&
        (this.computer.score < this.winningGameScore)) {
        this.human.choose();
        this.computer.choose();
        this.displayRoundWinner();
      }
      this.displayGameWinner();
      if (!this.playAgain()) break;
      this.human.score = 0;
      this.computer.score = 0;
    }
    this.displayGoodbyeMessage();
  },

};

RPSgame.play();