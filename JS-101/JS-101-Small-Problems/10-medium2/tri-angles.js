let triangle = (ang1, ang2, ang3) => {
  let result = '';
  let angles = [ang1, ang2, ang3];
  if (!isValidAngles(angles)) {
    result = 'invalid';
  } else if (angles.some(isRightAngle)) {
    result = 'right';
  } else if (angles.every(isAcuteAngle)) {
    result =  'acute';
  } else {
    result = 'obtuse';
  }
  console.log(result);
  return result;
};

function isValidAngles (angleArr) {
  if (!angleArr.every( (val) => val > 0)) {
    return false;
  }
  return angleArr.reduce( (sum, ele) => sum + ele, 0) === 180;
}

function isRightAngle(num) {
  return num === 90;
}

function isAcuteAngle(num) {
  return num < 90;
}

triangle(60, 70, 50);       // "acute"
triangle(30, 90, 60);       // "right"
triangle(120, 50, 10);      // "obtuse"
triangle(0, 90, 90);        // "invalid"
triangle(50, 50, 50);       // "invalid"