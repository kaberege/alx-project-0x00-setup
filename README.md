# ALX Project: 0x00 - React Genesis (Next.js Setup)

This is the setup project for ALX React Genesis series, where we scaffold a Next.js app and build reusable components using TypeScript, TailwindCSS, and ESLint.

## 🚀 Technologies Used

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/)

## 🛠️ Project Structure

.
├── components/
│ ├── Button.tsx
│ ├── Card.tsx
│ └── Pill.tsx
├── interfaces/
│ └── index.ts
├── pages/
│ ├── index.tsx
│ ├── about.tsx
│ └── landing.tsx
├── public/
│ └── assets/
│ └── images/
│ ├── house.png
│ └── star.png
├── styles/
│ └── globals.css
├── README.md
├── tsconfig.json
├── tailwind.config.ts
└── ...


## 📦 Getting Started

### Install dependencies:
```bash
npm install
Run the development server:
bash
Copy
Edit
npm run dev
Visit http://localhost:3000 to view the app.

📄 Available Pages
/ — Home Page

/landing — Landing Page with sample cards and buttons

/about — Static About Page

🧪 Components
Card — Displays an image with rating and price

Pill — A simple pill tag with text

Button — Reusable button with props for title and custom styles

🧰 Interfaces
Type definitions are stored in interfaces/index.ts and used across components for prop typing.