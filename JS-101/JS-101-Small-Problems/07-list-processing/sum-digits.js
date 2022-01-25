let sum = (num) => {
  let result = num.toString().split('').reduce( (accumulator, val) => {
    return Number(val, 10) + accumulator;
  }, 0);
  console.log(result);
  return result;
};

sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45