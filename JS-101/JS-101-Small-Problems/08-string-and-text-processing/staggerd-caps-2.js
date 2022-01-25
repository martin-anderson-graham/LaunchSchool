

let staggeredCase = (str) => {
  let charIsUpper = false;
  let result = str.split('').map( (char) => {
    if (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z') {
      charIsUpper = !charIsUpper;
      if (charIsUpper) {
        return char.toUpperCase();
      } else {
        return char.toLowerCase();
      }
    }
    return char;
  }).join('');
  return result;
};

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);