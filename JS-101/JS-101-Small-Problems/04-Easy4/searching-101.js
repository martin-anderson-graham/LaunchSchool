let readline = require('readline-sync');
console.clear();

let solicitNumbers = () => {
  let arr = [];
  arr.push(readline.question("Enter the 1st number: "));
  arr.push(readline.question("Enter the 2nd number: "));
  arr.push(readline.question("Enter the 3rd number: "));
  arr.push(readline.question("Enter the 4th number: "));
  arr.push(readline.question("Enter the 5th number: "));
  arr.push(readline.question("Enter the last number: "));
  return arr;
};

let checkIfLastAppearsEarlier = (arr) => {
  let result = 'does not appear';
  if (arr.slice(0,-1).some( (val) => val === arr[arr.length - 1])) {
    result = 'appears';
  }

  console.log(`The number ${arr[arr.length - 1]} ${result}`
    + ` in ${arr.slice(0,-1).toString()}.`);
};

let numbers = solicitNumbers();
checkIfLastAppearsEarlier(numbers);