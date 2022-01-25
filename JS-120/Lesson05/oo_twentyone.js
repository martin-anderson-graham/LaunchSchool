/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
let readline = require('readline-sync');

class Card {
  constructor(name, suit) {
    this.name = name;
    this.suit = suit;
  }

  getName() {
    return this.name;
  }

  getSuit() {
    return this.suit;
  }

  getValue() {
    if (this.name >= '2' && this.name <= '9') {
      return Number(this.name);
    } else if (this.name === 'ace') {
      return [1, 11];
    } else {
      return 10;
    }
  }

  cardsMatch(card) {
    return (this.suit === card.suit && this.name === card.name);
  }
}

class Deck {
  // static SUITS = ['spades', 'clubs', 'hearts', 'diamonds'];
  static SUITS = ['spades'];
  static CARD_NAMES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

  constructor() {
    this.cards = [];
    Deck.SUITS.forEach(suit => {
      Deck.CARD_NAMES.forEach(name => {
        this.cards.push(new Card(name, suit));
      });
    });
  }

  deal(playersArr) {
    for (let idx = 0; idx < 2; idx++) {
      for (let pIdx = 0; pIdx < playersArr.length; pIdx++) {
        if (this.cards.length === 0) {
          this.shuffle(playersArr);
        }
        playersArr[pIdx].hand.push(this.dealSingleCard());
      }
    }
  }

  shuffle(playersArr) {
    this.cards = [];
    Deck.SUITS.forEach(suit => {
      Deck.CARD_NAMES.forEach(name => {
        this.cards.push(new Card(name, suit));
      });
    });
    playersArr.forEach(player => {
      player.hand.forEach(card => {
        for (let cIdx = 0; cIdx < this.cards.length; cIdx++) {
          if (this.cards[cIdx].cardsMatch(card)) {
            this.cards.splice(cIdx, 1);
            break;
          }
        }
      });
    });
  }

  dealSingleCard() {
    let cardIndex = Math.floor(Math.random() * this.cards.length);
    let card = this.cards[cardIndex];
    this.cards.splice(cardIndex, 1);
    return card;
  }
}

class Participant {
  constructor() {
    this.hand = [];
    this.isStay = false;
  }

  stay() {
    this.isStay = true;
  }

  getStay() {
    return this.isStay;
  }

  isBusted() {
    return this.score().every(score => score > 21);
  }

  score(hidden = false) {
    let hand = this.hand.slice();
    if (hidden) {
      hand = this.hand.slice(1);
    }

    if (hand.every(card => card.getName() !== 'ace')) {
      return [hand.reduce((sum, card) => card.getValue() + sum, 0)];
    } else {
      let countAces = hand.filter(card => card.getName() === 'ace').length;
      let fixedHandScore = hand.reduce((sum, card) => {
        if (card.getName() !== 'ace') {
          return card.getValue() + sum;
        } else {
          return sum;
        }
      }, 0);
      let scores = [fixedHandScore];
      for (let idx = 0; idx < countAces; idx++) {
        let tempScores = [];
        scores.forEach(score => {
          if (!tempScores.includes(Number(score) + 1)) {
            tempScores.push(Number(score) + 1);
          }
          if (!tempScores.includes(Number(score) + 11)) {
            tempScores.push(Number(score) + 11);
          }
        });
        scores = tempScores.slice();
      }

      return scores;

    }
  }

  getBestHandScore() {
    let handScores = this.score();
    if (this.isBusted()) {
      let bestScore = 100;
      handScores.forEach(score => {
        if (score < bestScore) {
          bestScore = score;
        }
      });
      return bestScore;
    }
    let bestScore = 0;
    handScores.forEach(score => {
      if (score <= 21) {
        if (bestScore < score) {
          bestScore = score;
        }
      }
    });
    return bestScore;
  }

  handReset() {
    this.hand = [];
    this.isStay = false;
  }

}

class Player extends Participant {
  constructor() {
    super();
    this.money = 5;
  }

  showHand() {
    console.log(`Your hand is ${this.hand.map(card => card.getName()).join(', ')}.`);
    console.log(`Your current score is: ${this.score().join(' or ')}`);
  }
}

class Dealer extends Participant {
  constructor() {
    super();
  }

  showHiddenHand() {
    console.log(`Dealer's hand is X, ${this.hand.slice(1).map(card => card.getName()).join(', ')}.`);
    console.log(`Dealer is showing a score of: ${this.score(true).join(' or ')}`);
  }

  shouldHit() {
    if (this.getBestHandScore() < 17) {
      return true;
    } else {
      return false;
    }
  }
}

class TwentyOneGame {
  constructor() {
    this.players = [new Player(), new Dealer()];
    this.deck = new Deck();
    this.gameStart = true;
  }

  start() {
    while (true) {

      this.playOneRound();
      if (this.players[0].money <= 0 || this.players[0].money >= 10) {
        break;
      }
      let choice;
      do {
        choice = readline.question("Play more? (y/n) ");
      } while (choice !== 'y' && choice !== 'n');
      if (choice === 'n') break;
      this.players.forEach(player => player.handReset());
    }
    this.displayGoodbyeMessage();
  }

  playOneRound() {
    this.dealCards();
    this.players.forEach(player => {
      while (!player.isBusted() && !player.getStay()) {
        if (player instanceof Dealer) {
          this.showCards();
          this.dealerTurn(player);
        } else {
          this.showCards();
          this.playerTurn(player);
        }
      }
      this.gameStart = false;
    });
    this.players.filter(player => player instanceof Player).forEach(player => {
      if (this.playerIsWinner(player)) {
        player.money++;
      } else {
        player.money--;
      }
    });
    this.displayRoundResults();
  }

  dealCards() {
    this.deck.deal(this.players);
  }

  showCards() {
    console.clear();
    if (this.gameStart) {
      this.displayWelcomeMessage();
    }
    this.players.forEach(player => {
      if (player instanceof Dealer) {
        player.showHiddenHand();
      } else {
        player.showHand();
      }
      console.log("");
    });
  }


  playerTurn(player) {
    if (player.isBusted()) {
      console.log("Sorry - you are bust.");
    } else if (player.getStay()) {
      readline.prompt("You have stayed - hit enter to continue.");
    } else {
      let choice = readline.question("Do you want to hit or stay? h/s ");
      while (choice !== 'h' && choice !== 's') {
        choice = readline.question("Sorry, that wasn't a valid choice - hit or stay? h/s ");
      }
      if (choice === 'h') {
        this.hit(player);
        console.log(`Dealer deals the player a ${player.hand[player.hand.length - 1].getName()}`);
      } else if (choice === 's') {
        player.stay();
        console.log("You have stayed");
      }
    }
  }

  dealerTurn(player) {
    if (this.players.filter(play => play instanceof Player)
      .every(play => play.isBusted())) {
      player.stay();
    } else if (player.isBusted()) {
      console.log("The dealer is bust.");
    } else if (player.getStay()) {
      readline.prompt("Dealer has stayed - hit enter to continue.");
    } else if (player.shouldHit()) {
      this.hit(player);
      console.log(`Dealer deals itself a ${player.hand[player.hand.length - 1].getName()}`);
    } else {
      player.stay();
    }
  }

  hit(player) {
    if (this.deck.cards.length === 0) {
      this.deck.shuffle(this.players);
    }
    player.hand.push(this.deck.dealSingleCard());
  }

  displayWelcomeMessage() {
    console.clear();
    console.log("Welcome to Twenty-One!");
  }

  displayGoodbyeMessage() {
    console.log(`You ended up with ${this.players[0].money} dollars.`);
    console.log("Thanks for playing Twenty-One!  Goodbye!");
  }

  displayRoundResults() {
    console.clear();
    this.players.forEach(player => {
      if (player instanceof Dealer) {
        console.log(`Dealer's final hand is ${player.hand.map(card => card.getName()).join(', ')}.`);
      } else {
        console.log(`Your final hand is ${player.hand.map(card => card.getName()).join(', ')}.`);
      }
      console.log(`-- for a score of: ${player.getBestHandScore()}`);
    });

    this.players.forEach(player => {
      if (this.playerIsWinner(player)) {
        if (player instanceof Dealer) {
          console.log("Dealer wins.  So sad.");
        } else {
          console.log("You win.  Yay!");
        }
      }
    });
    console.log(`You have ${this.players[0].money} dollars`);
  }

  playerIsWinner(player) {
    if (player.isBusted()) return false;
    let currentPlayerScore = player.getBestHandScore();
    let playerScores = this.players.map(play => play.getBestHandScore())
      .filter(score => score <= 21);
    return playerScores.every(otherPlayerScore => {
      if (player instanceof Dealer) {
        return otherPlayerScore < currentPlayerScore;
      } else {
        return otherPlayerScore <= currentPlayerScore;
      }
    });
  }
}

let game = new TwentyOneGame();
game.start();