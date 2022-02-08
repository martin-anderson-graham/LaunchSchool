let arr = [];

function push(value) {
  arr.push(value);
}

function pop() {
  return arr.pop();
}

module.exports = { push, pop, arr };