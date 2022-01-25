1. What will the following code log to the console? Explain why it logs that value. Try to answer without running the code.
    ```JavaScript
    let qux = { foo: 1 };
    let baz = Object.create(qux);
    console.log(baz.foo + qux.foo);
    ```

    This will log `2`, since the `foo` property is an own property of `qux` and is inherited by `baz` since `qux` is in `baz`'s prototypal chain

1. What will the following code log to the console? Explain why it logs that value. Try to answer without running the code.
    ```JavaScript
    let qux = { foo: 1 };
    let baz = Object.create(qux);
    baz.foo = 2;

    console.log(baz.foo + qux.foo);
    ```

    This will log `3` - reassigning the value of the `foo` property on `baz` (which in this case actually creates an 'own' property of `foo`) doesn't affect the value of the `foo` property on `qux`.

3. What will the following code log to the console? Explain why it logs that value. Try to answer without running the code.
    ```JavaScript
    let qux = { foo: 1 };
    let baz = Object.create(qux);
    qux.foo = 2;

    console.log(baz.foo + qux.foo);
    ```

    This will log `4`.  `baz` does not have its own property `foo` - thus `baz.foo` returns the `foo` property up the prototypal chain, ie `qux.foo`.  So both `baz.foo` and `qux.foo` both evaluate to `2`.  
    Here we see that changes to the prototypal object referenced by `baz` is visible to `baz`

1. As we saw in problem 2, the following code creates a new property in the baz object instead of assigning the property in the prototype object.
    ```JavaScript
    let qux = { foo: 1 };
    let baz = Object.create(qux);
    baz.foo = 2;
    ```
    Write a function that searches the prototype chain of an object for a given property and assigns it a new value. If the property does not exist in any of the prototype objects, the function should do nothing. The following code should work as shown:
    ```JavaScript
    let fooA = { bar: 1 };
    let fooB = Object.create(fooA);
    let fooC = Object.create(fooB);

    assignProperty(fooC, "bar", 2);
    console.log(fooA.bar); // 2
    console.log(fooC.bar); // 2

    assignProperty(fooC, "qux", 3);
    console.log(fooA.qux); // undefined
    console.log(fooC.qux); // undefined
    console.log(fooA.hasOwnProperty("qux")); // false
    console.log(fooC.hasOwnProperty("qux")); // false
    ```
    Answer:
    ```JavaScript
    function assignProperty(obj, prop, val) {
      let currentObj = obj;
      while (Object.getPrototypeOf(currentObj) !== Object.prototype) {
        currentObj = Object.getPrototypeOf(currentObj);
      }
      if (currentObj.hasOwnProperty(prop)) {
        currentObj[prop] = val;
      }
    }

    let fooA = { bar: 1 };
    let fooB = Object.create(fooA);
    let fooC = Object.create(fooB);

    assignProperty(fooC, "bar", 2);
    console.log(fooA.bar); // 2
    console.log(fooC.bar); // 2

    assignProperty(fooC, "qux", 3);
    console.log(fooA.qux); // undefined
    console.log(fooC.qux); // undefined
    console.log(fooA.hasOwnProperty("qux")); // false
    console.log(fooC.hasOwnProperty("qux")); // false
    ```

5. Consider the following two loops:
    ```JavaScript
    for (let property in foo) {
      console.log(`${property}: ${foo[property]}`);
    }    
    ```
    ```JavaScript
    Object.keys(foo).forEach(property => {
      console.log(`${property}: ${foo[property]}`);
    });
    ```
    If `foo` is an arbitrary object, will these loops always log the same results to the console? Explain why they do or do not. If they don't always log the same information, show an example of when the results differ.

    Answer:
    These loops will not always log the same result.  `Object.keys()` only includes properties which are `own` properties of the object (ie, not ones delegated from `foo`'s prototypes).  `for..in` will include any properties of objects in the prototypal chains. They will produce the same result if no objects in the prototypal chain As an example:
    ```JavaScript
    let a = {first: 1};
    let b = Object.create(a);
    b.second = 2;

    Object.keys(b).forEach( property => {
      console.log(property);
    });
    // second

    for (let k in b) {
      console.log(k);
    }
    // second
    // first
    ```
1. How do you create an object that doesn't have a prototype? How can you determine whether an object has a prototype?
  
    You can create an object without a prototype using `Object.create(null)`.  If `Object.getPrototypeOf(obj)` returns `null` then the object does not have a prototype.