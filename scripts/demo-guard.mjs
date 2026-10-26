// Shared last step for the build-*-demo.mjs scripts: refuse to write public demo
// data that contains a blocked word, then write public/demos/<demo>/data.json.
//
// The blocked words (company, client and people's names) live in
// scripts/demo-blocklist.local, one per line, which git ignores so the names
// never land in this public repo. Copy demo-blocklist.example to start one.
// Without that file every build stops, so a fresh clone can't skip the check.
import fs from 'node:fs';
import path from 'node:path';

const BLOCKLIST = path.resolve(import.meta.dirname, 'demo-blocklist.local');
const ALWAYS_BLOCKED = [/\/Users\//, /\/private\/tmp/, /\/home\/[a-z]/];

function blockedWords() {
  if (!fs.existsSync(BLOCKLIST)) {
    console.error(`Missing ${path.relative(process.cwd(), BLOCKLIST)}. Copy scripts/demo-blocklist.example and fill it in.`);
    process.exit(1);
  }
  return fs
    .readFileSync(BLOCKLIST, 'utf8')
    .split('\n')
    .map((w) => w.trim())
    .filter((w) => w && !w.startsWith('#'));
}

/** Writes `data` as public/demos/<demo>/data.json, or exits if anything blocked is in it. */
export function writeDemoData(demo, data, { extraBlocked = [] } = {}) {
  const json = JSON.stringify(data, null, 1);
  const lower = json.toLowerCase();
  const words = blockedWords();
  const word = words.find((w) => lower.includes(w.toLowerCase()));
  const pattern = [...ALWAYS_BLOCKED, ...extraBlocked].find((re) => re.test(json));
  if (word || pattern) {
    // Name the blocklist line, not the word, so the word doesn't end up in terminal logs.
    console.error(`Refusing to write: found ${word ? `blocklist line "${words.indexOf(word) + 1}"` : `"${json.match(pattern)[0]}"`} in the ${demo} demo data.`);
    process.exit(1);
  }
  const target = path.resolve(import.meta.dirname, '..', 'public', 'demos', demo, 'data.json');
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, json + '\n');
  return path.relative(process.cwd(), target);
}
