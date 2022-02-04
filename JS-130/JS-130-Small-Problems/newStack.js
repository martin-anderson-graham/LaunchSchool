function newStack() {
  let stack = [];
  return {
    push(item) {
      stack.push(item);
    },
    pop(item) {
      return stack.pop(item);
    },
    printStack() {
      stack.slice().forEach( item => console.log(item));
    }
  };
}

let s = newStack();
s.push(3);
s.push('hi');
console.log(s.pop());
s.push('bye');
s.push('10');
s.printStack();
