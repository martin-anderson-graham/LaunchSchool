function staggeredCase(text) {
  let result = text.split('').map( (letter, index) => {
    if(index % 2) {
      return letter.toLowerCase();
    } else {
      return letter.toUpperCase();
    }
  }).join('');

  console.log(result);
  return result;
}

staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"