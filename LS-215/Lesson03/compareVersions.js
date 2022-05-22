function compareVersions(version1, version2) {
  let validVersionRegex = /^\d+(\.\d+)*$/;
  
  if(typeof version1 !== 'string' || typeof version2 !== 'string') return null;

  if(!validVersionRegex.test(version1) || !validVersionRegex.test(version2)) return null;

  let arr1 = version1.split('.').map( ele => Number(ele));
  let arr2 = version2.split('.').map( ele => Number(ele));

  let longestArrLength = arr1.length >= arr2.length ? arr1.length : arr2.length;

  for( let i = 0; i < longestArrLength; i+= 1) {
    let currentComparison = compareSingleVersionNumber(arr1[i], arr2[i]);
    if(currentComparison) return currentComparison;
  }

  return 0;
}

function validateInput(str) {

}

function compareSingleVersionNumber(num1, num2) {
  if(num1 < num2) return -1;
  if(num2 < num1) return 1;
  if(num1 === num2) return 0;
  
  if(num1 === undefined) {
    if(num2 === 0) return 0;
    return -1;
  } else if (num2 === undefined) {
    if(num1 === 0) return 0;
    return 1;
  } else {
    return 0;
  }
}


//0.1 < 1 = 1.0 < 1.1 < 1.2 = 1.2.0.0 < 1.18.2 < 13.37

/*
Problem
-input
  - two version strings
    - string composed of digits 0-9 delimited by .
    - multiple digits between each  period are possible
- output
  - integer
      - -1 - first string less than second
      - 1 - second string less than first
      - 0 - same version
  - null if the strings contain anything other than digits and .
- rules
  - the left-most numbers are checked first, and then move rightward for ties
  - extra zeros do not change the version number 1.2 == 1.2.0.0


Examples/Test Cases
*/
let tests = [ 
compareVersions('abc', '0.0'), //null
compareVersions(1.1, '1.1'), //null
compareVersions('0.0','abc'), //null
compareVersions('1.1', 1.1), //null
compareVersions('0.1', '1'), //-1
compareVersions('1', '1.0'), //0
compareVersions('1.1', '0'), //-1
compareVersions('1.2', '1.2.0.0'), //0
compareVersions('1.2.0.0', '1.18.2'), //-1
compareVersions('13.37', '1.18.2'), //1
compareVersions('1.0', '1.0.5') //-1
];

tests.forEach(ele => console.log(ele));

console.log(compareVersions('1', '1'));            // 0
console.log(compareVersions('1.1', '1.0'));        // 1
console.log(compareVersions('2.3.4', '2.3.5'));    // -1
console.log(compareVersions('1.a', '1'));          // null
console.log(compareVersions('.1', '1'));           // null
console.log(compareVersions('1.', '2'));           // null
console.log(compareVersions('1..0', '2.0'));       // null
console.log(compareVersions('1.0', '1.0.0'));      // 0
console.log(compareVersions('1.0.0', '1.1'));      // -1
console.log(compareVersions('1.0', '1.0.5'));      // -1

/*
Data Structures / Algorithms
  - input
    - array of integers (split on '.')

Algorithm
  - check to see if both strings are of the valid format
  - split the strings into an array by '.' and convert to numbers
  - compare the arrays one element at a time
    - return -1 or 1 if versions numbers are different sizes
    - return 0 if the numbers are equal
    - if one of the numbers are undefined and the other is 0, return 0
    - if one of the numbers is undefined and the other is not 0, return the larger
  


*/