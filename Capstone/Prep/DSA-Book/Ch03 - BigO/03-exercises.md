The following exercises provide you with the opportunity to practice with Big O Notation. The solutions to these exercises are found in the section, Chapter 3, on page 440.

1. Use Big O Notation to describe the time complexity of the following function that determines whether a given year is a leap year:
    ```javascript
    function isLeapYear(year) {
      return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
    }
    ```

    `O(1)`

2. Use Big O Notation to describe the time complexity of the following function that sums up all the numbers from a given array:
    ```javascript
    function arraySum(array) {
      let sum = 0;
      for(let i = 0; i < array.length; i++) {
        sum += array[i];
      }
      return sum;
    }
    ```

    `O(n)`

3. The following function is based on the age-old analogy used to describe the power of compounding interest:
    Imagine you have a chessboard and put a single grain of rice on one square. On the second square, you put 2 grains of rice, since that is double the amount of rice on the previous square. On the third square, you put 4 grains. On the fourth square, you put 8 grains, and on the fifth square, you put 16 grains, and so on. 

    The following function calculates which square you’ll need to place a certain number of rice grains. For example, for 16 grains, the function will return 5, since you will place the 16 grains on the fifth square. Use Big O Notation to describe the time complexity of this function, which is below:

    ```javascript
    function chessboardSpace(numberOfGrains) {
      let chessboardSpaces = 1;
      let placedGrains = 1;
      while (placedGrains < numberOfGrains) {
        placedGrains *= 2;
        chessboardSpaces += 1;
      }
      return chessboardSpaces;
    }
    ```

    `O(log n)`

4. The following function accepts an array of strings and returns a new array that only contains the strings that start with the character "a". Use Big O Notation to describe the time complexity of the function: 
    ```javascript
    function selectAStrings(array) {
      let newArray = [];
      for(let i = 0; i < array.length; i++) {
        if (array[i].startsWith("a")) {
          newArray.push(array[i]);
        }
      }
      return newArray;
    }
    ```

    `O(n)`

5. The following function calculates the median from an ordered array.

    Describe its time complexity in terms of Big O Notation:

    ```javascript
    function median(array) {
      const middle = Math.floor(array.length / 2);
      // If array has even amount of numbers:
      if (array.length % 2 === 0) {
        return (array[middle - 1] + array[middle]) / 2;
      } else { // If array has odd amount of numbers:
        return array[middle];
      }
    }
    ```

    `O(1)`
