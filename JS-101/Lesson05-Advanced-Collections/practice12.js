let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

let newArr = arr.map( (subArr) => {
  let tempArr = [];
  tempArr.length = subArr.length;
  subArr.forEach( (val, idx) => {
    if (val % 3 === 0) {
      tempArr[idx] = val;
    }
  });
  return tempArr;
});

newArr.forEach( val => console.log(val.toString()));
