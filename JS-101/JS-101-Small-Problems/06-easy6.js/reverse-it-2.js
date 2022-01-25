let reverseWords = (str) => {
  let resultArray = [];
  let wordArray = str.split(' ');
  wordArray.forEach( (val) => {
    if (val.length >= 5) {
      resultArray.push(val.split('').reverse().join(''));
    } else {
      resultArray.push(val);
    }
  });
  let result = resultArray.join(' ');
  console.log(result);
  return result;
};

reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"