function Element(datum, next = null) {
  this.data = datum;
  this.nextObj = next;
}
Element.prototype.isTail = function () {
  return !(this.nextObj !== this.nextObj);
}
Element.prototype.datum = function () {
  return this.data;
}
Element.prototype.next = function () {
  return this.nextObj;
}



function SimpleLinkedList() {
  this.headElement = null;
}
SimpleLinkedList.fromArray = function (arr) {
  let list = new SimpleLinkedList();
  if (arr) {
    arr.slice().reverse().forEach((ele) => {
      list.push(ele);
    });
  }
  return list;
}
SimpleLinkedList.prototype.size = function () {
  let count = 0;
  let currentElement = this.head();
  while(currentElement !== null ) {
    currentElement = currentElement.next();
    count += 1;
  }
  return count;
}
SimpleLinkedList.prototype.isEmpty = function () {
  return this.size() === 0;
}
SimpleLinkedList.prototype.push = function (data) {
  this.headElement = new Element(data, this.head());
}
SimpleLinkedList.prototype.peek = function () {
  if (this.size() !== 0) {
    return this.head().datum();
  } else {
    return this.head();
  }
}
SimpleLinkedList.prototype.head = function () {
  return this.headElement;
}
SimpleLinkedList.prototype.pop = function () {
  let currentHead = this.head();
  this.headElement = currentHead.next();
  return currentHead.datum();
}
SimpleLinkedList.prototype.reverse = function() {
  let list = new SimpleLinkedList();
  let currentElement = this.head();
  while (currentElement !== null) {
    list.push(currentElement.datum());
    currentElement = currentElement.next();
  }
  return list;
}
SimpleLinkedList.prototype.toArray = function() {
  let result = [];
  if (this.size() === 0) {
    return result;
  } else {
    result.push(this.head().datum());
    let currentElement = this.head();
    while (true) {
      currentElement = currentElement.next();
      if (currentElement === null) {
        break;
      }
      result.push(currentElement.datum());
    }
  }
  return result;
}

module.exports = { SimpleLinkedList, Element };