/* eslint-disable max-len */
function caesarEncrypt(str, offset) {
  let letters = str.split('');

  let swapFunction = swapChar(offset);

  return letters.map(swapFunction).join('');
}

function swapChar(offset) {
  return ( (letter) => {
    if (letter.match(/[^a-zA-Z]/)) {
      return letter;
    } else {
      let zCode = 'z'.charCodeAt(0);
      if (letter.match(/[A-Z]/)) {
        zCode = 'Z'.charCodeAt(0);
      }

      let newIndex = letter.charCodeAt(0) + offset;

      while (newIndex > zCode) {
        newIndex -= 26;
      }

      return String.fromCharCode(newIndex);
    }
  });
}

/*
problem
- input - a string to encrypt and a integer representing how far to offset the characters
- output - an encrypted string
  - alpha characters are swapped by letters (offset) down the alphabet
    - wrap the alphabet if you go past z
    - Case is preserved
  - non-alpha are unchanged

examples - test cases*/
// simple shift
let tests = [
  caesarEncrypt('A', 0),       // "A"
  caesarEncrypt('A', 3),       // "D"
  caesarEncrypt('abcABC xyzXYZ', 2), //cdeCDE zabZAB'
  // wrap around
  caesarEncrypt('y', 5),       // "d"
  caesarEncrypt('a', 47),      // "v"

  // all letters
  caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25),
  // "ZABCDEFGHIJKLMNOPQRSTUVWXY"
  caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5),
  // "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

  // many non-letters
  caesarEncrypt('There are, as you can see, many punctuations. Right?, Wrong?', 2),
  // "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?, Ytqpi?"
];

tests.forEach( test => console.log(test));

/*
data structure
- split the input string into an array
- join the array at the final return

algorithm
- split the input string into an array of letters
- map the array to an array of swapped letters
  - non-alpha chars return themselves
  - get the charcode of the letter
  - add the offset to it
  - while the charcode is greater than 'z' or 'Z' subtract 26
  - return the charcode at the new index
- return the array joined
*/