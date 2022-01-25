
let printNestedArray = (arr) => {
  let result = '';
  arr.forEach( (arg) => {
    result += '[' + arg.toString() + ']';
  });
  return result;
};

let halvsies = (arr) => {
  let result = [];
  let middleIndex;
  if (arr.length % 2) {
    middleIndex = Math.floor(arr.length / 2) + 1;
  } else {
    middleIndex = Math.floor(arr.length / 2);
  }
  result.push(arr.slice(0, middleIndex));
  result.push(arr.slice(middleIndex));
  console.log(printNestedArray(result));
  return result;
};


halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]