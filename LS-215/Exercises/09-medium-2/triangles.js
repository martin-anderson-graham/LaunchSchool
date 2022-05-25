function triangle(one, two, three) {
  let angles = [one, two, three];

  if (angles.some(angle => angle <= 0 || angle >= 180)) return 'invalid';

  let sum = angles.reduce((sum, ele) => sum + ele, 0);

  if (sum !== 180) return 'invalid';

  if (angles.some(angle => angle === 90)) return 'right';
  if (angles.some(angle => angle > 90)) return 'obtuse';

  return 'acute';
}

/*
problem
-input - three numbers representing the angles of a triangle
- output - a string - 'right', 'acute', 'obtuse', 'valid'
- rules
  - the sum of the angles must be 180
  - all angles must be positive
  - the arguments will be integers

examples and test cases*/
let tests = [
  triangle(100, 100, 100),    //invalid
  triangle(-10, 160, 30),     //invalid
  triangle(0, 180, 0),        //invalid
  triangle(60, 70, 50),       // "acute"
  triangle(30, 90, 60),       // "right"
  triangle(120, 50, 10),      // "obtuse"
  triangle(0, 90, 90),        // "invalid"
  triangle(50, 50, 50),       // "invalid"
];

tests.forEach(ele => console.log(ele));

/*
data structures
- store the arguments in an array in order to use list processing (some/every)

algorithms
- extract the argument to an array ...args
- first check to see if every element is greater than zero and less than 180
  - if not, return invalid
- then check if sum is === to 180 - if not, return invalid
- then check if some angle is 90 - return 'right'
- then check if some angle is > 90 - return 'obtuse'
- else return 'acute

*/