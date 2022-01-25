let arr = ['10', '11', '9', '7', '8'];

let newArr = arr.sort( (a, b) => Number(b) - Number(a));
console.log(newArr);