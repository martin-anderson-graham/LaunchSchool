let fibSequence = [1, 1];

let fibonacci = (num) => {
  if (fibSequence[num - 1]) return fibSequence[num - 1];
  let result =  fibonacci(num - 2) + fibonacci(num - 1);
  if (!fibSequence[num - 1]) fibSequence.push(result);
  return result;
};


console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765

console.log(fibSequence);