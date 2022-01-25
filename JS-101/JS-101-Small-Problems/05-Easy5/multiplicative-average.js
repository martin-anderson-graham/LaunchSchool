let multiplicativeAverage = (arr) => {
  let result = (arr.reduce( (val, accumulator) => accumulator * val, 1 )
    / (arr.length))
    .toFixed(3);
  console.log(result);
  return result;
};

multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"