class Meetup {
  constructor(year, month) {
    this.month = month - 1;
    this.year = year;
  }

  day(weekday, schedule) {
    schedule = schedule.toLowerCase();
    weekday = weekday.toLowerCase();
    
    if (Object.keys(Meetup.scheduleNumber).includes(schedule)) {
      return this.getNumberedWeekDay(weekday, schedule);
    } else if (schedule === 'last') {
      return this.getLastDay(weekday)
    } else if (schedule === 'teenth') {
      return this.getTeenthDay(weekday);
    } else {
      return "Invalid syntax";
    }
  }

  getNumberedWeekDay(weekday, schedule) {
    let dayOfTheFirst = new Date(this.year, this.month, 1).getDay();
    let dayOffset = (Meetup.dayNumber[weekday] - dayOfTheFirst + 7) % 7;
    let computedDay = (7 * Meetup.scheduleNumber[schedule]) + dayOffset;
    let result = new Date(this.year, this.month, computedDay + 1);
    //check for impossible dates
    if (result.getMonth() !== this.month) {
      return null;
    } else {
      return result.toString();
    }
  }

  getTeenthDay(weekday) {
    let offset = 0;
    while(true) {
      let tempDate = new Date(this.year, this.month, 13 + offset);
      if (tempDate.getDay() === Meetup.dayNumber[weekday]) {
        return tempDate;
      } else {
        offset += 1;
      }
    }
  }
  
  getLastDay(weekday) {
    let numberOfDaysInMonth = this.getNumberOfDaysInMonth();
    let dayOfLastDayOfMonth = new Date(this.year, this.month, numberOfDaysInMonth).getDay();
    let offset = (dayOfLastDayOfMonth -  Meetup.dayNumber[weekday] + 7) % 7;
    return new Date(this.year, this.month, numberOfDaysInMonth - offset);
  }

  getNumberOfDaysInMonth() {
    let numberOfDaysInMonth = 0;
    for (let idx = 1; idx < 32; idx += 1) {
      let tempDate = new Date(this.year, this.month, idx)
      if (tempDate.getMonth() === this.month) {
        numberOfDaysInMonth = idx;
      }
    }
    return numberOfDaysInMonth;
  }
  static dayNumber = {
    'sunday': 0,
    'monday': 1,
    'tuesday': 2,
    'wednesday': 3,
    'thursday': 4,
    'friday': 5,
    'saturday': 6,
  }

  static scheduleNumber = {
    'first': 0,
    'second': 1,
    'third': 2,
    'fourth': 3,
    'fifth': 4,
  }


}

module.exports = Meetup;