let isOdd = (num) =>{
  if (num === 0) {
    return false;
  }
  else if (Math.abs(num) % 2 === 0) {
    return false;
  }
  return true;
};


console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true