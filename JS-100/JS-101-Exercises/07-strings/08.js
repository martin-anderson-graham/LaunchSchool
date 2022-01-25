//hange your isBlank function from the previous exercise to return true if the string is empty or only contains whitespace.
let isBlank = (str) => {
  return (!str||!str.replaceAll(' ',''));
};

console.log(isBlank('mars'));
console.log(isBlank(' '));
console.log(isBlank(''));