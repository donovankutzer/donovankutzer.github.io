# Donovankutzer Portfolio Site

A Next.js static site built for and hosted on GitHub Pages.

## 🚀 Development

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (version 18 or above recommended). This project uses NVM for Node version management.

### Installation
Install the project dependencies:
```bash
npm install
```

### Running Locally
Start the local development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view your site.

---

## 📦 Deployment to GitHub Pages

This project is configured as a static site and is set up to deploy using the `gh-pages` npm package.

### How to Deploy
Run the following single command from your local machine to build and deploy your site:
```bash
npm run deploy
```

### What this command does:
1. **Pre-build (`npm run build`)**: Generates an optimized static HTML/CSS/JS export inside the `out/` folder using Next.js static exports (`output: 'export'`).
2. **Jekyll Bypass**: Includes the `public/.nojekyll` file in the build folder to ensure GitHub Pages does not run Jekyll (which would otherwise break folders starting with an underscore like `_next`).
3. **Deployment**: Pushes the contents of your local `out/` folder to the `gh-pages` branch on GitHub.

### One-Time GitHub Configuration
To ensure GitHub Pages hosts your site from the correct branch:
1. Go to your repository on GitHub.
2. Navigate to **Settings** > **Pages**.
3. Under **Build and deployment** -> **Source**, choose **Deploy from a branch**.
4. Set the branch to `gh-pages` and folder to `/ (root)`.
5. Click **Save**.
