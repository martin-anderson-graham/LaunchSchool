let input = 'hit';
let reg = /(^h$|^s$|^hit$|^stay$)/i;

console.log(!!input.match(reg));