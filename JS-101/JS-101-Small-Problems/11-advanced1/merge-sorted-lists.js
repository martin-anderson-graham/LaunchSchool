/* eslint-disable max-lines-per-function */
let merge = (arr1, arr2) => {
  let [index1, index2] = [0, 0];
  let result = [];
  while (result.length < arr1.length + arr2.length) {
    if (index1 === arr1.length || arr2[index2] <= arr1[index1]) {
      result.push(arr2[index2]);
      index2++;
    } else if (index2 === arr2.length) {
      result.push(arr1[index1]);
      index1++;
    } else if (arr1[index1] <= arr2[index2]) {
      result.push(arr1[index1]);
      index1++;
    } else {
      result.push(arr2[index2]);
      index2++;
    }
  }
  return result;
};

merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
merge([], [1, 4, 5]);             // [1, 4, 5]
merge([1, 4, 5], []);             // [1, 4, 5]