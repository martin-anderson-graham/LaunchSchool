function combineArrays(...arrs) {
  let result = createArray(arrs);

  arrs.forEach( (arr, outerIndex) => {
    arr.forEach( (ele, innerIndex) => {
      result[innerIndex][outerIndex] = ele;
    })
  })

  return result;
}

function createArray(arrs) {
  let maxLength = arrs.reduce( (max, arr) => {
    if(arr.length > max) return arr.length;
    return max;
  }, 0);

  let result = [];
  for(let i = 0; i < maxLength; i += 1) {
    result.push(new Array(3).fill('*'));
  }

  return result;
}
/*
problem
- input - three arrays of varying lengths and values
- output - a 2d array
- rules - 
  -each nested array of the output corresponds to an index of the input arrays
      -i.e. first nested is all first elements
  - empty elements are filled using '*' as a placeholder

examples*/

let tests = [
  combineArrays([false, "false"], ["true", true, "bool"], ["null", "undefined"]),
  
combineArrays([1, 2, 3], [4, 5, 6], [7, 8, 9, 10, 10]),

combineArrays(["Jack", "Joe", "Jill"], ["Stuart", "Sammy", "Silvia"], ["Rick", "Raymond", "Riri"]),

];

tests.forEach( arr => {
  console.log('---------------------');
  arr.forEach( inner => console.log(inner));
});

/*
data structures
- input - build a nested array
- output - a 2d array


algorithm
- create an array out of the inputs
- initialize a 2d output array.  
    - each nested array should have three values (set to '*' by default)
    - the number of nested arrays matches the largest length inner array
- iterate through the input array (arr, outerIndex)
  - iterate through each sub array (foreach) (ele, innerIndex)
  - set the value of the resultArray[innerIndex][outerIndex] = ele
- return the result array
*/