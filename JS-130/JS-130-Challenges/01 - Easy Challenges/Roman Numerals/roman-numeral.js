/* eslint-disable max-statements */
/* eslint-disable max-lines-per-function */
"use strict";
// Symbol I V X  L  C   D   M
// Value  1 5 10 50 100 500 1000


class RomanNumeral {
  constructor(decimal) {
    this.baseTen = decimal;
  }

  toRoman() {
    let num = this.baseTen;
    let result = "";
    while (num > 999) {
      result += 'M';
      num -= 1000;
    }

    while (num > 499) {
      result += "D";
      num -= 500;
    }

    while (num > 99) {
      result += "C";
      num -= 100;
    }

    while (num > 49) {
      result += 'L';
      num -= 50;
    }

    while (num > 9) {
      result += "X";
      num -= 10;
    }

    while (num > 4) {
      result += 'V';
      num -= 5;
    }

    while (num > 0) {
      result += 'I';
      num -= 1;
    }
    result = result.replace("IIII", "IV");
    result = result.replace("VIV", "IX");
    result = result.replace("XXXX", "XL");
    result = result.replace("LXL", "XC");
    result = result.replace("CCCC", "CD");
    result = result.replace("DCD", "CM");
    return result;
  }
}

module.exports = RomanNumeral;