let fridayThe13ths = (year) => {
  let result  = 0;
  for (let idx = 0; idx < 12; idx++) {
    let day13 = new Date(year, idx, 13);
    if (day13.getDay() === 5) {
      result++;
    }
  }
  console.log(result);
  return result;
};

fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2