1. Create a new database called residents using the PostgreSQL command line tools.

    ```
    createdb residents;
    ```

1. Write a SQL query to list the ten states with the most rows in the people table in descending order.

    ```sql
    SELECT state, count(state) AS "State Count"
      FROM people
    GROUP BY state
    ORDER BY count(state) DESC
    LIMIT 10;
    ```

1. Write a SQL query that lists each domain used in an email address in the people table and how many people in the database have an email address containing that domain. Domains should be listed with the most popular first.

    ```sql
    SELECT split_part(email, '@', 2) AS domain, count(id)
      FROM people
    GROUP BY domain
    ORDER BY count DESC
    LIMIT 10;
    ```

1. Write a SQL statement that will delete the person with ID 3399 from the people table.

    ```sql
    DELETE FROM people
    WHERE id = 3399;
    ```

1. Write a SQL statement that will delete all users that are located in the state of California (CA).

    ```sql
    DELETE FROM people
    WHERE state = 'CA';
    ```

1. Write a SQL statement that will update the given_name values to be all uppercase for all users with an email address that contains teleworm.us.

    ```sql
    UPDATE people
      SET given_name = upper(given_name)
    WHERE email LIKE '%teleworm.us';
    ```

1. Write a SQL statement that will delete all rows from the people table.

```sql
DELETE FROM people;
```