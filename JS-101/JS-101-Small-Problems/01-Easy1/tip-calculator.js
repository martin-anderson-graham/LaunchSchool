/*
Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. The program must compute the tip, and then log both the tip and the total amount of the bill to the console. You can ignore input validation and assume that the user will enter numbers.
*/

let readline = require('readline-sync');

let bill = parseFloat(readline.question("What is the bill? "));
let tipPercentage = parseFloat(readline.question("What is the tip percentage? "));

let tipValue =  tipPercentage * bill / 100;

console.log(`The tip is $${tipValue.toFixed(2)}.\nThe total is $${(bill+tipValue).toFixed(2)}.`)