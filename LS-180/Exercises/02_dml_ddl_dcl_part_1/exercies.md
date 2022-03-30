1. SQL consists of 3 different sublanguages. For example, one of these sublanguages is called the Data Control Language (DCL) component of SQL. It is used to control access to a database; it is responsible for defining the rights and roles granted to individual users. Common SQL DCL statements include:

    ```sql
    GRANT
    REVOKE
    ```
    Name and define the remaining 2 sublanguages, and give at least 2 examples of each.

    DDL - data definition language - used for controlling the schema (`ALTER`, `CREATE`, `RENAME`)

    DML - data manipulation language - used for storing and retrieving data (`SELECT`, `INSERT`, `DELETE`, `UPDATE`)

1. Does the following statement use the Data Definition Language (DDL) or the Data Manipulation Language (DML) component of SQL?

    ```sql
    SELECT column_name FROM my_table;
    ```

    DML due to the use of `SELECT` to retrieve data.

1. Does the following statement use the DDL or DML component of SQL?

    ```sql
    CREATE TABLE things (
      id serial PRIMARY KEY,
      item text NOT NULL UNIQUE,
      material text NOT NULL
    );
    ```

    DDL - we are defining the schema in the table

1. Does the following statement use the DDL or DML component of SQL?

    ```sql
    ALTER TABLE things
    DROP CONSTRAINT things_item_key;
    ```

    DDL - we are altering the schema of a database

1. Does the following statement use the DDL or DML component of SQL?

    ```sql
    INSERT INTO things VALUES (3, 'Scissors', 'Metal');
    ```

    DML - we are inserting data into a table

1. Does the following statement use the DDL or DML component of SQL?

    ```sql
    UPDATE things
    SET material = 'plastic'
    WHERE item = 'Cup';
    ```

    DML - we are updating a data value in a table

1. Does the following statement use the DDL, DML, or DCL component of SQL?

    `\d things`

    This will allow us to view the schema of the table `things`, so DDL?
    Nope, trick question, not SQL

1. Does the following statement use the DDL or DML component of SQL?

    ```sql
    DELETE FROM things WHERE item = 'Cup';
    ```

    DML - deleting records is manipulation data

1. Does the following statement use the DDL or DML component of SQL?

    ```sql
    DROP DATABASE xyzzy;
    ```

    DDL - dropping a table is modifying the structure of the database    

1. Does the following statement use the DDL or DML component of SQL?

    ```sql
    CREATE SEQUENCE part_number_sequence;
    ```

    DDL - sequences are a type of data, not the data itself