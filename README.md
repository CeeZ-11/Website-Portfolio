# Seamor Estrabon – Portfolio

My personal portfolio: about me, resume, projects, live demos of the tools I build at work, and a
contact form.

**Live:** https://website-portfolio-nine-beige.vercel.app/

## What's inside

- **About, Resume, Portfolio and Contact** pages (React with hash routes, e.g. `#/portfolio`).
- **Portfolio** cards for personal, Odin Project and work projects.
- **Work demos** in `public/demos/`, plain HTML pages served as-is:
  Speed Engine, Visibility Scanner, Analytics Health, Site QA and Command Center. Each one uses
  public sites I own or fictional sample data, never client data.
- **Contact** form (EmailJS + reCAPTCHA) and a map.

Built with React 19, Vite, React Router, MUI and Vitest. Hosted on Vercel.

## Run it locally

Needs Node 22 or newer.

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run lint
npx vitest run    # tests
```

The contact form and map need keys. Put them in a `.env` file (never commit it):

```
VITE_GOOGLE_MAPS_API_KEY=
VITE_IP_GEO_API_KEY=
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
VITE_RECAPTCHA_SITE_KEY=
```

`.env.example` lists the same names. On Vercel, set them under
**Settings → Environment Variables** for Production.

## Rebuilding the demo data

The `scripts/build-*-demo.mjs` scripts turn a tool's output into a demo's `data.json`. They copy only
allow-listed fields and refuse to write anything containing a word from
`scripts/demo-blocklist.local` (git-ignored; start from `scripts/demo-blocklist.example`).
