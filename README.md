# Pixelforge — Creative Studio Portfolio

A bold, colorful, multi-page portfolio website for a fictional creative agency.
Built with Vite, React 18, TypeScript, Tailwind CSS v3, React Router v6,
Framer Motion, and React Three Fiber.

Pixelforge is a made-up studio that does branding, visual identity, motion,
illustration, and web. The site is a playground: big type, sticker-style cards,
animated doodles, and real 3D objects you can poke at.

---

## Table of contents

- [Stack](#stack)
- [Requirements](#requirements)
- [Getting started](#getting-started)
- [Scripts](#scripts)
- [Project structure](#project-structure)
- [Design system](#design-system)
- [Content model](#content-model)
- [3D scenes](#3d-scenes)
- [Accessibility](#accessibility)
- [Performance](#performance)
- [Routes](#routes)
- [Customizing](#customizing)
- [Browser support](#browser-support)
- [License](#license)

---

## Stack

| Layer          | Choice                                              |
| -------------- | --------------------------------------------------- |
| Build tool     | Vite 5                                              |
| Framework      | React 18 + TypeScript (strict)                      |
| Styling        | Tailwind CSS v3 + PostCSS + Autoprefixer            |
| Routing        | React Router v6                                     |
| Animation      | Framer Motion, GSAP (available), lottie-react (available) |
| 3D             | three.js via `@react-three/fiber` + `@react-three/drei` + `@react-three/rapier` |
| Icons          | lucide-react                                        |
| Linting        | ESLint + Prettier                                   |

---

## Requirements

- **Node.js** 18.18+ (20 LTS recommended)
- **npm** 9+ (or pnpm / yarn — adjust commands accordingly)
- A modern browser with WebGL2 for the 3D scenes
  (Chrome, Edge, Firefox, Safari 16+)

---

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev