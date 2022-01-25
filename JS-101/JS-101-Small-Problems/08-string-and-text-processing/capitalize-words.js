function wordCap(str) {
  let resultArray = [];
  str.split(' ').forEach( (word) => {
    resultArray.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
  });
  let result = resultArray.join(' ');
  console.log(result);
  return result;
}

wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'