const WORD_TO_DIGITS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

let isAlpha = (char) => {
  return (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z');
};

let parseStringToArrayOfWords = (str) => {
  let letterArray = str.split('');
  let strArray = [];
  let currentWord = '';
  for (let idx = 0; idx < letterArray.length; idx++) {
    if (!isAlpha(letterArray[idx])) {
      if (currentWord) {
        strArray.push(currentWord);
      }
      strArray.push(letterArray[idx]);
      currentWord = '';
    } else {
      currentWord += letterArray[idx];
    }
  }
  if (currentWord) strArray.push(currentWord);
  return strArray;
};

let wordToDigit = (str) => {
  let strArray = parseStringToArrayOfWords(str);

  let result = strArray.map((word) => {
    if (WORD_TO_DIGITS.includes(word.toLowerCase())) {
      return WORD_TO_DIGITS.indexOf(word.toLowerCase()).toString();
    } else {
      return word;
    }
  }).join('');

  console.log(result);
  return result;
};

wordToDigit('?Please call me at five five five one two three four. Thanks. ni?');
// "Please call me at 5 5 5 1 2 3 4. Thanks."