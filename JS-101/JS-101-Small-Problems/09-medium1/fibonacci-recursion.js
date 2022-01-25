let fibonacci = (num) => {
  if (num <= 2) return 1;
  return fibonacci(num - 2) + fibonacci (num - 1);
};


console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(50));      // 6765