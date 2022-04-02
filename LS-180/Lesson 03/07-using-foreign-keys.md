1. Update the orders table so that referential integrity will be preserved for the data between orders and products.

    ```sql
    ALTER TABLE orders
      ADD CONSTRAINT orders_product_id_fkey
    FOREIGN KEY (product_id)
            REFERENCES products(id);
    ```

1. Use psql to insert the data shown in the following table into the database:

    ```sql
    INSERT INTO products (name)
    VALUES ('small bolt'),
          ('large bolt');

    INSERT INTO orders (product_id, quantity)
    VALUES (1, 10),
          (1, 25),
          (2, 15);
    ```

1. Write a SQL statement that returns a result like this:

    ```sql
    SELECT o.quantity, p.name
      FROM orders AS O
      JOIN products AS P
        ON o.product_id = p.id;
    ```

1. Can you insert a row into orders without a product_id? Write a SQL statement to prove your answer.

    Yes
    ```sql
    INSERT INTO orders (quantity) VALUES (3);
    ```

1. Write a SQL statement that will prevent NULL values from being stored in orders.product_id. What happens if you execute that statement?

    error because there is already a null value
    ```sql
    ALTER TABLE orders
    ALTER COLUMN product_id SET NOT NULL;
    ```

1. Make any changes needed to avoid the error message encountered in #6.

    ```sql
    UPDATE orders
      SET product_id = 2
    WHERE id = 4;
    ```

1. Create a new table called reviews to store the data shown below. This table should include a primary key and a reference to the products table.

    ```sql
    CREATE TABLE reviews(
          id serial PRIMARY KEY,
          body text NOT NULL,
          product_id integer,
          FOREIGN KEY (product_id)
            REFERENCES products(id)
    );
    ```

1. Write SQL statements to insert the data shown in the table in #8.

    ```sql
    INSERT INTO reviews (product_id, body)
    VALUES (1, 'a little small'),
          (1, 'very round!'),
          (2, 'could have been smaller');

    ```

1. True or false: A foreign key constraint prevents NULL values from being stored in a column.

   false