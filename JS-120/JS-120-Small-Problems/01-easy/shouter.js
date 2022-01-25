//Rewrite these two object types to use the class keyword, instead of direct
//prototype manipulation.

class Person {
  constructor() {

  }
  greeting(text) {
    console.log(text);
  }
}


class Shouter extends Person {
  constructor() {
    super();
  }
  greeting(text) {
    super.greeting(text.toUpperCase());
  }
}


let person = new Person();
let shouter = new Shouter();

person.greeting("Hello. It's very nice to meet you."); // Hello. It's very nice to meet you
shouter.greeting("Hello my friend."); // HELLO MY FRIEND.