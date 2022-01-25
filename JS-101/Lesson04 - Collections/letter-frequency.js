/* eslint-disable max-len */
let letterFrequency = (str) => {
  let result = {};
  let letterArray = str.split('').filter( (char) => char !== ' ');
  letterArray.forEach( (letter) => {
    result[letter] = result[letter] || 0;
    result[letter]++;
  });
  return result;
};

let statement = "The Flintstones Rock";
console.log(Object.entries(letterFrequency(statement)).forEach( (entry) => console.log(entry)));