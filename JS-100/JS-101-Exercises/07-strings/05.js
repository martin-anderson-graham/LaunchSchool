/*
Given strings like the following, how can you check whether they're equal irrespective of whether the characters they contain are upper or lower case?

Copy Code
let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin';

*/

let isEqual = (str1, str2) => {
  return str1.toLowercase() === str2.toLowercase();
};