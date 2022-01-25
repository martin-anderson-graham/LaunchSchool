class Cat {
  constructor(name) {
    this.name = name;

  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

let kitty = new Cat('Sophie');
kitty.greet();