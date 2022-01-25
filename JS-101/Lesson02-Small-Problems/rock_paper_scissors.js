
const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

let prompt = (message) => {
  console.log(`==> ${message}`);
};

const PLAYER_WINS_OUTCOMES = {
  rockscissors: true,
  rockpaper: false,
  rocklizard: true,
  rockspock: false,
  paperrock: true,
  paperscissors: false,
  paperspock: true,
  paperlizard: false,
  scissorsrock: false,
  scissorspaper: true,
  scissorsspock: false,
  scissorslizard: true,
  lizardpaper: true,
  lizardrock: false,
  lizardscissors: false,
  lizardspock: true,
  spocklizard: false,
  spockrock: true,
  spockpaper: false,
  spockscissors: true,
};

let determineIfPlayerWins = (str1, str2) => {
  return PLAYER_WINS_OUTCOMES[str1 + str2];
};

// eslint-disable-next-line max-lines-per-function
let getPlayerChoice = () => {
  prompt(`Choose ${VALID_CHOICES.join(", ")}`);
  let playerChoice = readline.question();

  switch (playerChoice) {
    case 'r':
      playerChoice = 'rock';
      break;
    case 's':
      playerChoice = 'scissors';
      break;
    case 'p':
      playerChoice = 'paper';
      break;
    case 'sp':
      playerChoice = 'spock';
      break;
    case 'l':
      playerChoice = 'lizard';
      break;
    default:
      break;
  }

  while (!VALID_CHOICES.includes(playerChoice)) {
    prompt("That's not a valid choice -try again:");
    playerChoice = readline.question();
  }
  return playerChoice;
};

let determineGameWinner = (choice, computerChoice) => {
  if (choice === computerChoice) {
    prompt("It's a tie!");
    return 'tie';
  } else if (determineIfPlayerWins(choice, computerChoice)) {
    prompt("Congratulations, you beat the computer..for now.");
    return 'player';
  } else {
    prompt("Sadly, your computer overlords are victorious.");
    return 'computer';
  }
};

// eslint-disable-next-line max-lines-per-function
let playGame = () => {
  let playerScore = 0;
  let computerScore = 0;
  while (playerScore < 3 && computerScore < 3) {
    let choice = getPlayerChoice();

    let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
    let computerChoice = VALID_CHOICES[randomIndex];

    prompt(`You chose ${choice}, the comptuer chose ${computerChoice}`);

    let winner = determineGameWinner(choice, computerChoice);
    switch (winner) {
      case 'player':
        playerScore++;
        break;
      case 'computer':
        computerScore++;
        break;
      default:
        break;
    }
  }

  if (playerScore > computerScore) {
    prompt("++++++++++++++++++++++++++++++++++++++");
    prompt("Congratulations, you won the war!");
  } else {
    prompt("++++++++++++++++++++++++++++++++++++++");
    prompt("Sadly humanity is doomed.");
  }
};

while (true) {
  playGame();

  prompt("");
  prompt("Enter 'y' to play again - any other key to quit.");
  if (readline.question().toLowerCase() !== 'y') {
    break;
  }
}