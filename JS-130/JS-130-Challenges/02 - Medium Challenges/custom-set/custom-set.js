class CustomSet {
  constructor(arr = []) {
    this.elements = arr.slice();
  }

  isEmpty() {
    return this.elements.length === 0;
  }

  contains(item) {
    return this.elements.includes(item);
  }

  isSubset(customSet) {
    return this.elements.every(ele => customSet.contains(ele));
  }

  isDisjoint(customSet) {
    return !this.elements.some(ele => customSet.contains(ele));
  }

  isSame(customSet) {
    let arrToCheck = customSet.elements.slice();
    if (this.elements.length !== arrToCheck.length) {
      return false;
    }
    for (let idx = 0; idx < this.elements.length; idx += 1) {
      if (!arrToCheck.includes(this.elements[idx])) {
        return false;
      } else {
        let foundIndex = arrToCheck.indexOf(this.elements[idx]);
        arrToCheck.splice(foundIndex, 1);
      }
    }
    return true;
  }

  add(ele) {
    if (this.contains(ele)) {
      return new CustomSet([...this.elements]);
    } else {
      return new CustomSet([...this.elements, ele]);
    }
  }

  intersection(customSet) {
    let newElements = [];
    customSet.elements.forEach( (ele) => {
      if (this.contains(ele) && !newElements.includes(ele)) {
        newElements.push(ele);
      }
    });
    return new CustomSet([...newElements]);
  }

  difference(customSet) {
    let newElements = [...this.elements].filter( (ele) => {
      return !customSet.contains(ele);
    });
    return new CustomSet([...newElements]);
  }

  union(customSet) {
    let newElements = [...this.elements];
    customSet.elements.forEach( (ele) => {
      if (!newElements.includes(ele)) {
        newElements.push(ele);
      }
    });
    return new CustomSet([...newElements]);
  }
}
module.exports = CustomSet;