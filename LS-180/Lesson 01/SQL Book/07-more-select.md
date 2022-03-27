1. Make sure you are connected to the encyclopedia database. Write a query to retrieve the first row of data from the countries table.

    ```sql
    SELECT * FROM countries LIMIT 1;
    ```
1. Write a query to retrieve the name of the country with the largest population.

    ```sql
    SELECT name FROM countries
      ORDER BY population DESC
      LIMIT 1;
    ```

1. Write a query to retrieve the name of the country with the second largest population.

    ```sql
    SELECT name FROM countries
      ORDER BY population DESC
      LIMIT 1
      OFFSET 1;
    ```

1. Write a query to retrieve all of the unique values from the binomial_name column of the animals table.

    ```sql
    SELECT DISTINCT binomial_name FROM animals;
    ```

1. Write a query to return the longest binomial name from the animals table.

    ```sql
    SELECT binomial_name FROM animals
      ORDER BY length(binomial_name) DESC
      LIMIT 1;
    ```

1. Write a query to return the first name of any celebrity born in 1958.

    ```sql
    SELECT first_name FROM celebrities
      WHERE date_part('year', date_of_birth) = '1958';
    ```
  
1. Write a query to return the highest maximum age from the animals table.

    ```sql
    SELECT max(max_age_years) FROM animals;
    ```

1. Write a query to return the average maximum weight from the animals table.

    ```sql
    SELECT avg(max_weight_kg) FROM animals;
    ```

1. Write a query to return the number of rows in the countries table.

    ```sql
    SELECT count(name) FROM countries;
    ```
  
1. Write a query to return the total population of all the countries in the countries table.
    ```sql
    SELECT sum(population) FROM countries;
    ```
1. Write a query to return each unique conservation status code alongside the number of animals that have that code.

    ```sql
    SELECT conservation_status, name
      FROM animals
      GROUP BY conservation_status;
    ```

1. Connect to the ls_burger database. Write a query that returns the average burger cost for all orders that include fries.

    ```sql
    SELECT avg(burger_cost) FROM orders
      WHERE side = 'Fries';
    ```

1. Write a query that returns the cost of the cheapest side ordered.

    ```sql
    SELECT side_cost FROM orders
      WHERE side_cost > 0
      ORDER BY side_cost ASC
      LIMIT 1;
    ```

    ```sql
    SELECT min(side_cost) FROM orders
      WHERE side IS NOT NULL;
    ```

1. Write a query that returns the number of orders that include Fries and the number of orders that include Onion Rings.

    ```sql
    SELECT side, count(side) FROM orders
      WHERE side = 'Fries'
        OR side = 'Onion Rings'
      GROUP BY side;
    ```