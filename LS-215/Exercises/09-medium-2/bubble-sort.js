function bubbleSort(arr) {
  let didSwap = true;
  while (didSwap) {
    didSwap = false;
    for (let i = 0; i < arr.length - 1; i += 1) {
      if (arr[i] > arr[i + 1]) {
        didSwap = true;
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
  }
}

/*
problem
-input an array of at least two elements
-ouput - nothing - the array is mutated

examples */
const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

/*
data structures
- an array

algorithm
- set a boolean flag to true (didSwap)
- make a while loop that runs as long as didSwap is true
  - first set didSwap to false
  - loop through the array (up to one less than the largest index) comparing successive elements
  - if element[i]< element [i+1]
    - didSwap = true
    - use array destructuring to swap teh elements

*/