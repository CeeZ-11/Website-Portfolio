// Turns one Speed Engine audit (its reports folder) into the public demo data at
// public/demos/speed-engine/data.json.
//
// Usage: node scripts/build-speed-engine-demo.mjs <audit reports folder>
//
// Only allow-listed fields are copied, so nothing new the engine adds later can
// leak into the public demo. In particular the team's internal playbook
// matches are left out, and the build fails if a blocked word (see
// demo-guard.mjs) or a local file path shows up in the output.
import fs from 'node:fs';
import path from 'node:path';
import { writeDemoData } from './demo-guard.mjs';

const dir = process.argv[2];
if (!dir) {
  console.error('Usage: node scripts/build-speed-engine-demo.mjs <audit reports folder>');
  process.exit(1);
}
const read = (name) => JSON.parse(fs.readFileSync(path.join(dir, name), 'utf8'));
const site = read('site.json');
const metrics = read('metrics.json');
const rootCauses = read('root-causes.json');
const priorities = new Map(read('recommendations.json').map((r) => [r.findingId, r.priority]));

const vital = (v) => (v ? { valueMs: v.valueMs, value: v.value, rating: v.rating } : undefined);

// The engine reports a finding once per device; the demo shows each problem once.
const seen = new Set();
const findings = [];
for (const f of rootCauses) {
  const key = `${f.metric}|${f.rootCause}`;
  if (seen.has(key)) continue;
  seen.add(key);
  findings.push({
    priority: priorities.get(f.id) ?? 'P2',
    metric: f.metric,
    severity: f.severity,
    confidence: f.confidence,
    rootCause: f.rootCause,
    evidence: (f.evidence ?? []).map((e) => ({ statement: e.statement, kind: e.kind })),
    culprit: f.culprit ? { description: f.culprit.description, url: f.culprit.url } : undefined,
    recommendation: f.recommendation,
    implementationGuidance: f.implementationGuidance,
    codeExample: f.codeExample
      ? { language: f.codeExample.language, before: f.codeExample.before, after: f.codeExample.after }
      : undefined,
    relatedResources: (f.relatedResources ?? []).filter((u) => u.startsWith('https://')),
  });
}
const order = { P0: 0, P1: 1, P2: 2, P3: 3 };
findings.sort((a, b) => order[a.priority] - order[b.priority]);

const out = {
  site: {
    url: site.targetUrl,
    auditedAt: site.completedAt,
    averageScore: site.averagePerformanceScore,
  },
  devices: metrics.map((m) => ({
    device: m.device,
    score: Math.round(m.performanceScore * 100),
    vitals: Object.fromEntries(Object.entries(m.vitals).map(([k, v]) => [k, vital(v)])),
  })),
  findings,
};

const written = writeDemoData('speed-engine', out);
console.log(`Wrote ${findings.length} findings for ${out.site.url} -> ${written}`);
