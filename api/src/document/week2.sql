CREATE TABLE customer_order (
    id INTEGER PRIMARY KEY AUTOINCREMENT,

    user_id INTEGER NOT NULL,
    total_amount DECIMAL(10, 2) NOT NULL,
    currency TEXT NOT NULL,
    status TEXT DEFAULT 'pending',

    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id)
        REFERENCES userprofile(id)
        ON DELETE CASCADE
);

CREATE TABLE cart_item (
    id INTEGER PRIMARY KEY AUTOINCREMENT,

    user_id INTEGER NOT NULL,
    event_id INTEGER NOT NULL,
    quantity INTEGER NOT NULL DEFAULT 1,

    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id)
        REFERENCES userprofile(id)
        ON DELETE CASCADE,

    FOREIGN KEY (event_id)
        REFERENCES event(id)
        ON DELETE CASCADE
);

CREATE TABLE order_item (
    id INTEGER PRIMARY KEY AUTOINCREMENT,

    customer_order_id INTEGER NOT NULL,
    event_id INTEGER NOT NULL,

    title TEXT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    currency TEXT NOT NULL,
    quantity INTEGER NOT NULL,

    ordered_at DATETIME DEFAULT DATETIME('now'),

    FOREIGN KEY (customer_order_id)
        REFERENCES customer_order(id)
        ON DELETE CASCADE,

    FOREIGN KEY (event_id)
        REFERENCES event(id)
);
----list events (price ascending, paginated)
SELECT * FROM event
ORDER BY created_at DESC
LIMIT 10 OFFSET 0;

SELECT *
FROM cart_item ci
JOIN event e ON ci.event_id = e.id
WHERE ci.user_id = 1;

SELECT * 
FROM cart_item 
WHERE user_id = 1;
GROUP BY e.currency;

SELECT * FROM event;
INSERT INTO cart_item (user_id, event_id, quantity)
VALUES (1, 1, 2);

---Cart Subtotal Calculation

SELECT 
SUM(e.price * ci.quantity) AS subtotal,
    e.currency
FROM cart_item ci
JOIN event e ON ci.event_id = e.id
WHERE ci.user_id = 1;


Order totals 
SELECT 
    COALESCE(SUM(quantity * price), 0) AS total
FROM order_item
WHERE customer_order_id = 1;


