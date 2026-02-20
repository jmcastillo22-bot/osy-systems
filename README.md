# OSY Systems Website (osy.systems)

## Overview
This repository contains the source code for the OSY Systems website, deployed at [osy.systems](https://osy.systems).

## Tech Stack
- **Frontend**: Static HTML/CSS/JavaScript
- **CMS**: Decap CMS (Git-based headless CMS)
- **Deployment**: Netlify (recommended) / GitHub Pages

## Repository Structure
```
osy-systems/
├── public/                  # Static site files (deploy root)
│   ├── index.html           # Main entry point
│   ├── css/                 # Stylesheets
│   ├── js/                  # JavaScript files
│   ├── images/              # Static images & assets
│   └── admin/               # Decap CMS admin panel
│       ├── index.html       # CMS interface
│       └── config.yml       # CMS configuration
├── content/                 # CMS-managed content
├── .github/workflows/       # CI/CD automation
│   └── deploy.yml           # Auto-deploy to GitHub Pages
├── netlify.toml             # Netlify build & deployment config
└── CNAME                    # Custom domain
```

## Deployment

### Option 1: Netlify (Recommended)
1. Connect this repo to [Netlify](https://netlify.com)
2. Set **Publish directory**: `public`
3. Add custom domain: `osy.systems`
4. Netlify auto-deploys on every push to `main`

### Option 2: GitHub Pages
1. Go to Settings > Pages
2. Set source: GitHub Actions
3. The workflow in `.github/workflows/deploy.yml` handles deployment
4. Add custom domain: `osy.systems`

## Local Development
```bash
# Serve locally
npx serve public
```

## DNS Configuration (DigitalOcean)
Domain `osy.systems` is managed via DigitalOcean DNS.
Point `A` record to Netlify's load balancer or `CNAME` to your Netlify subdomain.
