function Clock(hr, min) {
  this.hour = hr;
  this.minute = min;
  Clock.correctTime(this);
};
Clock.at = function (hr, min = 0) {
  return new Clock(hr, min);
}

Clock.prototype.toString = function () {
  let hrStr = String(this.hour);
  if (hrStr.length !== 2) {
    hrStr = '0' + hrStr;
  }
  let minStr = String(this.minute);
  if (minStr.length !== 2) {
    minStr = '0' + minStr;
  }

  return `${hrStr}:${minStr}`;
}

Clock.correctTime = function(clock) {
  while (clock.minute < 0) {
    clock.minute += 60;
    clock.hour -= 1;
  }
  while (clock.minute > 59) {
    clock.minute -= 60;
    clock.hour += 1;
  }
  while (clock.hour < 0) {
    clock.hour += 24;
  }
  while (clock.hour > 23) {
    clock.hour -= 24;
  }
}

Clock.prototype.subtract = function (num) {
  this.minute -= num;
  Clock.correctTime(this);
  return this;
}

Clock.prototype.add = function (num) {
  this.minute += num;
  Clock.correctTime(this);
  return this;
}

Clock.prototype.isEqual = function (clock) {
  return this.toString() === clock.toString();
}

// let clock = Clock.at(0).subtract(50);
// console.log('clock', clock.toString());


module.exports = Clock;