let fibonacci = (num) => {
  let first = 1;
  let second = 1;
  for (let count = 3; count <= num; count++) {
    let next  = first + second;
    first = second;
    second = next;
  }
  console.log(second);
  return second;
};

fibonacci(20);       // 6765
fibonacci(50);       // 12586269025
fibonacci(75);       // 2111485077978050