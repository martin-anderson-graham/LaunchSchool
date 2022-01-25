let interleave = (...args) => {
  let resultArray = [];
  for (let idx = 0; idx < args[0].length; idx++ ) {
    args.forEach( (val) => {
      resultArray.push(val[idx]);
    });
  }
  console.log(resultArray);
  return resultArray;
};

interleave([1, 2, 3], ['a', 'b', 'c'], ['x','y','z']);    // [1, "a", 2, "b", 3, "c"]