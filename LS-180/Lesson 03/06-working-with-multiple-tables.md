1. Write a query that determines how many tickets have been sold.

    ```sql
    SELECT count(id)
      FROM tickets;
    ```

1. Write a query that determines how many different customers purchased tickets to at least one event.

    ```sql
    SELECT count(DISTINCT customer_id)
      FROM tickets;
    ```

1. Write a query that determines what percentage of the customers in the database have purchased a ticket to one or more of the events.

    ```sql
    SELECT ROUND(100.0 * count(DISTINCT t.customer_id)/ count(DISTINCT c.id), 2) AS percent
      FROM tickets AS t
      FULL OUTER JOIN customers AS c
        ON c.id = t.customer_id;
      
    ```

1. Write a query that returns the name of each event and how many tickets were sold for it, in order from most popular to least popular.

    ```sql
    SELECT e.name, count(t.id) AS popularity
      FROM events AS e
      LEFT OUTER JOIN tickets AS t
        ON e.id = t.event_id
    GROUP BY e.name
    ORDER BY popularity DESC;
    ```

1. Write a query that returns the user id, email address, and number of events for all customers that have purchased tickets to three events.

    ```sql
    SELECT c.id, c.email, count(DISTINCT t.event_id)
      FROM customers AS c
    INNER JOIN tickets AS t
        ON c.id = t.customer_id
    GROUP BY c.id
    HAVING  count(DISTINCT t.event_id) = 3
    ORDER BY c.id;
    ```

1. Write a query to print out a report of all tickets purchased by the customer with the email address 'gennaro.rath@mcdermott.co'. The report should include the event name and starts_at and the seat's section name, row, and seat number.

    ```sql
    SELECT e.name, e.starts_at, sec.name, s.row, s.number AS seat
      FROM events AS e
    INNER JOIN tickets AS t
        ON e.id = t.event_id
    INNER JOIN seats AS S
        ON t.seat_id = s.id
    INNER JOIN sections AS sec
        ON s.section_id = sec.id
    INNER JOIN customers AS c
        ON t.customer_id = c.id
    WHERE c.email = 'gennaro.rath@mcdermott.co';
    ```