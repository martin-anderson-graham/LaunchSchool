/* eslint-disable max-len */
let merge = (arr1, arr2) => {
  let firstArr = arr1.slice();
  let secondArr = arr2.slice();
  let result = [];
  while (firstArr.length > 0 && secondArr.length > 0) {
    result.push(firstArr[0] < secondArr[0] ? firstArr.shift() : secondArr.shift());
  }
  return result.concat( firstArr.length > 0 ? firstArr : secondArr);
};

let mergeSort = (arr) => {
  if (arr.length === 1) return arr;

  let firstSubArr = arr.slice(0, arr.length / 2);
  let secondSubArr = arr.slice(arr.length / 2);

  firstSubArr = mergeSort(firstSubArr);
  secondSubArr = mergeSort(secondSubArr);

  return merge(firstSubArr, secondSubArr);
};

console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]