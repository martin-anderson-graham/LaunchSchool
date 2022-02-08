function SumOfMultiples(...args) {
  this.multiples = args;
}
SumOfMultiples.prototype.to = function(num) {
  let sum = 0;
  for (let idx = 1; idx < num; idx += 1) {
    if (this.multiples.some( (mult) => idx % mult === 0)) {
      sum += idx;
    }
  }
  return sum;
}
SumOfMultiples.to = function(num) {
  let newSum = new SumOfMultiples(3, 5);
  return newSum.to(num);
};

module.exports = SumOfMultiples;