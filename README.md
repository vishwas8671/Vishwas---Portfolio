# Vishwas Rajput - Premium Developer Portfolio

A premium, recruiter-focused developer portfolio website built for **Vishwas Rajput** designed to maximize placements and internships for MERN Stack and AI/ML positions. The UI features sleek glassmorphism card components, custom interactive particles, glow effects, Framer Motion transitions, and fully validated input forms.

---

## 🚀 Tech Stack

- **Framework**: React.js 19 + Vite 8 (Fast compilation & HMR)
- **Styling**: Tailwind CSS v4 (Modern theme configuration and native CSS utilities)
- **Animations**: Framer Motion 12 (Scroll reveal and interactive transitions)
- **Icons**: React Icons (Standard developer and social icon glyphs)
- **Interactive canvas**: Custom HTML5 Canvas Particle System for responsive web background

---

## 📂 Project Architecture

```text
├── public/
│   └── Vishwas_Rajput_Resume.txt   # Recruiter-downloadable plain text resume resource
├── src/
│   ├── assets/
│   │   ├── eduai.png               # Banner for EduAI project
│   │   └── fintrack.png            # Banner for FinTrack project
│   ├── components/
│   │   ├── About.jsx               # Academics timeline & stats cards
│   │   ├── Achievements.jsx        # Competitive coding stats & profile panels
│   │   ├── Certifications.jsx      # Technical credentials list
│   │   ├── Contact.jsx             # Validated email form & touch controls
│   │   ├── CursorGlow.jsx          # Mouse tracking canvas glow overlay (desktop)
│   │   ├── Footer.jsx              # Quick link lists & social icons
│   │   ├── Hero.jsx                # Introduction & interactive code-IDE visualizer
│   │   ├── Navbar.jsx              # Glassmorphic header & top scroll progress line
│   │   ├── ParticleBackground.jsx  # Interactive canvas-based backdrop physics
│   │   └── ScrollToTop.jsx         # Smooth scroll floating action button
│   ├── App.jsx                     # Root application container & loader coordinator
│   ├── index.css                   # Global styles & custom utility overrides
│   └── main.jsx                    # React bootstrapping entrypoint
├── index.html                      # SEO metadata & page template
├── postcss.config.js               # PostCSS loader configuration for Tailwind v4
├── tailwind.config.js              # Standard configuration paths file
├── vercel.json                     # Vercel SPA routing redirects support
└── package.json                    # Dependencies listing
```

---

## 💻 Local Setup & Execution

### 1. Install Project Dependencies
To resolve all dependencies, execute:
```bash
npm install
```

### 2. Run Development Server
To launch the hot-reloading development server locally:
```bash
npm run dev
```
Open `http://localhost:5173` in your web browser.

### 3. Build for Production
To bundle and optimize the application assets for production output (dist folder):
```bash
npm run build
```

---

## ⚡ Deployment to Vercel

The portfolio is fully optimized to deploy seamlessly to Vercel:

### Method A: Using Vercel GitHub Integration (Recommended)
1. Push this codebase to a public/private repository on GitHub.
2. Go to [Vercel Dashboard](https://vercel.com/dashboard) and click **Add New Project**.
3. Select and import the repository.
4. Vercel will auto-detect Vite settings. Ensure the configuration matches:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**.

### Method B: Deploy using Vercel CLI
If you have Vercel CLI installed globally, run:
```bash
vercel
```
Follow the interactive prompts to assign details and deploy. For production releases:
```bash
vercel --prod
```
