/*Given a string that consists of some words and an assortment of
non-alphabetic characters, write a function that returns that string with
all of the non-alphabetic characters replaced by spaces. If one or more
non-alphabetic characters occur in a row, you should only have one space in
the result (i.e., the result string should never have consecutive spaces).
*/

let cleanUp = (str) => {
  let lowerString = str.toLowerCase();
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  let resultString = '';
  let lastChar = '';
  for (let idx = 0; idx < lowerString.length; idx++) {
    let currentChar = lowerString.charAt(idx);
    if (!alpha.includes(currentChar)) {
      if (lastChar !== ' ') {
        resultString += ' ';
      }
      lastChar = ' ';
    } else {
      resultString += currentChar;
      lastChar = currentChar;
    }
  }
  console.log('*' + resultString + '*');
  return resultString;
};

cleanUp("---what's my +*& line?");    // " what s my line "