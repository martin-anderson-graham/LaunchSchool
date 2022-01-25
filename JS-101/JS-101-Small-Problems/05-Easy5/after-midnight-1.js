const MINUTES_PER_HOUR = 60;
const MINUTES_PER_DAY = 24 * MINUTES_PER_HOUR;

let padZero = (num) => {
  if (num.toString().length < 2) {
    return `0${num.toString()}`;
  } else {
    return num.toString();
  }

};

let timeOfDay = (numMinutes) => {
  let result = '';
  while (numMinutes < 0 || numMinutes > MINUTES_PER_DAY) {
    if (numMinutes < 0) {
      numMinutes += MINUTES_PER_DAY;
    } else if (numMinutes > MINUTES_PER_DAY) {
      numMinutes -= MINUTES_PER_DAY;
    }
  }
  let hours = Math.floor(numMinutes / MINUTES_PER_HOUR);
  let minutes = numMinutes % MINUTES_PER_HOUR;
  result = `${padZero(hours)}:${padZero(minutes)}`;
  console.log(result);
  return result;
};

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");