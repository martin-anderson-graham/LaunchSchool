let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

let oddSum = (arr) => {
  return arr.filter( val => val % 2).reduce( (acc, val) => acc + val, 0);
};

arr.sort ( (a, b) => oddSum(a) - oddSum(b));


arr.forEach( val => console.log(val));