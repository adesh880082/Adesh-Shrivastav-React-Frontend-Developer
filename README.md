# 🌗 Adesh's Theme Switcher React App (TypeScript + Context API)

This is a **React + TypeScript** application built by **Adesh Shrivastav** to demonstrate dynamic **multi-theme switching** using the **Context API** and **CSS variables**. The app fetches product data from [FakeStore API](https://fakestoreapi.com) and renders them in a responsive, themed UI.

---

## 🚀 Features

- 🎨 Supports 3 Beautiful Themes:
  - **Theme 1** – Light with soft red accents
  - **Theme 2** – Dark mode with cyan highlights
  - **Theme 3** – Playful, warm layout with orange tones
- 🌐 Global theming via `Context API` and CSS custom properties
- 🧠 Clean state management with TypeScript
- ⚡ Lazy-loaded product images
- 🛍 Product display with price, rating, category, and description

---

## 🛠️ Tech Stack

- React 18+
- TypeScript
- Context API
- CSS Modules + Variables
- Fetch API

---

## 📁 Folder Structure

```bash
theme-switcher-app/
│
├── public/                 # HTML template
src/
│
├── App.css
├── App.test.tsx
├── App.tsx
├── index.css
├── index.tsx
├── logo.svg
├── react-app-env.d.ts
├── reportWebVitals.ts
├── routes.tsx
├── setupTests.ts
│
├── components/                # Reusable UI components
│   ├── Header.tsx
│   ├── Sidebar.tsx
│   └── ThemeDropdown.tsx
│
├── hooks/                     # Custom hooks
│   └── useTheme.ts
│
├── pages/                     # Route-based pages
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Home.tsx
│   ├── Home.module.css
│   └── Page.module.css
│
|── themes/                    # Theme context and CSS
│   ├── theme1.css
│   ├── theme2.css
│   ├── theme3.css
│   ├── ThemeContext.tsx
│   └── ThemeProvider.tsx
├── tsconfig.json
└── package.json
```
📸 Screenshots
<img width="1901" height="972" alt="image" src="https://github.com/user-attachments/assets/26f27c6b-164a-44f8-8956-db0f70ff6017" />

<img width="1918" height="952" alt="Theme 02" src="https://github.com/user-attachments/assets/7e258028-25f8-40e8-b6a7-b527e65514a5" />

<img width="1918" height="966" alt="image" src="https://github.com/user-attachments/assets/5b4943d4-8a5f-4864-9472-7799bfd29302" />



🧑‍💻 Getting Started
1. Clone the Repository
```bash
git clone https://github.com/adesh880082/Adesh-Shrivastav-React-Frontend-Developer.git
cd Adesh-Shrivastav-React-Frontend-Developer
```

2. Install Dependencies
```bash
npm install
```

3. Run the App
```bash
npm start
```

🛒 API Reference
- FakeStoreAPI – https://fakestoreapi.com/products

👨‍💻 Author
- Adesh Shrivastav
🔗 [GitHub Profile](https://github.com/adesh880082/)

🌐 Live Demo
- 🔗 https://themeswitcherhipster.netlify.app/
