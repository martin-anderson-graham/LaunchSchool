let language = 'JavaScript';

let idx = language.indexOf('S');
console.log('idx', idx);

let charCode = language.charCodeAt(idx);
console.log('charCode', charCode);

console.log(String.fromCharCode(charCode));

console.log(language.lastIndexOf('a'));

let a = 'a';
let b = 'b';

console.log( a > b);

b = "B";

console.log( a > b);

let aIndex = language.indexOf(a);
let vIndex = language.indexOf('v');

console.log(language.substring(aIndex, 4));
console.log(language.substring(vIndex, 4));