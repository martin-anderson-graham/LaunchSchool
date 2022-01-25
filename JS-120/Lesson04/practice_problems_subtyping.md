1. Consider the following code:

    ```JavaScript
    function Greeting() {}

    Greeting.prototype.greet = function(message) {
      console.log(message);
    };

    function Hello() {}

    Hello.prototype = Object.create(Greeting.prototype);

    Hello.prototype.hi = function() {
      this.greet('Hello!');
    };

    function Goodbye() {}

    Goodbye.prototype = Object.create(Greeting.prototype);

    Goodbye.prototype.bye = function() {
      this.greet("Goodbye");
    };
    ```

    What happens in each of the following cases? Try to answer without running the code.

      - Case 1
        ```JavaScript
        let hello = new Hello();
        hello.hi();
        ```
        Logs `Hello` - `this.greet` in the `hi` method looks to `Greeting.prototype`
      - Case 2
        ```JavaScript
        let hello = new Hello();
        hello.bye();
        ```
        Throws a TypeError - `bye` is not defined anywhere in `hello`'s prototypal chain
      - Case 3
        ```JavaScript
        let hello = new Hello();
        hello.greet();
        ```
        Logs an ~~empty string~~ `undefined` - `greet` is defined in `hello`'s prototypal chain, but no argument is supplied to the function
      - Case 4
        ```JavaScript
        let hello = new Hello();
        hello.greet('Goodbye');
        ```
        Logs `goodbye` - greet logs the argument passed to it
      - Case 5
        ```JavaScript
        Hello.hi();
        ```
        Throws a TypeError -`hi` is not defined in the functions `Hello`'s prototypal chain