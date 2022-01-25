let maxRotation = (num) => {
  let numArray = num.toString().split('');
  let len = num.toString().length;
  for (let idx = 0; idx < len; idx++) {
    numArray.push(numArray.splice(idx, 1));
  }
  let result = parseInt(numArray.join(''), 10);
  console.log(result);
  return result;
};
maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845