let multiplyList = (...args) => {
  let result = [];
  for (let idx = 0; idx < args[0].length; idx++) {
    let product = 1;
    args.forEach( (arr) => {
      product *= arr[idx];
    });
    result.push(product);
  }
  console.log(result);
  return result;
};

multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]