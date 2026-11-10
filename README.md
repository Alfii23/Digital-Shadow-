# Digital Shadow – Privacy Risk Analyzer

Pixel-accurate recreation of the **Digital Shadow – Privacy Risk Analyzer** cybersecurity SaaS landing page & authentication portal.

---

## 🎨 Design System & Specifications

- **Theme**: Dark cybersecurity SaaS aesthetic
- **Primary Background**: `#060D19`
- **Secondary Background**: `#081525`
- **Input Background**: `#060E1C`
- **Primary Cyan**: `#08D5F5`
- **Electric Blue**: `#338AF5`
- **Purple**: `#8962F5`
- **Primary Text**: `#EDF2FF`
- **Secondary Text**: `#91A5C6`
- **Border**: `#102D42`
- **Gradient**: `linear-gradient(95deg, #06C8EE, #3986F5, #9360EF)`
- **Typography**: Inter (sans-serif) & JetBrains Mono (monospace numerical statistics)

---

## 📁 Project Structure

```
├── index.html                   # Default landing / entry page (Sign In Portal)
├── analyzer.html                # Privacy Risk Analyzer Dashboard & report overview
├── login.html                   # Direct alias for Sign In Portal
├── vercel.json                  # Vercel clean URL routing configuration
├── vite.config.js               # Multi-page build configuration
├── package.json                 # Frontend dependencies configuration
├── src/
│   ├── App.jsx                  # Main application composition (Sign in first by default)
│   ├── index.css                # Global design system, auth styling & responsive breakpoints
│   └── components/
│       ├── Navbar.jsx           # Top navigation with logo, brand name, and Sign Out trigger
│       ├── HeroSection.jsx      # Privacy badge, main heading with gradient, description
│       ├── Statistics.jsx       # Exposure categories, detection rules, local analysis
│       ├── PrivacyBanner.jsx    # Security statement banner with lock icon & highlighted text
│       ├── FloatingActions.jsx  # Floating PDF and AI Assistant action triggers
│       └── LoginPage.jsx        # Cybersecurity authentication page component
└── README.md
```

---

## 🚀 How to View

1. **Directly in Browser (No Node/NPM required)**:
   - Root / Sign In: Double-click [`index.html`](file:///c:/Users/Asus/Desktop/Alfi/index.html)
   - Privacy Analyzer: Double-click [`analyzer.html`](file:///c:/Users/Asus/Desktop/Alfi/analyzer.html)

2. **React Development**:
   If Node.js and NPM/pnpm are installed in your environment:
   ```bash
   pnpm install  # or npm install
   pnpm run dev  # or npm run dev
   ```
