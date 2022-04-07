1. Database setup

    ```sql
    CREATE TABLE bidders(
      id serial PRIMARY KEY,
      name text NOT NULL
    );

    CREATE TABLE items(
      id serial PRIMARY KEY,
      name text NOT NULL,
      initial_price numeric(6, 2) NOT NULL CHECK (initial_price BETWEEN 0.01 AND 1000.01),
      sales_price numeric(6, 2) CHECK (initial_price BETWEEN 0.01 AND 1000.01)
    );

    CREATE TABLE bids(
      id serial PRIMARY KEY,
      bidder_id integer REFERENCES bidders(id)
        ON DELETE CASCADE NOT NULL,
      item_id integer REFERENCES items(id)
        ON DELETE CASCADE NOT NULL,
      amount numeric(6, 2) NOT NULL CHECK (amount BETWEEN 0.01 AND 1000.01)
    );

    CREATE INDEX ON bids (bidder_id, item_id);
    ```

1. Write a SQL query that shows all items that have had bids put on them. Use the logical operator IN for this exercise, as well as a subquery.

    ```sql
    SELECT items.name AS "Bid On Items"
      FROM items
    WHERE id IN (SELECT DISTINCT item_id FROM bids);
    ```

1. Write a SQL query that shows all items that have not had bids put on them. Use the logical operator NOT IN for this exercise, as well as a subquery.

    ```sql
    SELECT items.name AS "Not Bid On"
      FROM items
    WHERE id NOT IN (SELECT DISTINCT item_id FROM bids);
    ```

1. Conditional Subqueries: EXISTS

    ```sql
    SELECT name 
      FROM bidders
    WHERE EXISTS (SELECT bidder_id FROM bids WHERE bidders.id = bids.bidder_id);

    SELECT DISTINCT b.name
      FROM bidders as b
    INNER JOIN bids as bd
        ON b.id = bd.bidder_id;
    ```

1. For this exercise, we'll make a slight departure from how we've been using subqueries. We have so far used subqueries to filter our results using a WHERE clause. In this exercise, we will build that filtering into the table that we will query. Write an SQL query that finds the largest number of bids from an individual bidder.

    For this exercise, you must use a subquery to generate a result table (or virtual table), and then query that table for the largest number of bids.

    ```sql
    SELECT MAX(num_bids.count)
      FROM (SELECT count(bidder_id)
              FROM bids
            GROUP BY bidder_id) AS num_bids;
    ```

1. Scalar Subqueries

    ```sql
    SELECT name, (SELECT count(item_id) FROM bids WHERE item_id = items.id)
      FROM items;

    SELECT i.name, count(b.item_id)
      FROM items AS i
      LEFT OUTER JOIN bids AS b
        ON i.id = b.item_id
    GROUP BY i.name;
    ```

1. We want to check that a given item is in our database. There is one problem though: we have all of the data for the item, but we don't know the id number. Write an SQL query that will display the id for the item that matches all of the data that we know, but does not use the AND keyword. Here is the data we know:

    'Painting', 100.00, 250.00

```sql
SELECT id
  FROM items
 WHERE ROW('Painting', 100.0, 250.0) IS NOT DISTINCT FROM ROW(name, initial_price, sales_price);
```