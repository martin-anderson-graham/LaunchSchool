let printMatrix = (arr) => {
  arr.forEach( (array) => console.log(array));
  console.log('\n');
};

let rotate90 = (matrix) => {
  let resultRows = matrix[0].length;
  let resultCols = matrix.length;
  let result = [];
  for (let idx = 0; idx < resultRows; idx++) {
    result.push(new Array(resultCols));
  }

  for (let colIndex = 0; colIndex < resultCols; colIndex++) {
    for (let rowIndex = 0; rowIndex < resultRows; rowIndex++) {
      // eslint-disable-next-line max-len
      result[rowIndex][colIndex] = matrix[matrix.length - colIndex - 1][rowIndex];
    }
  }
  return result;
};

let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

let newMatrix1 = rotate90(matrix1);
let newMatrix2 = rotate90(matrix2);
let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

printMatrix(newMatrix1);
// [[3, 4, 1],
//  [9, 7, 5],
//  [6, 2, 8]]
printMatrix(newMatrix2);
// [[5, 3],
//  [1, 7],
//  [0, 4],
//  [8, 2]]
printMatrix(newMatrix3);
// `matrix2` -->
//[[3, 7, 4, 2],
// [5, 1, 0, 8]]