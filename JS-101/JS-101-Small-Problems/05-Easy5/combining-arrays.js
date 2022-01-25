let union = (...args) => {
  let unionArray = [];
  args.forEach( (arr) => {
    arr.forEach( (val) => {
      if (!unionArray.includes(val)) {
        unionArray.push(val);
      }
    });
  });
  console.log(unionArray);
  return unionArray;
};

union([1, 3, 5], [3, 6, 9],[7,8,9 ]);    // [1, 3, 5, 6, 9]