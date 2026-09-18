#!/usr/bin/env node
// tools/check-policy.mjs - refuses to let a record be published that breaks POLICY.md.
// Fails closed: any finding, or zero records examined, exits non-zero.
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join } from 'node:path';

const DENY = [
  [/\b(vikram|vikra|kumar)\b/i,                 'personal name or account'],
  [/@[a-z0-9.-]+\.(com|org|net|uk)\b/i,         'email address'],
  [/[A-Za-z]:\\|\/mnt\/[a-z]\/|AppData|Users\\/, 'local file path'],
  [/ssh-(ed25519|rsa)|SHA256:[A-Za-z0-9+/]{20,}/, 'key material or fingerprint'],
  [/\b(gitlab|glab|bitbucket)\b/i,              'named hosting provider'],
  [/\b(ollama|qwen|deepseek|llama)\b/i,         'named local model'],
  [/\b(token|password|secret|api[_ -]?key)\b/i, 'credential word'],
  [/£|\$[0-9]|\beuro\b|\bbudget\b|\bspend\b|\bcredit\b/i, 'financial detail'],
  [/\b(UKPN|NESO|National Grid|TenneT|LEONI|Gridserve|Ampyr|SMA|Siemens|Vestas|RWE|Honeywell|Lapp)\b/, 'named third party organisation'],
  [/\b(Gita|Upanishad|Vedic|Haridwar|Domesday|Magna Carta|Portia|Shakespeare)\b/i, 'philosophical or literary framing'],
  [/\bUnreal\b|\bcompetitor\b|\brival\b/i,      'comparative claim'],
  [/\b(MSI|Alienware)\b/,                       'machine identifier'],
];
const REQUIRED = ['record', 'date', 'source_digest'];

const dir = 'records';
if (!existsSync(dir)) { console.error('FAIL: no records directory. A check that examines nothing refuses.'); process.exit(1); }
const files = readdirSync(dir).filter(f => f.endsWith('.md'));
if (files.length === 0) { console.error('FAIL: zero records examined.'); process.exit(1); }

let findings = 0;
for (const f of files) {
  const p = join(dir, f);
  const raw = readFileSync(p, 'utf8').split(String.fromCharCode(13)).join('').replace(/^﻿/, '');  // key is over LF normalised content

  const fm = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!fm) { console.error(`FAIL ${f}: no front matter`); findings++; continue; }
  const fmLines = fm[1].split(String.fromCharCode(10));
  const field = (k) => {
    const line = fmLines.find(l => l.startsWith(k + ':'));
    return line ? line.slice(k.length + 1).trim() : '';
  };
  for (const k of REQUIRED) {
    if (!field(k)) { console.error('FAIL ' + f + ": front matter missing '" + k + "'"); findings++; }
  }
  const sd = field('source_digest');
  if (!/^[0-9a-f]{64}$/.test(sd)) { console.error('FAIL ' + f + ': source_digest is not a sha256'); findings++; }

  const body = raw.slice(fm[0].length);
  for (const [re, why] of DENY) {
    const m = body.match(re);
    if (m) { console.error(`FAIL ${f}: ${why} -> "${m[0]}"`); findings++; }
  }

  const key = createHash('sha256').update(Buffer.from(raw, 'utf8')).digest('hex');
  const index = existsSync('INDEX.md') ? readFileSync('INDEX.md', 'utf8') : '';
  if (index && !index.includes(key)) { console.error(`FAIL ${f}: key ${key} is not in INDEX.md`); findings++; }
}

console.log(`${files.length} records examined, ${findings} findings.`);
if (findings > 0) { console.error('REFUSED: publication policy not met.'); process.exit(1); }
console.log('Policy met.');
