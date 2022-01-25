let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

Object.keys(obj).forEach( (key) => {
  obj[key].forEach( word => {
    word.split('').forEach( (char) => {
      if ('aeiou'.includes(char)) {
        console.log(char);
      }
    });
  });
});