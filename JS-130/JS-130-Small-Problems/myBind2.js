function myBind(thisArg, fn, ...args) {
  let partialArgs = args.slice();
  return function() {
    let remainingArgs = [].slice.apply(arguments);
    let fullArgs = partialArgs.concat(remainingArgs);
    return fn.apply(thisArg, fullArgs);
  };
}


let obj1 = {
  myName: "Bob",
  sayName(str) {
    console.log(this.myName + ' ' + str);
  },
};

let obj2 = {
  myName: "Ted",
};

let foo = myBind(obj2, obj1.sayName, "hi");

foo();

function addNumbers(a, b) {
  return a + b;
}

let addFive = myBind(null, addNumbers, 5);

console.log(addFive(10)); // 15
