/*
How can we refactor the function definition below (without changing the
  function invocation) so that we don't need to use the arguments object?
*/

function sum(...args) {
  return args.reduce(function(a, b) {
    return a + b;
  });
}

console.log(sum(1, 4, 5, 6)); // 16