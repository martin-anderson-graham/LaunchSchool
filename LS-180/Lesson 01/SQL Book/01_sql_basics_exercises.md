1. Write a query that returns all of the customer names from the orders table.
    - `SELECT customer_name FROM orders;`
1. Write a query that returns all of the orders that include a Chocolate Shake.
    - `SELECT * FROM orders WHERE drink='Chocolate Shake';`
1. Write a query that returns the burger, side, and drink for the order with an id of 2.
    - `SELECT burger, side, drink FROM orders WHERE id = 2;`
1. Write a query that returns the name of anyone who ordered Onion Rings.
    - `SELECT customer_name FROM orders WHERE side='Onion Rings';`