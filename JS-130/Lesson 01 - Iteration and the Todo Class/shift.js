function shift(arr) {
  let returnValue = arr[0];
  for (let idx = 0; idx < arr.length - 1; idx++) {
    arr[idx] = arr[idx + 1];
  }
  arr.length--;
  return returnValue;
}

let arr = [1,2,3,4,5];
console.log(shift(arr));
console.log(arr);