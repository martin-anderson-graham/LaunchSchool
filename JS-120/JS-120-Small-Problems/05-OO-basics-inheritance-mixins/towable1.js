let towMixin = {
  tow() {
    return "I can tow a trailer!";
  }
};

class Truck {}

Object.assign(Truck.prototype, towMixin);

class Car {}

let truck = new Truck();
console.log(truck.tow()); //I can tow a trailer!