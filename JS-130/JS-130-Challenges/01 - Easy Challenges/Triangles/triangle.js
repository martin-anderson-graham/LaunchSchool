class Triangle {
  constructor(side1, side2, side3) {
    this.sides = [side1, side2, side3];
    this.verifySides();
  }

  verifySides() {
    if (this.sides.some(side => side <= 0)) {
      throw new Error("All sides must be greater than zero");
    }
    let sortedSides = this.sides.slice().sort((a, b) => a - b);
    if (sortedSides[0] + sortedSides[1] <= sortedSides[2] ||
      sortedSides[0] + sortedSides[2] <= sortedSides[1] ||
      sortedSides[1] + sortedSides[2] <= sortedSides[0]) {
      throw new Error("Any two sides must sum to more than the third");
    }
  }

  kind() {
    if (this.testEquilateral()) {
      return "equilateral";
    } else if (this.testIsosceles()) {
      return "isosceles";
    } else {
      return "scalene";
    }
  }

  testEquilateral() {
    if (this.sides.every( side => side === this.sides[0])) {
      return true;
    } else {
      return false;
    }
  }

  testIsosceles() {
    let isIsosceles = false;
    this.sides.forEach( (side) => {
      if (this.sides.filter( tempSide => tempSide === side).length === 2) {
        isIsosceles = true;
      }
    });
    return isIsosceles;
  }
}

module.exports = Triangle;
