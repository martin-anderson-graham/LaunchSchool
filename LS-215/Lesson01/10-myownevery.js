function myOwnEvery(array, func) {
  
  for (let i = 0; i < array.length; i += 1) {
    if(!func(array[i])) {
      return false;
    }
  }

  return true;
}

let isAString = value => typeof value === 'string';
console.log(
  myOwnEvery(['a', 'a234', '1abc'], isAString)       // true
);

function areAllNumbers(array) {
  return myOwnEvery(array, isANumber);
}

function isANumber(value) {
  return typeof value === 'number' && !Number.isNaN(value);
}

areAllNumbers([1, 5, 6, 7, '1']);             // false
areAllNumbers([1, 5, 6, 7, 1]);               // true
areAllNumbers([1, 5, 6, 7, NaN]);             // false