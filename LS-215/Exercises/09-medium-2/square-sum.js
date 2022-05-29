function sumSquareDifference(num) {
  return squareOfSums(num) - sumOfSquares(num);
}

function squareOfSums(num) {
  let sum = 0;
  for (let i = 1; i <= num; i += 1) {
    sum += i;
  }
  return sum * sum;
}

function sumOfSquares(num) {
  let sum = 0;
  for (let i = 1; i <= num; i += 1) {
    sum += i * i;
  }
  return sum;
}

/*
problem
- input - a positive integer
- output - a number

examples -test cases*/
let tests = [
  sumSquareDifference(3),      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
  sumSquareDifference(10),     // 2640
  sumSquareDifference(1),      // 0
  sumSquareDifference(100),    // 25164150
];

tests.forEach(ele => console.log(ele));

/*
data structures
-none

algorithms
- compute the sum of the first n positive integers and square it
- compute the compute the sum of the squares of the first positive n integers
- subtract them
*/