class Animal {}
class Cat extends Animal {}
let fluffy = new Cat();
console.log(fluffy instanceof Cat);
console.log(fluffy instanceof Animal);