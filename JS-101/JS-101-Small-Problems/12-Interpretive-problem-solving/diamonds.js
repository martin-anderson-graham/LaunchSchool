/* eslint-disable max-len */
/* eslint-disable no-mixed-operators */
let diamond = (num) => {
  for (let row = 0; row < (num - 1) / 2; row++) {
    console.log(' '.repeat((num - 1) / 2 - row) + "*".repeat(2 * row + 1) + ' '.repeat((num - 1) / 2 - row));
  }
  console.log('*'.repeat(num));
  for (let row = 0; row < (num - 1) / 2; row++) {
    console.log(' '.repeat(row + 1)  + "*".repeat(num - 2 * (row + 1)) + ' '.repeat(row + 1));
  }
};

let hollowDiamond = (num) => {
  for (let row = 0; row < num; row++) {
    let line = '';
    line += ' '.repeat( Math.abs( row - (num - 1) / 2));
    line += '*';
    for (let idx = 0; idx < (num - (2 * Math.abs( row - (num - 1) / 2) + 2)); idx++) {
      line += ' ';
    }
    if (row !== 0 && row !== num - 1) {
      line += '*';
    }
    line += ' '.repeat( Math.abs( row - (num - 1) / 2));
    console.log(line);
  }
  console.log('\n');
};

/*
-1  0 10
1   1 8
3   2 6
5   3 4
7   4 2
5   5 4
3   6 6
1   7 8
-1  8 10

*/

hollowDiamond(15);
diamond(9);
/* logs
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
  */