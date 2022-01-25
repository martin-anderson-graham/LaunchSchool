let negative = (num) => {
  let result = num < 0 ? num : -1 * num;
  console.log(result);
  return result;
};

negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0