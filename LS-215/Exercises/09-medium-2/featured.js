function featured(num) {
  let start = num + 1;
  if (start < 0) start = 1;

  if (start % 7) {
    start = start + 7 - (start % 7);
  }

  for (let i = start; i <= 9876543201; i += 7) {
    if (isFeatured(i)) return i;
  }

  return 'There is no possible number that fulfills those requirements.';
}

function isFeatured(num) {
  if (num % 2 === 0) return false;

  let digitCount = {};
  String(num).split('').forEach( letter => {
    digitCount[letter] = digitCount[letter] + 1 || 1;
  });

  return Object.values(digitCount).every( count => count < 2);
}

/*
problem
-input an integer (could be negative?)
- ouput - an integer which is a featured number
- rules
  - featured numbers
    - are odd
    - are multiples of 7
    - no digits are repeated
  - largest featured number is 9876543201

examples and test cases*/
let tests = [
  featured(-100),         // 7
  featured(12),           // 21
  featured(20),           // 21
  featured(21),           // 35
  featured(997),          // 1029
  featured(1029),         // 1043
  featured(999999),       // 1023547
  featured(999999987),    // 1023456987
  featured(9876543186),   // 9876543201
  featured(9876543200),   // 9876543201
  featured(9876543201),   // "There is no possible number that fulfills those requirements."
]

tests.forEach(test => console.log(test));

/*
data structures
- none

algorithm
- check if input is negative - if so, set it to 1
- set starting value to first multiple of 7 larger than the input value
    - add 7 - (input + 1) % 7 to (input + 1) 
- starting at starting value loop up to 9876543201, incrementing by 7
  - check if the number is featured
    - if even, not featured
    - check to see if repeated digits - if so, not featured
      - split the number into an array (String(num).split(''))
      - create an object to hold digits counts
      - return Object.keys(digitCount).every( count < 2)
  - if so, return the number

*/