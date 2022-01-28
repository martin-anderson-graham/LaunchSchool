function reduce(arr, callback, initialValue = undefined) {
  let startingIndex = 0;
  let currentValue = initialValue;
  if (initialValue === undefined) {
    currentValue = arr[0];
    startingIndex = 1;
  }
  for (let idx = startingIndex; idx < arr.length; idx++) {
    currentValue = callback(currentValue, arr[idx]);
  }
  return currentValue;
}

let numbers = [1, 2, 3, 4, 5];
console.log(reduce(numbers, (accum, number) => accum + number));   // => 15
console.log(reduce(numbers, (prod, number) => prod * number));     // => 120
console.log(reduce(numbers, (prod, number) => prod * number, 3));  // => 360
console.log(reduce([], (accum, number) => accum + number, 10));    // => 10
console.log(reduce([], (accum, number) => accum + number));
// => undefined

let stooges = ["Mo", "Larry", "Curly"];
console.log(reduce(stooges, (reversedStooges, stooge) => {
  reversedStooges.unshift(stooge);
  return reversedStooges;
}, []));
// => ["Curly", "Larry", "Mo"]