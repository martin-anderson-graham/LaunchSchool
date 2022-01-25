let printMatrix = (arr) => {
  arr.forEach( (array) => console.log(array));
  console.log('\n');
};

let transpose = (matrix) => {
  let resultRows = matrix[0].length;
  let resultColumns = matrix.length;
  let result =  new Array(resultRows);
  for (let idx = 0; idx < result.length; idx++) {
    result[idx] = new Array(resultColumns).fill(0);
  }
  matrix.forEach( (row, rowIndex) => {
    row.forEach( (val, valIndex) => {
      result[valIndex][rowIndex] = val;
    });
  });
  printMatrix(result);
  return result;
};

const matrix = [
  [1, 5, 8, 5],
  [4, 7, 2, 0],
  [3, 9, 6, 1]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6], [5, 0, 1]]
console.log(matrix);         // [[1, 5, 8, 5], [4, 7, 2, 0], [3, 9, 6, 1]]

transpose([[1, 2, 3, 4]]);            // [[1], [2], [3], [4]]
transpose([[1], [2], [3], [4]]);      // [[1, 2, 3, 4]]
transpose([[1]]);                     // [[1]]

transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]);
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]