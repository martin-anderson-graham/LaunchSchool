var Fraction = require('fraction.js');
let frac = new Fraction(1,10);
let result = frac.add(new Fraction(1, 15));

console.log(result);