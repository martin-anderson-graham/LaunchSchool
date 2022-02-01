// Write a function named makeMultipleLister that you can call with a number as
//an
// argument. The function should return a new function that, when invoked, logs
// every positive integer multiple of that number less than 100. It should work
// like this:
function makeMultipleLister(num) {
  return function() {
    for (let idx = 1; idx <= 100; idx += 1) {
      if (idx % num === 0) {
        console.log(idx);
      }
    }
  };
}


let lister = makeMultipleLister(17);
lister();