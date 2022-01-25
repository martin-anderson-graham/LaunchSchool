let arr1 = [1,6,3,2];
let arr2 = [-1,-6,-3,-2];
let arr3 = [2,2];

let findMaxInArray = arr => {
  let max = arr[0];
  for(let value of arr){
    max = Math.max(max,value);
  }
  return max;
}

console.log(findMaxInArray(arr1));
console.log(findMaxInArray(arr2));
console.log(findMaxInArray(arr3));