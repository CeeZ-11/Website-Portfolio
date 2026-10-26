# Seamor Estrabon – Portfolio

My personal portfolio: about me, resume, projects and live demos of the tools I build at work.

**Live:** https://website-portfolio-nine-beige.vercel.app/

## What's inside

- **About, Resume and Portfolio** pages (React with hash routes, e.g. `#/portfolio`).
- **Portfolio** cards for personal, Odin Project and work projects.
- **Work demos** in `public/demos/`, plain HTML pages served as-is:
  Speed Engine, Visibility Scanner, Analytics Health, Site QA and Command Center. Each one uses
  public sites I own or fictional sample data, never client data.

Built with React 19, Vite, React Router and Vitest. Hosted on Vercel.

## Run it locally

Needs Node 22 or newer.

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run lint
npx vitest run    # tests
```

No API keys are needed to run the site.

## Rebuilding the demo data

The `scripts/build-*-demo.mjs` scripts turn a tool's output into a demo's `data.json`. They copy only
allow-listed fields and refuse to write anything containing a word from
`scripts/demo-blocklist.local` (git-ignored; start from `scripts/demo-blocklist.example`).
