/* eslint-disable max-len */
class CircularQueue {
  constructor(size) {
    this.size = size;
    this.queue = new Array(3).fill(null);
    this.addedIndex = 0;
    this.age = 0;
  }

  enqueue(itemToAdd) {
    this.queue[this.addedIndex] = {item: itemToAdd, age: this.age};

    this.addedIndex += 1;
    if (this.addedIndex === this.size) {
      this.addedIndex = 0;
    }
    this.age += 1;
  }

  dequeue() {
    if (this.queueIsEmpty()) {
      return null;
    } else {
      let objToRemove = this.getOldestObject();
      let index = this.queue.findIndex(ele => ele === objToRemove);
      this.queue[index] = null;
      return objToRemove.item;
    }
  }

  queueIsFull() {
    return this.queue.every( ele => ele !== null);
  }

  queueIsEmpty() {
    return this.queue.every( ele => ele === null );
  }

  getOldestObject() {
    let oldest = null;
    let minAge = Number.MAX_VALUE;
    this.queue.forEach( item => {
      if (item && item.age < minAge) {
        minAge = item.age;
        oldest = item;
      }
    });
    return oldest;
  }
}

let queue = new CircularQueue(3);
console.log(queue.dequeue() === null);

queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue() === 1);

queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue() === 2);

queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
console.log(queue.dequeue() === 5);
console.log(queue.dequeue() === 6);
console.log(queue.dequeue() === 7);
console.log(queue.dequeue() === null);

let anotherQueue = new CircularQueue(4);
console.log(anotherQueue.dequeue() === null);

anotherQueue.enqueue(1);
anotherQueue.enqueue(2);
console.log(anotherQueue.dequeue() === 1);

anotherQueue.enqueue(3);
anotherQueue.enqueue(4);
console.log(anotherQueue.dequeue() === 2);

anotherQueue.enqueue(5);
anotherQueue.enqueue(6);
anotherQueue.enqueue(7);
console.log(anotherQueue.dequeue() === 4);
console.log(anotherQueue.dequeue() === 5);
console.log(anotherQueue.dequeue() === 6);
console.log(anotherQueue.dequeue() === 7);
console.log(anotherQueue.dequeue() === null);