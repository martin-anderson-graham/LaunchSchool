//name of file - concatDouble.js
let {addString, getValues} = require('./addString');

function double(value) {
  return value + value;
}

function concatDouble() {
  return getValues().reduce((result, value) => {
    return result + double(value);
  });
}

module.exports = {
  addString,
  concatDouble,
};