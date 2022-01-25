/* eslint-disable max-lines-per-function */
/* eslint-disable max-statements */
let readline = require('readline-sync');
let sym = '===';
let playerSymbol = 'X';
let computerSymbol = 'O';
let computerWins = 0;
let playerWins = 0;

let boardState = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']];

function clearBoardState() {
  boardState = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']];
}

function isValidPlay(str) {
  if (!str.match(/[a-i]/)) {
    return false;
  }
  return boardState.some(arr => arr.includes(str));
}

function isWinner(char) {
  for (let idx = 0; idx < 3; idx++) {
    if (boardState[idx].every( val => val === char)) {
      return true;
    } else if (boardState[0][idx] === char &&
                boardState[1][idx] === char &&
                boardState[2][idx] === char) {
      return true;
    }
  }
  if (boardState[0][0] === char &&
                boardState[1][1] === char &&
                boardState[2][2] === char) {
    return true;
  } else if (boardState[2][0] === char &&
      boardState[1][1] === char &&
      boardState[0][2] === char) {
    return true;
  } else {
    return false;
  }
}

function displayBoard() {
  console.clear();
  let resultArr = [];
  boardState.forEach(arr => {
    let lineArr = [];
    for (let idx = 0; idx < 3; idx++) {
      lineArr.push(' ' + arr[idx] + ' ');
    }
    resultArr.push(lineArr.join('|'));
  });
  console.log(resultArr.join('\n' + '-'.repeat(11) + '\n'));
}

function playerTurn() {
  displayBoard();
  console.log(sym + "Your turn - ");
  let play = readline.question(sym + "What square would you like to play? ");
  while (!isValidPlay(play)) {
    console.clear();
    displayBoard();
    console.log(sym + "Sorry, that square is not available.");
    play = readline.question(sym + "What square would you like to play? ");
  }
  boardState.forEach(arr => {
    if (arr.includes(play)) {
      arr[arr.indexOf(play)] = playerSymbol;
    }
  });
}

function computerTurn() {
  let computerPlay = '';
  do {
    computerPlay = 'abcdefghi'[Math.floor(Math.random() * 9)];
  } while (!isValidPlay(computerPlay));
  boardState.forEach(arr => {
    if (arr.includes(computerPlay)) {
      arr[arr.indexOf(computerPlay)] = computerSymbol;
    }
  });
}

function playRound() {
  clearBoardState();
  let count = 0;
  let isPlayersTurn = Math.random() < 0.5;
  while (count < 9) {
    count++;
    if (isPlayersTurn) {
      displayBoard();
      playerTurn();
      if (isWinner(playerSymbol)) {
        console.clear();
        displayBoard();
        console.log(sym + 'Congratulations, you win!');
        return 'player';
      }
    } else {
      computerTurn();
      if (isWinner(computerSymbol)) {
        console.clear();
        displayBoard();
        console.log(sym + 'Sadly the computer has won again...');
        return 'computer';
      }
    }
    isPlayersTurn = !isPlayersTurn;
  }
  return 'cat';
}

while (true) {
  let winner = playRound();
  if (winner === 'player') {
    playerWins++;
  } else if (winner === 'computer') {
    computerWins++;
  }
  console.log('\n');
  console.log(`The score so far is ${playerWins}-${computerWins}`);
  let answer = readline.question(sym + 'Play again? y/n -- ');
  if (!answer.match(/y/i)) {
    break;
  }
}
