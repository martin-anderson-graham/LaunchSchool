let isPalindrome = (str) => {
  let result = (str === str.split('').reverse().join(''));
  console.log(result);
  return result;
};

isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true

