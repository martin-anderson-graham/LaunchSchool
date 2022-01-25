1. What do we mean when we say that classes are first-class values?

    classes can be assigned to variables, and passed as arguments to functions and returned from functions
  
1. Consider the following class declaration:

    ```JavaScript
    class Television {
      static manufacturer() {
        // omitted code
      }

      model() {
        // method logic
      }
    }
    ```

    What does the static modifier do? How would we call the method manufacturer?

    The static modifier means that the method is defined as a property of the Television function-object.    You would not be able to invoke the method using an instance of the Television type, but rather must use `Television.manufacturer()`

