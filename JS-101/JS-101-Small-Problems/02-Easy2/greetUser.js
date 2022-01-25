/* Write a program that will ask for user's name. The program will then greet
the user. If the user writes "name!" then the computer yells back to the user.
*/

let readline = require('readline-sync');

let name = readline.question("what is your name? ");

if (name.endsWith('!')) {
  console.log(`HELLO ${name.slice(0,-1).toUpperCase()}.` +
  ` WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}


