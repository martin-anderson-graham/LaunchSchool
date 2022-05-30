function lowerTriang(arr) {
  let result = [];

  for(let row = 0; row < arr.length; row += 1) {
    result.push([]);
    for (let col = 0; col < arr[row].length; col += 1) {
      if(col > row) {
        result[row].push(0);
      } else {
        result[row].push(arr[row][col]);
      }
    }
  }

  return result;
}

/*
problem -
- input - a 2d array which is square (same number of rows and columns)
- output - a new matrix with elements above the main diagonal replaced with a zero
- rules
  - the main diagonal has equal row and column indexes

examples */
let tests = [
  lowerTriang([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]), /* [
    [1, 0, 0],
    [4, 5, 0],
    [7, 8, 9]
  ] */
  
  lowerTriang([
    [5, 7],
    [7, 9]
  ]), /* [
    [5, 0],
    [7, 9]
  ] */
  
  lowerTriang([
    [1, 8, 8, 1],
    [2, 7, 7, 2],
    [3, 6, 6, 3],
    [4, 5, 5, 4]
  ]), /* [
    [1, 0, 0, 0],
    [2, 7, 0, 0],
    [3, 6, 6, 0],
    [4, 5, 5, 4]
  ] */
]

tests.forEach( arr => {
  console.log('--------------------------');
  arr.forEach( ele => console.log(ele));
});

/*
data structures
- a 2d array

algorithm
- create a result matrix
- use a for loop through the rows
  - push an empty matrix to the result
  - use a for loop through the cols
    - if col > row push 0 to the result current row matrix
    - else push the corresponding element


*/