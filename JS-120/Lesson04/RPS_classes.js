let readline = require('readline-sync');

class Player {
  constructor() {
    this.move = null;
    this.choices = ['rock', 'paper', 'scissors'];
  }
}

class Computer extends Player {
  constructor() {
    super();
  }

  choose() {
    let randomIndex = Math.floor(Math.random() * this.choices.length);
    this.move = this.choices[randomIndex];
  }
}

class Human extends Player {
  constructor() {
    super();
  }

  choose() {
    while (true) {
      console.log('Please choose rock, paper, or scissors:');
      this.move = readline.question();
      if (this.choices.includes(this.move)) break;
      console.log('Sorry, invalid choice.');
    }
  }
}

class RPSGame {
  constructor() {
    this.human = new Human();
    this.computer = new Computer();
  }

  displayWelcomeMessage() {
    console.log('Welcome to Rock, Paper, Scissors!');
  }

  displayGoodbyeMessage() {
    console.log('Thanks for playing Rock, Paper, Scissors. Goodbye!');
  }

  displayWinner() {
    console.log(`You chose: ${this.human.move}`);
    console.log(`The computer chose: ${this.computer.move}`);

    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    if ((humanMove === 'rock' && computerMove === 'scissors') ||
      (humanMove === 'paper' && computerMove === 'rock') ||
      (humanMove === 'scissors' && computerMove === 'paper')) {
      console.log('You win!');
    } else if ((humanMove === 'rock' && computerMove === 'paper') ||
      (humanMove === 'paper' && computerMove === 'scissors') ||
      (humanMove === 'scissors' && computerMove === 'rock')) {
      console.log('Computer wins!');
    } else {
      console.log("It's a tie");
    }
  }

  playAgain() {
    console.log('Would you like to play again? (y/n)');
    let answer = readline.question();
    return answer.toLowerCase()[0] === 'y';
  }

  play() {
    this.displayWelcomeMessage();
    while (true) {
      this.human.choose();
      this.computer.choose();
      this.displayWinner();
      if (!this.playAgain()) break;
    }

    this.displayGoodbyeMessage();
  }
}

let game = new RPSGame();
game.play();