/*
OPTIONAL Write a function that takes 5 string arguments, and returns an object
with 3 properties:

first: the first argument
last: the last argument
middle: the middle 3 arguments as a sorted array
After writing the function, write some code to call the function. The
arguments you provide should come from an array. You should create local
variables named first, last, and middle from the return value.

Use shorthand syntax wherever you can.
*/

function takeArgs(first, str2, str3, str4, last) {
  return {
    first,
    middle: [str2, str3, str4].sort(),
    last,
  };
}

let myArr = [1, 3, 2, 4, 5];
let {first, middle, last} = takeArgs(...myArr);
console.log(first);
console.log(middle);
console.log(last);