The following exercises provide you with the opportunity to practice with speeding up your code. The solutions to these exercises are found in the section, Chapter 4, on page 441.
1. Replace the question marks in the following table to describe how many steps occur for a given number of data elements across various types of Big O:

    N Elements | O(N) | O(log N) | O(N^2)
    -|-|-|-
    100 |100| 6.5 | 10,000
    2000 |2000 |11 |4,000,000

2. If we have an O(N^2) algorithm that processes an array and find that it takes 256 steps, what is the size of the array?

    `16`

3. Use Big O Notation to describe the time complexity of the following function. It finds the greatest product of any pair of two numbers within a given array:

    $O(N^2)$

    ```python 
    def greatestProduct(array):
      greatestProductSoFar = array[0] * array[1]
      for i, iVal in enumerate(array):
        for j, jVal in enumerate(array):
          if i != j and iVal * jVal > greatestProductSoFar:
            greatestProductSoFar = iVal * jVal
      return greatestProductSoFar
    ```

4. The following function finds the greatest single number within an array, but has an efficiency of $O(N^2)$. Rewrite the function so that it becomes a speedy $O(N)$:

    ```go
    func greatestNumber(vals []int) int {
      max := Math.MinInt
      for _, v := range vals {
        if v > max {
          max = v
        }
      }
      return max
    }
    ```

    ```python
    def greatestNumber(array):
      for i in array:
        # Assume for now that i is the greatest:
        isIValTheGreatest = True
        for j in array:
          # If we find another value that is greater than i,
          # i is not the greatest:
          if j > i:
            isIValTheGreatest = False
      # If, by the time we checked all the other numbers, i
      # is still the greatest, it means that i is the greatest number:
      if isIValTheGreatest:
        return i
      ```
