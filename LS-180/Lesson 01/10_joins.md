1. Connect to the encyclopedia database. Write a query to return all of the country names along with their appropriate continent names.

    ```sql
    SELECT a.name AS "Country Name", b.continent_name AS "Continent Name"
      FROM countries AS a
        INNER JOIN continents AS b
          ON a.continent_id = b.id;
    ```

1. Write a query to return all of the names and capitals of the European countries.

    ```sql
    SELECT countries.name, countries.capital 
      FROM countries 
      WHERE countries.continent_id IN (
        SELECT continents.id FROM continents
          WHERE continent_name = 'Europe');

    // OR

    SELECT c.name, c.capital
      FROM countries AS c
      INNER JOIN continents AS n
        ON c.continent_id = n.id
      WHERE n.continent_name = 'Europe';

    ```

1. Write a query to return the first name of any singer who had an album released under the Warner Bros label.

    ```sql
    SELECT DISTINCT s.first_name, s.last_name
      FROM singers s
        INNER JOIN albums a
          ON s.id = a.singer_id
      WHERE a.label = 'Warner Bros';

    SELECT DISTINCT s.first_name, s.last_name
      FROM singers s
      WHERE s.id IN (
        SELECT a.singer_id 
          FROM albums a
          WHERE a.label LIKE '%Warner Bros%'
      );
    ```

1. Write a query to return the first name and last name of any singer who released an album in the 80s and who is still living, along with the names of the album that was released and the release date. Order the results by the singer's age (youngest first).

    ```sql
    SELECT s.first_name, s.last_name, a.album_name, a.date_released
      FROM singers s
        INNER JOIN albums a
          ON s.id = a.singer_id
      WHERE s.deceased = false
        AND date_part('year', a.date_released) >= '1980'
        AND date_part('year', a.date_released) <= '1989'
      ORDER BY s.date_of_birth DESC;

    ```

1. Write a query to return the first name and last name of any singer without an associated album entry.

    ```SQL
    SELECT s.first_name, s.last_name
      FROM singers s
      FULL JOIN albums a
        ON s.id = a.singer_id
      WHERE a.album_name IS NULL;

    SELECT s.first_name, s.last_name
      FROM singers s
      WHERE s.id NOT IN (
        SELECT singer_id FROM albums
      );
    ```
1. Connect to the ls_burger database. Return a list of all orders and their associated product items.

    ```sql
    SELECT o.id, p.product_name
      FROM orders o
        RIGHT JOIN order_items i
          ON o.id = i.order_id
        INNER JOIN products p
          ON i.product_id = p.id
      ORDER BY o.id;
    ```

1. Return the id of any order that includes Fries. Use table aliasing in your query.

    ```sql
    SELECT DISTINCT o.id AS "Order ID" 
      FROM orders o
      INNER JOIN order_items i
        ON i.order_id = o.id
      INNER JOIN products p
        ON p.id = i.product_id
      WHERE p.product_name = 'Fries';
    ```
1. Build on the query from the previous question to return the name of any customer who ordered fries. Return this in a column called 'Customers who like Fries'. Don't repeat the same customer name more than once in the results.

    ```sql
    SELECT DISTINCT c.customer_name AS "Customer Name" 
      FROM orders o
      INNER JOIN order_items i
        ON i.order_id = o.id
      INNER JOIN products p
        ON p.id = i.product_id
      INNER JOIN customers c
        ON c.id = o.customer_id
      WHERE p.product_name = 'Fries';
    ```

1. Write a query to return the total cost of Natasha O'Shea's orders.

    ```sql
    SELECT sum(p.product_cost) AS "Total Cost"
      FROM orders o
      JOIN order_items i
        ON i.order_id = o.id
      JOIN products p
        ON i.product_id = p.id
      JOIN customers c
        ON o.customer_id = c.id
      WHERE c.customer_name = 'Natasha O''Shea';
    ```
1. Write a query to return the name of every product included in an order alongside the number of times it has been ordered. Sort the results by product name, ascending.

    ```sql
    SELECT p.product_name, count(p.product_name)
      FROM orders o
        JOIN order_items i
          ON o.id = i.order_id
        JOIN products p
          ON p.id = i.product_id
      GROUP BY p.product_name
      ORDER BY p.product_name;
    ```