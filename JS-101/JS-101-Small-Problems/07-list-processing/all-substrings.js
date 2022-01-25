/* eslint-disable max-len */
let substrings = (str) => {
  let result = [];
  for (let firstIndex = 0; firstIndex < str.length; firstIndex++) {
    for (let secondIndex = firstIndex + 1; secondIndex < str.length + 1; secondIndex++) {
      result.push(str.slice(firstIndex, secondIndex));
    }
  }
  console.log(result);
  return result;
};

substrings('abcde');

/* returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]
  */