function decode(str, nrows) {
  let numRows = nrows || determineNumberOfRows(str);
  
  let rows = [];
  for (let i = 0; i < numRows; i += 1) {
    rows.push([]);
  }


  str.split('').forEach( (letter, index) => {
    let rowMod = index % 4;
    console.log(letter, rowMod);
    if (rowMod === 0 || rowMod === 1 || rowMod === 2) {
      rows[rowMod].push(letter);
    } else {
      rows[1].push(letter);
    }
  });

  rows.forEach( row => console.log(row));

  let currentRow = 0;
  let change = -1;

  let result = '';
  for(let i = 0; i < str.length; i += 1) {
    result += rows[currentRow].shift();
    if(currentRow === 0) change = 1;
    if(currentRow === 2) change = -1

    currentRow += change;
  }

  return result;
}

function determineNumberOfRows(str) {
  console.log(str.length);
  // for (let i = str.length - 2; i > 1; i -= 1) {
  //   if( (str.length - 1) % (2 * i - 2) === 0) return (2 * i - 2);
  // }

  return 3;
}

/*
Problem
-input - a string whose letters represent the final answer
- output - the unscrambled string
- rules -
  - the input is read row by row, but the output is a zig-zag
  - if first row has n characters, next has 2n-1, next has n - 1, repeat
    - 3 rows - 4 until next top row spot
    - 4 rows - 6
    - 5 rows - 8
    - n rows - n + n - 2 => 2n - 2
     - number of repeats of x => x(2n - 1) + 1 must equal original string length
        - (orig.length - 1 ) % (2n - 1) must be an integer

Examples, test case
*/
let tests = [
  decode('WECRLTEERDSOEEFEAOCAIVDEN', 3), //wearediscoveredfleeatonce
];

tests.forEach(ele => console.log(ele));

/*
data structures
- input - a string
- output - a string

algorithms
- determine the number of rows - length of the string - 1 mod (2n - 1) === 0
- iterate through the string to build the 2d array
    - first row has z characters, where z is (len - 1) / (2n - 1) + 1
    - next has 2z - 2
    - until bottom has z-2
- build result by a for loop length of the string.  
    - track row index by adding a change var (1 or -1) to current, change change on top or bottom row
    - shift off the letter in each row
- 

*/