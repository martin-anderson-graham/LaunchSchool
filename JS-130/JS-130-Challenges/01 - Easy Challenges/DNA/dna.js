function DNA (sequence) {
  this.sequence = sequence;
}
DNA.prototype.hammingDistance = function(target) {
  let hDistance = 0;
  let length = Math.min(target.length, this.sequence.length);
  for (let idx = 0; idx < length; idx += 1) {
    if (this.sequence[idx] !== target[idx]) {
      hDistance += 1;
    }
  }
  return hDistance;
};

module.exports = DNA;