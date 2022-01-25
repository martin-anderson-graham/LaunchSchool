function removeVowels(arr) {
  let resultArray = [];
  arr.forEach( word => {
    let newWord = word.split('').filter( (char) => !['a','e','i','o','u'].includes(char.toLowerCase()));
    resultArray.push(newWord.join(''));
  });
  console.log(resultArray);
  return resultArray;
}

removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]