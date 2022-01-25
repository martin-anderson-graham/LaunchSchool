/*Write a function that takes a positive integer, n, as an argument and logs a
right triangle whose sides each have n stars. The hypotenuse of the triangle
(the diagonal side in the images below) should have one end at the lower-left
of the triangle, and the other end at the upper-right.
*/

let triangle = (num) => {
  for (let idx = 0; idx < num; idx++) {
    console.log(''.padStart(num - 1 - idx, ' ') + ''.padStart(idx + 1, '*'));
  }
};

triangle(5);
triangle(9);