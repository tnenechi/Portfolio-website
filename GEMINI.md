# Project Overview

This is a personal portfolio website built with React and TypeScript, using Vite as the build tool. It showcases various projects, an 'About Me' section, and contact information. The application leverages modern web technologies for a smooth and interactive user experience, including:

*   **Frontend Framework:** React.js
*   **Language:** TypeScript
*   **Build Tool:** Vite
*   **Styling:** Tailwind CSS with DaisyUI for components
*   **Animations:** GSAP (GreenSock Animation Platform) and Framer Motion for dynamic UI elements
*   **Routing/Navigation:** `react-anchor-link-smooth-scroll` for smooth in-page navigation.
*   **Form Handling:** `@emailjs/browser` for handling contact form submissions.
*   **Icons:** `@heroicons/react`

The project structure is organized into `components`, `pages`, and `shared` modules within the `src` directory. Static assets like images, videos, and documents are stored in the `public` directory.

# Building and Running

To get the project up and running locally, follow these steps:

1.  **Install Dependencies:**
    ```bash
    npm install
    # or if you use pnpm
    pnpm install
    ```

2.  **Development Server:**
    To start the development server with hot-reloading:
    ```bash
    npm run dev
    # or
    pnpm dev
    ```
    The application will typically be available at `http://localhost:5173`.

3.  **Build for Production:**
    To build the project for production, which compiles TypeScript and optimizes assets:
    ```bash
    npm run build
    # or
    pnpm build
    ```
    The production-ready files will be output to the `dist` directory.

4.  **Preview Production Build:**
    To locally serve the production build:
    ```bash
    npm run preview
    # or
    pnpm preview
    ```

5.  **Linting:**
    To run ESLint for code quality checks:
    ```bash
    npm run lint
    # or
    pnpm lint
    ```

# Development Conventions

*   **TypeScript:** The project is written entirely in TypeScript, enforcing type safety and improving code maintainability.
*   **ESLint:** Code quality and consistency are maintained using ESLint, configured with specific rules for React, TypeScript, and React hooks, as defined in `eslint.config.js`.
*   **Component-Based Architecture:** The UI is structured using reusable React components (in `src/components`) and distinct pages (in `src/pages`).
*   **Shared Utilities:** Common types, constants, and data (like project details in `src/shared/myProjects.ts`) are stored in the `src/shared` directory.
*   **Asset Management:** Images and videos for projects are organized within the `public/images/projects` and `public/videos/projects` directories, respectively.
