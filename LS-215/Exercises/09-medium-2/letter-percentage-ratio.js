function letterPercentages(str) {
  let result = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  };

  for (let i = 0; i < str.length; i += 1) {
    if (str[i].match(/[a-z]/)) {
      result.lowercase += 1;
    } else if (str[i].match(/[A-Z]/)) {
      result.uppercase += 1;
    } else {
      result.neither += 1;
    }
  }

  return Object.keys(result).reduce( (obj, key) => {
    obj[key] = (100 * result[key] / str.length).toFixed(2);
    return obj;
  }, {});
}

/*
problem
- input - a string - containing any characters
- output - an object
  - keys - lowercase, uppercase, neither
  - values - percentage of symbols of each type - expressed as a string with two decimal places
- rules
  - the string will contain one character
  - assume only one character letters
examples
*/

let tests = [
  letterPercentages('A'), //{ lowercase: "100.00", uppercase: "100.00", neither: "000.00" }
  letterPercentages('a'), // { lowercase: "100.00", uppercase: "00.00", neither: "000.00" }
  letterPercentages(' '), // { lowercase: "00.00", uppercase: "00.00", neither: "100.00" }
  letterPercentages('abCdef 123'),
  // { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

  letterPercentages('AbCd +Ef'),
  // { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

  letterPercentages('123'),
  // { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
];

tests.forEach(ele => console.log(ele));

/*
data structures
- use an object to hold counts of each letter type, which will be mapped to the returned object

algorithms
- initialize an empty result object with keys lowercase/uppercase/neither, values 0
- loop through the length of the string
  - test is it is /[a-z]/ - add one result.lowercase
  - test is it is /[A-Z]/ - add one result.uppercase
  - else add one result.neither
- return the loop through the result object
  - divided by the length of the str
  - turn the number to a string with two fixed decimal places

*/