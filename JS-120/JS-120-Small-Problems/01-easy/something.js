/*
What will the following code log?
"ByeBye"
"HelloHello"

The first call of .dupData is the static version of the method on Something.
The second is the instance method (which uses this.data)

*/

class Something {
  constructor() {
    this.data = "Hello";
  }

  dupData() {
    return this.data + this.data;
  }

  static dupData() {
    return "ByeBye";
  }
}

let thing = new Something();
console.log(Something.dupData());
console.log(thing.dupData());