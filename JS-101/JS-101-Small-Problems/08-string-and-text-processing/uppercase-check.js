function isUppercase(str) {
  for (let char of str.split('')) {
    if (char >= 'a' && char <= 'z') {
      console.log(false);
      return false;
    }
  }
  console.log(true);
  return true;
}

isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true