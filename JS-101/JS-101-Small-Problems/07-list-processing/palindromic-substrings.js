/* eslint-disable max-len */
let substrings = (str) => {
  let result = [];
  for (let firstIndex = 0; firstIndex < str.length; firstIndex++) {
    for (let secondIndex = firstIndex + 1; secondIndex < str.length + 1; secondIndex++) {
      result.push(str.slice(firstIndex, secondIndex));
    }
  }
  return result;
};

let isPalindrome = (str) => {
  if (str.length <= 1) {
    return false;
  }
  return str === str.split('').reverse().join('');
};

let palindromes = (str) => {
  let substringArray = substrings(str);
  let palindromeArray = substringArray.filter(isPalindrome);
  console.log(palindromeArray);
  return palindromeArray;
};

palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]