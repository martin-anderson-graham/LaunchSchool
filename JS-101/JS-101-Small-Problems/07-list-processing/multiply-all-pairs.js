let numSort = (num1, num2) => {
  if (num2 < num1) {
    return 1;
  } else if (num2 > num1) {
    return -1;
  } else {
    return 0;
  }
};

let multiplyAllPairs = (arr1, arr2) => {
  let result = [];
  for (let val1 of arr1) {
    for (let val2 of arr2) {
      result.push(val1 * val2);
    }
  }
  result = result.sort(numSort);
  console.log(result);
  return result;
};

multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]