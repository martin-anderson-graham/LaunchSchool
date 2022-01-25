1. The code below should output "Christopher Turk is a Surgeon". Without running the code, what will it output? If there is a difference between the actual and desired output, explain the difference.

    ```JavaScript
    let turk = {
      firstName: 'Christopher',
      lastName: 'Turk',
      occupation: 'Surgeon',
      getDescription() {
          return this.firstName + ' ' + this.lastName + ' is a '
                                      + this.occupation + '.';
      }
    };

    function logReturnVal(func) {
      let returnVal = func();
      console.log(returnVal);
    }

    logReturnVal(turk.getDescription);
    ```

    `logReturnVal` is executed with the global object as its execution context.  Within the function `returnVal` is set to the value returned by invoking `func` - this invocation is done with the global object as its context, so `this.firstName` etc will return undefined. In total `undefined undefined is a undefined.` will be logged.

1. Modify the program from the previous problem so that logReturnVal accepts an additional context argument. If you then run the program with turk as the context argument, it should produce the desired output.

    ```JavaScript
    let turk = {
      firstName: 'Christopher',
      lastName: 'Turk',
      occupation: 'Surgeon',
      getDescription() {
        return this.firstName + ' ' + this.lastName + ' is a '
                                      + this.occupation + '.';
      }
    };

    function logReturnVal(func, context) {
      let returnVal = func.call(context);
      console.log(returnVal);
    }

    logReturnVal(turk.getDescription, turk);
    ```
1. Suppose that we want to extract getDescription from turk, but we always want it to execute with turk as its execution context. How would you modify your code to do that?
    ```JavaScript
    let turk = {
      firstName: 'Christopher',
      lastName: 'Turk',
      occupation: 'Surgeon',
      getDescription: function () {
        return this.firstName + ' ' + this.lastName + ' is a '
          + this.occupation + '.';
      }
    };

    function logReturnVal(func,) {
      let returnVal = func();
      console.log(returnVal);
    }

    logReturnVal(turk.getDescription.bind(turk));
    ```
1. Consider the following code:
    ```JavaScript
    const TESgames = {
      titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
      seriesTitle: 'The Elder Scrolls',
      listGames: function() {
        this.titles.forEach(function(title) {
          console.log(this.seriesTitle + ': ' + title);
        });
      }
    };

    TESgames.listGames();
    ```
    Will it produce the following output?
    ```JavaScript
    The Elder Scrolls: Arena
    The Elder Scrolls: Daggerfall
    The Elder Scrolls: Morrowind
    The Elder Scrolls: Oblivion
    The Elder Scrolls: Skyrim
    ```

    It will not produce the expected output due to the fact that the callback function within `forEach` executes with the global object as its context.  We can fix this by adding `this` as the optional argument for `forEach` after the callback function.

1. Use let self = this; to ensure that TESgames.listGames uses TESGames as its context and logs the proper output.

    ```JavaScript
    const TESgames = {
      titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
      seriesTitle: 'The Elder Scrolls',
      listGames: function() {
        let self = this;
        this.titles.forEach(function(title) {
          console.log(self.seriesTitle + ': ' + title);
        });
      }
    };

    TESgames.listGames();
    ```

1. The forEach method provides an alternative way to supply the execution context for the callback function. Modify the program from the previous problem to use that technique to produce the proper output:
    ```JavaScript
    const TESgames = {
      titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
      seriesTitle: 'The Elder Scrolls',
      listGames: function() {
        this.titles.forEach(function(title) {
          console.log(this.seriesTitle + ': ' + title);
        }, this);
      }
    };

    TESgames.listGames();
    ```

1. Use an arrow function to achieve the same result:
    ```JavaScript
    const TESgames = {
      titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
      seriesTitle: 'The Elder Scrolls',
      listGames: function() {
        this.titles.forEach( title => {
          console.log(this.seriesTitle + ': ' + title);
        });
      }
    };

    TESgames.listGames();
    ```
1. Consider the following code:
    ```JavaScript
    let foo = {
      a: 0,
      incrementA: function() {
        function increment() {
          this.a += 1;
        }

        increment();
      }
    };

    foo.incrementA();
    foo.incrementA();
    foo.incrementA();
    ``` 
    What will the value of foo.a be after this code runs?

    The value of `foo.a` after the code runs will be ~~`NaN`~~ `0`.  The line that says `increment()` inside the `incrementA` function is executed with the global object as its execution context.  So `this.a` returns `undefined`, and attempting to add `1` to `undefined` results in `NaN`.  However `foo.a` was never modified, so its value remains `0`

1. Use one of the methods we learned in this lesson to invoke increment with an explicit context such that foo.a gets incremented with each invocation of incrementA.
    ```JavaScript
    let foo = {
      a: 0,
      incrementA: function() {
        let increment =  function() {
          this.a += 1;
        }.bind(this);

        increment();
      }
    };

    foo.incrementA();
    foo.incrementA();
    foo.incrementA();
    console.log(foo.a);
    // 3
    ```