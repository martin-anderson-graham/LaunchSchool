function union(arr1, arr2) {
  let result = arr1.slice();
  arr2.forEach (ele => {
    if(!result.includes(ele)){
      result.push(ele);
    }
  });
  return result;
}

console.log(union([1, 3, 5], [3, 6, 9]));   // [1, 3, 5, 6, 9])