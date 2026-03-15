# Task Management Dashboard

A responsive **Task Management Dashboard** built with React that allows users to create, manage, and track tasks efficiently. The application supports task creation, editing, deletion, filtering, status tracking, drag-and-drop reordering, and persistent storage using browser local storage.

---

## Live Demo

🚀 Deployed Application:
**[Add Deployment Link Here]**

---

## Features

### Core Requirements

* Create tasks with:

  * Title
  * Description
  * Priority (Low / Medium / High)
  * Due Date
* View tasks in a **list layout**
* Edit tasks inline
* Delete tasks with confirmation
* Mark tasks as **Completed / Pending**
* Search tasks by **title or description**
* Filter tasks by:

  * Status (All / Pending / Completed)
  * Priority (Low / Medium / High)
* Task statistics:

  * Total tasks
  * Pending tasks
  * Completed tasks
* Task data persistence using **localStorage**
* Fully responsive UI (desktop, tablet, mobile)

---

## Bonus Features

* Card view toggle
* Dark / Light mode toggle
* Drag-and-drop task reordering
* Priority badges with color coding
* Smooth UI animations and hover interactions
* Empty state messaging when no tasks are available

---

## Tech Stack

* React
* Vite
* JavaScript (ES6+)
* CSS (Flexbox & Grid)
* LocalStorage API

---

## Project Structure

```
src
│
├── components
│   ├── TaskForm.jsx
│   ├── TaskItem.jsx
│   ├── TaskList.jsx
│   ├── TaskStats.jsx
│   ├── SearchFilter.jsx
│   ├── ThemeToggle.jsx
│   └── ViewToggle.jsx
│
├── pages
│   └── TaskDashboard.jsx
│
├── utils
│   └── localStorage.js
│
├── styles
│   └── styles.css
│
├── App.jsx
└── main.jsx
```

---

## Installation & Setup

### 1. Clone the Repository

```
git clone https://github.com/YOUR_USERNAME/task-dashboard.git
```

### 2. Navigate to Project Directory

```
cd task-dashboard
```

### 3. Install Dependencies

```
npm install
```

### 4. Start Development Server

```
npm run dev
```

The application will run at:

```
http://localhost:5173
```

---

## Design Decisions

### Component-Based Architecture

The application follows a **component-based structure**, where the UI is broken into reusable components such as `TaskForm`, `TaskList`, and `TaskItem`. This improves modularity, readability, and maintainability.

---

### Single Source of Truth

All task-related state is managed in the `TaskDashboard` component and passed down to child components via props. This ensures consistent state management and predictable UI updates.

---

### Controlled Form Components

Task creation and editing use **controlled components**, meaning React manages the form state. This approach ensures reliable input handling and simplifies validation.

---

### Separation of Concerns

The project separates responsibilities into different layers:

* **Components** → UI rendering
* **Pages** → state management
* **Utils** → storage logic
* **Styles** → visual presentation

---

### Local Storage Abstraction

Persistence logic is abstracted into a utility file (`utils/localStorage.js`) rather than being directly embedded into UI components. This makes the application easier to maintain and allows future replacement with a backend API.

---

### Derived State for Filtering

Filtering and searching tasks are computed dynamically instead of storing additional state. This avoids redundant data and ensures filters always reflect the current task list.

---

### Responsive Layout

The interface uses **Flexbox and CSS Grid** to provide a responsive layout that adapts across different screen sizes.

---

## Screenshots

### Tasks
![Tasks](screenshots/task.png)

### Completed Task
![Completed Task](screenshots/completed_task.png)

### Deleted Task
![Deleted Task](screenshots/delete_task.png)

### Edit Mode
![Edit Mode](screenshots/edit_task.png)

### Search Task
![Search Task](screenshots/search_task.png)

### Empty State
![Empty State](screenshots/no_task_found.png)

### Theme
![Theme](screenshots/task_theme.png)




