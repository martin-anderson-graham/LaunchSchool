/*In the previous exercise, you developed a function that converts non-negative
numbers to strings. In this exercise, you're going to extend that function by
adding the ability to represent negative numbers as well.

Write a function that takes an integer and converts it to a string
representation.

You may not use any of the standard conversion functions available in
JavaScript, such as String() and Number.prototype.toString(). You may, however,
use integerToString() from the previous exercise.

You might also want to check the Math.sign() function.
*/

let integerToString = (num) => {
  if (num === 0) {
    return '0';
  }
  let result = '';
  let currentNum = num;
  let digitStrings = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  while ( currentNum > 0) {
    let rightMostDigit = currentNum % 10;
    result = digitStrings[rightMostDigit] + result;
    currentNum -= rightMostDigit;
    currentNum /= 10;
  }
  return result;
};

let signedIntegerToString = (num) => {
  let isNegative = false;
  let result;
  if (num < 0) {
    isNegative = true;
    result = integerToString(num * -1);
  } else {
    result = integerToString(num);
  }

  if (isNegative) {
    result = '-' + result;
  } else if ( result === '0') {
    return result;
  } else {
    result = '+' + result;
  }
  return result;
};

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");