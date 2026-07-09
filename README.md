# 🏋️ Prime Fitness Gym
### A MERN Stack Based Gym Management System

Prime Fitness Gym is a full-stack web application built using the MERN Stack (MongoDB, Express.js, React.js, and Node.js). It provides a complete gym management solution with two dedicated role-based dashboards — one for Administrators and one for Members.

Members get a personalized fitness experience powered by a BMI calculator that recommends fitness goals and delivers customized weekly workout plans and daily diet plans. Administrators get full control over member records and membership management.

🔗 **Live Demo:** [prime-gym-management-system.vercel.app](https://prime-gym-management-system.vercel.app/)

---

## ✨ What the System Does

### 👤 For Members
- Calculate BMI and get category (Underweight / Normal / Overweight / Obese)
- Receive personalized fitness goal suggestion (Weight Loss / Weight Gain / Fitness)
- Get a personalized 7-day weekly workout plan based on confirmed goal
- Get a full daily diet plan with calorie, protein and water targets
- View and edit personal profile (name, age, gender, height, weight, blood group, photo)
- View membership plan, status and days remaining

### 🔧 For Administrators
- View all gym members in a list
- Add new members with full details
- Edit existing member information
- Delete member records
- Track membership status (Active / Inactive / Cancelled)
- View membership plan details (Standard / Premium / VIP)

---

## 📱 Application Pages

| Page | Role | Description |
|------|------|-------------|
| Home | Public | Landing page with navbar, hero, about, services, membership plans, trainers and testimonials |
| Register | Public | New user registration with name, email and password |
| Login | Public | Email and password login with role-based redirect |
| Change Password | Public | Update password using registered email |
| Admin Dashboard | Admin | Overview with total, active and expired member counts |
| Members List | Admin | Full list of all gym members with view, edit and delete options |
| Member Detail | Admin | Full membership details and edit form for individual member |
| User Dashboard | Member | Welcome banner, Membership card, BMI card, Today's Workout and Diet Snapshot |
| Profile | Member | Edit personal details and upload profile photo |
| Membership | Member | View membership plan, status and days remaining |
| BMI Calculator | Member | Calculate BMI, view category and confirm fitness goal |
| Workouts | Member | Personalized 7-day workout plan based on fitness goal |
| Diet Plan | Member | Full daily meal plan with macro targets based on fitness goal |

---

## 🚀 Key Features

### 🔐 Authentication & Security
- User registration and login
- Password hashing using bcryptjs
- JWT token authentication with 1-day expiry
- Role-based access control (Admin / Member)
- Protected routes on both client and server side
- Environment variables for sensitive credentials

### 👥 Member Management (Admin)
- Add new gym members
- View all member records
- Edit member details
- Delete member records
- Track membership status (Active / Inactive / Cancelled)
- Membership plans: Standard / Premium / VIP

### 💪 Fitness Features (Member)
- Real-time BMI calculator
- BMI category classification
- Fitness goal recommendation based on BMI
- Personalized 7-day workout plans (3 goal-based plans)
- Daily diet plans with calorie, protein and water targets (3 goal-based plans)
- Meal breakdown: Breakfast, Lunch, Dinner and Snacks

### 📊 Dashboard
- Admin: Total, active and expired member counts
- Member: Membership card, BMI summary, today's workout, diet snapshot

---

## 🛠️ Tech Stack

### Frontend
- React.js (Vite)
- React Router DOM v6 (nested routes)
- Axios
- Bootstrap 5
- CSS

### Backend
- Node.js
- Express.js
- JWT (jsonwebtoken)
- bcryptjs
- dotenv

### Database
- MongoDB
- Mongoose ODM

### Tools
- GitHub (version control)
- VS Code
- Postman (API testing)

---

## 📂 Project Structure

```
prime-fitness-gym/
│
├── client/                          # React frontend (Vite)
│   ├── public/
│   ├── src/
│   │   ├── components/              # Reusable components
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── Sidenav.jsx
│   │   │   └── ...
│   │   ├── pages/                   # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── ChangePassword.jsx
│   │   │   ├── AdminDashboard.jsx
│   │   │   ├── Members.jsx
│   │   │   ├── MemberDetail.jsx
│   │   │   ├── UserDashboard.jsx
│   │   │   └── user/
│   │   │       ├── DashboardHome.jsx
│   │   │       ├── Profile.jsx
│   │   │       ├── Membership.jsx
│   │   │       ├── BMI.jsx
│   │   │       ├── Workouts.jsx
│   │   │       └── Diet.jsx
│   │   ├── api/                     # Axios API helpers
│   │   ├── assets/
│   │   ├── protectedNavigation.jsx  # AdminRoute & UserRoute
│   │   └── App.jsx                  # Routes definition
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── server/                          # Node.js/Express backend
│   ├── models/                      # Mongoose schemas
│   │   ├── User.js
│   │   ├── Member.js
│   │   ├── Profile.js
│   │   ├── Workout.js
│   │   └── Diet.js
│   ├── seed.js                      # Database seeder
│   ├── server.js                    # Main server file
│   ├── .env                         # Environment variables
│   └── package.json
│
└── README.md
```

---

## 🔌 API Endpoints

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| POST | /api/register | Public | Register new user |
| POST | /api/login | Public | Login and get JWT |
| POST | /api/change-password | Public | Update password |
| GET | /api/members | Admin | Get all members |
| GET | /api/members/:id | Admin | Get single member |
| POST | /api/members | Admin | Add new member |
| PUT | /api/members/:id | Admin | Update member |
| DELETE | /api/members/:id | Admin | Delete member |
| GET | /api/profile | Member | Get user profile |
| POST | /api/profile | Member | Save user profile |
| GET | /api/membership | Member | Get membership details |
| GET | /api/workouts | Member | Get personalized workout plan |
| GET | /api/diet | Member | Get personalized diet plan |

---

## 🗄️ Database Collections

| Collection | Description |
|------------|-------------|
| Users | Authentication credentials and role |
| Members | Gym membership records managed by admin |
| Profiles | Member personal and health details |
| Workouts | 3 goal-based 7-day workout plans |
| Diet | 3 goal-based daily diet plans |

---

## ⚙️ Installation & Setup

### 1. Clone Repository
```bash
git clone https://github.com/hujur-4/gym-management-system.git
cd gym-management-system
```

### 2. Install Backend Dependencies
```bash
cd server
npm install
```

### 3. Install Frontend Dependencies
```bash
cd ../client
npm install
```

### 4. Setup Environment Variables
Create a `.env` file inside the `server` folder:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

### 5. Seed the Database
```bash
cd server
node seed.js
```

### 6. Run the Application

Start Backend:
```bash
cd server
npm start
```

Start Frontend:
```bash
cd client
npm run dev
```

### 7. Open in Browser
Frontend: http://localhost:5173

Backend:  http://localhost:5000

---

## 🔒 Security

- Passwords hashed with bcryptjs
- JWT tokens with role-based payload and 1-day expiry
- Server-side route guard (verifyToken middleware)
- Client-side protected routes (AdminRoute / UserRoute)
- Sensitive credentials stored in .env — never committed to version control

---

## 🔮 Future Enhancements

- 📅 Attendance Tracking (QR/RFID based check-in)
- 💳 Payment Gateway (online membership fee and renewal)
- 📧 Email & SMS Notifications (expiry alerts, welcome messages)
- 🏃 Trainer Management (assign trainers, manage schedules)
- 📱 Mobile App (iOS and Android with push notifications)
- 📈 Analytics Dashboard (membership growth, revenue trends, BMI distribution)

---

## 👥 Contributors

| Name | Role | GitHub |
|------|------|--------|
| Kondepalli Nityasree | Full Stack Developer | [@kondepallinityasree](https://github.com/kondepallinityasree) |
| Chandu Geethanjali | Full Stack Developer | [@Geetha123-huu](https://github.com/Geetha123-huu) |
| Konda Subhashini | Full Stack Developer | [@KONDA-SUBHASHINI](https://github.com/KONDA-SUBHASHINI) |
| Meerja Hujur Baig | Full Stack Developer | [@hujur-4](https://github.com/hujur-4) |

---

## 📁 Repository
🔗 [github.com/CodeNow-MERN-Internship-Batch/gym-management-system](https://github.com/CodeNow-MERN-Internship-Batch/gym-management-system)

---

⭐ If you found this project useful, consider giving it a star on GitHub!
