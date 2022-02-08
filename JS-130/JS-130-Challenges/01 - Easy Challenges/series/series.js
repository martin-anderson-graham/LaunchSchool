function Series(str) {
  this.str = str;
}
Series.prototype.slices = function(num) {
  if (num > this.str.length) {
    throw new Error("Desired length is longer than the series");
  }
  let result = [];
  for (let startIdx = 0; startIdx < this.str.length - num + 1; startIdx += 1) {
    let singleArr = [];
    for( let idx = 0; idx < num; idx += 1) {
      singleArr.push(parseInt((this.str[startIdx + idx]), 10));
    }
    result.push(singleArr);
  }
  return result;
}


module.exports = Series;