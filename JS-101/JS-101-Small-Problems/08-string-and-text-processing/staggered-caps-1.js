let staggeredCase = (str) => {
  let result = str.split('').map( (char, idx) => {
    if (idx % 2) {
      return char.toLowerCase();
    } else {
      return char.toUpperCase();
    }
  }).join('');
  console.log(result);
  return result;
};


staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"