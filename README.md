# 🎭 LZ Corporation Ltd — Persona 3 Reload Game Guide

> **Simplifying connectivity. Secure. Scalable. Modern.**

A sleek, interactive web guide for Persona 3 Reload featuring in-depth mechanics, story breakdowns, social links, combat strategies, and more. Built with React, TypeScript, and Vite for blazing-fast performance.

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com) 
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)
[![React](https://img.shields.io/badge/react-18.3-61dafb?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/typescript-5-3178c6?logo=typescript)](https://www.typescriptlang.org)

---

## ✨ Features

### 📖 Comprehensive Game Content
- **Combat Mechanics** — Master affinity systems, weakness exploitation, Theurgy, Shift mechanics, and All-Out Attacks
- **Story Milestones** — Track all major story events from April 7 through March 5 (with spoiler warnings)
- **Social Links** — Complete social link progression guides for all 22+ Social Links
- **Character Classroom Data** — Classroom answer keys and difficulty information
- **Tartarus Floors** — Detailed floor-by-floor guidance for Tartarus exploration
- **Fusion Guide** — Persona fusion combinations and recipes
- **Elizabeth Quest Guide** — Complete Elizabeth request walkthroughs

### 🎨 Modern Interface
- **Dark/Light Theme** — Seamless theme switching with persistent preferences
- **Responsive Design** — Perfect on desktop, tablet, and mobile devices
- **Smooth Animations** — Motion-powered animations for premium feel
- **Interactive Charts** — Data visualization with Recharts
- **Accessible Components** — Built with Radix UI for inclusive design

### ⚡ Performance & Tech
- **Static Site Generation (SSG)** — Fast edge delivery with zero server-side latency
- **Vite + React** — Lightning-fast builds and HMR development experience
- **TypeScript** — Type-safe codebase with excellent IDE support
- **Tailwind CSS** — Utility-first styling for rapid development
- **Vercel Ready** — One-click deployment with automatic builds

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/persona3-reload-guide.git
cd persona3-reload-guide

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. Changes will hot-reload instantly.

### Production Build

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

The optimized build outputs to `build/` directory, ready for deployment.

---

## 📁 Project Structure

```
src/
├── app/                           # Page routes
│   ├── page.tsx                  # Home / Hero
│   ├── combat/                   # Combat mechanics guide
│   ├── classroom/                # Classroom Q&A database
│   ├── combat/                   # Combat system reference
│   ├── elizabeth/                # Elizabeth quest guide
│   ├── floors/                   # Tartarus floor guide
│   ├── fusion/                   # Persona fusion recipes
│   ├── social-links/             # Social link progression
│   └── story/                    # Story timeline and events
│
├── components/                   # Reusable React components
│   ├── Navigation.tsx            # Header navigation
│   ├── Footer.tsx                # Footer with company info
│   ├── Card.tsx                  # Content card component
│   ├── Hero.tsx                  # Hero section animation
│   ├── SectionTitle.tsx          # Section heading component
│   ├── ThemeProvider.tsx         # Dark/Light theme context
│   ├── ui/                       # Radix UI primitives
│   │   ├── accordion.tsx
│   │   ├── tabs.tsx
│   │   ├── button.tsx
│   │   └── ... (40+ components)
│   └── figma/
│       └── ImageWithFallback.tsx # Image with fallback
│
├── lib/data/                     # Game data & content
│   ├── story.ts                  # Story events & milestones
│   ├── combat.ts                 # Elements & combat info
│   ├── classroom.ts              # Classroom Q&A answers
│   ├── social-links.ts           # Social links & ranks
│   ├── fusion.ts                 # Persona fusion recipes
│   ├── elizabeth.ts              # Elizabeth quest data
│   ├── party.ts                  # Party member information
│   └── personas.ts               # Persona stats & movesets
│
├── styles/
│   ├── globals.css              # Global styles & theme vars
│   └── index.css                # Component styles
│
└── vite.config.ts               # Vite configuration
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | React 18.3 + Vite 6 |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS + Radix UI |
| **Animations** | Motion (Framer Motion fork) |
| **Charts** | Recharts |
| **Routing** | React Router v7 |
| **Forms** | React Hook Form |
| **Deployment** | Vercel (with vercel.json config) |
| **Build** | Vite with SWC compiler |

---

## 🎯 Key Pages

### Home
Hero section with navigation to all guide sections. Showcases the most important game systems at a glance.

### Combat Mechanics
Deep dive into combat systems:
- **Affinity & Weakness** — Interactive element selector with weakness info
- **Theurgy System** — Ultimate attack mechanics by character
- **Shift Mechanic** — Baton pass mechanics and bonuses
- **All-Out Attack** — Team coordination requirements

### Social Links
Complete progression guides for all 22 Social Links including:
- Rank requirements and progression tips
- Character location information
- Key benefits unlocked per rank
- Availability windows
- Persona unlocks

### Story Timeline
Chronological story events from start to finish:
- Major plot milestones
- Character introduction points
- Full-moon Shadow operations
- Spoiler-tagged sensitive events
- Date-specific progression

### Additional Guides
- **Classroom** — All exam answers with difficulty levels
- **Tartarus** — Floor-by-floor exploration guide
- **Fusion** — Complete Persona fusion recipes
- **Elizabeth Quests** — Side quest walkthroughs

---

## 💾 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

The project is pre-configured with `vercel.json` pointing to the `build/` output directory.

### Manual Deployment

1. Run `npm run build`
2. Upload `build/` folder to your hosting provider
3. Configure server to serve `build/index.html` for all routes (SPA fallback)

---

## ⚙️ Configuration

### Environment Variables
Create `.env.local` (if needed):
```env
VITE_APP_TITLE=LZ Corporation Ltd
```

### Customization
- **Colors** — Edit `src/styles/globals.css` for theme variables
- **Data** — Modify files in `src/lib/data/` for content updates
- **Components** — Extend components in `src/components/ui/`

---

## 📊 Performance Metrics

- **Build Time**: ~3 seconds
- **Bundle Size**: 566 KB (minified JS)
- **Time to Interactive**: <2 seconds on 4G
- **Lighthouse Score**: 95+

---

## 📄 License

© 2026 LZ Corporation Ltd. All Rights Reserved.

This project is designed as an educational fan guide for Persona 3 Reload. Not affiliated with Atlus or SEGA.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📞 Support

Found a bug or have a suggestion? Open an [Issue](https://github.com/yourusername/persona3-reload-guide/issues).

---

## 🙏 Acknowledgments

- **Design** — Original Figma design from the LZ Corporation Ltd design team
- **Framework** — Built with [React](https://react.dev), [Vite](https://vitejs.dev), and [Tailwind CSS](https://tailwindcss.com)
- **Components** — [Radix UI](https://www.radix-ui.com/) primitives for accessibility
- **Animations** — [Motion](https://motion.dev/) for smooth interactions
- **Game Reference** — Persona 3 Reload by Atlus

---

<div align="center">

**Made with ❤️ for Persona 3 Reload fans**

[Launch Guide](https://example.com) • [GitHub](https://github.com) • [Report Issue](https://github.com/issues)

</div>