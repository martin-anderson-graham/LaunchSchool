function validateLuhn(str) {
  let values = str.replace(/\D/g, '');
  let arr = values.split('').map( ele => Number(ele));

  let updatedArr = arr.map( (num, index) => {
    if ((arr.length - index) % 2 === 1) {
      let temp = num * 2;
      if (temp >= 10) temp -= 9;
      return temp;
    }
      return num;
    }
  );

  let sum =  updatedArr.reduce( (sum, ele) => sum + ele);

  arr.push( (10 - sum % 10) % 10);

  return arr.join('');
}

/*
Understand the problem
  - input a string - may contain digits and non-digits
  - output - true or false

Examples/test cases
*/

let tests = [
  validateLuhn('1111'), //false
  validateLuhn('11114'), //true
  validateLuhn('111 1'), //false
  validateLuhn('111 14'), //true
  validateLuhn('8763'), //true
  validateLuhn('2323 2005 7766 3554'), //true
  validateLuhn('2323 2005 7766 355'), //true
  validateLuhn('0') //true
];

tests.forEach( ele => console.log(ele));

/*
Data structures
  - sanitize, split and map input string into an array of number


Algorithms
 - remove all non-digits from input string
 - split and map the string into an array of numbers
 - loop through the array from the end, doubling (and subtracting if necessary) every second digit
 - reduce the array to a sum
 - return sum modulo 10 === 0

*/