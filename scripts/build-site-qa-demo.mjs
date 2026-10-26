// Turns Site QA reports (each site's report.json) into the public demo data at
// public/demos/site-qa/data.json.
//
// Usage: node scripts/build-site-qa-demo.mjs <report.json> [<report.json> ...]
//
// Only allow-listed fields are copied: no page HTML snippets and no image alt
// text (which can name people). The build fails if a company name, a
// teammate's name or a local file path shows up in the output.
import fs from 'node:fs';
import { writeDemoData } from './demo-guard.mjs';

const files = process.argv.slice(2);
if (files.length === 0) {
  console.error('Usage: node scripts/build-site-qa-demo.mjs <report.json> [<report.json> ...]');
  process.exit(1);
}

// Social networks answer automated checks with these codes even when the link works.
const BOT_BLOCKED = { 'linkedin.com': 999, 'facebook.com': 400, 'instagram.com': 429 };
const likelyBotBlock = (href, status) =>
  Object.entries(BOT_BLOCKED).some(([host, code]) => new URL(href).host.endsWith(host) && status === code);
const relative = (site, url) => (url.startsWith(site) ? url.slice(site.length) || '/' : url);

const sites = files.map((file) => {
  const r = JSON.parse(fs.readFileSync(file, 'utf8'));
  const rel = (url) => relative(r.site, url);
  const flat = (groups, key) => groups.flatMap((g) => g[key].map((item) => ({ page: rel(g.page ?? g.url), ...item })));

  const wrapping = new Map();
  for (const f of flat(r.wrapping, 'findings')) {
    const k = `${f.page}|${f.tag}.${(f.classes || '').split(' ')[0]}`;
    const w = wrapping.get(k) ?? { page: f.page, element: `<${f.tag}${f.classes ? ` class="${f.classes.slice(0, 40)}…"` : ''}>`, viewports: [] };
    if (!w.viewports.includes(f.viewport)) w.viewports.push(f.viewport);
    wrapping.set(k, w);
  }

  return {
    site: r.site,
    auditedAt: r.auditedAt,
    pagesAudited: r.pagesAudited,
    accessibility: r.adaCompliance.flatMap((p) =>
      p.violations.map((v) => ({
        page: rel(p.url),
        rule: v.id,
        impact: v.impact,
        help: v.help,
        helpUrl: v.helpUrl,
        elements: v.nodes.length,
        example: v.nodes[0]?.target?.join(' ') ?? '',
      })),
    ),
    brokenLinks: flat(r.brokenLinks, 'links').map((l) => ({
      page: l.page,
      href: rel(l.href),
      status: l.status,
      text: l.text,
      likelyBotBlock: likelyBotBlock(l.href, l.status),
    })),
    ambiguousLinks: flat(r.ambiguousLinks, 'links').map((l) => ({ page: l.page, href: rel(l.href), text: l.text, reason: l.reason })),
    oversizedImages: flat(r.oversizedImages, 'images').map((i) => ({ page: i.page, src: rel(i.src), width: i.width, height: i.height })),
    h1Issues: r.h1Issues.length,
    duplicateMeta: r.duplicateMeta.length,
    wrapping: [...wrapping.values()],
  };
});

const written = writeDemoData('site-qa', { sites });
console.log(`Wrote ${sites.length} site(s) -> ${written}`);
