# Tailwind setup for julitalvensaari.com

This version uses Tailwind CSS v4.3.3 with the Tailwind CLI. `index.html` contains the design as utility classes; `src/input.css` is the Tailwind entry point; `styles.css` is generated output.

## Local build

```bash
npm install
npm run build
```

For live rebuilding while editing:

```bash
npm run watch
```

## GitHub Pages

The repository includes `.github/workflows/pages.yml`. It installs the dependencies, runs the Tailwind build, assembles the static site, and deploys it to GitHub Pages.

In the repository settings, go to **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**.

After that, pushing to `main` will build and deploy the site automatically.

## Files

- `index.html` — page markup and Tailwind classes
- `script.js` — three-state section interaction
- `src/input.css` — Tailwind entry point and theme fonts
- `styles.css` — generated Tailwind output; do not edit by hand
- `package.json` — Tailwind CLI dependency and build scripts
- `.github/workflows/pages.yml` — GitHub Pages build/deploy workflow
- `.gitignore` — ignores Node/build artefacts
