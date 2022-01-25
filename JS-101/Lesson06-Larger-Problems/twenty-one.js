/* eslint-disable max-lines-per-function */
let readline = require('readline-sync');

let deck = [];

function shuffleDeck() {
  deck = [];
  for (let idx = 0; idx < 4; idx++) {
    for (let card = 2; card < 11; card++) {
      deck.push(card);
    }
    deck.push(10);
    deck.push(10);
    deck.push(10);
    deck.push('a');
  }
}

function determineHandValue(handArr) {
  if (!handArr.includes('a')) {
    return [handArr.reduce((accum, card) => accum + card, 0)];
  } else {
    let possibleHandValues = [];
    let nonAceSum = handArr
      .filter(val => val !== 'a')
      .reduce((accum, card) => accum + card, 0);
    let numAces = handArr.filter(val => val === 'a').length;
    for (let idx = 0; idx <= numAces; idx++) {
      let aceSum = (1 * (numAces - idx)) + (11 * idx);
      possibleHandValues.push(nonAceSum + aceSum);
    }
    return possibleHandValues;
  }
}

function hit(handArr) {
  if (deck.length === 0) {
    shuffleDeck();
  }
  let cardIndex = Math.floor(Math.random() * deck.length);
  handArr.push(deck[cardIndex]);
  deck.splice(cardIndex, 1);

}

function handString(handArr) {
  let result = '';
  handArr.slice(0, handArr.length - 2).forEach(card => {
    if (card !== 'a') {
      result += card + ', ';
    } else {
      result += 'ace' + ', ';
    }
  });
  if (handArr[handArr.length - 2] === 'a' && handArr[handArr.length - 1] === 'a') {
    result += 'ace and ace';
  } else if (handArr[handArr.length - 2] !== 'a' && handArr[handArr.length - 1] === 'a') {
    result += handArr[handArr.length - 2] + ' and ace';
  } else if (handArr[handArr.length - 2] === 'a' && handArr[handArr.length - 1] !== 'a') {
    result += 'ace and ' + handArr[handArr.length - 1];
  } else {
    result += handArr[handArr.length - 2] + ' and ' + handArr[handArr.length - 1];
  }
  return result;
}

function isBust(handArr) {
  return determineHandValue(handArr).every(val => val > 21);
}

function isValid(input) {
  return !!input.match(/(^h$|^s$|^hit$|^stay$)/i);
}

function roundSetup() {
  let pHand = [];
  hit(pHand);
  hit(pHand);
  let cHand = [];
  hit(cHand);
  hit(cHand);
  return [pHand, cHand];
}

function printHands(pHand, cHand) {
  console.log(`Dealer: ${cHand[0].toString().toUpperCase()} and unknown`);
  console.log(`Player: ${handString(pHand)}`);
}

function playerTurn(pHand, cHand) {
  let notFirst = false;
  while (!isBust(pHand)) {
    if (notFirst) {
      console.clear();
    } else {
      notFirst = true;
    }
    printHands(pHand, cHand);
    let playerInput = readline.question("Do you want to (h)it or (s)tay? ");
    while (!isValid(playerInput)) {
      console.log('Sorry, that is not a valid choice.');
      playerInput = readline.question("Do you want to (h)it or (s)tay? ");
    }
    if (playerInput.toLowerCase() === 'h' || playerInput.toLowerCase() === 'hit') {
      hit(pHand);
    } else {
      break;
    }
  }
}

function computerTurn(cHand) {
  while (!determineHandValue(cHand).some(val => val > 16) && !isBust(cHand)) {
    hit(cHand);
  }
}

function determineBestHand(handArr) {
  let bestValidHand = 0;
  let minHand = 1000;
  determineHandValue(handArr).forEach(val => {
    if (val < 22 && val > bestValidHand) {
      bestValidHand = val;
    } else if (val < minHand) {
      minHand = val;
    }
  });
  if (!isBust(handArr)) {
    return bestValidHand;
  } else {
    return minHand;
  }
}

function determineWinner(pHand, cHand) {
  console.clear();
  console.log(`Dealer: ${handString(cHand)}\nPlayer: ${handString(pHand)}\n`);
  let pBestHand = determineBestHand(pHand);
  let cBestHand = determineBestHand(cHand);
  console.log(`Dealer's best hand is ${cBestHand}\nPlayer's best hand is ${pBestHand}\n`);
  let winner = 'computer';
  if (isBust(pHand)) {
    winner = 'computer';
  } else if (isBust(cHand) || cBestHand <= pBestHand ) {
    winner = 'player';
  }
  if (winner === 'computer') {
    console.log("Sorry, you lose...");
  } else {
    console.log("You win!");
  }
  readline.question("Hit any key to continue.");
  return winner;
}

function playRound() {
  let [playerHand, computerHand] = roundSetup();
  playerTurn(playerHand, computerHand);
  if (!isBust(playerHand)) {
    computerTurn(computerHand);
  }
  return determineWinner(playerHand, computerHand);
}

function playGame() {
  let playerScore = 0;
  let computerScore = 0;
  while (playerScore !== 5 && computerScore !== 5) {
    console.clear();
    if (playerScore === 0 && computerScore === 0) {
      console.log("WELCOME TO TWENTY-ONE");
    } else {
      console.log(`Your current score is ${playerScore}-${computerScore}`);
    }
    let winner = playRound();
    if (winner === 'player') {
      playerScore++;
    } else {
      computerScore++;
    }
  }
  if (playerScore === 5 ) {
    console.log("You are the champion!");
  } else {
    console.log("The computer is the champion.");
  }
}

playGame();