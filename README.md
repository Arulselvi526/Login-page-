# Login-page
# 🎬 StreamVerse Login Page

A modern Netflix-inspired login page built using the MERN Stack. This project includes a React frontend, Express.js backend, responsive UI with Tailwind CSS, and basic login authentication.

## 🚀 Features
🎥 Netflix-style UI
🖼️ Full-screen background image
📱 Responsive Design
 🔐 Login Authentication
🌐 React Router Navigation
⚡ Axios API Integration
🎨 Tailwind CSS Styling
🖥️ Express.js Backend
🔄 Dashboard Navigation after Login

## 🛠️ Tech Stack
### Frontend
- React.js
- Vite
- Tailwind CSS
- Axios
- React Router DOM

### Backend
- Node.js
- Express.js
- CORS
- Nodemon

## 📂 Project Structure

Login Page/
│
├── Frontend/
│   ├── src/
│   │   ├── assets/
│   │   │   └── image/
│   │   │       └── background.jpg
│   │   ├── App.jsx
│   │   ├── Login.jsx
│   │   ├── Dashboard.jsx
│   │   └── main.jsx
│   └── package.json
│
└── Backend/
    ├── server.js
    └── package.json

## 📦 Installation
### Frontend
cd Frontend
npm install
npm run dev

## Runs on:
http://localhost:5173
### Backend
cd Backend
npm install
npm run dev
## Runs on:
http://localhost:5000
## 🔑 Demo Login Credentials
Email: admin@gmail.com
Password: 123456
## API Endpoint
### Login
POST /login
Request: json
{
  "email": "admin@gmail.com",
  "password": "123456"
}
Response
json
{
  "success": true,
  "message": "Login Successful"
}
## Future Improvements

- User Registration
- MongoDB Database
- JWT Authentication
- Password Encryption (bcrypt)
- Forgot Password
- Email Verification
- Protected Routes
- User Profile
## Author

**Arul Selvi**

- MERN Stack Developer
- React.js Developer
- Learning Full Stack Development

GitHub:
https://github.com/your-username

LinkedIn:
https://linkedin.com/in/your-profile

## License
This project is licensed under the MIT License.
