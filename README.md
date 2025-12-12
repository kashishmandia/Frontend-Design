# Frontend Assessment - Test Your Knowledge UI

A pixel-perfect implementation of a desktop web interface based on provided Figma specifications. This project demonstrates proficiency in modern frontend development, specifically focusing on **React**, **TypeScript**, and **Tailwind CSS**.

![Project Preview](./public/assets/preview.png)
*(Note: Replace with an actual screenshot of your finished app)*

## 📋 Overview

This assignment evaluates the ability to translate a high-fidelity design into a functional, interactive web application. The goal was to build a "Test Your Knowledge" quiz interface featuring a distinct **Glassmorphism** aesthetic, complex background layering, and smooth interactive states.

## 🚀 Technologies Used

* **Framework:** [React](https://react.dev/) (v18)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Fonts:** Google Fonts (Playfair Display, Inter, Caveat)

## ✨ Key Features

* **Pixel-Perfect Design:** meticulously matched typography, spacing, and colors to the original Figma design.
* **Glassmorphism UI:** Implemented advanced CSS backdrop filters (`backdrop-blur-xl`, `bg-clip-padding`) to create a realistic frosted glass effect with transparent borders.
* **Interactive Quiz Logic:**
    * State management for tracking user answers.
    * Dynamic progress bar segments.
    * Score calculation and result display.
* **Polished Animations:** Smooth transitions on hover states, buttons, and page renders.
* **Type Safety:** Full TypeScript implementation for robust and maintainable code.

## 🛠️ Installation & Setup

Follow these steps to run the project locally:

1.  **Clone the repository:**
    ```bash
    git clone <your-repo-url>
    cd <your-project-folder>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open in Browser:**
    Navigate to `http://localhost:5173` (or the port shown in your terminal).

## 📂 Project Structure

```bash
├── src
│   ├── assets        # Images (cloud backgrounds, etc.)
│   ├── App.tsx       # Main component containing Quiz Logic & UI Layout
│   ├── index.css     # Tailwind imports and global styles
│   └── main.tsx      # React entry point
├── public            # Static assets
├── tailwind.config.js # Custom theme configuration (Fonts, Colors, Shadows)
└── package.json