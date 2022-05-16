function leadingSubstrings(str) {
  return str.split('').map( (ele, index) => {
    return str.slice(0, index + 1);
  })
}

leadingSubstrings('abc');      // ["a", "ab", "abc"]
console.log(`leadingSubstrings('abc')`, leadingSubstrings('abc'));
leadingSubstrings('a');        // ["a"]
console.log(`leadingSubstrings('a')`, leadingSubstrings('a'));
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
console.log(`leadingSubstrings('xyzzy')`, leadingSubstrings('xyzzy'));