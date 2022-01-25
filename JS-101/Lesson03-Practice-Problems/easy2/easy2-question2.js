let numbers = [1, 2, 3, 4, 5];
let newReverse = numbers.slice().reverse();
console.log(numbers); // [ 5, 4, 3, 2, 1 ]
console.log(newReverse);

numbers = [1, 2, 3, 4, 5];
let newSort = [...numbers].sort((num1, num2) => num2 - num1);

console.log(numbers); // [ 5, 4, 3, 2, 1 ]
console.log(newSort);

numbers = [1, 2, 3, 4, 5];
let forEachSort = [];
numbers.forEach((val, indx) => {
  forEachSort[numbers.length - indx - 1] = val;
});
console.log(numbers);
console.log(forEachSort);