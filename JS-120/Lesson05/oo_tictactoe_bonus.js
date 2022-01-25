/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
/* eslint-disable max-statements */
let readline = require('readline-sync');

class Square {
  static UNUSED_SQUARE = " ";
  static HUMAN_MARKER = 'X';
  static COMPUTER_MARKER = "O";

  constructor(marker = Square.UNUSED_SQUARE) {
    this.marker = marker;
  }

  toString() {
    return this.marker;
  }

  setMarker(marker) {
    this.marker = marker;
  }

  getMarker() {
    return this.marker;
  }

  isUnused() {
    return this.marker === Square.UNUSED_SQUARE;
  }
}


class Board {
  constructor() {
    this.squares = {};
    for (let idx = 0; idx < 9; idx++) {
      this.squares[idx + 1] = new Square();
    }
  }
  display() {
    console.log("");
    console.log("     |     |");
    console.log(`  ${this.squares["1"]}  |  ${this.squares["2"]}  |  ${this.squares["3"]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares["4"]}  |  ${this.squares["5"]}  |  ${this.squares["6"]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares["7"]}  |  ${this.squares["8"]}  |  ${this.squares["9"]}`);
    console.log("     |     |");
  }

  markSquareAt(key, marker) {
    this.squares[key].setMarker(marker);
  }

  unusedSquares() {
    let keys = Object.keys(this.squares);
    return keys.filter(key => this.squares[key].isUnused());
  }

  isFull() {
    return this.unusedSquares().length === 0;
  }

  countMarkersFor(player, keys) {
    let markers = keys.filter(key => {
      return this.squares[key].getMarker() === player.getMarker();
    });
    return markers.length;
  }

  resetBoard() {
    Object.keys(this.squares).forEach((key) => {
      this.squares[key].setMarker(Square.UNUSED_SQUARE);
    });
  }

  getWinners(validChoices, rulesArr, player) {
    let result = [];
    rulesArr.forEach( ruleArr => {
      let playerSquares = [];
      ruleArr.forEach( sq => {
        if (this.squares[sq].getMarker() === player.getMarker()) {
          playerSquares.push(sq);
        }
      });
      if (playerSquares.length === 2) {
        validChoices.forEach( validChoice => {
          let hypotheticalChoice = playerSquares.slice();
          hypotheticalChoice.push(validChoice);
          if (hypotheticalChoice.sort().toString() === ruleArr.slice().sort().toString()) {
            result.push(validChoice);
          }
        });
      }
    });
    return result;
  }

}

class Player {
  constructor(marker) {
    this.marker = marker;
  }

  getMarker() {
    return this.marker;
  }
}

class Human extends Player {
  constructor() {
    super(Square.HUMAN_MARKER);
  }
}

class Computer extends Player {
  constructor() {
    super(Square.COMPUTER_MARKER);
  }
}

class TTTGame {
  static POSSIBLE_WINNING_ROWS = [
    ["1", "2", "3"],            // top row of board
    ["4", "5", "6"],            // center row of board
    ["7", "8", "9"],            // bottom row of board
    ["1", "4", "7"],            // left column of board
    ["2", "5", "8"],            // middle column of board
    ["3", "6", "9"],            // right column of board
    ["1", "5", "9"],            // diagonal: top-left to bottom-right
    ["3", "5", "7"],            // diagonal: bottom-left to top-right
  ];


  constructor() {
    this.board = new Board();
    this.human = new Human();
    this.computer = new Computer();
    this.humanGoesFirst = Math.random() > 0.5;
  }

  play() {
    this.displayWelcomeMessage();
    while (true) {
      if (this.humanGoesFirst) {
        this.humanMoves();
        this.computerMoves();
      } else {
        this.computerMoves();
        this.displayBoardWithClear();
        this.humanMoves();
      }

      while (true) {
        this.displayBoardWithClear();

        if (this.humanGoesFirst) {
          this.humanMoves();
        } else {
          this.computerMoves();
        }
        if (this.gameOver()) break;

        this.displayBoardWithClear();
        if (this.humanGoesFirst) {
          this.computerMoves();
        } else {
          this.humanMoves();
        }
        if (this.gameOver()) break;
      }
      this.displayBoardWithClear();
      this.displayResults();
      if (!this.playAgain()) break;
      this.board.resetBoard();
      this.humanGoesFirst = !this.humanGoesFirst;
      this.displayBoardWithClear();
    }
    this.displayGoodbyeMessage();
  }

  displayBoardWithClear() {
    console.clear();
    console.log("");
    this.board.display();
  }
  displayWelcomeMessage() {
    console.clear();
    console.log("Welcome to Tic Tac Toe!");
    this.board.display();
  }

  displayGoodbyeMessage() {
    console.log("Thanks for playing Tic Tac Toe! Goodbye!");
  }

  displayResults() {
    if (this.isWinner(this.human)) {
      console.log("You won! Congratulations!");
    } else if (this.isWinner(this.computer)) {
      console.log("I won! I won! Take that, human!");
    } else {
      console.log("A tie game.  How boring.");
    }
  }

  humanMoves() {
    let choice;

    while (true) {
      let validChoices = this.board.unusedSquares();
      let promptString = this.generatePrompt(validChoices);
      const prompt = `Choose a square(${promptString}): `;
      choice = readline.question(prompt);

      if (validChoices.includes(choice)) break;

      console.log("Sorry that is not a valid choice");
      console.log("");
    }
    this.board.markSquareAt(choice, this.human.getMarker());
  }

  computerMoves() {
    let validChoices = this.board.unusedSquares();
    let choice;
    let threats = this.board.getWinners(validChoices, TTTGame.POSSIBLE_WINNING_ROWS, this.human);
    let winners = this.board.getWinners(validChoices, TTTGame.POSSIBLE_WINNING_ROWS, this.computer);
    if (winners.length > 0) {
      choice = winners[Math.floor( (winners.length * Math.random()))].toString();
    } else if (threats.length > 0) {
      choice = threats[Math.floor( (threats.length * Math.random()))].toString();
    } else if (validChoices.includes('5')) {
      choice = '5';
    } else {
      do {
        choice = Math.floor((9 * Math.random()) + 1).toString();
      } while (!validChoices.includes(choice));
    }
    this.board.markSquareAt(choice, this.computer.getMarker());

  }

  gameOver() {
    return this.board.isFull() || this.someoneWon();
  }

  someoneWon() {
    return this.isWinner(this.human) || this.isWinner(this.computer);
  }

  isWinner(player) {
    return TTTGame.POSSIBLE_WINNING_ROWS.some(row => {
      return this.board.countMarkersFor(player, row) === 3;
    });
  }

  generatePrompt(arr, sep = ', ', word = 'or') {
    if (arr.length === 1) {
      return arr[0];
    } else if (arr.length === 2) {
      return arr[0] + " " + word + ' ' + arr[1];
    } else {
      let result = '';
      for (let idx = 0; idx < arr.length - 1; idx++) {
        result += arr[idx];
        result += sep;
      }
      result += (word + ' ');
      result += arr[arr.length - 1];
      return result;
    }
  }

  playAgain() {
    while (true) {
      let choice = readline.question("Would you like to play again? (y/n) ");
      if (choice === 'y') return true;
      if (choice === 'n') return false;
      console.log('Sorry, that is not a valid choice.');
    }
  }
}

let game = new TTTGame();
game.play();