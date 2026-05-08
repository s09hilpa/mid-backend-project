Week 4 - Backend Project Summary
📌 Project Overview

This week focused on implementing authentication and protected cart functionality using Node.js, Express, JWT, Knex, and PostgreSQL.

✅ What Has Been Implemented
🔐 Authentication System
User Signup API (POST /api/auth/signup)
User Login API (POST /api/auth/login)
Get Current User API (GET /api/auth/me)
Password hashing using bcrypt
JWT token generation and verification
Authentication middleware implemented (auth.middleware.js)
🛡️ Protected Routes
/api/auth/me is protected using JWT middleware
Cart routes are protected (require valid JWT token)
🛒 Cart System
Get Cart (GET /api/cart)
Add Item to Cart (POST /api/cart/items)
Update Cart Item (PUT /api/cart/items/:itemId)
Cart supports authenticated users
Automatic cart creation if none exists
🗄️ Database (Knex + PostgreSQL)
app_user table with authentication fields
cart table with user association (nullable for guest support)
cart_item table linked with cart and events
Migrations created and executed successfully
Seed data added for testing
📦 Validation
Zod schemas used for:
Signup validation
Login validation
Event query validation (existing feature reused)
Input validation applied before DB operations
📮 Postman Testing
Postman collection created for API testing
Tested full flow:
Signup user
Login and get JWT token
Access /me using Bearer token
Access cart endpoints
Add and update cart items
⚠️ Known Issues / Fixes Made
Fixed JWT middleware token parsing (Bearer token handling)
Fixed cart controller duplicate function issue
Resolved database constraints (unique ID conflicts during seed/testing)
Fixed Zod validation errors for missing request body fields
📌 Week 4 Outcome Status
Requirement	Status
JWT Authentication	✅ Done
Protected Routes	✅ Done
Cart CRUD	⚠️ Working (needs final polish)
Validation	✅ Done
Swagger Update	⚠️ Partial
Postman Collection	✅ Done
🚀 Final Notes

This project successfully implements a secure backend system with authentication and cart management. Remaining improvements include cleanup of controllers and final API documentation polish.

