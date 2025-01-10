# Edvise App

Edvice App is a full-stack web application consisting of a **frontend** built with **Vite + React** and a **backend** using **Express.js**. This project provides a comprehensive platform for mentoring, where users can connect with industry leaders for career guidance and development.

---

## Features

- **Mentor Functionality**:
  - Create and manage workshops.
  - View mentee enrollments.
- **Mentee Functionality**:
  - Browse and enroll in workshops.
  - Secure payments for workshops.
- **Admin Panel**:
  - Manage mentors, mentees, and workshops.
  - Oversee platform activity and reports.
- **Responsive Design**:
  - Fully optimized for both desktop and mobile.

---

## Tech Stack

### **Frontend**
- [React](https://reactjs.org/) with [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

### **Backend**
- [Express.js](https://expressjs.com/)

### **Database**
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

### **Other Tools**
- [Docker](https://www.docker.com/) for containerization.
- [Stripe](https://stripe.com/) for payment integration.

---

## Prerequisites

- **Docker** installed on your machine.
- **Git & GitHub** installed and setup on your machine.

---

## Getting Started

### Clone the Repository
```bash
git clone https://github.com/rohitprofc/edvise-app.git
cd edvise-app
```

### Setup Environment Variables

Create `.env` files in the `backend` directory based on the [project structure](#project-structure) provided.

### Run the Application

#### Using Docker
1. Build and run the containers:
   ```bash
   docker compose up --build
   ```
2. Access the frontend at `http://localhost:5173` and the backend at `http://localhost:5000`.
3. Stopping containers running if any:
  ```bash
  docker compose down
  ```
4. Start containers without build:
  ```build
  docker compose up
  ```

---

## Project Structure

```plaintext
edvise-app/
├── .gitignore
├── LICENSE
├── README.md
├── backend/
    ├── .env
    ├── Dockerfile
    ├── models/
    ├─] node_modules/ (ignored)
    ├── package-lock.json
    ├── package.json
    ├── routes/
    └── server.js
├── docker-compose.yml
└── frontend/
    ├── Dockerfile
    ├── README.md
    ├── eslint.config.js
    ├── index.html
    ├─] node_modules/ (ignored)
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── src/
    │   ├── App.css
    │   ├── App.jsx
    │   ├── components/
    │   ├── index.css
    │   ├── main.jsx
    │   └── pages/
    ├── tailwind.config.js
    └── vite.config.js
```

---

## Contributing

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/feature-name
   git checkout -b fix/fix-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Added <feature-name> Feature."
   ```
4. Push to the branch:
   ```bash
   git push origin feature/feature-name
   git push origin fix/fix-name
   ```
5. Create a pull request.

---

## Branching Strategy

A good branching strategy is essential to keep the codebase clean and avoid conflicts. Here is a recommended branching strategy:

- **main branch**:
  - The main branch should always have a stable version of the code. This is the production-ready code and should only contain tested, stable, and reviewed code.

- **dev branch**:
  - The dev branch is the integration branch where all feature branches are merged after code reviews. It serves as the main development branch where the latest, stable, but not yet production-ready code exists.

- **Feature branches**:
  - Feature branches are used to develop new features, fix bugs, or make changes. Each branch is created from the dev branch and merged back into dev after completion and review.
  - **Naming convention**: `feature/{feature-name}` or `fix/{fix-name}`. For example, `feature/frontend-login-page` or `fix/backend-socket-error`.

- **Hotfix branches**:
  - If there is an urgent fix needed on the main branch (e.g., a critical fix in production), you can create a hotfix branch from main.
  - **Naming convention**: `hotfix/{issue-name}`.

---  

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
