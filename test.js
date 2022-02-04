function myBind(func, ctx) {
  let partialArgs = [].slice.apply(arguments);

  return function() {
    let remainingArgs = [].slice.apply(arguments);
    let fullArgs = partialArgs.concat(remainingArgs);

    return func.apply(ctx, fullArgs);
  };
}

function addNumbers(a, b) {
  return a + b;
}

let addFive = myBind(addNumbers, null, 5);

console.log(addFive(10)); // 15