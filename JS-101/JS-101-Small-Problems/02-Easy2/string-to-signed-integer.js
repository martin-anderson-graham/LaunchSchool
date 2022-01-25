/* In the previous exercise, you developed a function that converts simple
numeric strings to integers. In this exercise, you're going to extend that
function to work with signed numbers.

Write a function that takes a string of digits and returns the appropriate
number as an integer. The string may have a leading + or - sign; if the first
character is a +, your function should return a positive number; if it is a -,
your function should return a negative number. If there is no sign, return a
positive number.

You may assume the string will always contain a valid number.

You may not use any of the standard conversion methods available in JavaScript,
such as parseInt() and Number(). You may, however, use the stringToInteger()
function from the previous lesson.
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


let stringToSignedInteger = (str) => {
  let isPositive = true;
  let newString = str;
  if (str.charAt(0) === '-') {
    isPositive = false;
    newString = str.slice(1);
  } else if (str.charAt(0) === '+') {
    newString = str.slice(1);
  }
  let result = stringToInteger(newString);
  if (!isPositive) {
    result *= -1;
  }
  return result;
};


console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true