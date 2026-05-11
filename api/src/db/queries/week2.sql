--1. Paginated item listing

SELECT *
FROM event
ORDER BY price ASC
LIMIT 5 OFFSET 0;

---2. Cart subtotal calculation

SELECT 
  cart_id,
  SUM(price * quantity) AS subtotal
FROM cart_item
WHERE cart_id = 1
GROUP BY cart_id;

---3. Order total snapshot
SELECT 
  order_id,
  SUM(price * quantity) AS total
FROM order_item
WHERE order_id = 1
GROUP BY order_id;

