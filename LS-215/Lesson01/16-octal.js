function octalToDecimal (stringOctal) {
  return Object.values(stringOctal).reduceRight( (total, ele, index, array) => {
    return total + Number(ele) * Math.pow(8, array.length - index - 1);
  }, 0);
}


console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9