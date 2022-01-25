let wordSizes = (str) => {
  let strArray = str.split(' ');
  let result = {};
  if (str.length === 0) {
    console.log(result);
    return {};
  }
  strArray.forEach( (val) => {
    if (result[val.length]) {
      result[val.length] += 1;
    } else {
      result[val.length] = 1;
    }
  });
  console.log(result);
  return result;
};

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}