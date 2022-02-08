class Octal {
  constructor(octalString) {
    this.octalString = octalString;
    this.decimalNum = this.convertToDecimal();
  }

  invalidInput() {
    let validChars = ['0', '1', '2', '3', '4', '5', '6', '7'];
    for(let idx = 0; idx < this.octalString.length; idx += 1) {
      if (!validChars.includes(this.octalString[idx])) {
        return true;
      }
    }
    return false;
  }

  convertToDecimal() {
    if (this.invalidInput()) {
      return 0;
    }
    return this.octalString.split('').reverse().reduce((acc, ele, idx) => {
      return acc + Number(ele) * Math.pow(8, idx);
    }, 0)
  }

  toDecimal() {
    return this.decimalNum;
  }
}

module.exports = Octal; 