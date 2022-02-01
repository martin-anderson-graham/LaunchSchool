let counter = 0;

function makeCounter() {
  return function() {
    counter += 1;
    return counter;
  };
}

let incrementCounter = makeCounter();
console.log(incrementCounter());  //1
console.log(incrementCounter());  //2

incrementCounter = makeCounter();
console.log(incrementCounter()); //3
console.log(incrementCounter()); //4

// since counter is in the same scope as incrementCounter (i.e. the pointer
// in the closures point to the same variable)