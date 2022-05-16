function multiplyAllPairs(arr1, arr2) {
  let result = [];
  arr1.forEach( first => {
    arr2.forEach( second => result.push(first * second))
  });

  return result.sort( (a, b) => a - b);
}

multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]
console.log('multiplyAllPairs([2, 4], [4, 3, 1, 2])', multiplyAllPairs([2, 4], [4, 3, 1, 2]));