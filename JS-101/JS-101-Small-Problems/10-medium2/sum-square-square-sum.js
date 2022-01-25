let squareOfSum = (num) => {
  let sum = 0;
  for (let idx = 1; idx <= num; idx++) {
    sum += idx;
  }
  return sum ** 2;
};

let sumOfSquares = (num) => {
  let sum = 0;
  for (let idx = 1; idx <= num; idx++) {
    sum += idx ** 2;
  }
  return sum;
};

let sumSquareDifference = (num) => {
  let result = squareOfSum(num) - sumOfSquares(num);
  console.log(result);
  return result;
};


sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150