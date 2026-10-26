# PMW Speed Engine: case study (draft)

Status: draft for review. Not published. Items marked **[YOU]** need your input, and the whole
page needs your manager's OK before it goes on the site (it describes Rentvine / PMW work).

---

## One-liner

A website speed auditing tool that finds *why* a page is slow, not just *that* it is slow, and
turns the answer into plain-English fixes a developer or client can act on.

## At a glance

| | |
|---|---|
| **Role** | Sole developer: design, build, testing, release **[YOU: confirm]** |
| **When** | Aug 2026 to now (172 commits so far) |
| **Type** | Internal tool for a property-management website team |
| **Stack** | TypeScript, Node.js, Playwright, Lighthouse, Chrome DevTools Protocol, PageSpeed Insights API, SQLite, Electron, GitHub Actions, n8n, Slack |
| **Size** | About 36,000 lines of TypeScript, 140+ test files |
| **Runs as** | Desktop app (macOS; Windows build exists but is untested), local web dashboard, command line, and a weekly cloud pipeline |

## The problem

The team manages many client websites. Google's PageSpeed score told them a page was slow, but
not what to change. Each investigation meant hours in Chrome DevTools, and the answer was hard to
explain to clients or hand to a developer.

**[YOU]** Add one real detail, without client names. For example: how many sites the team looks
after, or how long a manual speed investigation used to take.

## What I built

An engine that loads every page the way Google does, records the evidence, and explains it.

1. **Crawls the site** and picks the pages to test (1, 5, 20 or any number).
2. **Tests each page on mobile and desktop** with Lighthouse, plus a second instrumented load
   through the Chrome DevTools Protocol that records every request, long task and layout shift.
3. **Adds real-visitor data** from Google (PageSpeed Insights and the Chrome UX Report, including
   up to 40 weeks of history).
4. **Finds the root cause** with a rule engine per metric (LCP, CLS, INP, TBT, FCP, TTFB). Every
   finding points to its evidence: the exact file, element or line of HTML.
5. **Optionally asks AI** (OpenAI or Gemini) to prioritise the findings, using only the measured
   evidence, with the answer checked against a schema.
6. **Reports it** as a dashboard, a self-contained HTML report, PDF, CSV, and a one-page client
   summary.

## Highlights

- **"Fix this first."** The top three fixes in plain English: who usually does it, how big a job
  it is, and how much of the problem it explains.
- **Try a fix before touching the site.** The engine loads the page 3 times as-is and 3 times
  with the fix applied in its own browser, then shows the before/after difference.
- **Lab tap test for INP.** It safely taps menus, tabs and accordions on a slowed-down CPU and
  times the response, so slow interactions show up without waiting for real-visitor data.
- **Source code view.** Each finding shows the exact line in the page's HTML and a ready-to-paste
  fix, plus the critical CSS the first screen needs.
- **Copy for developer.** One click makes a ready-to-paste ticket with the evidence and fix.
- **Platform aware.** Detects WordPress, Shopify, Wix, Squarespace, Webflow and others, and gives
  click-by-click steps for that platform.
- **Plain-language layer.** Glossary tooltips, a simple/detailed switch and a "why are these
  numbers different?" explainer, so non-developers can use it.

## Automation

A weekly check (n8n) finds failing pages and starts a deep audit in GitHub Actions. The results
go to a password-protected, encrypted web dashboard and a summary is posted to Slack. Teammates
can also request an audit from Slack and get the report back in the same thread.

## Engineering decisions worth mentioning

- **Evidence only, no guessing.** Collectors record numbers; a separate analysis layer interprets
  them. The engine never shows a result it did not actually measure.
- **One page failing never stops the audit.** Errors are recorded per page and the run continues.
- **Fast.** Lighthouse runs in parallel worker processes, overlapped with the other collectors.
- **Safe by default.** The local dashboard only listens on this computer, blocks DNS-rebinding
  and cross-site requests, and refuses to audit private network addresses. The published
  dashboard is encrypted (AES-256-GCM) with hashed file names, so even the list of sites is hidden.
- **Tested without the internet.** Tests use a local fixture site, recorded API responses and a
  mocked AI provider.

## Results

**[YOU]** This section matters most to a reader. Use rounded or relative numbers you are allowed
to share, for example:

- Time to diagnose a slow page: from about __ hours to __ minutes
- Sites audited per week: about __
- A typical win: "LCP improved from __ s to __ s after the top fix" (no client name)
- Who uses it: __ people on the team, including non-developers

## What I learned

**[YOU]** Two or three sentences in your own words. Ideas: why lab and real-visitor numbers
disagree, building for non-developers, working with AI tools on a large codebase.

## Links

- Live demo: (see the demo plan below)
- Video walkthrough: (to record)
- Source code: private (company project)

---

# Demo plan: using public sites only

## What can and can't be shown

- **The engine itself can't be hosted publicly.** It drives a real Chrome browser and only runs
  on a computer or in GitHub Actions. That is fine: the demo shows its *output*.
- **Good news:** the engine already has an `export-site` command that turns stored audits into a
  static web dashboard, the same one the team uses. A demo is mostly "run it on safe sites and
  publish the result".
- **Keep out of the demo:** client sites (the local `reports/` folder has real client domains),
  the team's audit database, API keys, the Slack/n8n setup, and the source code.
- **Check with your manager:** the "PMW guide" panel shows the team's internal performance
  playbook and case studies (`src/knowledge/`). Either get an OK to show it, or hide that panel
  in the demo build.

## Which sites to audit

Use sites you own, so the findings embarrass no one:

1. Your portfolio: website-portfolio-nine-beige.vercel.app
2. WedSnap: wed-snap-nine.vercel.app
3. Wedding RSVP: wedding-rsvp-bay-iota.vercel.app
4. One or two Odin projects on ceez-11.github.io
5. **A purpose-built "slow demo site"** (recommended): a small page with deliberate problems
   (huge hero image, render-blocking scripts, layout shift, a slow tap handler). It shows off
   every feature, and you can publish a "before and after fix" pair, which is the best story.

## Steps

1. Build the slow demo site and deploy it (Vercel). **Done when:** it scores badly in PageSpeed
   Insights for known, intended reasons.
2. In a separate demo database (not the team's), audit the 4 to 5 public sites above, then re-audit
   the slow site after fixing it. **Done when:** the dashboard shows the demo audits only.
3. Export with `export-site` to a new public repo under your account, with a demo password shown
   on the portfolio (or add a no-encryption option for demo exports). **Done when:** the demo
   dashboard opens from a public link and shows no client data.
4. Record a 1 to 2 minute walkthrough of the desktop app on the same demo data. **Done when:**
   the video is uploaded and linked.
5. Add the project card and this case study to the portfolio's Portfolio page. **Done when:** it
   is live and the manager has approved the wording.

## Open questions

- Is your manager OK with naming Rentvine / PMW, or should it say "a property-management
  software company"?
- May the PMW playbook content appear in the demo, or should it be hidden?
- Which result numbers may be shared?
