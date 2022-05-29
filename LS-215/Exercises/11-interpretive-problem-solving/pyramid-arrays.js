function pyramidArrays(n) {
  let result = [];

  for( let i = 0; i < n; i += 1) {
    result.push(new Array(i + 1).fill(i + 1));
  }

  return result;
};


/*
problem
-input - an integer
- output - a 2d array, with elements increasing in length (and values)

examples*/

let tests = [
  pyramidArrays(0), //[]

  pyramidArrays(1), // [[1]]

  pyramidArrays(3), // [[1], [2, 2], [3, 3, 3]]

  pyramidArrays(5), // [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5]]
];

tests.forEach(arr => {
  console.log('--------------------------')
  arr.forEach(inner => {
    console.log(inner);
  })
})

console.log(tests[0])

/*
data structures
- 2d arrays

algorithms
- initialize a result array
- iterate with a for loop up to the input integer
  - set the empty array[loop index] to a new array of length [loop index + 1]
    filled with (loop index + 1)


- return the result array

*/