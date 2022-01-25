1. Suppose we have the following classes:

    ```JavaScript
    class Game {
      play() {
        return 'Start the game!';
      }
    }

    class Bingo extends Game {
      rulesOfPlay() {
        // rules of play
      }
    }
    ```
    What would happen if we added a play method to the Bingo class, keeping in mind that there is already a method of this name in the Game class from which the Bingo class inherits? Explain your answer. What do we call it when we define a method like this?

    Adding a `play` method to the `Bingo` class would '**override the method**' `play` method from the `Game` class - any invocation of `play` on objects of type `Bingo` would execute the `Bingo` version rather than the `Game` version.
1. Create a class named Greeting that has a single method named greet. The method should take a string argument, and it should print that argument to the console.

    Now, create two more classes that inherit from Greeting: one named Hello, and the other Goodbye. The Hello class should have a hi method that takes no arguments and logs "Hello". The Goodbye class should have a bye method that logs "Goodbye". Use the greet method from the Greeting class when implementing Hello and Goodbye; don't call console.log from either Hello or Goodbye.

    ```JavaScript
    class Greeting {
      constructor() {}

      greet (message) {
        console.log(message);
      }
    }

    class Hello extends Greeting {
      constructor() {
        super();
      }

      hi() {
        this.greet('Hello');
      }
    }

    class Goodbye extends Greeting {
      constructor() {
        super();
      }

      bye() {
        this.greet('Goodbye');
      }
    }

    let hi = new Hello();
    let bye = new Goodbye();
    hi.hi();
    bye.bye();
    ```