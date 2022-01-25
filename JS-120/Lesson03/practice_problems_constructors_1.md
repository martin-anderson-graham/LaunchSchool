1. What naming convention separates constructor functions from other functions?

    We begin with a capital letter

2. What happens if you run the following code? Why?

    ```JavaScript
    function Lizard() {
      this.scamper = function() {
        console.log("I'm scampering!");
      };
    }

    let lizzy = Lizard();
    lizzy.scamper(); // ?
    ```
    This will throw an error - omitting `new` means Lizard() returns `undefined`, and attempting to call `.scamper()` on undefined throws an error.

3. Alter the code in problem 2 so that it produces the desired output: I'm scampering!.

    ```JavaScript
    function Lizard() {
      this.scamper = function() {
        console.log("I'm scampering!");
      };
    }

    let lizzy = new Lizard();
    lizzy.scamper(); // ?
    ```
