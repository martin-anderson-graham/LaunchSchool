function makeCounter() {
  let counter = 0;

  return function() {
    counter += 1;
    return counter;
  };
}

let incrementCounter = makeCounter();
console.log(incrementCounter()); //1
console.log(incrementCounter()); //2

incrementCounter = makeCounter();
console.log(incrementCounter()); //1
console.log(incrementCounter()); //2

//each closure gets its own version of counter