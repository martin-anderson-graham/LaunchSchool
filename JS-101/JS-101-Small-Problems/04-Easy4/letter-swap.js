let firstAndLastLetterSwap = (word) => {
  if (word.length === 1) {
    return word;
  } else {
    return word.charAt(word.length - 1) +
    word.slice(1, -1) +
    word.charAt(0);
  }
};

let swap = (str) => {
  let wordArray = str.split(' ');
  let result = wordArray.map( (word) => firstAndLastLetterSwap(word))
    .join(' ');

  console.log(result);
  return result;
};

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"