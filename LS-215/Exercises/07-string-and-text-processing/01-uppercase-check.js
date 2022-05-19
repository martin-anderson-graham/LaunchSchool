function isUppercase(text) {
  let alphas = text.match(/[a-z]/gi);
  let result = true;
  if(alphas) {
    result = alphas.every( word => word.match(/[A-Z]/)); 
  }
  console.log(result);
  return result;
}

isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true