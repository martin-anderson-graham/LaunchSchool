function wordCap(text) {
  let result = text.split(/\s/).map( word => word[0].toUpperCase() + word.slice(1)).join(' ');
  console.log(result);
  return result;
}

wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'