let printMatrix = (arr) => {
  arr.forEach( (array) => console.log(array));
  console.log('\n');
};

let transpose = (matrix) => {
  let matrixSize = matrix.length;
  let result =  new Array(matrixSize);
  for (let idx = 0; idx < matrixSize; idx++) {
    result[idx] = new Array(matrixSize).fill(0);
  }
  matrix.forEach( (row, rowIndex) => {
    row.forEach( (val, valIndex) => {
      result[valIndex][rowIndex] = val;
    });
  });
  return result;
};

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

let newMatrix = transpose(matrix);

printMatrix(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]
printMatrix(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]


/*
P -
input - nested array
output - nested array with elements transposed

E -

D -
nested arrays

A -
create an empty matrix of appropriate size
loop through array rows
loop through row values
assign to new matrix, but swap the row and value indices
*/