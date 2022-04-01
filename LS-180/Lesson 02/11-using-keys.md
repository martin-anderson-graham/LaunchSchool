1. Write a SQL statement that makes a new sequence called "counter".

    ```sql
    CREATE SEQUENCE counter;
    ```

1. Write a SQL statement to retrieve the next value from the sequence created in #1.

    ```sql
    SELECT nextval('counter');
    ```

1. Write a SQL statement that removes a sequence called "counter".

    ```sql
    DROP SEQUENCE counter;
    ```

1. Is it possible to create a sequence that returns only even numbers? The documentation for sequence might be useful.

    ```sql
    CREATE SEQUENCE even 
    INCREMENT BY 2
    START 2;
    ```

1. What will the name of the sequence created by the following SQL statement be?

    ```sql
    CREATE TABLE regions (id serial PRIMARY KEY, name text, area integer);
    ```
    regions_id_seq;

1. Write a SQL statement to add an auto-incrementing integer primary key column to the films table.

    ```sql
    ALTER TABLE films
    ADD COLUMN id serial PRIMARY KEY;
    ```

1. Write a SQL statement that modifies the table films to remove its primary key while preserving the id column and the values it contains.

    ```sql
    ALTER TABLE films
    DROP CONSTRAINT films_pkey;
    ```