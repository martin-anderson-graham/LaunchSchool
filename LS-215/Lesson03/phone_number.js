function cleanPhoneNumber(str) {
  let sanitizeRegex = /[^\d]/g;
  let badResult = '0000000000';

  let digits = str.replace(sanitizeRegex, '');

  if(digits.length < 10 || digits.length > 11) return badResult;

  if(digits.length === 10) return digits;

  if(digits.length === 11) {
    if(digits[0] !== '1') return badResult;

    return digits.slice(1);
  }
  return digits;
}

/*
Understand the problem
-input
  - a string representing a phone number.
  - Should contain only digits and separators, but may be invalid
-output
  - a string of 10 digits for valid inputs
  - a string of 10 zeros for all others
-rules
  - only use the digits - all other characters should be ignored
  - fewer than 10 digits are bad
  - exactly 10 digits are good
  - if 11 digits
      - if leading digit is 1, remove the 1 and use 10 digits
      - if leading digit is not a 1, then it is a bad number
  - if more than 11 digits
    -a bad number


Examples/TestCases
*/
let tests = [
  cleanPhoneNumber('123456'),  //'0000000000'
  cleanPhoneNumber('1234567899'), //'1234567899'
  cleanPhoneNumber('123456789a'),   //'0000000000'
  cleanPhoneNumber('1-2-3--4-5(6.7-8-99'), //'1234567899'
  cleanPhoneNumber('123456789111'),   //'0000000000'
  cleanPhoneNumber('11234567899'),   //'1234567899'
  cleanPhoneNumber('21234567890'),   //'0000000000'

];

tests.forEach(ele => console.log(ele));

/*
Data structures
-input - string - replace all non-digits with ''

-output - 10 digit string of all decimal digits

Algorithm

*/