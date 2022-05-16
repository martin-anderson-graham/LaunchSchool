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

console.log(substrings('abcde'));

/* returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]
*/