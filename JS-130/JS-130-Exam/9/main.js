// name of file: main.js

let {addString,concatDouble} = require('./concatDouble');

addString('a');
addString('bc');
addString('def');
addString('ghij');
console.log(concatDouble()); // => abcbcdefdefghijghij
console.log(concatDouble() === 'abcbcdefdefghijghij'); // => true