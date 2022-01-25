let isLetter = (char) => {
  return char >= 'a' && char <= 'z';
};

let wordSizes = (str) => {
  let strArray = str.toLowerCase().split(' ');
  let result = {};
  if (str.length === 0) {
    return result;
  }
  strArray.forEach( (val) => {
    let wordLength = val.split('').filter( (chr) => isLetter(chr)).length;
    result[wordLength] = result[wordLength] || 0;
    result[wordLength] += 1;
  });
  console.log(result);
  return result;
};

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes('');                                            // {}