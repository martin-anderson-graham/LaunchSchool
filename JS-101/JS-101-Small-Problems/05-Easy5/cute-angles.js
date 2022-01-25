const MINTUTES_PER_DEGREE = 60;
const SECONDS_PER_DEGREE = 3600;

let padZero = (num) => {
  if (num.toString().length < 2) {
    return '0' + num.toString();
  } else {
    return num.toString();
  }
};

let sanitizeAngle = (num) => {
  while (num < 0) {
    num += 360;
  }
  while (num > 360) {
    num -= 360;
  }
  return num;
};

let dms = (angle) => {
  angle = sanitizeAngle(angle);
  let degrees = Math.floor(angle);
  let minutes = Math.floor((angle - degrees) * MINTUTES_PER_DEGREE);
  let seconds = Math.floor((angle - degrees - (minutes / MINTUTES_PER_DEGREE))
  * SECONDS_PER_DEGREE);

  let result = `${degrees}°${padZero(minutes)}'${padZero(seconds)}"`;
  console.log(result);
  return result;
};

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"


dms(-1);   // 359°00'00"
dms(400);  // 40°00'00"
dms(-40);  // 320°00'00"
dms(-420); // 300°00'00"