let average = (arr) => {
  let sum = arr.reduce( (val, accumulator) => val + accumulator, 1);
  let result = Math.floor((sum / arr.length));
  console.log(result);
  return result;
};

average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40