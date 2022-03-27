1. Make sure you are connected to the encyclopedia database. Write a query to retrieve the population of the USA.
    ```sql
    SELECT population FROM countries WHERE name=`USA`;
    ```
1. Write a query to return the population and the capital (with the columns in that order) of all the countries in the table.
    ```sql
    SELECT population, capital FROM countries;
    ```
1. Write a query to return the names of all the countries ordered alphabetically.

    ```sql
    SELECT name FROM countries ORDER BY name;
    ```
1. Write a query to return the names and the capitals of all the countries in order of population, from lowest to highest.

    ```sql
    SELECT name, capital FROM countries ORDER BY population;
    ```
1. Write a query to return the same information as the previous query, but ordered from highest to lowest.

    ```sql
    SELECT name, capital FROM countries ORDER BY population DESC;
    ```

1. Write a query on the animals table, using ORDER BY, that will return the following output:

    ```sql
    SELECT name, binomial_name, max_weight_kg, max_age_years FROM animals ORDER BY max_age_years ASC, max_weight_kg ASC, name DESC;
    ```
1. Write a query that returns the names of all the countries with a population greater than 70 million.

    ```SQL
    SELECT name
      FROM countries
      WHERE population > 70000000;
    ```
1. Write a query that returns the names of all the countries with a population greater than 70 million but less than 200 million.

    ```sql
    SELECT name
      FROM countries
      WHERE population > 70000000 AND population < 200000000;
    ```
1. Write a query that will return the first name and last name of all entries in the celebrities table where the value of the deceased column is not true.

    ```sql
    SELECT first_name, last_name
      FROM celebrities
      WHERE deceased != true
      OR deceased IS NULL;
    ```
1. Write a query that will return the first and last names of all the celebrities who sing.

    ```sql
    SELECT first_name, last_name
      FROM celebrities
      WHERE occupation LIKE ('%sing%');
    ```
1. Write a query that will return the first and last names of all the celebrities who act.

    ```sql
    SELECT first_name, last_name
      FROM celebrities
      WHERE occupation LIKE ('%actor%')
      OR occupation LIKE ('%actress');
    ```
1. Write a query that will return the first and last names of all the celebrities who both sing and act.

    ```sql
    SELECT first_name, last_name
      FROM celebrities
      WHERE occupation LIKE ('%sing%')
      AND (occupation LIKE ('%actress') OR occupation LIKE ('%actor%'));
    ```

1. Connect to the ls_burger database. Write a query that lists all of the burgers that have been ordered, from cheapest to most expensive, where the cost of the burger is less than $5.00.

    ```sql
    SELECT burger FROM orders
      WHERE burger_cost < 5
      ORDER BY burger_cost;
    ```

1. Write a query to return the customer name and email address and loyalty points from any order worth 20 or more loyalty points. List the results from the highest number of points to the lowest.

    ```sql
    SELECT customer_name, customer_email, customer_loyalty_points FROM orders
      WHERE customer_loyalty_points >= 20
      ORDER BY customer_loyalty_points DESC;
    ```

1. Write a query that returns all the burgers ordered by Natasha O'Shea.

    ```sql
    SELECT burger FROM orders
      WHERE customer_name = 'Natasha O''Shea';
    ```

1. Write a query that returns the customer name from any order which does not include a drink item.

    ```sql
    SELECT customer_name FROM orders
      WHERE drink IS NULL;
    ```

1. Write a query that returns the three meal items for any order which does not include fries.

    ```sql
    SELECT burger, side, drink FROM orders 
      WHERE side != 'Fries'
      OR side IS NULL;
    ```
1. Write a query that returns the three meal items for any order that includes both a side and a drink.

    ```sql
    SELECT burger, side, drink FROM orders
      WHERE side IS NOT NULL
      AND drink IS NOT NULL;
    ```