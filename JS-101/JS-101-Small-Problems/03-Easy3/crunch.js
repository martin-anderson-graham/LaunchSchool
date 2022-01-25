/* Write a function that takes a string argument and returns a new string that
contains the value of the original string with all consecutive duplicate
characters collapsed into a single character.
*/

let crunch = (str) => {
  let strArray = str.split('');
  let resultArray = [];
  let index = 0;
  let lastLetter = '';
  while (index < strArray.length) {
    let currentLetter = strArray[index];
    if (lastLetter !== currentLetter) {
      resultArray.push(currentLetter);
      lastLetter = currentLetter;
    }
    index++;
  }
  return resultArray.join('');
};


console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""