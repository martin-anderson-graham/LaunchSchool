function myBind(thisArg, fn) {
  return function () {
    return fn.apply(thisArg, arguments);
  };
}


let obj1 = {
  myName: "Bob",
  sayName(str = "") {
    console.log(this.myName + ' ' + str);
  },
};

let obj2 = {
  myName: "Ted",
};

let foo = myBind(obj2, obj1.sayName);

foo();
