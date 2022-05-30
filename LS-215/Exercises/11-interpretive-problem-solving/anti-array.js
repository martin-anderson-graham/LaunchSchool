function isAntiArray(arr1, arr2) {
  let used = [];
  arr1.concat(arr2).forEach(ele => {
    if(!used.includes(ele)) {
      used.push(ele);
    }
  });

  if(used.length !== 2) return false;

  return arr1.every( (ele, index) => {
    if(ele === used[0]) {
      return arr2[index] === used[1];
    } else if (ele === used[1]) {
      return arr2[index] === used[0];
    }
  })
}

/*
problem
- input - two arrays
- output - a boolean
- rules 
  - two arrays are anti-arrays if 
    - there are only two element values used
    - the elements are swapped between the two arrays

examples*/
let tests = [
  isAntiArray(["1", "0", "0", "1"], ["0", "1", "1", "0"]), // true

  isAntiArray(["apples", "bananas", "bananas"], ["bananas", "apples", "apples"]), // true

  isAntiArray([3.14, true, 3.14], [3.14, false, 3.14]), // false
];

tests.forEach(ele => console.log(ele));

/*
data structures
- arrays

algorithm
- obtain the two values used
  - loop through each array, storing values in an array the first time they are used
  - if the length of this array !== 2 return false
- call every on the first array
  - if ele === used[0] then arr2[index] === used[1] and vice versa - return true
  - else return false
*/