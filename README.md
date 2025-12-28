# 🚀 Portfolio Mahes Kanoko

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-ff69b4?style=for-the-badge&logo=framer)

**A modern, premium portfolio website with smooth scroll animations and responsive design.**

[Live Demo](https://porto-maheskanoko.vercel.app) • [Report Bug](https://github.com/MahesKanoko999/porto-maheskanoko/issues)

</div>

---

## ✨ Features

- 🎨 **Premium Dark Theme** - Sleek, modern design with glassmorphism effects
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- 🌊 **Scroll Animations** - Smooth viewport-triggered animations using Framer Motion
- ⚡ **Performance Optimized** - Lazy loading, optimized blur effects, reduced motion support
- 🧩 **Component Based** - Reusable UI components with shadcn/ui
- 🎭 **Interactive Preloader** - Custom animated preloader with typewriter effect

## 📸 Screenshots

| Home | Projects | Stack |
|------|----------|-------|
| ![Home](./public/screenshots/home.png) | ![Projects](./public/screenshots/projects.png) | ![Stack](./public/screenshots/stack.png) |

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Next.js 15 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **Animation** | Framer Motion |
| **UI Components** | shadcn/ui, Radix UI |
| **Icons** | Lucide React |
| **Fonts** | Geist Sans, Geist Mono |

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── projects/          # Projects page
│   └── stack/             # Tech stack page
├── components/
│   ├── home/              # Home page components
│   │   ├── Hero.tsx
│   │   └── Features.tsx
│   ├── layout/            # Layout components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── MenuOverlay.tsx
│   │   └── Preloader.tsx
│   └── ui/                # Reusable UI components
│       ├── scroll-reveal.tsx  # Scroll animation wrapper
│       ├── shuffle-text.tsx   # Text scramble effect
│       └── ...
└── lib/
    └── utils.ts           # Utility functions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MahesKanoko999/porto-maheskanoko.git
   cd porto-maheskanoko
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
npm start
```

## 🎯 Key Components

### ScrollReveal
Viewport-triggered animation wrapper for lazy loading sections:

```tsx
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

// Single element
<ScrollReveal direction="up" delay={0.2}>
  <YourContent />
</ScrollReveal>

// Multiple staggered items
<StaggerContainer>
  <StaggerItem>Item 1</StaggerItem>
  <StaggerItem>Item 2</StaggerItem>
</StaggerContainer>
```

### ShuffleText
Text scramble/typewriter effect:

```tsx
import { ShuffleText } from "@/components/ui/shuffle-text";

<ShuffleText text="Hello World" />
```

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero section, featured works, tech stack preview |
| About | `/about` | Bio, skills, experience timeline |
| Projects | `/projects` | Featured & all projects with filters |
| Stack | `/stack` | Full tech stack with skill levels |
| Contact | `/contact` | Contact form, info, working hours |

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to customize the color palette:

```ts
theme: {
  extend: {
    colors: {
      primary: "hsl(var(--primary))",
      // Add your custom colors
    }
  }
}
```

### Content
Update the data arrays in each page file to add your own projects, skills, and information.

## 📱 Responsive Breakpoints

| Breakpoint | Screen Size | Description |
|------------|-------------|-------------|
| `sm` | 640px+ | Small tablets |
| `md` | 768px+ | Tablets |
| `lg` | 1024px+ | Laptops |
| `xl` | 1280px+ | Desktops |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Mahes Kanoko**

- GitHub: [@MahesKanoko999](https://github.com/MahesKanoko999)
- Website: [maheskanoko.com](https://maheskanoko.com)

---

<div align="center">

Made with ❤️ by Mahes Kanoko

⭐ Star this repo if you like it!

</div>
