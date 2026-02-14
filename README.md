# 🚀 Site Builder

A powerful and intuitive web application that allows users to **generate complete websites using simple natural language prompts**.  
No manual HTML/CSS coding required — just describe what you want, and the system builds it for you.

🔗 **Live Demo:** https://site-builder-opal.vercel.app/  
📂 **Repository:** https://github.com/rakshit-2oo4/Site-Builder  

---

## 📌 Overview

**Site Builder** is a full-stack application designed to simplify website creation.  
Users can input simple prompts like:

> "Create a landing page for app launch."

The application then generates the website structure dynamically.

---

## ✨ Features

- 🧠 Generate websites using natural language prompts
- ⚛️ Modern React + TypeScript frontend
- 🚀 Fast development with Vite
- 📦 Backend server to process prompts
- 🎨 Clean and responsive UI
- 🔄 Easily extendable for templates & themes
- 🌐 Deploy-ready build configuration

---

## 🛠️ Tech Stack

### Frontend
- React 19
- TypeScript
- Vite
- TailwindCSS v4
- React Router v7
- Axios
- better-auth UI
- Radix UI
- Lucide Icons
- Sonner (toast notifications)
- ShadCN
- ESLint

### Backend
- Node.js (ES Modules)
- Express 5
- TypeScript
- Prisma ORM
- PostgreSQL (pg)
- OpenAI SDK
- Stripe
- better-auth
- CORS
- dotenv
- tsx
- nodemon

### Deployment
- Vercel (Frontend)
- Render / Other Node hosting (Backend)

---


## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/rakshit-2oo4/Site-Builder.git
cd Site-Builder
```

---

## 🖥️ Setup Frontend

```bash
cd client
npm install
npm run dev
```

Frontend runs on:
```
http://localhost:5173
```

---

## 🗄️ Setup Backend

```bash
cd server
npm install
```

Prisma client is generated automatically via:

```bash
postinstall → npx prisma generate
```

## 🚀 Run Development Server

```bash
npm run server
```

Or start normally:

```bash
npm start
```

Backend runs on:
```
http://localhost:5000
```

---

## 🏗️ Build for Production

To create a production build:

```bash
cd client
npm run build
```

The optimized files will be generated inside the `dist/` folder.

---

## 📦 Deployment

### Frontend
Deploy the `dist` folder to:
- Vercel
- Netlify
- GitHub Pages

### Backend
Deploy using:
- Render
- Railway
- Fly.io
- Any Node.js hosting provider

---

## 📄 Example Prompt

```
Create a homepage with:
- A navigation bar
- A hero section with a call-to-action button
- A services section
- A contact form
- A footer
```

The system generates the complete layout automatically.

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to your branch
   ```bash
   git push origin feature/your-feature
   ```
5. Open a Pull Request

---

## 📜 License

This project is licensed under the MIT License.  
Feel free to use and modify it.

---

## 👨‍💻 Author

Developed by **Rakshit**

GitHub: https://github.com/rakshit-2oo4  

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
