let numbers = [1, 2, 3, 4];

numbers = [];
console.log(numbers);
numbers = [1, 2, 3, 4];

numbers = numbers.filter(() => false);

console.log(numbers);
numbers = [1, 2, 3, 4];

numbers.splice(0,numbers.length);

console.log(numbers);
numbers = [1, 2, 3, 4];

numbers.length = 0;

console.log(numbers);
numbers = [1, 2, 3, 4];