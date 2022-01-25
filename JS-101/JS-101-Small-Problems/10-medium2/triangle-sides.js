let triangle = (num1, num2, num3) => {
  if (!num1 || !num2 || !num3) {
    return 'invalid';
  } else if (isInvalid(num1, num2, num3)) {
    return 'invalid';
  } else if (num1 === num2 && num2 === num3) {
    return 'equilateral';
  } else if (num1 !== num2 && num2 !== num3 && num1 !== num3) {
    return 'scalene';
  }
  return 'isosceles';
};

function isInvalid( num1, num2, num3) {
  let sideArr = [num1, num2, num3].sort();
  if (sideArr[0] + sideArr[1] <= sideArr[2]) {
    return true;
  } else {
    return false;
  }
}


console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"