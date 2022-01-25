/* eslint-disable max-lines-per-function */
function star(num) {
  if (num % 2 === 0 || num < 7) {
    console.log("not a valid input!");
    return undefined;
  }
  let result = '';
  let resultArray = [];
  let firstStar = 0;
  let middleStar = (num - 1) / 2;
  let lastStar = num - 1;
  for (let idx = 0; idx < (num - 1) / 2; idx++) {
    resultArray.push( ' '.repeat(firstStar) +
                      '*' +
                      ' '.repeat(middleStar - firstStar - 1) +
                      '*' +
                      ' '.repeat(lastStar - middleStar - 1) +
                      '*');
    firstStar++;
    lastStar--;
  }
  result += resultArray.join('\n');
  result += '\n' + '*'.repeat(num) + '\n';
  result += resultArray.reverse().join('\n');
  console.log(result);
  return undefined;
}


star(17);
/* logs
*   *   *
 *  *  *
  * * *
   ***
*********
   ***
  * * *
 *  *  *
*   *   *
*/