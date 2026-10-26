// Turns Visibility scans (each site's scan.json) into the public demo data at
// public/demos/visibility/data.json.
//
// Usage: node scripts/build-visibility-demo.mjs <scan.json> [<scan.json> ...]
//          [--before <earlier scan.json> --fix <commit URL>]
//
// --before attaches an earlier scan of the same site so the page can show a
// before/after fix story; --fix links the change that fixed it.
//
// Only allow-listed fields are copied. Insight IDs are dropped because they
// point to an internal plan, and the build fails if any company name or local
// file path shows up in the output.
import fs from 'node:fs';
import { writeDemoData } from './demo-guard.mjs';

const args = process.argv.slice(2);
const option = (name) => {
  const i = args.indexOf(`--${name}`);
  return i > -1 ? args.splice(i, 2)[1] : undefined;
};
const beforeFile = option('before');
const fixUrl = option('fix');
if (args.length === 0) {
  console.error('Usage: node scripts/build-visibility-demo.mjs <scan.json> [<scan.json> ...] [--before <scan.json> --fix <url>]');
  process.exit(1);
}

const read = (file) => JSON.parse(fs.readFileSync(file, 'utf8'));
const insights = (s) =>
  s.insights.map((i) => ({
    severity: i.severity,
    title: i.title,
    detail: i.detail,
    action: i.action,
    evidence: i.evidence,
    pages: i.pages ?? [],
  }));

const before = beforeFile ? read(beforeFile) : null;
const sites = args.map((file) => {
  const s = read(file);
  const site = {
    site: s.site,
    scannedAt: s.scannedAt,
    pagesScanned: s.pages.length,
    robotsFound: s.robots.found,
    sitemap: { found: s.sitemap.found, urls: s.sitemap.urls },
    llmsTxt: s.llmsTxt,
    crawlers: s.robots.crawlers.map((c) => ({ agent: c.agent, company: c.company, purpose: c.purpose, allowed: c.allowed })),
    insights: insights(s),
  };
  if (before?.site === s.site) {
    site.before = {
      scannedAt: before.scannedAt,
      robotsFound: before.robots.found,
      sitemap: { found: before.sitemap.found, urls: before.sitemap.urls },
      insights: insights(before),
      fixUrl,
    };
  }
  return site;
});
if (before && !sites.some((s) => s.before)) {
  console.error(`--before is a scan of ${before.site}, which isn't one of the sites given.`);
  process.exit(1);
}

const written = writeDemoData('visibility', { sites });
console.log(`Wrote ${sites.length} site(s)${before ? ` with a before scan of ${before.site}` : ''} -> ${written}`);
