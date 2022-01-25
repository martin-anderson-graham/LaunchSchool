let digitList = (num) => {
  let result = num.toString().split('').map( (val) => Number(val));
  console.log(result);
  return result;
};

digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]