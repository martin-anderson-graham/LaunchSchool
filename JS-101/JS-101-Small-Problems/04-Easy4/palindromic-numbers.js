let isPalindromicNumber = (num) => {
  let result =  num.toString().split('').reverse().join('') === num.toString();
  console.log(result);
  return result;
};

isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true