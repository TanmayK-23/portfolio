#!/bin/bash
git add package.json package-lock.json vite.config.ts tsconfig.* eslint.config.js index.html .gitignore
git commit -m "chore: initial project setup and configs"

git add src/index.css src/App.css src/vite-env.d.ts src/main.tsx src/components/ui/FadeIn.tsx src/components/ui/Magnet.tsx
git commit -m "feat: add base UI components, styling, and entry point"

git add src/components/sections/HeroSection.tsx public/
git commit -m "feat: implement hero section and assets"

git add src/components/sections/AboutSection.tsx src/components/sections/ServicesSection.tsx
git commit -m "feat: implement about and services sections"

git add src/components/sections/ProjectsSection.tsx src/components/sections/EducationSection.tsx
git commit -m "feat: implement projects and education sections"

git add src/components/sections/ContactSection.tsx src/components/ui/LegalModal.tsx
git commit -m "feat: implement contact section with Web3Forms and legal modal"

git add src/App.tsx
git commit -m "feat: assemble main application structure"

git add .
git commit -m "fix: final layout adjustments and polishing"
