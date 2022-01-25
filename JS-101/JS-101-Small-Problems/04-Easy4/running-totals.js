let runningTotal = (arr) => {
  let sum = 0;
  let result = [];
  arr.forEach( (val) => {
    sum += val;
    result.push(sum);
  });
  console.log(result);
  return result;
};

//using map
runningTotal = (arr) => {
  let result = arr.map( (val, idx) => {
    let sum = val;
    for (let ind = 0; ind < idx; ind++) {
      sum += arr[ind];
    }
    return sum;
  });
  console.log(result);
  return result;
};

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []
