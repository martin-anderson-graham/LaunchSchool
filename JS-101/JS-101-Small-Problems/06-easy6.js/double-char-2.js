let isConsonant = (str) => {
  const vowels = ['a','e','i','o','u'];
  if (vowels.includes(str.toLowerCase())) {
    return false;
  } else if ( str.toLowerCase() >= 'a' && str.toLowerCase() <= 'z') {
    return true;
  } else {
    return false;
  }
};

let doubleConsonants = (str) => {
  let result = '';
  for (let idx = 0; idx < str.length; idx++) {
    result += str.charAt(idx);
    if (isConsonant(str.charAt(idx))) {
      result += str.charAt(idx);
    }
  }
  console.log(result);
  return result;
};

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""