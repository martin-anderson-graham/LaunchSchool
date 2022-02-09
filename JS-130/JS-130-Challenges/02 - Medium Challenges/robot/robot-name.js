Math.seedrandom = require('seedrandom');

class Robot {
  constructor() {
    this.robotName = this.generateName();
  }

  generateName() {
    //two uppercase letters and three uppercase digits
    let newName = '';
    while (true) {
      newName = '';
      for (let idx = 0; idx < 2; idx += 1) {
        newName += String.fromCharCode(Math.floor(Math.random() * 26) + 'A'.charCodeAt(0));
      }
      for (let idx = 0; idx < 3; idx += 1) {
        newName += Math.floor(Math.random() * 10);
      }
      if (!Robot.usedNames.includes(newName)) {
        break;
      }
    }
    Robot.usedNames.push(newName);
    return newName;
  }

  name() {
    return this.robotName;
  }

  reset() {
    this.robotName = this.generateName();
  }
}

Robot.usedNames = [];

module.exports = Robot;