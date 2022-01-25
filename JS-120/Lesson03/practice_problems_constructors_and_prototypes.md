1. What does the following code log to the console? Try to answer without running the code. Can you explain why the code produces the output it does?

    ```JavaScript
    let RECTANGLE = {
      area: function() {
        return this.width * this.height;
      },
      perimeter: function() {
        return 2 * (this.width + this.height);
      },
    };

    function Rectangle(width, height) {
      this.width = width;
      this.height = height;
      this.area = RECTANGLE.area();
      this.perimeter = RECTANGLE.perimeter();
    }

    let rect1 = new Rectangle(2, 3);

    console.log(rect1.area);
    console.log(rect1.perimeter);
    ```

    ~~This should log 6 and 5.~~ 
    It logs `NaN` and `NaN` - in the constructor `this.area` is set to the return value of calling `RECTANGLE.area()` - but `RECTANGLE` doesn't have width or height properties, so `NaN` is returned.  Then `rect.area` logs this value.

    The issue is that the function assignment in `Rectangle` should be `RECTANGLE.area` , and the log should be a function invocation `rect1.area()`

1. How would you fix the problem in the code from problem 1?
    ```JavaScript
    let RECTANGLE = {
      area: function() {
        return this.width * this.height;
      },
      perimeter: function() {
        return 2 * (this.width + this.height);
      },
    };

    function Rectangle(width, height) {
      this.width = width;
      this.height = height;
      this.area = RECTANGLE.area;
      this.perimeter = RECTANGLE.perimeter;
    }

    let rect1 = new Rectangle(2, 3);

    console.log(rect1.area());
    console.log(rect1.perimeter());
    ```

1. Write a constructor function called Circle that takes a radius as an argument. You should be able to call an area method on any objects created by the constructor to get the circle's area. Test your implementation with the following code:

    ```JavaScript
    function Circle(radius) {
      this.radius = radius;
      };

    Circle.prototype.area = function() {
      return Math.PI * this.radius * this.radius;
    };

    let a = new Circle(3);
    let b = new Circle(4);

    console.log(a.area().toFixed(2)); // => 28.27
    console.log(b.area().toFixed(2)); // => 50.27
    console.log(a.hasOwnProperty('area')); // => false
    ```

1. What will the following code log to the console and why?
    ```JavaScript
    function Ninja() {
      this.swung = true;
    }

    let ninja = new Ninja();

    Ninja.prototype.swingSword = function() {
      return this.swung;
    };

    console.log(ninja.swingSword());
    ```
    This will log `true`.  The `ninja` object is created using the `Ninja` constructor, and thus its `[[Prototype]]` is `Ninja.prototype`.  Adding the `toSwing` method to this prototype is accessible to the `ninja` object - it will check it prototypal chain for properties on the line they are accessed, namely the last line.

1. What will the following code output and why? Try to answer without running the code.
    ```JavaScript
    function Ninja() {
      this.swung = true;
    }

    let ninja = new Ninja();

    Ninja.prototype = {
      swingSword: function() {
        return this.swung;
      },
    };

    console.log(ninja.swingSword());
    ```
    This will throw a `TypeError` - cannot access method `swingSword` on `undefined`.  Reassigning the Ninja.prototype will change the reference stored in Ninja - however, the object `ninja` will still reference the original `Ninja.prototype` object (as that was the object referenced when the `Ninja` constructor was invoked), so it will not find `swingSword` defined anywhere in its prototypal chain.

1. Implement the method described in the comments below:

    ```JavaScript
    function Ninja() {
      this.swung = false;
    }

    Ninja.prototype.swing = function() {
      this.swung = true;
      return this;
    };

    let ninjaA = new Ninja();
    let ninjaB = new Ninja();

    console.log(ninjaA.swing().swung);      // logs `true`
    console.log(ninjaB.swing().swung);      // logs `true`
    ```
1. In this problem, we'll ask you to create a new instance of an object, without having direct access to the constructor function:

    ```JavaScript
    let ninjaA;

    {
      const Ninja = function() {
        this.swung = false;
      };

      ninjaA = new Ninja();
    }

    // create a `ninjaB` object here; don't change anything else
    let ninjaB = new ninjaA.constructor();

    console.log(ninjaA.constructor === ninjaB.constructor) // => true
    ```
1. Since a constructor is just a function, you can call it without the new operator. However, that can lead to unexpected results and errors, especially for inexperienced programmers. Write a constructor function that you can use with or without the new operator. The function should return the same result with either form. Use the code below to check your solution:
    ```JavaScript
    function User(first, last) {
      let context = {};
      context.name = first + ' ' + last;
      return context;
    }

    let name = 'Jane Doe';
    let user1 = new User('John', 'Doe');
    let user2 = User('John', 'Doe');

    console.log(name);         // => Jane Doe
    console.log(user1.name);   // => John Doe
    console.log(user2.name);   // => John Doe
    ```