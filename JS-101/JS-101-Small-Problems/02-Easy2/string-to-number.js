/*
The parseInt() method converts a string of numeric characters (including an
  optional plus or minus sign) to an integer. The method takes 2 arguments
  where the first argument is the string we want to convert and the second
  argument should always be 10 for our purposes. parseInt() and the Number()
  method behave similarly. In this exercise, you will create a function that
  does the same thing.

Write a function that takes a string of digits and returns the appropriate
number as an integer. You may not use any of the methods mentioned above.

For now, do not worry about leading + or - signs, nor should you worry about
invalid characters; assume all characters will be numeric.

You may not use any of the standard conversion methods available in JavaScript,
such as String() and Number(). Your function should do this the old-fashioned
way and calculate the result by analyzing the characters in the string.
*/

let stringToInteger = (str) => {
  let result = 0;
  let digits = '0123456789';
  let placeCounter = str.length - 1;
  let strArray = str.split('');
  for (let digit of strArray) {
    let coefficient = digits.indexOf(digit);
    result += coefficient * ( 10 ** placeCounter);
    placeCounter--;
  }
  return result;
};

let hexadecimalToInteger = (str) => {
  let result = 0;
  let digits = '0123456789ABCDEF';
  let placeCounter = str.length - 1;
  let strArray = str.toUpperCase().split('');
  for (let digit of strArray) {
    let coefficient = digits.indexOf(digit);
    result += coefficient * ( 16 ** placeCounter);
    placeCounter--;
  }
  return result;
};


console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true
console.log(hexadecimalToInteger('4D9f') === 19871);