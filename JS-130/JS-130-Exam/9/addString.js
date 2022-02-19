//name of file: addStrings.js

let values = [];

function addString(value) {
  values.push(value);
}

function getValues() {
  return [...values];
}

module.exports = {
  addString,
  getValues
};