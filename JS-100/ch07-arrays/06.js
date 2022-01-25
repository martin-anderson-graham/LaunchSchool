let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

let oddLengths = arr =>{
  return arr.map(num => num.length).filter(num => num % 2 !==0 );
};


console.log(oddLengths(arr)); // => [1, 5, 3]