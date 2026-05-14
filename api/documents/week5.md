# Week 5 – Checkout, Orders & Deployment (Backend Specialisation)

## Overview

In Week 5, I extended the backend API to support a complete e-commerce style flow including checkout, order creation, and order retrieval. The system now supports both authenticated and guest cart behavior, along with transactional checkout logic.

## Features Implemented

### 1. Cart Enhancements
- GET /api/cart → fetch current cart (guest or authenticated user)
- POST /api/cart/items → add item to cart
- PUT /api/cart/items/:itemId → update cart item quantity
- DELETE /api/cart/items/:itemId → remove item from cart

Supports:
- Guest users (no authentication)
- Authenticated users (JWT-based)

---

### 2. Checkout System (Transaction Logic)
- POST /api/cart/checkout

Checkout flow:
- Converts active cart into an order
- Creates order in `customer_order`
- Creates order items in `order_item`
- Clears or resets cart after checkout

Ensures data consistency using database transactions.

---

### 3. Orders API
- GET /api/orders → fetch all orders for logged-in user
- GET /api/orders/:orderId → fetch specific order with items

Supports:
- JWT-based authentication
- User-specific order isolation

---

### 4. Authentication & Authorization
- POST /api/auth/signup
- POST /api/auth/login
- GET /api/auth/me

Implemented:
- JWT token generation
- Protected routes middleware
- Optional authentication for guest support

---

### 5. Guest + Authenticated Cart Support
- Cart is persisted in database for both users
- Guest users use null user_id
- Authenticated users are linked via user_id
- System supports seamless transition from guest → logged-in user

---

## Database Design

### Tables used:
- app_user
- cart
- cart_item
- customer_order
- order_item
- event

### Key rules:
- One active cart per user
- Cart items linked via cart_id
- Orders created from checkout transaction

---

## API Testing

All endpoints tested using Postman:

### Auth Flow
1. Signup
2. Login
3. Copy JWT token

### Cart Flow
1. Add items
2. View cart
3. Update items
4. Delete items

### Checkout Flow
1. Checkout cart
2. Verify order creation
3. Verify order items
4. Verify cart reset

### Orders Flow
1. Get all orders
2. Get order by ID

---

## Known Limitations / Pending Work

- Swagger documentation is not fully completed
- Some edge case validation can be improved
- Deployment not completed yet

---

## Outcome

- Fully functional backend API
- JWT authentication implemented
- Guest + authenticated cart support working
- Transactional checkout implemented
- Order history system implemented
- Postman testing completed for all major flows

---

## Status

✔ Week 5 core requirements completed  
⚠ Swagger documentation pending  
⚠ Deployment pending  