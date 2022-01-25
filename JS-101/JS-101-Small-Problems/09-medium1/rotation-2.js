let rotateRightmostDigits = (num, count) => {
  let digitArray = num.toString().split('');
  let indexToMove = digitArray.length - count;
  let savedDigit = digitArray.splice(indexToMove, 1)[0];
  digitArray.push(savedDigit);
  let result = parseInt(digitArray.join(''), 10);
  console.log(result);
  return result;
};


rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917