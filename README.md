# Portfolio (Vue 3 + Vite)

## GitHub Pages deployment flow

This repo is configured to deploy automatically to GitHub Pages with GitHub Actions.

### One-time setup on GitHub

1. Push this repo to GitHub.
2. Go to `Settings` -> `Pages`.
3. In `Build and deployment`, set `Source` to `GitHub Actions`.
4. Ensure your default branch is `main`.

### Day-to-day deploy flow

1. Commit your changes.
2. Push to `main`.
3. GitHub Actions runs `.github/workflows/deploy-pages.yml`.
4. After workflow succeeds, site is updated on GitHub Pages.

### Notes

1. For repo pages (`<owner>/<repo>`), base path is auto-set to `/<repo>/`.
2. For user pages (`<owner>.github.io`), base path is auto-set to `/`.
3. A SPA fallback (`404.html`) is generated to reduce refresh 404 issues on Vue Router routes.
