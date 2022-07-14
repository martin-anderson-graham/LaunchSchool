The following exercises provide you with the opportunity to practice with optimizing for best- and worst-case scenarios. The solutions to these exercises are found in the section, Chapter 6, on page 442.
1. Use Big O Notation to describe the efficiency of an algorithm that takes $3N^2 + 2N + 1$ steps.

    $O(N^2)$

2. Use Big O Notation to describe the efficiency of an algorithm that takes $N + log N$ steps.

    $O(N)$

3. The following function checks whether an array of numbers contains a pair of two numbers that add up to 10.
    ```javascript
    function twoSum(array) {
      for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
          if (i !== j && array[i] + array[j] === 10) {
            return true;
          }
        }
      }
      return false;
    }
    ```

    What are the best-, average-, and worst-case scenarios? Then, express the worst-case scenario in terms of Big O Notation.

    - worst - $O(N^2)$
    - average - $O(N^2)$
    - best - $O(N)$
    
    
4. The following function returns whether or not a capital “X” is present within a string.
    ```javascript
    function containsX(string) {
      foundX = false;
      for (let i = 0; i < string.length; i++) {
        if (string[i] === "X") {
          foundX = true;
        }
      }
      return foundX;
    }
    ```

    What is this function’s time complexity in terms of Big O Notation?

      - $O(N)$

    Then, modify the code to improve the algorithm’s efficiency for best- and average-case scenarios.

    ```javascript
    function containsX(string) {
      for (let i = 0; i < string.length; i++) {
        if (string[i] === "X") {
          return true;
        }
      }
      return false;
    }
    ```