1. Set the default value of column department to "unassigned". Then set the value of the department column to "unassigned" for any rows where it has a NULL value. Finally, add a NOT NULL constraint to the department column.

    ```sql
    ALTER TABLE employees
    ALTER COLUMN department
      SET DEFAULT 'unassigned';

    UPDATE employees
      SET department = 'unassigned'
    WHERE department IS NULL;

    ALTER TABLE employees
    ALTER COLUMN department
      SET NOT NULL;
    ```

1. Write the SQL statement to create a table called temperatures to hold the following data:

    ```sql
    CREATE TABLE temperatures(
        "date" date NOT NULL,
        low integer NOT NULL,
        high integer NOT NULL
    );
    ```

1. Write a SQL statement to determine the average (mean) temperature -- divide the sum of the high and low temperatures by two) for each day from March 2, 2016 through March 8, 2016. Make sure to round each average value to one decimal place.

    ```sql
    SELECT date, round((high + low) / 2, 1) AS average
      FROM temperatures
    WHERE date >= '2016-3-2'
      AND date <= '2016-3-8';

    SELECT date, round((high + low) / 2, 1) AS average
      FROM temperatures
    WHERE date BETWEEN '2016-3-2' AND '2016-03-08';
    ```

1. Write a SQL statement to add a new column, rainfall, to the temperatures table. It should store millimeters of rain as integers and have a default value of 0.

    ```sql
    ALTER TABLE temperatures
      ADD COLUMN rainfall integer NOT NULL DEFAULT 0;
    ```

1. Each day, it rains one millimeter for every degree the average temperature goes above 35. Write a SQL statement to update the data in the table temperatures to reflect this.

    ```sql
    UPDATE temperatures
      SET rainfall = (high + low) / 2 - 35
      WHERE (high + low) / 2 >= 35;
    ```

1. A decision has been made to store rainfall data in inches. Write the SQL statements required to modify the rainfall column to reflect these new requirements.

    ```sql
    ALTER TABLE temperatures
    ALTER COLUMN rainfall
    TYPE decimal(5, 3);

    UPDATE temperatures
      SET rainfall = rainfall / 25.4;

    ```

1. Write a SQL statement that renames the temperatures table to weather.

    ```sql
    ALTER TABLE temperatures
    RENAME TO weather;
    ```

1. What psql meta command shows the structure of a table? Use it to describe the structure of weather.

    `\d weather`

1. What PostgreSQL program can be used to create a SQL file that contains the SQL commands needed to recreate the current structure and data of the weather table?

    `pg_dump -d sql-course -t weather --inserts > dump.sql`