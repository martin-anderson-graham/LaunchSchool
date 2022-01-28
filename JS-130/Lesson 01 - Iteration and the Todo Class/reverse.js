function reverse(arr) {
  let tempArr = arr.slice();
  for (let idx = 0; idx < arr.length; idx++) {
    arr[arr.length - 1 - idx] = tempArr[idx];
  }
}

let arr = [1, 2, 3];
reverse(arr);
console.log(arr);