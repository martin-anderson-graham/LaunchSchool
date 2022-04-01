1. Write SQL statements that will insert the following films into the database:

    ```sql
    INSERT INTO films (title, year, genre, director, duration)
    VALUES ('Wayne''s World', 1992, 'comedy', 'Penelope Spheeris', 95),
          ('Bourne Identity', 2002, 'espionage', 'Doug Liman', 118);
    ```

1. Write a SQL query that lists all genres for which there is a movie in the films table.

    ```sql
    SELECT DISTINCT genre
      FROM films;
    ```

1. Write a SQL query that returns the same results as the answer for #3, but without using DISTINCT.

    ```sql
    SELECT genre
      FROM films
    GROUP BY genre;
    ```

1. Write a SQL query that determines the average duration across all the movies in the films table, rounded to the nearest minute.

    ```sql
    SELECT round(avg(duration), 0)
      FROM films;
    ```

1. Write a SQL query that determines the average duration for each genre in the films table, rounded to the nearest minute.

    ```sql
    SELECT genre, round(avg(duration)) AS avg_duration
      FROM films
    GROUP BY genre;
    ```

1. Write a SQL query that determines the average duration of movies for each decade represented in the films table, rounded to the nearest minute and listed in chronological order.

    ```sql
    SELECT CONCAT(SUBSTR(year::text, 0, 4), '0') AS decade, round(avg(duration), 0)
      FROM films
    GROUP BY decade
    ORDER BY decade;
    ```

1. Write a SQL query that finds all films whose director has the first name John.

    ```sql
    SELECT *
      FROM films
    WHERE director LIKE ('John %');
    ```

1. Write a SQL query that will return the following data:

    ```sql
    SELECT genre, count(genre)
      FROM films
    GROUP BY genre
    ORDER BY count DESC;
    ```

1. Write a SQL query that will return the following data:

    ```sql
    SELECT substr(year::text, 0, 4)||'0' as decade, genre, string_agg(title, ', ') AS "films"
      FROM films
    GROUP BY decade, genre
    ORDER BY decade;
    ```

1. Write a SQL query that will return the following data:

    ```sql
    SELECT genre, sum(duration) AS total_duration
      FROM films
    GROUP BY genre
    ORDER BY total_duration, genre;
    ```