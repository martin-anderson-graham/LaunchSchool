1. add not null and on delete cascase to books_categories

    ```sql
    ALTER TABLE books_categories
    DROP CONSTRAINT books_categories_book_id_fkey,
    DROP CONSTRAINT books_categories_category_id_fkey;
      
    ALTER TABLE books_categories
      ADD CONSTRAINT "books_categories_book_id_fkey"
          FOREIGN KEY (book_id) REFERENCES books(id)
          ON DELETE CASCADE,
      ADD CONSTRAINT "books_categories_category_id_fkey"
          FOREIGN KEY (category_id) REFERENCES categories(id)
          ON DELETE CASCADE;
    ```

1. Write a SQL statement that will return the following result:

    ```sql
    SELECT b.id, b.author, string_agg(c.name, ', ') AS "categories"
      FROM books AS b
      LEFT OUTER JOIN books_categories AS bc
        ON b.id = bc.book_id
    INNER JOIN categories AS c
        ON bc.category_id = c.id
    GROUP BY b.id
    ORDER BY b.id;
    ```

1. Write SQL statements to insert the following new books into the database. What do you need to do to ensure this data fits in the database?

    make sure the categories exist, and the size of the fields

    ```sql
    INSERT INTO categories (name)
    VALUES ('Space Exploration'),
          ('Cookbook'),
          ('South Asia');

    ALTER TABLE books
    ALTER COLUMN title
    TYPE text;

    INSERT INTO books (author, title)
    VALUES ('Lynn Sherr', 'Sally: America''s First Woman in Space'),
          ('Charlotte Bronte', 'Jane Eyre'),
          ('Meeru Dhawala and Vikram Vij', 'Vij''s: Elegant and Inspired Indian Cuisine');

    INSERT INTO books_categories (book_id, category_id)
    VALUES (4, 1), (4, 5), (4, 7),
          (5, 2), (5, 4),
          (6, 8), (6, 9), (6, 1);
    ```

1. Write a SQL statement to add a uniqueness constraint on the combination of columns book_id and category_id of the books_categories table. This constraint should be a table constraint; so, it should check for uniqueness on the combination of book_id and category_id across all rows of the books_categories table.

    ```sql
    ALTER TABLE books_categories
      ADD CONSTRAINT book_and_category_are_unique 
          UNIQUE (book_id, category_id);
    ```

1. Write a SQL statement that will return the following result:

```sql
SELECT c.name, count(b.title) as "Book Count", string_agg(b.title, ', ') AS "Book titles"
  FROM categories AS c
  LEFT OUTER JOIN books_categories as bc
    ON bc.category_id = c.id
  LEFT OUTER JOIN books as b
    ON bc.book_id = b.id
 GROUP BY c.name
 ORDER BY c.name;
```