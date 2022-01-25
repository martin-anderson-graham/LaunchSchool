/*In the previous two exercises, you developed functions that convert simple
numeric strings to signed integers. In this exercise and the next, you're going
to reverse those functions.

Write a function that converts a non-negative integer value (e.g., 0, 1, 2, 3,
  and so on) to the string representation of that integer.

You may not use any of the standard conversion functions available in
JavaScript, such as String(), Number.prototype.toString, or an expression such
as '' + number. Your function should do this the old-fashioned way and construct
the string by analyzing and manipulating the number.
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

let prompt = (num) => console.log(num);

prompt(integerToString(4321) === "4321");        // "4321"
prompt(integerToString(0));           // "0"
prompt(integerToString(5000));        // "5000"
prompt(integerToString(1234567890));  // "1234567890"

