const BLOCKS = [
  'bo', 'gt', 'vi', 'xk', 're', 'ly', 'dq', 'fs', 'zm', 'cp', 'jw', 'na', 'hu'
]

function isBlockWord(str) {
  if(str.toLowerCase().match(/[^a-z]/)) return false;

  let lowerStr = str.toLowerCase();

  let blockCounter = {};

  BLOCKS.forEach( (letters, index) => {
    let reg = new RegExp(`[${letters}]`, 'g');
    let matches = lowerStr.match(reg);
    if(matches) {
      blockCounter[index] = matches.length;
    }
  });

  return Object.values(blockCounter).every( ele => ele < 2);
}


/*
Problem
- input - a string of any case
- output - a boolean value of whether the string is a possible word given the blocks
- rules
  - each block can only be used once
  - only one letter from each block can be used


Examples - test cases
*/
let tests = [
  isBlockWord('+ab'),     //false
  isBlockWord('BUTCH '),    //false
  isBlockWord('BATCH'),      // true
  isBlockWord('BUTCH'),      // false
  isBlockWord('jest'),      // true
  isBlockWord('bgvxrldfzcjnh'), //true
  isBlockWord('bgvxrldfzcjnbo') //false
];

tests.forEach(ele => console.log(ele));

/*
Data structures
- input - a string - change to lowercase - only alphanumeric allowed
    - split into an array of characters
- block definitions - array of two-letter strings (to be used to create regex)

algorithm
  - lowercase the input string and verify it only contains a-z
  - iterate through the block array.  make each string a regex and match all
  - create an object whose keys are the index of any matched block, and values are the number of times 
     the blocks matched (length of the matched array)
  - return result of calling every on array of object values and testing values <= 1

*/