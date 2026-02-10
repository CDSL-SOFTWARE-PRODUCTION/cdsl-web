# CDSL - Forward-Thinking Digital Studio

[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js-black?logo=next.js)](https://nextjs.org/)
[![Styling: Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind%20CSS-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Animations: Framer Motion](https://img.shields.io/badge/Animations-Framer%20Motion-black?logo=framer)](https://www.framer.com/motion/)

**CDSL** is a modern, high-performance web application designed for a premium digital studio. Specializing in outsourced software development and digital transformation, it features a sleek, minimalist aesthetic with advanced animations and a focus on exceptional user experience.

[View Live Site](https://www.cdslvn.com)

---

## ✨ Key Features

- 🚀 **Next.js 15+ (App Router)** - Leveraging the latest React features for optimal performance and SEO.
- 🎭 **Advanced Animations** - Smooth transitions and micro-interactions powered by **Framer Motion** and **AOS**.
- 🌊 **Smooth Scrolling** - Integrated with **Lenis** for a premium, fluid scrolling experience.
- � **Hyper-Responsive** - Meticulously crafted layouts that adapt perfectly to any screen size.
- 🎨 **Premium Aesthetic** - A modern, minimalist design system using Tailwind CSS.
- 🛠️ **Component-Based Architecture** - Modular and reusable code structure for easy maintenance and scaling.
- 🔍 **SEO Optimized** - Pre-configured meta tags, semantic HTML, and fast load times.

## �️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/) & [AOS](https://michalsnik.github.io/aos/)
- **Smooth Scroll:** [Lenis](https://lenis.darkroom.engineering/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Fonts:** [@fontsource](https://fontsource.org/) (Bruno Ace SC)

## 🚀 Quick Start

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

```bash
# Clone the repository
git clone https://github.com/CDSL-SOFTWARE-PRODUCTION/cdsl-web.git

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:3000`.

## 📁 Project Structure

```text
/
├── public/             # Static assets (images, icons, etc.)
├── src/
│   ├── app/            # Next.js App Router (pages & layouts)
│   ├── components/     # UI Component Library
│   │   ├── forms/      # Form controllers and inputs
│   │   ├── sections/   # Major page sections
│   │   └── ui/         # Base UI primitives
│   ├── data/           # Config and content data files
│   ├── styles/         # Global CSS and Tailwind configurations
│   └── utils/          # Helper functions and hooks
├── package.json
└── tailwind.config.ts
```

## ⚙️ Configuration

Site-wide settings can be managed in `src/data/config.ts`:

- `siteUrl`: Production URL
- `companyName`: Brand name
- `socials`: Links to social media profiles and contact info
- `SEO`: Meta description and indexing settings

## � Commands

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts local development server |
| `npm run build` | Builds the application for production |
| `npm run start` | Starts the production server |
| `npm run lint` | Runs ESLint to check for code quality |
| `npm run format` | Formats code with Prettier |

## 📄 License

This project is privately owned by **CDSL**. All rights reserved.

---

Built with ❤️ by [CDSL Team](https://www.cdslvn.com)
