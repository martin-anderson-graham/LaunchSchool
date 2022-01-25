1. What method can we use to bind a function permanently to a particular execution context?
    
    We use `bind` to permanently bind a context to a function.  It will be a method called on a function, with an object argument which will become the permanent context for a copy of the function returned by the `bind` call - this returned function must be assigned to a variable for later use.

1. What will the following code log to the console?
    ```JavaScript
    let obj = {
      message: 'JavaScript',
    };

    function foo() {
      console.log(this.message);
    }

    foo.bind(obj);
    ```

    This code will log nothing to the console.  Using `bind` does not actually invoke the caller function.

1. What will the following code output?
    ```JavaScript
    let obj = {
      a: 2,
      b: 3,
    };

    function foo() {
      return this.a + this.b;
    }

    let bar = foo.bind(obj);

    console.log(foo());
    console.log(bar());
    ```

    The call of `foo()` returns `NaN`, since its execution context is the global object, and the global object has no `a` or `b` properties - `undefined` will be returned for both and attempting to add them results in `NaN`.  `bar()` on the other hand has set to have a permanent execution context of `obj` due to the use of the `bind` function. Thus `bar()` will reference the `a` and `b` properties of `obj`, and return `5`.

1. What will the code below log to the console?
    ```JavaScript
    let positivity = {
      message: 'JavaScript makes sense!',
    };

    let negativity = {
      message: 'JavaScript makes no sense!',
    };

    function foo() {
      console.log(this.message);
    }

    let bar = foo.bind(positivity);

    negativity.logMessage = bar;
    negativity.logMessage();
    ```
    I think this wil log `JavaScript makes sense` - the binding on `bar` to the `positivity` object for its execution context is permanent, even if a property on `negativity` is set to reference the same function returned from the `bind` method.  This is especially true if we understand that these functions are saved as references - `negativity.logMessage` references the same function as `bar`

1. What will the code below output?
    ```JavaScript
    let obj = {
      a: 'Amazebulous!',
    };
    let otherObj = {
      a: "That's not a real word!",
    };

    function foo() {
      console.log(this.a);
    }

    let bar = foo.bind(obj);

    bar.call(otherObj);
    ```
    This will log `Amazebulous!` - binding the `obj` context to `bar` is permanent, even if you try to use `call` to define a different execution context.