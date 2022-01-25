let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

let oddLengths = arr => {
  return arr.reduce( (accumulator, element) => {
    if(element.length % 2 !== 0){
      accumulator.push(element.length);
    }
      return accumulator;
  },[]
  );
};


console.log(oddLengths(arr)); // => [1, 5, 3]