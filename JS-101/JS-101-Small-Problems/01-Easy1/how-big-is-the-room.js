/*
Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input.

*/

let readline  = require('readline-sync');
const SQ_METERS_TO_FEET_CONVERSION_FACTOR = 10.7639

let length = readline.question('Enter the length of the room in meters:\n');
let width = readline.question('Enter the width of the room in meters:\n')
/*
let areaMeters = parseInt(length) * parseInt(width);
let areaFeet = 10.7639 * areaMeters;
*/

let areaMeters = parseFloat(length) * parseFloat(width);

console.log(`The area of the room is ${areaMeters.toFixed(2)} square meters (${(areaMeters*SQ_METERS_TO_FEET_CONVERSION_FACTOR).toFixed(2)} square feet).`);