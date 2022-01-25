let array = [3, 5, 7];

let sumOfSquares = arr => arr.reduce( 
  (accumulator , element) => accumulator + element*element
  );

console.log(sumOfSquares(array)); // => 83