# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```


## Prerequisites for Setting Up a React eCommerce App

Before you begin, ensure that you have the following installed on your machine:

1. **Node.js (v14.18+ or v16.0+)**
   - Ensure that you have Node.js installed. Vite requires a Node.js version of 14.18+ or 16.0+.
   - You can check your Node.js version by running:
     ```bash
     node -v
     ```
   - [Download Node.js](https://nodejs.org/) if you don't have it installed.

2. **npm (v6.14+ or v7.0+) or Yarn (v1.22.5+)**
   - npm is included with Node.js, but you can also use Yarn as an alternative package manager.
   - You can check your npm version by running:
     ```bash
     npm -v
     ```
   - For Yarn, check the version by running:
     ```bash
     yarn -v
     ```
   - [Install Yarn](https://classic.yarnpkg.com/en/docs/install) if you prefer using it over npm.

3. **Vite**
   - While Vite will be installed as part of your project setup, make sure you're familiar with it.
   - You can install Vite globally (optional) using npm:
     ```bash
     npm install -g vite
     ```
   - Or with Yarn:
     ```bash
     yarn global add vite
     ```


4. **Code Editor**
   - A code editor like [Visual Studio Code](https://code.visualstudio.com/) is recommended, as it provides excellent support for JavaScript, TypeScript, and ESLint.

5. **Git (optional)**
   - While not mandatory, using Git for version control is highly recommended.
   - You can check your Git version by running:
     ```bash
     git --version
     ```
   - [Install Git](https://git-scm.com/) if it's not already installed.
