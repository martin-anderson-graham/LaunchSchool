1. Create a cross-reference table to make films to directors a MM relationship

    ```sql
    CREATE TABLE directors_films(
      id serial PRIMARY KEY,
      film_id integer UNIQUE NOT NULL REFERENCES films(id),
      director_id integer UNIQUE NOT NULL REFERENCES directors(id)
    );
    ```

1. Write the SQL statements needed to insert data into the new join table to represent the existing one-to-many relationships.

```sql

```