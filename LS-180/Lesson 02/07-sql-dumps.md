1. Load this file into your database.

    1. What does the file do?
      Executes several SQL commands
    1. What is the output of the command? What does each line in this output mean?
      drops a table
      creates a table
      adds three rows of data
    1. Open up the file and look at its contents. What does the first line do?
      Checks to see if the `films` table exists, if so, drops it.

1. Write a SQL statement that returns all rows in the films table.

    ```sql
    SELECT * FROM films;
    ```

1. Write a SQL statement that returns all rows in the films table with a title shorter than 12 letters.

    ```sql
    SELECT *
      FROM films
    WHERE length(title) < 12;
    ```

1. Write the SQL statements needed to add two additional columns to the films table: director, which will hold a director's full name, and duration, which will hold the length of the film in minutes.

    ```sql
    ALTER TABLE films
      ADD COLUMN director text,
      ADD COLUMN duration integer;
    ```

1. Write SQL statements to update the existing rows in the database with values for the new columns:

    ```sql
    UPDATE films
      SET director = 'John McTiernan', duration = 132
    WHERE title = 'Die Hard';

    UPDATE films
      SET director = 'Michael Curtiz', duration = 102
    WHERE title = 'Casablanca';

    UPDATE films
      SET director = 'Francis Ford Coppola', duration = 113
    WHERE title = 'The Conversation';
    ```

1. Write SQL statements to insert the following data into the films table:

    ```sql
    INSERT INTO films (title, "year", genre, director, duration)
    VALUES ('1984', 1956, 'scifi', 'Michael Anderson', 90),
          ('Tinker Tailor Soldier Spy', 2011, 'espionage', 'Tomas Alfresdson', 127),
          ('The Birdcage', 1996, 'comedy', 'Mike Nichols', 118); 
    ```

1. Write a SQL statement that will return the title and age in years of each movie, with newest movies listed first:

    ```sql
    SELECT title, (2022 - "year") AS age
      FROM films
    ORDER BY age ASC;

    SELECT title, extract("year" from current_date) - "year" AS age
      FROM films
    ORDER BY age ASC;
    ```

1. Write a SQL statement that will return the title and duration of each movie longer than two hours, with the longest movies first.

    ```sql
    SELECT title, duration
      FROM films
    WHERE duration > 120
    ORDER BY duration DESC;
    ```

1. Write a SQL statement that returns the title of the longest film.

    ```sql
    SELECT title
      FROM films
    ORDER BY duration DESC
    LIMIT 1;
    ```