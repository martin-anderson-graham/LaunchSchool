function diamond(n) {
  let numSpaces = (n - 1) / 2;
  let numStars = 1;
  let firstHalf = [];
  for(let i = 0; i <= (n - 1) / 2; i += 1) {
    firstHalf.push(' '.repeat(numSpaces) + '*'.repeat(numStars));
    numSpaces -= 1;
    numStars += 2;
  }

  let result = firstHalf.slice();

  for (let i = firstHalf.length - 2; i >= 0; i -= 1) {
    result.push(firstHalf[i]);
  }

  console.log(result.join('\n'));
}

/*
problem
-input an integer that is odd
- output - console log an nxn diamond

examples/test cases
*/

diamond(1);
diamond(3);
diamond(9);

/*
data structure
- build an array of lines

algorithm

- set initial number of leading spaces is (n - 1) / 2 
- set initial number of stars to 1
- loop up to (n + 1 ) / 2
  - add abs(num spaces) + num stars
  - decrement spaces by 1
  - increase stars by 2
create a second array copy
  loop backwards through array (not last element) adding to sliced array
console log sliced array joined with \n
*/