//Write a program that asks the user to enter an integer greater than 0, then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.

let readline = require('readline-sync');

let number = parseInt( readline.question('Please enter an integer greater than 5: '));
let operation = readline.question("Enter 's' to computer the sum, or 'p' to compute the product: ");

while( number < 6){
  console.log("Sorry, enter an integer greater than 6.");
  number = parseInt( readline.question('Please enter an integer greater than 5: '));
}

if (operation === 's') {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += i;
  }
  console.log(`The sum of the integers between 1 and ${number} is ${sum}.`);
}
else if(operation === 'p'){
  let product = 1;
  for (let i = 1; i <= number; i++) {
    product *= i;
  }
  console.log(`The product of the integers between 1 and ${number} is ${product}.`);
}
else{
  console.log('Sorry that was an invalid command.');
}