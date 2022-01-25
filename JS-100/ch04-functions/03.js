

let multiply = (num1, num2) => num1*num2;

let getNumber = function(prompt){
  let readline = require('readline-sync');
  let num = readline.question(prompt);
  return parseFloat(num);
};

let firstNumber = getNumber('Enter the first number: ');
let secondNumber = getNumber('Enter the second number: ');

console.log(`${firstNumber} * ${secondNumber} = ${multiply(firstNumber, secondNumber)}`)
