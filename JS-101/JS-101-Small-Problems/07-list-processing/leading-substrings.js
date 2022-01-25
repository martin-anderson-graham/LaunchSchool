let leadingSubstrings = (str) => {
  let result = [];
  /*
  for (let endIndex = str.length; endIndex > 0; endIndex--) {
    result.push(str.slice(0, endIndex));
  }
  */
  let letterArray = str.split('');
  let currentString = '';
  result = letterArray.map( (val) => {
    currentString += val;
    return currentString;
  });

  result.sort( (a,b) => (a.length - b.length));
  console.log(result);
  return result;
};

leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]