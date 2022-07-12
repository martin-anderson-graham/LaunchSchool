The following exercises provide you with the opportunity to practice analyzing algorithms. The solutions to these exercises are found in the section, Chapter 5, on page 442.

1. Use Big O Notation to describe the time complexity of an algorithm that takes 4N + 16 steps.

    $O(N)$

2. Use Big O Notation to describe the time complexity of an algorithm that takes $2N^2$.

    $O(N^2)$

3. Use Big O Notation to describe the time complexity of the following function, which returns the sum of all numbers of an array after the numbers have been doubled:

    $O(N)$

    ```ruby
    def double_then_sum(array)
      doubled_array = []
      array.each do |number|
        doubled_array << number *= 2
      end

      sum = 0

      doubled_array.each do |number|
        sum += number
      end

      return sum
    end
    ```
4. Use Big O Notation to describe the time complexity of the following function, which accepts an array of strings and prints each string in multiple cases:

    $O(N)$

    ```ruby
    def multiple_cases(array)
      array.each do |string|
        puts string.upcase
        puts string.downcase
        puts string.capitalize
      end
    end
    ```

5. The next function iterates over an array of numbers, and for each number whose index is even, it prints the sum of that number plus every number in the array. What is this function’s efficiency in terms of Big O Notation?

    $O(N^2)$

    ```ruby
    def every_other(array)
      array.each_with_index do |number, index|
        if index.even?
          array.each do |other_number|
            puts number + other_number
          end
        end
      end
    end
    ```