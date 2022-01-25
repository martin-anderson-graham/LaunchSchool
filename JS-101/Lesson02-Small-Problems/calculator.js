/* eslint-disable max-lines-per-function */
// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

const readline = require('readline-sync');

const PROMPT_LIST = require('./calculator-message.json');

let prompt = (promptNumber, lang = "en") => {
  console.log(`=> ${PROMPT_LIST[lang][promptNumber]}`);
};

let invalidNumber = (num) => {
  return num.trimStart() === '' || Number.isNaN(Number(num));
};

// eslint-disable-next-line max-statements
let calculator = () => {

  prompt(1);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(3);
    number1 = readline.question();
  }

  prompt(2);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(3);
    number2 = readline.question();
  }

  prompt(4);
  let operation = readline.question();

  while (!['1','2','3','4'].includes(operation)) {
    prompt(6);
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case '1': // '1' represents addition
      output = Number(number1) + Number(number2);
      break;
    case '2': // '2' represents subtraction
      output = Number(number1) - Number(number2);
      break;
    case '3': // '3' represents multiplication
      output = Number(number1) * Number(number2);
      break;
    case '4': // '4' represents division
      output = Number(number1) / Number(number2);
      break;
  }
  console.log(`The result is: ${output}`);
};

prompt(0);
let answer;
do {
  calculator();
  prompt(5);
  answer = readline.question().toLowerCase();
} while (answer === 'yes' || answer === 'y');