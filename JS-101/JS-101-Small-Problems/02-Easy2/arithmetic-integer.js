/* Write a program that prompts the user for two positive integers,
and then prints the results of the followingoperations on those two numbers:
addition, subtraction, product, quotient, remainder, and power. Do not worry
about validating the input.
*/

let readline = require('readline-sync');

let printLine = (str) => console.log(`==> ${str}`);

printLine("Enter the first number: ");
let num1 = readline.question();
printLine("Enter the second number: ");
let num2 = readline.question();

printLine(`${num1} + ${num2} = ${num1 + num2}`);
printLine(`${num1} - ${num2} = ${num1 - num2}`);
printLine(`${num1} * ${num2} = ${num1 * num2}`);
printLine(`${num1} / ${num2} = ${num1 / num2}`);
printLine(`${num1} % ${num2} = ${num1 % num2}`);
// eslint-disable-next-line no-undef
printLine(`${num1} ** ${num2} = ${BigInt(num1) ** BigInt(num2)}`);
