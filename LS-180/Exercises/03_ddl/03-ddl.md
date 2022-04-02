1. Setup the extrasolar database

    ```sql
    CREATE TABLE stars(
      id serial PRIMARY KEY,
      name varchar(25) UNIQUE NOT NULL,
      distance integer NOT NULL CHECK (distance > 0),
      spectral_type char(1),
      companions integer NOT NULL CHECK (companions > 0)
    );

    CREATE TABLE planets(
      id serial PRIMARY KEY,
      designation char(1),
      mass integer
    );
    ```

1. Add star_id to planets

    ```sql
    ALTER TABLE planets
      ADD COLUMN star_id integer NOT NULL REFERENCES stars(id);
    ```

1. Change the name type of stars

    ```sql
    ALTER TABLE stars
    ALTER COLUMN name
    TYPE varchar(50);
    ```

1. Change the type of star distance to allow for fractions

    ```sql
    ALTER TABLE stars
    ALTER COLUMN distance
    TYPE numeric;
    ```

1. Add a check to spectral_type

    ```sql
    ALTER TABLE stars
    ALTER COLUMN spectral_type SET NOT NULL;

    ALTER TABLE stars
      ADD CONSTRAINT acceptable_spectral_types
    CHECK (array_position(ARRAY['O'::char(1),'B'::char(1),'A'::char(1),'F'::char(1),'G'::char(1),'K'::char(1),'M'::char(1)], spectral_type) IS NOT NULL);
    ```

1. Do it again with an enumerated type

    ```sql
    CREATE TYPE spectral_types AS ENUM ('O', 'B', 'A', 'F', 'G', 'K','M');

    ALTER TABLE stars
    ALTER COLUMN spectral_type
    TYPE spectral_types USING spectral_type::spectral_types;
    ```

1. update the mass type

    ```sql
    ALTER TABLE planets
    ALTER COLUMN mass
    TYPE numeric,
    ALTER COLUMN mass SET NOT NULL,
      ADD CHECK (mass > 0);

    ALTER TABLE planets
    ALTER COLUMN designation SET NOT NULL;
    ```

1. Add a semi-major-axis column 

    ```sql
    ALTER TABLE planets
      ADD COLUMN semi_major_axis numeric NOT NULL;
    ```

1. Add a moons table

    ```sql
    CREATE TABLE moons(
      id serial PRIMARY KEY,
      planet_id integer REFERENCES planets(id),
      designation integer NOT NULL CHECK (designation > 0),
      semi_major_axis numeric CHECK (semi_major_axis > 0.0),
      mass numeric CHECK (mass > 0.0)
    );
    ```