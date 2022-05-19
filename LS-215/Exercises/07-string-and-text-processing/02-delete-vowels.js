function removeVowels(wordArr) {
  let result =  wordArr.map( word => {
    let fixedWord =  word.match(/[^aeiou]/gi) || [];
    return fixedWord.join('');
  });
  console.log(result);
  return result;
}

removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]