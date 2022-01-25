let isPalindrome = (str) => {
  return (str === str.split('').reverse().join(''));
};

let isRealPalindrome = (str) => {
  str = str.toLowerCase()
    .split('')
    .filter( (char) => /[a-z0-9]/.test(char))
    .join('');

  console.log(isPalindrome(str));
  return isPalindrome(str);
};


isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false