let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

let evenArray = (arr) => arr.filter( (num) => num % 2 === 0);

myArray.forEach( (arr) => console.log(evenArray(arr)));