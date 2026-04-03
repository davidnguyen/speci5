#!/usr/bin/env node

import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { homedir as osHomedir } from 'node:os';
import { printUsage, init, update } from './lib.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PKG_ROOT = resolve(__dirname, '..');
const CWD = process.cwd();
const HOME = osHomedir();

const command = process.argv[2];
const force = process.argv.includes('--force');
const userLevel = process.argv.includes('--user');

const ctx = { PKG_ROOT, CWD, HOME, force, userLevel };

async function main() {
  switch (command) {
    case 'init':
      await init(ctx);
      break;
    case 'update':
      await update(ctx);
      break;
    default:
      printUsage(ctx);
      break;
  }
}

main().catch(err => {
  console.error(`Error: ${err.message}`);
  process.exit(1);
});

