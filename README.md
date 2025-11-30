# React-TypeScript-Boilerplate 🧑‍🍳✨🚀
A lightweight React + TypeScript starter powered by Vite, Tailwind CSS, and clean @/src imports.
This template  includes Node type definitions and React Anchor Link Smooth Scroll typings for smoother development.

### Features

- Path aliasing (@/) for cleaner imports

- Type definitions for Node.js and react-anchor-link-smooth-scroll

### TypeScript Setup

This boilerplate uses a solution-style TypeScript setup, meaning the root tsconfig.json references two configs:

- tsconfig.app.json — application code

- tsconfig.node.json — Node-based files (e.g., vite.config.ts)

### Path Alias (@/ → src/)

Both configs include:
```sh
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

This allows importing with:

`import Component from "@/components/Component" `

instead of something like:
`import Component from "../../src/components/Component" `


### Additional Packages Installed
`@types/node`

Provides TypeScript type definitions for Node.js, enabling features like __dirname, path, and other Node APIs inside config files.

`@types/react-anchor-link-smooth-scroll`

Adds TypeScript support for the react-anchor-link-smooth-scroll package, ensuring proper typing when using smooth-scroll anchor links in React.

# Vite Configuration

The project includes:
```sh
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
```


