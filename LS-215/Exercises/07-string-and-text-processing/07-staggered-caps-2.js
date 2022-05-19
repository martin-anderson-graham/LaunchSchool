function staggeredCase(text) {
  let capsLetter = false;
  let result = text.split('').map( letter => {
    if((/[a-z]/i).test(letter)) capsLetter = !capsLetter;
    return (capsLetter ? letter.toUpperCase(): letter.toLowerCase());
  }).join('');
  console.log(result);
  return result;
}

staggeredCase('I Love Launch School!');        // "I lOvE lAuNcH sChOoL!"
staggeredCase('ALL CAPS');                     // "AlL cApS"
staggeredCase('ignore 77 the 444 numbers');    // "IgNoRe 77 ThE 444 nUmBeRs"