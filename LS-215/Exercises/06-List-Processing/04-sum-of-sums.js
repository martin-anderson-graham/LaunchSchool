function sumOfSums(arr) {
  return arr.map( (_, index) => {
    return arr.slice(0, index + 1).reduce( (sum, ele) => sum + ele)
  }).reduce( (sum, ele) => sum + ele);
}

sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log('sumOfSums([3, 5, 2])', sumOfSums([3, 5, 2]));
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log('sumOfSums([1, 5, 7, 3])', sumOfSums([1, 5, 7, 3]));
sumOfSums([4]);              // 4
console.log('sumOfSums([4])', sumOfSums([4]));
sumOfSums([1, 2, 3, 4, 5]);  // 35
console.log('sumOfSums([1, 2, 3, 4, 5])', sumOfSums([1, 2, 3, 4, 5]));