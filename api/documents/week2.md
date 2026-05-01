📘 Week 2 Sprint Report – Database Structure (ERD v2)
🎯 Week 2 Goal

Finalize database structure to support full cart → checkout → order flow in the backend system.

🧱 1. Final Database Structure (ERD v2 Summary)

The system consists of 6 core tables:

app_user
event
cart
cart_item
customer_order
order_item
🔗 Relationships
A user can have multiple carts (but only one active at a time)
A user can place multiple orders
A cart contains multiple cart items
Each cart item belongs to an event
Each order contains multiple order items
Each order item is linked to an event snapshot
🧩 ERD v2 (Logical Structure)
app_user
   │
   ├── cart (1:N)
   │       └── cart_item (1:N) ─── event (N:1)
   │
   └── customer_order (1:N)
           └── order_item (1:N) ─── event (N:1)
🏗️ 2. Implemented Database Schema
👤 app_user
id (PK)
name
email (unique)
mobile
password (hashed)
🎫 event
id (PK)
title
description
price
currency
event_date
event_time
venue
🛒 cart
id (PK)
user_id (nullable → supports guest cart)
is_active (boolean)
🧾 cart_item
id (PK)
cart_id (FK → cart)
event_id (FK → event)
quantity
price (snapshot price at time of adding)
🧾 customer_order
id (PK)
user_id (FK → app_user)
total_price (final snapshot)
currency
📦 order_item
id (PK)
order_id (FK → customer_order)
event_id (FK → event)
quantity
price (snapshot price at purchase time)
🔐 3. Business Rules Implemented
✔ Guest + Authenticated Cart Support
cart.user_id = NULL → guest cart
user can later attach cart after login
✔ One Active Cart per User

Enforced via design rule:

Only one cart per user with:

is_active = true

Recommended constraint:

UNIQUE(user_id, is_active)
✔ Order Snapshot Logic
Orders store final immutable values
order_item.price is copied from event/cart at checkout time
ensures historical pricing accuracy
📄 4. SQL Features Implemented
📌 Pagination (Events Listing)

📌 Cart Subtotal Calculation

📌 Order Total Snapshot

GROUP BY order_id;
🌱 5. Seed Data Implementation

Seed files created for:

app_user (with bcrypt password hashing)
event (8 sample events)
cart (guest + user cart structure)
cart_item (sample items with price snapshot)
customer_order (order creation seed)
order_item (order snapshot data)
⚙️ 6. Technical Decisions
✔ Cart Design
Supports guest + authenticated users
Flexible user_id nullable
✔ Order Design
Fully independent from cart
Stores immutable snapshot of purchase
✔ Key Strategy
Used simple primary keys (id)
Avoided composite keys for simplicity and API clarity
📌 7. Issues Resolved During Week 2
Fixed migration inconsistencies (duplicate .js.js files)
Fixed FK seed order issues
Fixed bcrypt undefined errors
Resolved missing columns in seeds
Fixed PostgreSQL connection and database setup issues
🚀 8. Week 2 Outcome

✔ Complete relational database structure implemented
✔ Full cart → checkout → order flow supported
✔ ERD v2 finalized
✔ Seed data functional
✔ SQL queries validated

📌 Final Status

✅ Database design complete