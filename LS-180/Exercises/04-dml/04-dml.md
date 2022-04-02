1. setup tables

    ```sql
    CREATE TABLE devices(
      id serial PRIMARY KEY,
      name text NOT NULL,
      created_at timestamp DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE parts(
      id serial PRIMARY KEY,
      part_number integer UNIQUE NOT NULL,
      device_id integer REFERENCES devices(id)
    );

    ```

1. add some devices

    ```sql
    INSERT INTO devices (name)
    VALUES ('Accelerometer'),
          ('Gyroscope');

    INSERT INTO parts (part_number, device_id)
    VALUES (50, 1), (51, 1), (52, 1),
          (100, 2), (101, 2), (102, 2), (103, 2), (104, 2),
          (200, NULL), (201, NULL), (202, NULL);
    ```

1. WRite a JOIN to display devices and their parts

    ```sql
    SELECT d.name, p.part_number
    FROM devices AS d
    JOIN parts AS p
      ON d.id = p.device_id
    ORDER BY p.part_number;
    ```

1. We want to grab all parts that have a part_number that starts with 3. Write a SELECT query to get this information. This table may show all attributes of the parts table.

    ```sql
    SELECT * FROM parts
    WHERE substr(part_number::text, 1, 1) = '1';
    ```

1. Write an SQL query that returns a result table with the name of each device in our database together with the number of parts for that device.

    ```sql
    SELECT d.name, count(p.id) AS "Number of Parts"
      FROM devices AS d
      LEFT OUTER JOIN parts AS P
        ON d.id = p.device_id
    GROUP BY d.name;
    ```

1. order the previous result

    ```sql
    SELECT d.name, count(p.id) AS "Number of Parts"
      FROM devices AS d
      LEFT OUTER JOIN parts AS P
        ON d.id = p.device_id
    GROUP BY d.name
    ORDER BY d.name DESC;
    ```

1. IS NULL vs IS NOT NULL

    ```sql
    SELECT part_number, device_id
      FROM parts
    WHERE device_id IS NOT NULL;

    SELECT part_number, device_id
      FROM parts
    WHERE device_id IS NULL;
    ```
1. Get oldest device
    ```sql
    SELECT name 
      FROM devices
    ORDER BY created_at
    LIMIT 1;
    ```

1. update part numbers

    ```sql
    UPDATE parts
      SET device_id = 1
    WHERE id = 7 OR id = 8;

    UPDATE parts
      SET device_id = 1
    WHERE id =  (SELECT min(id) 
              FROM parts
            WHERE device_id = 2

    );
    ```

1. Delete the accelerometer

    ```sql
    DELETE FROM parts
    WHERE device_id = (SELECT id FROM devices WHERE name = 'Accelerometer');

    DELETE FROM devices
    WHERE name = 'Accelerometer';
    ```