// Write a function named later that takes two arguments: a function and an
// argument for that function. The return value
// should be a new function that calls the input function with the provided
// argument, like this:

function later(fn, arg) {
  return function() {
    fn(arg);
  };
}

const logger = message => console.log(message);
let logWarning = later(logger, "The system is shutting down!");
logWarning(); // The system is shutting down!