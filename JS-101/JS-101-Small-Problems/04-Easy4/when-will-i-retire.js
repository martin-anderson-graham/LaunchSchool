let readline = require('readline-sync');
console.clear();
let age = parseInt(readline.question("What is your age? "), 10);
let retirementAge = parseInt(readline.question("At what age would you like to retire? "), 10);
let currentYear = (new Date()).getFullYear();

console.log(`It's ${currentYear}. You will retire in ${currentYear + retirementAge - age}.`);
console.log(`You only have ${retirementAge - age} years of work to go!`);

