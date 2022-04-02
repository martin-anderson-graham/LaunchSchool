1. Write a SQL statement to add the following call data to the database:

    ```sql
    INSERT INTO calls ("when", duration, contact_id)
    VALUES ('2016-01-18 14:47:00', 632, 6);
    ```

1. Write a SQL statement to retrieve the call times, duration, and first name for all calls not made to William Swift.

    ```sql
    SELECT cl."when" AS time, duration, c.first_name
      FROM calls AS cl
      JOIN contacts AS c
        ON cl.contact_id = c.id
    WHERE c.first_name != 'William' AND c.last_name != 'Swift';
    ```

1. Write SQL statements to add the following call data to the database:

    ```sql
    INSERT INTO contacts (first_name, last_name, number)
    VALUES ('Merve', 'Elk', 6343511126),
          ('Sawa', 'Fyodorov', 6125594874);

    INSERT INTO calls ("when", duration, contact_id)
    VALUES ('2016-01-17 11:52:00', 175, 26),
          ('2016-01-18 21:22:00', 79, 27);
    ```

1. Add a constraint to contacts that prevents a duplicate value being added in the column number.

    ```sql
    ALTER TABLE contacts
      ADD CONSTRAINT no_duplicate_numbers UNIQUE (number);
    ```

1. Write a SQL statement that attempts to insert a duplicate number for a new contact but fails. What error is shown?

    ```sql
    INSERT INTO contacts (first_name, last_name, number)
    VALUES ('c', 'bd', 7204808090);
    ```

1. Why does "when" need to be quoted in many of the queries in this lesson?

    It is an sql keyword (reserved for use by the language)

1. Draw an entity-relationship diagram for the data we've been working with in this assignment.

    ```mermaid
    erDiagram
      contacts ||--o{ calls
    ```

