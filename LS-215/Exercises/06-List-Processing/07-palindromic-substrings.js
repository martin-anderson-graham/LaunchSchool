function leadingSubstrings(str) {
  return str.split('').map( (ele, index) => {
    return str.slice(0, index + 1);
  })
}

function substrings(str) {
  return str.split('').map( (_, start) => {
    return leadingSubstrings(str.slice(start));
  }).reduce( (result, ele) =>  [...result, ...ele], [])
}

function isPalindromic(str) {
  if(str.length < 2) return false;

  return str === str.split('').reverse().join('');
}

function palindromes(str) {
  return substrings(str).filter(isPalindromic);
}

palindromes('abcd');       // []
console.log( palindromes('abcd'));
palindromes('madam');      // [ "madam", "ada" ]
console.log( palindromes('madam'));

palindromes('hello-madam-did-madam-goodbye');
console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
/*
[ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
  "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
  "-madam-", "madam", "ada", "oo" ]
*/
console.log(palindromes('knitting cassettes'));
/* returns
[ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
*/