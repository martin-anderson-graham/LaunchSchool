/* eslint-disable */

const wordArray = ['zero', 'one', 'two', 'three', 'four', 'five', 'six',
'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

let wordSort = (num1, num2) => {
  if (wordArray[num1] > wordArray[num2]) {
    return 1;
  } else if (wordArray[num1] < wordArray[num2]) {
    return -1;
  } else {
    return 0;
  }
};

let alphabeticNumberSort2 = (arr) => {
  let result = [...arr].sort(wordSort);
  console.log(result);
  return result;
};


let alphabeticNumberSort = (arr) => {
  let resultArray = [];
  let wordsToSort = [];

  arr.forEach( (val) => {
    wordsToSort.push(wordArray[val]);
  });
  wordsToSort.sort();
  wordsToSort.forEach( (val) => {
    resultArray.push(wordArray.indexOf(val));
  });
  console.log(resultArray);
  return resultArray;
};

alphabeticNumberSort2(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]


/* PEDAC
make an empty array called wordsToSort, resultArray
loop through given array, getting each element
lookup each wordarray, using element as the index, and push value to wordToSort
sort wordsToSort
loop through sorted wordstosort getting each element
lookup the index of each element in wordarray, push index to resultarray
return resultarray

*/