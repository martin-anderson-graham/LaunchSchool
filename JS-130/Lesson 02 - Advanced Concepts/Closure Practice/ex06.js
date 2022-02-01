// Write a program that uses two functions, add and subtract, to manipulate a
// running total. When you invoke either function with a number, it should addor
// subtract that number from the running total and log the new total to the
// console. It should work like this:

function createCounter() {
  let amount = 0;

  function add(num) {
    amount += num;
    console.log(num);
  }

  function subtract(num) {
    amount += num;
    console.log(num);
  }

  return [add, subtract];
}

let [add, subtract] = createCounter();

add(1);       // 1
add(42);      // 43
subtract(39); // 4
add(6);       // 10