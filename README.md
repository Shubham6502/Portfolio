# Shubham Patil — Portfolio (React + Tailwind)

A modern, dark-themed portfolio inspired by the cert-show-reel design.  
Tech: **React 18 · Tailwind CSS v3 · Vite · Lucide React**

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx        # Fixed navbar with smooth scroll + mobile menu
│   ├── Hero.jsx          # Hero section with typewriter effect
│   ├── About.jsx         # About + Education + stat cards
│   ├── Skills.jsx        # Animated skill bars (3 categories)
│   ├── Projects.jsx      # 4 project cards with tags
│   ├── DSA.jsx           # DSA Journey with platform cards
│   ├── Certificates.jsx  # 6 certificate cards
│   ├── Contact.jsx       # Contact form + info
│   └── Footer.jsx        # Footer with socials
├── hooks/
│   └── useInView.js      # Custom IntersectionObserver hook
├── App.jsx               # Root — composes all sections
├── index.jsx             # React entry point
└── index.css             # Tailwind base + Google Fonts
```

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build
```

---

## 🎨 Design System

| Token       | Value       |
|-------------|-------------|
| Background  | `#050d12`   |
| Card        | `#0c1a22`   |
| Accent/Teal | `#00e5c0`   |
| Border      | `#1a3040`   |
| Muted text  | `#5a7a88`   |
| Body font   | Syne        |
| Mono font   | Space Mono  |

---

## ✨ Features

- ⚡ Scroll-triggered fade-in animations via `useInView` hook  
- 💬 Typewriter role switcher in Hero  
- 📊 Animated skill progress bars  
- 📱 Fully responsive — mobile hamburger menu  
- 🎨 Teal/dark theme matching reference site  
- 🧩 Fully componentized — each section is its own file  
