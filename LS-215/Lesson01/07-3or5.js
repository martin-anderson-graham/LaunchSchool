function myFilter(array, func) {
  let newArr = [];
  for (let i = 0; i < array.length; i += 1) {
    if(func(array[i])) {
      newArr.push(array[i]);
    } 
  }

  return newArr;
}

function multiplesOfThreeOrFive(values) {
  return myFilter(values, isMultipleOfThreeOrFive);
}

function isMultipleOfThreeOrFive(value) {
  return value % 5 === 0 || value % 3 === 0;
}

console.log(
  multiplesOfThreeOrFive([1, 3, 5, 7, 11, 18, 16, 15])  // [ 3, 5, 18, 15 ]
);