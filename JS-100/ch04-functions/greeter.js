let rlSync = require('readline-sync');

let getText = function(prompt){
  return rlSync.question(prompt);
};

let firstName = getText('What is your first name? ');
let lastName = getText('What is your last name? ');
console.log(`Hello, ${firstName} ${lastName}!`);