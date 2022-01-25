let reverseSentence = (str) => {
  let result = str.split(' ').reverse().join(' ');
  console.log(result);
  return result;
};

reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"