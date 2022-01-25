1. What will the following code output? Try to determine the results without running the code.
    ```JavaScript
    function func() {
      return this;
    }

    let context = func();

    console.log(context);
    ```
    Since `context` is set to the result of the invocation of `func` (because () is included in `func()` on line 5), and `func()` is executed in the global execution context, a reference to the global object is the value of `context`.  So the string representation of the global object will be logged to the console.
  
1. What will the following code output? Explain the difference, if any, between this output and that of problem 1.
    ```JavaScript
    let obj = {
      func: function() {
        return this;
      },
    };

    let context = obj.func();

    console.log(context);
    ```

    Here `func()` is invoked as a method of `obj`, so `func()`'s execution context is the `obj` object.  `context` is assigned a reference to `obj`, and that is what is logged.  
    This differs from problem 1 in that `func()` is invoked as a method of an object, rather than in the global context.
1. What will the following code output?
    ```JavaScript
    message = 'Hello from the global scope!';

    function deliverMessage() {
      console.log(this.message);
    }

    deliverMessage();

    let foo = {
      message: 'Hello from the function scope!',
    };

    foo.deliverMessage = deliverMessage;

    foo.deliverMessage();
    ```
    The first `deliverMessage()` will log `Hello from the global scope!` - the invocation on line 7 uses the function declared on the preceding lines, and the execution context is the global object (implicitly set) - and `global.message` is defined on line 1.

    The second `deliverMessage()` logs `Hello from the function scope` because the execution context of `foo.deliverMessage()` is the `foo` object (implicitly defined by calling `deliverMessage()` as a method on `foo`), and `foo.message` is the defined on line 10.
1. What built-in methods have we learned about that we can use to specify a function's execution context explicitly?
    
    `call` and `apply`.

1. Take a look at the following code snippet. Use call to invoke the add method but with foo as execution context. What will this return?
    ```JavaScript
    let foo = {
      a: 1,
      b: 2,
    };

    let bar = {
      a: 'abc',
      b: 'def',
      add: function() {
        return this.a + this.b;
      },
    };

    bar.add.call(foo);
    ```
    Specifying `foo` as the execution context means that `this.a` and `this.b` in the `add` function resolve to `foo.a` and `foo.b` - adding them returns `3`