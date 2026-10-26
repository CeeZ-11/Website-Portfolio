// Turns Visibility scans (each site's scan.json) into the public demo data at
// public/demos/visibility/data.json.
//
// Usage: node scripts/build-visibility-demo.mjs <scan.json> [<scan.json> ...]
//
// Only allow-listed fields are copied. Insight IDs are dropped because they
// point to an internal plan, and the build fails if any company name or local
// file path shows up in the output.
import fs from 'node:fs';
import { writeDemoData } from './demo-guard.mjs';

const files = process.argv.slice(2);
if (files.length === 0) {
  console.error('Usage: node scripts/build-visibility-demo.mjs <scan.json> [<scan.json> ...]');
  process.exit(1);
}

const sites = files.map((file) => {
  const s = JSON.parse(fs.readFileSync(file, 'utf8'));
  return {
    site: s.site,
    scannedAt: s.scannedAt,
    pagesScanned: s.pages.length,
    sitemap: { found: s.sitemap.found, urls: s.sitemap.urls },
    llmsTxt: s.llmsTxt,
    crawlers: s.robots.crawlers.map((c) => ({ agent: c.agent, company: c.company, purpose: c.purpose, allowed: c.allowed })),
    insights: s.insights.map((i) => ({
      severity: i.severity,
      title: i.title,
      detail: i.detail,
      action: i.action,
      evidence: i.evidence,
      pages: i.pages ?? [],
    })),
  };
});

const written = writeDemoData('visibility', { sites });
console.log(`Wrote ${sites.length} site(s) -> ${written}`);
