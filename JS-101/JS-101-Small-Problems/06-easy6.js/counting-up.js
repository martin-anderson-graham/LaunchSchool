let sequence = (num) => {
  let result = [];
  for (let idx = 0; idx < num; idx++) {
    result.push(idx + 1);
  }
  console.log(result);
  return result;
};

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]