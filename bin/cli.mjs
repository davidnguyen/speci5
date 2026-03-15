#!/usr/bin/env node

import { cpSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createInterface } from 'node:readline';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PKG_ROOT = resolve(__dirname, '..');
const CWD = process.cwd();

const SKILLS = [
  'speci5.brainstorm',
  'speci5.check',
  'speci5.plan',
  'speci5.specify',
];

const command = process.argv[2];
const force = process.argv.includes('--force');

async function main() {
  switch (command) {
    case 'init':
      await init();
      break;
    case 'update':
      await update();
      break;
    default:
      printUsage();
      break;
  }
}

function printUsage() {
  const pkg = JSON.parse(readFileSync(join(PKG_ROOT, 'package.json'), 'utf8'));
  console.log(`
speci5 v${pkg.version} — Spec-Driven Development Framework

Usage: npx speci5 <command>

Commands:
  init     Install speci5 skills and config into the current project
  update   Update existing speci5 installation to latest version

Options:
  --force  Overwrite existing files without prompting
`);
}

async function init() {
  console.log('\nspeci5 — Installing spec-driven development framework\n');

  const existing = [];
  if (existsSync(join(CWD, '.claude', 'skills'))) existing.push('.claude/skills/');

  if (existing.length > 0 && !force) {
    console.log('Found existing files:');
    existing.forEach(f => console.log(`  ${f}`));

    const answer = await confirm('\nOverwrite? (y/N) ');
    if (!answer) {
      console.log('Aborted.\n');
      process.exit(0);
    }
  }

  copyFiles();
  createSpecDir();

  console.log(`
Done! speci5 installed successfully.

Next steps:
  1. Skills are available as /slash commands in Copilot Chat
  2. Start with: /speci5.brainstorm to capture an idea
  3. Then: /speci5.specify -> /speci5.plan -> /speci5.check
`);
}

async function update() {
  console.log('\nspeci5 — Updating to latest version\n');
  copyFiles();
  console.log('\nDone! speci5 updated successfully.\n');
}

function copyFiles() {
  // Copy each skill
  for (const skill of SKILLS) {
    const skillSrc = join(PKG_ROOT, '.claude', 'skills', skill);
    const skillDest = join(CWD, '.claude', 'skills', skill);
    mkdirSync(skillDest, { recursive: true });
    cpSync(skillSrc, skillDest, { recursive: true });
    console.log(`  .claude/skills/${skill}/`);
  }
}

function createSpecDir() {
  const specDir = join(CWD, '.spec', 'ideas');
  if (!existsSync(specDir)) {
    mkdirSync(specDir, { recursive: true });
    console.log('  .spec/ideas/');
  }
  const featuresDir = join(CWD, '.spec', 'features');
  if (!existsSync(featuresDir)) {
    mkdirSync(featuresDir, { recursive: true });
    console.log('  .spec/features/');
  }
}

function confirm(prompt) {
  const rl = createInterface({ input: process.stdin, output: process.stdout });
  return new Promise(resolve => {
    rl.question(prompt, answer => {
      rl.close();
      resolve(answer.toLowerCase() === 'y');
    });
  });
}

main().catch(err => {
  console.error(`Error: ${err.message}`);
  process.exit(1);
});
