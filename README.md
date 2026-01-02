# Celunox

A premium, high-performance digital agency portfolio built with **Next.js 15**, **Tailwind CSS**, and **Framer Motion**. Celunox is designed to showcase creative work, services, and pricing with a modern, sleek aesthetic featuring glassmorphism effects and fluid animations.

![Project Banner](public/og-image.jpg) <!-- Optional: Add a real banner path if available later -->

## 🚀 Tech Stack

- **Framework:** [Next.js 15 (App Router)](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Deployment:** [Vercel](https://vercel.com/)

## ✨ Features

- **Responsive Design:** Fully optimized for mobile, tablet, and desktop devices.
- **Modern UI/UX:** Clean architecture with dark mode aesthetics, glassmorphism, and subtle micro-interactions.
- **Smooth Animations:** Integrated scroll-triggered animations and hover effects using Framer Motion.
- **Dynamic Sections:**
  - **Hero:** Impactful landing area with call-to-actions.
  - **Services:** Grid layout highlighting core offerings.
  - **Work / Portfolio:** Showcase of projects with dynamic routing.
  - **Testimonials:** Client feedback slider/grid.
  - **Pricing:** Clear pricing tiers with popular plan highlighting.
  - **Contact:** Functional contact form layout.
- **Navigation:** Smooth scroll navigation to page sections with active state tracking.

## 🛠️ Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/AzamCodes/celunox.git
    cd celunox
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

```bash
src/
├── app/                  # App Router directories
│   ├── components/       # Reusable components
│   │   ├── layout/       # Navbar, Footer
│   │   └── sections/     # Page sections (Hero, Services, etc.)
│   ├── fonts/            # Local fonts
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Main entry page
├── components/           # UI Layout components (Buttons, AnimatedBeam, etc.)
└── lib/                  # Utility functions and variant definitions
```

## 🚀 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

1.  Push your code to a Git repository (GitHub, GitLab, Bitbucket).
2.  Import your project into Vercel.
3.  Vercel will detect Next.js and deploy automatically.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
