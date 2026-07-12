# 🎓 OD Placement Tracker

A full-stack web application developed to simplify **On-Duty (OD) management** during placement drives. The system enables departments to efficiently manage students attending company recruitment processes by maintaining attendance records, approval status, company details, and placement information in one centralized platform.

---

## 📌 Project Overview

Managing placement OD requests manually can be time-consuming and error-prone. This application digitizes the entire process, allowing authorized users to add, update, search, and manage student placement OD records with an intuitive interface.

The project follows a modular architecture with a **FastAPI backend**, **MySQL database**, and a responsive frontend built using **HTML, CSS, and JavaScript**.

---

## ✨ Features

* ➕ Add new placement OD records
* ✏️ Edit existing student records
* 🗑️ Delete placement records
* 🔍 Search students instantly
* 🎯 Filter records by placement status
* 📊 Responsive and clean dashboard
* ✅ Client-side form validation
* ⚡ FastAPI REST APIs
* 🗄️ MySQL database integration
* 📱 Responsive design for desktop and mobile devices

---

## 🛠️ Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript (ES6)

### Backend

* FastAPI
* Python

### Database

* MySQL

### Tools

* Git
* GitHub
* VS Code

---

## 📂 Project Structure

```text
od-placement-tracker/
│
├── backend/
│   ├── app/
│   │   ├── crud.py
│   │   ├── database.py
│   │   ├── models.py
│   │   ├── schemas.py
│   │   └── main.py
│   ├── requirements.txt
│   └── .env_example
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── js/
│       ├── api.js
│       ├── app.js
│       ├── form.js
│       ├── table.js
│       └── utils.js
│
├── README.md
└── .gitignore
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/jaswanth43/od-placement-tracker.git
cd od-placement-tracker
```

### 2. Backend Setup

Navigate to the backend directory.

```bash
cd backend
```

Create and activate a virtual environment.

```bash
python -m venv venv
```

Install dependencies.

```bash
pip install -r requirements.txt
```

Create a `.env` file using `.env.example` and configure your MySQL credentials.

Start the FastAPI server.

```bash
uvicorn app.main:app --reload
```

The backend will be available at:

```
http://127.0.0.1:8000
```

---

### 3. Frontend Setup

Open the `frontend` folder using **VS Code Live Server** or any static web server.

The application will communicate with the FastAPI backend through REST APIs.

---

## 🗄️ Database

This project uses **MySQL** as the database.

Configure your database credentials inside the `.env` file before running the backend.

---

---

## 🔮 Future Enhancements

* User Authentication
* Admin & Faculty Roles
* Email Notifications
* Excel Export
* PDF Report Generation
* Attendance Analytics
* Dashboard Charts
* Pagination
* Sorting
* Cloud Deployment

---

## 💡 Learning Outcomes

Through this project, I gained practical experience in:

* REST API development using FastAPI
* CRUD operations
* MySQL database integration
* Frontend and backend communication
* Modular project architecture
* Form validation
* Git and GitHub workflow
* Full-stack application development

---

## 👨‍💻 Author

**Gummireddy Jaswanth Reddy**

GitHub: https://github.com/jaswanth43

---


