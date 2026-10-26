// Turns the Analytics Health app's fictional sample data into the public demo
// data at public/demos/analytics-health/data.json.
//
// Usage: node scripts/build-analytics-health-demo.mjs <sample.json>
//
// <sample.json> is the app's mock provider output: { summary, sites, details, history }.
// Only allow-listed fields are copied (no portfolio groups, GA4 property IDs or
// page-view inventory), and the build fails if a company name, a client-group
// name, a real-looking GA4 measurement ID or a local file path shows up.
import fs from 'node:fs';
import { writeDemoData } from './demo-guard.mjs';

const file = process.argv[2];
if (!file) {
  console.error('Usage: node scripts/build-analytics-health-demo.mjs <sample.json>');
  process.exit(1);
}
const sample = JSON.parse(fs.readFileSync(file, 'utf8'));

// The sample "wrong measurement ID" scenario uses a real-looking ID; swap in an obvious placeholder.
const maskIds = (s) => s?.replace(/G-(?!XXX)[A-Z0-9]{8,}/g, 'G-XXX0WRONG0');
const totals = (t) => (t ? { users: t.users, sessions: t.sessions, events: t.events, conversions: t.conversions } : null);
const checkItems = (list) => list.map((c) => ({ label: c.label, result: c.result, detail: maskIds(c.detail) }));
const expected = (list) => list.map((e) => ({ name: e.name, result: e.result, count24h: e.count24h }));

const sites = sample.details.map((d) => {
  const history = sample.history[d.id];
  return {
    id: d.id,
    name: d.name,
    domain: d.domain,
    status: d.status,
    lastChecked: d.lastChecked,
    checks: d.checks,
    issueCounts: d.issueCounts,
    tracking: checkItems(d.tracking),
    ga4: checkItems(d.ga4),
    last24h: totals(d.last24h),
    events: expected(d.events),
    conversions: expected(d.conversions),
    issues: d.issues.map((i) => ({
      severity: i.severity,
      category: i.category,
      title: i.title,
      detail: maskIds(i.detail),
      comparison: i.comparison
        ? { metric: i.comparison.metric, previous: i.comparison.previous, current: i.comparison.current, changePct: i.comparison.changePct }
        : undefined,
    })),
    history: history ? history.days.map((day) => ({ date: day.date, sessions: day.sessions, conversions: day.conversions })) : [],
  };
});

const { generatedAt, lastRunAt, total, healthy, warning, critical } = sample.summary;
const written = writeDemoData('analytics-health', { summary: { generatedAt, lastRunAt, total, healthy, warning, critical }, sites }, { extraBlocked: [/G-(?!XXX)[A-Z0-9]{8,}/] });
console.log(`Wrote ${sites.length} sample sites -> ${written}`);
