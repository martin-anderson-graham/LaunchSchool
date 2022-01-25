let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

let newArr = arr.filter( obj => {
  return Object.values(obj).every( arr => {
    return arr.every( val => val % 2 === 0);
  });
});

newArr.forEach( val => console.log(val));