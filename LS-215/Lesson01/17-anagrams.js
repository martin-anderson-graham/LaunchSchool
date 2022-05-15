function anagram(word, list) {
  
  function sortStringArray (letter1, letter2) {
    if(letter1 < letter2) {
      return -1;
    } else if (letter2 < letter1) {
      return 1;
    } else {
      return 0;
    }
  }

  function generateWordFrequencyObject(targetWord) {
    return targetWord.split('').sort(sortStringArray).reduce( (obj, letter) => {
      obj[letter] = obj[letter] || 0;
      obj[letter] += 1;
      return obj;
    }, {});
  };

  function areAnagrams(word1obj, word2obj) {
    if(Object.entries(word1obj).length !== Object.entries(word2obj).length) {
      return false;
    }

    return Object.keys(word1obj).every( key => word1obj[key] === word2obj[key]);
  }
  
  let targetFrequency = generateWordFrequencyObject(word);

  return list.filter( (wrd) => {
    let tempFrequencyObject = generateWordFrequencyObject(wrd);
    return areAnagrams(targetFrequency, tempFrequencyObject);
  });
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]