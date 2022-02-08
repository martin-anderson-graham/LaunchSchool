function aliquotSum(num) {
  let sum = 0;
  for (let idx = 1; idx < num; idx += 1) {
    if (num % idx === 0) {
      sum += idx;
    }
  }
  return sum;
}

function classify(num) {
  if (num < 1) {
    throw new Error("No negative arguments");
  } else if (aliquotSum(num) === num) {
    return 'perfect';
  } else if (aliquotSum(num) < num) {
    return 'deficient';
  } else if (aliquotSum(num) > num) {
    return 'abundant';
  } else {
    return undefined;
  }
}

module.exports = {classify,};