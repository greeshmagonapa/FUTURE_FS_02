# 🚀 Mini CRM System

A simple yet functional **Customer Relationship Management (CRM)** system built using **React.js**, **Node.js**, and **Express.js**.

This project helps businesses or admins manage customer leads efficiently through a clean dashboard interface.

---

# 📌 Features

## ✅ Lead Management
- Add new customer leads
- Store:
  - Name
  - Email
  - Lead Source
  - Status
  - Follow-up Notes

---

## ✅ Lead Status Tracking

Update customer status easily:

```text
New → Contacted
```

Helps track communication progress with clients.

---

## ✅ Follow-up Notes

Admins can:
- add follow-up notes
- update notes anytime

Example:

```text
Customer asked for pricing details
Interested in demo next week
```

---

## ✅ Delete Leads

Remove unnecessary or completed leads from the dashboard.

---

## ✅ Admin Dashboard

Interactive dashboard to:
- view all leads
- manage customer data
- update statuses
- track follow-ups

---

# 🛠️ Tech Stack

## Frontend
- React.js
- JavaScript
- HTML
- CSS
- Axios

---

## Backend
- Node.js
- Express.js

---

## Data Storage
- JSON File Storage (`leads.json`)

Used as a lightweight database for simplicity and beginner-friendly implementation.

---

# 📁 Project Structure

```bash
CRM-task2/
│
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   └── Dashboard.js
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── App.js
│   │   └── index.js
│   │
│   └── package.json
│
├── server/
│   ├── data/
│   │   └── leads.json
│   │
│   ├── server.js
│   └── package.json
│
└── README.md
```

---
*** Frontend deployed using netlify.Backend runs locally***

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone <https://github.com/greeshmagonapa/FUTURE_FS_02>
```
## Live Demo 
https://whimsical-tanuki-2a66a9.netlify.app/
---

## 2️⃣ Open Project Folder

```bash
cd CRM-task2
```

---

# 🔹 Frontend Setup

Open terminal:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Run frontend:

```bash
npm start
```

Frontend runs on:

```bash
http://localhost:3000
```

(or another available port)

---

# 🔹 Backend Setup

Open another terminal:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Run backend server:

```bash
npm run dev
```

Backend runs on:

```bash
http://localhost:5000
```

---

# 📡 API Endpoints

## Get All Leads

```http
GET /api/leads
```

---

## Add New Lead

```http
POST /api/leads/add
```

---

## Update Lead Status / Notes

```http
PUT /api/leads/:id
```

---

## Delete Lead

```http
DELETE /api/leads/:id
```

---

# ✨ Functionalities

| Feature | Description |
|---|---|
| Add Leads | Add customer lead details |
| View Leads | Display all stored leads |
| Status Update | Track lead progress |
| Follow-up Notes | Add/update customer notes |
| Delete Leads | Remove unnecessary leads |
| JSON Storage | Store data locally |

---

# 📸 Sample Workflow

1. Add customer lead  
2. Lead appears in dashboard  
3. Update status to “Contacted”  
4. Add follow-up notes  
5. Delete lead if completed  

---

# 💡 Learning Outcomes

This project helped in understanding:

- Full Stack Development
- React.js fundamentals
- REST API integration
- CRUD Operations
- State Management
- Backend API creation
- Express.js routing
- JSON-based data handling

---

# 🚀 Future Improvements

- MongoDB Integration
- Authentication & Login
- Search & Filters
- Analytics Dashboard
- Dark Mode UI
- Deployment
- Responsive Design Improvements

---

# 🎯 Project Type

- Full Stack Web Development Project
- Beginner-Friendly CRM System
- Academic / Portfolio Project

---

# 👩‍💻 Developed By

Greeshma

---

# ⭐ If You Like This Project

Give this repository a ⭐ on GitHub.
