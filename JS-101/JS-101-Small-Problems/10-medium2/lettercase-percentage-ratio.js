let isLowerCase = (str) => {
  return (str >= 'a' && str <= 'z');
};

let isUpperCase = (str) => {
  return (str >= 'A' && str <= 'Z');
};

let letterPercentages = (str) => {
  let result = {lowercase: 0, uppercase: 0, neither: 0};
  let charArray = str.split('');
  charArray.forEach ( (letter) => {
    if (isLowerCase(letter)) {
      result.lowercase++;
    } else if (isUpperCase(letter)) {
      result.uppercase++;
    } else {
      result.neither++;
    }
  });
  Object.keys(result).forEach( (key) => {
    result[key] = (100 * result[key] / str.length).toFixed(2);
  });
  console.log(result);
  return result;
};

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }