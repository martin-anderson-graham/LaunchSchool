const MINUTES_PER_HOUR = 60;
const MINUTES_PER_DAY = 24 * MINUTES_PER_HOUR;

let minuteOfTheDay = (str) => {
  let timeArray = str.split(":").map( (val) => Number(val));
  while (timeArray[0] >= 24) {
    timeArray[0] -= 24;
  }
  return (timeArray[0] * MINUTES_PER_HOUR) + timeArray[1];
};

let afterMidnight = (str) => {
  return minuteOfTheDay(str);
};

let beforeMidnight = (str) => {
  if (str === "24:00" || str === "00:00") {
    return 0;
  }
  return (MINUTES_PER_DAY - minuteOfTheDay(str));
};

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);