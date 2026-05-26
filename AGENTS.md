# Guidelines for AI Coding Agents

Welcome! This repository is configured for DataVec's public landing page. Follow the guidelines below to ensure clean tool usage, environment compatibility, and style alignment.

---

## 🚀 Environment & Command Execution (CRITICAL)

The local macOS system manages multiple Node.js environments via NVM. To execute any Node.js, NPM, or NPX commands successfully, you **MUST** prepend the explicit Node environment path to your execution string.

### 📌 Node path prefix:
`export PATH="/Users/donovankutzer/.nvm/versions/node/v24.15.0/bin:$PATH"`

#### Example usage in shell tools:
```bash
export PATH="/Users/donovankutzer/.nvm/versions/node/v24.15.0/bin:$PATH" && npm run build
```
```bash
export PATH="/Users/donovankutzer/.nvm/versions/node/v24.15.0/bin:$PATH" && npm run deploy
```

*Note: Failure to add this path prefix will result in command errors (e.g. `node not found` or incorrect Node/npm versions).*

---

## 🛠️ Tech Stack & Styling Guidelines

1.  **Strict TypeScript**:
    *   All components (`src/components/`) and app routes (`src/app/`) use **TypeScript (`.tsx` / `.ts`)**.
    *   Imports use the absolute path alias `@/` mapped to `./src/` (configured in `tsconfig.json`).
2.  **Component Libraries & Flexible Styling**:
    *   Dynamic component libraries (such as shadcn/ui, Mantine, Radix, or Chakra UI) and styling frameworks (such as Tailwind CSS or CSS Modules) are **fully permitted and encouraged** to facilitate robust theming and fast feature additions.
    *   Avoid strict pure custom CSS limits if external library components provide superior theming interfaces or interactive capabilities.
    *   Maintain button layouts with `white-space: nowrap` and `flex-shrink: 0` to prevent text wrapping in flex/grid containers.
3.  **Static Site Exports**:
    *   The project exports statically to `out/` and deploys cleanly to GitHub Pages via `npm run deploy` (which triggers `gh-pages`).
