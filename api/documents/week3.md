# Week 3 — Backend API (Events)

## 📌 Overview

In Week 3, we built a backend API using Express and PostgreSQL.
The goal was to create a public events API with pagination, search, and proper documentation.

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* PostgreSQL
* Knex.js
* Zod (validation)
* Swagger (OpenAPI)
* Postman (API testing)

---

## ⚙️ Features Implemented

### ✅ 1. Express Application Structure

* Organized project using MVC pattern:

  * `controllers/`
  * `models/`
  * `routers/`
  * `schemas/`
  * `configs/`

---

### ✅ 2. Database Connection

* Connected to PostgreSQL using Knex
* Created `event` table
* Queried data using model functions

---

### ✅ 3. Public API Endpoints

#### 🔹 Get all events

```
GET /api/events
```

#### 🔹 Get single event

```
GET /api/events/:id
```

---

### ✅ 4. Pagination

* Implemented using query parameters:

```
GET /api/events?page=1&pageSize=20
```

#### 📦 Response format:

```json
{
  "data": [],
  "meta": {
    "page": 1,
    "pageSize": 20,
    "totalItems": 245,
    "totalPages": 13
  }
}
```

---

### ✅ 5. Search Functionality

* Search using query parameter `q`

```
GET /api/events?q=music
```

* Filters events by title using PostgreSQL `ILIKE`

---

### ✅ 6. Validation

* Used Zod for:

  * Query parameters (`page`, `pageSize`)
  * Route parameters (`id`)

---

### ✅ 7. Error Handling

* Standard error response format implemented:

```json
{
  "error": {
    "message": "Error message",
    "details": "Optional details"
  }
}
```

---

### ✅ 8. Swagger Documentation

* Swagger UI available at:

```
http://localhost:3001/api-docs
```

* Documented endpoints:

  * GET /api/events
  * GET /api/events/{id}

---

### ✅ 9. API Testing (Postman)

Tested endpoints:

* GET `/api/events`
* GET `/api/events?page=1&pageSize=2`
* GET `/api/events?q=coffee`
* GET `/api/events/:id`

Exported Postman collection included in project.

---

## 🚀 How to Run the Project

```bash
npm install
npm run dev
```

Server runs on:

```
http://localhost:3001
```

---

## 🧪 Example Requests

```bash
curl http://localhost:3001/api/events
curl "http://localhost:3001/api/events?page=1&pageSize=2"
curl "http://localhost:3001/api/events?q=coffee"
``
---

## 📊 Outcome

* Public API is functional
* Pagination and search working
* Database connected
* Swagger documentation available
* Postman collection created


