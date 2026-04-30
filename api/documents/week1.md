# 🎯 Week 1 Sprint Report – Core Data Modeling

## 📌 Overview

This document summarizes the completion of Week 1 of the Events Startup backend project.  
The focus of this sprint was to design and implement a solid PostgreSQL-based data layer, replacing the initial default template setup and establishing the foundation for future API development.

The system now supports a fully working relational database with seeded event data and a structured schema aligned with the Product Requirements Document (PRD).

## ✅ What Was Accomplished

### 🗄️ 1. Database Design & Planning

- Reviewed Product Requirements Document (PRD)
- Identified core entities:
  - `app_user`
  - `event`
- Designed initial Entity Relationship Diagram (ERD v1)


### ⚙️ 2. PostgreSQL Database Implementation

#### 📁 Schema Design
Created and implemented PostgreSQL schema using SQL:

- `app_user` table:
  - Primary key
  - Unique email constraint
  - Password field
  - Timestamp tracking

- `event` table:
  - Primary key
  - Title, description
  - Price and currency
  - Event date, time, venue
  - Timestamp tracking

✔ Proper constraints applied:
- PRIMARY KEY
- NOT NULL
- UNIQUE where required

---

#### 🌱 Seed Data

- Inserted 1 test user into `app_user`
- Inserted 8 event records into `event`

#### 🔍 SQL Query Testing

Created manual SQL verification queries:

- Retrieve all events
- Retrieve event by ID
- Count total events

Verified correct insertion and schema behavior.

---

### 🔌 3. API Configuration & Fixes

- Configured `.env` file to use PostgreSQL instead of default SQLite fallback
- Successfully connected Express backend to PostgreSQL database


### 📁 4. Documentation

- Created `/docs/week1.md` for sprint documentation
- Added ERD v1 diagram (`erd-v1.png`)

## 🚀 How to Run the Project Locally

### 1. Database Setup

- Open PostgreSQL client 
- Create database:

```sql
CREATE DATABASE events_startup;
SELECT COUNT(*) FROM event;
SELECT id, title FROM event ORDER BY id;