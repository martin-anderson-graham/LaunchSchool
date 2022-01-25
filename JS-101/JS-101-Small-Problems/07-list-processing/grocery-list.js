let buyFruit = (arr) => {
  let result = arr.map( (subArr) => {
    return Array(subArr[1]).fill(subArr[0]);
  }).flat();
  console.log(result);
  return result;
};

buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]