1. Modify all of the columns to be NOT NULL.

    ```sql
    ALTER TABLE films
    ALTER COLUMN title SET NOT NULL,
    ALTER COLUMN year SET NOT NULL,
    ALTER COLUMN genre SET NOT NULL,
    ALTER COLUMN director SET NOT NULL,
    ALTER COLUMN duration SET NOT NULL;
    ```

1. How does modifying a column to be NOT NULL affect how it is displayed by \d films?

    The `Nullable` column says `not null`

1. Add a constraint to the table films that ensures that all films have a unique title.

    ```sql
    ALTER TABLE films
      ADD CONSTRAINT unique_titles UNIQUE (title);
    ```

1. How is the constraint added in #4 displayed by \d films?

    Under the table in `Indexes:`

1. Write a SQL statement to remove the constraint added in #4.

    ```sql
    ALTER TABLE films
    DROP CONSTRAINT unique_titles;
    ```

1. Add a constraint to films that requires all rows to have a value for title that is at least 1 character long.

    ```sql
    ALTER TABLE films
      ADD CHECK (length(title) > 0);

    ALTER TABLE films
      ADD CONSTRAINT title_length CHECK (length(title) > 0);
    ```

1. What error is shown if the constraint created in #7 is violated? Write a SQL INSERT statement that demonstrates this.

    new row violates check constraint "check_name"
    ```sql
    INSERT INTO films (title, year, genre, director, duration)
    VALUES ('', 1900, 'action', 'me', 120);
    ```

1. How is the constraint added in #7 displayed by \d films?

    Underneath in the `Check constrains:` list

1. Write a SQL statement to remove the constraint added in #7.

    ```sql
    ALTER TABLE films
    DROP CONSTRAINT films_title_check;
    ```

1. Add a constraint to the table films that ensures that all films have a year between 1900 and 2100.

    ```sql
    ALTER TABLE films
      ADD CONSTRAINT year_check CHECK (year BETWEEN 1900 and 2100);
    ```

1. How is the constraint added in #11 displayed by \d films?

    (year >= 1900 AND year <= 2100)

1. Add a constraint to films that requires all rows to have a value for director that is at least 3 characters long and contains at least one space character ().

    ```sql
    ALTER TABLE films
      ADD CONSTRAINT director_check CHECK (length(director) >= 3 AND director LIKE '% %');
    ```

1. Write an UPDATE statement that attempts to change the director for "Die Hard" to "Johnny". Show the error that occurs when this statement is executed.

    ```sql
    UPDATE films
      SET director = 'Johnny'
    WHERE title = 'Die Hard';
    ```

1. List three ways to use the schema to restrict what values can be stored in a column.

    1. Set `NOT NULL`
    1. Set the type of the column
    1. Add a check to the column that validates input

1. Is it possible to define a default value for a column that will be considered invalid by a constraint? Create a table that tests this.

    No, the check will fail when you try to use the default value
    ```sql
    ALTER TABLE films
      ADD CONSTRAINT genre_check CHECK (genre != 'romance');

    ALTER TABLE films
    ALTER COLUMN genre SET DEFAULT 'romance';

    INSERT INTO films (title, year, director, duration)
    VALUES ('hi you', 2000, 'my guy', 140);
    ```

1. 