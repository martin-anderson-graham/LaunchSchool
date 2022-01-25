/* eslint-disable max-len */
var Fraction = require('fraction.js');

let egyptian = (frac) => {
  let testDenominator = 1;
  let result = [];
  while (!frac.equals(0)) {
    if (frac.compare(new Fraction(1, testDenominator)) >= 0) {
      result.push(testDenominator);
      let newNumerator = (frac.n * testDenominator) - frac.d;
      let newDenominator = frac.d * testDenominator;
      frac =  new Fraction(newNumerator, newDenominator);
    }
    testDenominator++;
  }
  return result;
};

let unegyptian = (arr) => {
  let result = new Fraction(0, 1);
  arr.forEach ( (val) => {
    result = result.add(new Fraction(1, val));
  });
  return result.toString();
};


console.log(egyptian(new Fraction(2, 1))); // -> [1, 2, 3, 6]
console.log(egyptian(new Fraction(137, 60))); // -> [1, 2, 3, 4, 5]
console.log(egyptian(new Fraction(3, 1))); // -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 230, 57960]

console.log(unegyptian(egyptian(new Fraction(1, 2)))); // logs 0.5
console.log(unegyptian(egyptian(new Fraction(3, 4)))); // logs 0.75
console.log(unegyptian(egyptian(new Fraction(39, 20)))); // logs 1.95
console.log(unegyptian(egyptian(new Fraction(127, 130)))); // logs 0.9769230769230768
console.log(unegyptian(egyptian(new Fraction(5, 7)))); // logs 0.7142857142857142
console.log(unegyptian(egyptian(new Fraction(1, 1)))); // logs 1
console.log(unegyptian(egyptian(new Fraction(2, 1)))); // logs 2
console.log(unegyptian(egyptian(new Fraction(3, 1)))); // logs 3
