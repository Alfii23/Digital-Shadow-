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
├── index.html                   # Landing page (zero-dependency, pixel-perfect production HTML)
├── login.html                   # Login authentication page (matching design system & zero dependencies)
├── package.json                 # Frontend dependencies configuration
├── src/
│   ├── App.jsx                  # Main application composition with page state switching
│   ├── index.css                # Global design system, auth styling & responsive breakpoints
│   └── components/
│       ├── Navbar.jsx           # Top navigation with logo, brand name, and Sign In trigger
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
   - Landing page: Double-click [`index.html`](file:///c:/Users/Asus/Desktop/Alfi/index.html)
   - Login page: Double-click [`login.html`](file:///c:/Users/Asus/Desktop/Alfi/login.html) or click "Sign In" in the navigation bar.

2. **React Development**:
   If Node.js and NPM/pnpm are installed in your environment:
   ```bash
   pnpm install  # or npm install
   pnpm run dev  # or npm run dev
   ```
