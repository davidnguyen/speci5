import { describe, it, before, after, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, existsSync, readFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

import {
  readConfig,
  writeConfig,
  deleteExistingSkills,
  copyFiles,
  createSpecDir,
  printUsage,
  init,
  update,
} from './lib.mjs';

// Silence console output during tests
const noop = () => {};
const silence = () => {
  const orig = console.log;
  console.log = noop;
  return () => { console.log = orig; };
};

// Creates a minimal PKG_ROOT with a package.json and skills/<name>/SKILL.md
function makePkgRoot(tmp, skills = ['speci5-test']) {
  const pkgRoot = join(tmp, 'pkg');
  mkdirSync(pkgRoot);
  writeFileSync(join(pkgRoot, 'package.json'), JSON.stringify({ version: '1.2.3' }));
  const skillsDir = join(pkgRoot, 'skills');
  mkdirSync(skillsDir);
  for (const skill of skills) {
    mkdirSync(join(skillsDir, skill));
    writeFileSync(join(skillsDir, skill, 'SKILL.md'), `# ${skill}`);
  }
  return pkgRoot;
}

// ─── readConfig ──────────────────────────────────────────────────────────────

describe('readConfig', () => {
  let tmp;
  before(() => { tmp = mkdtempSync(join(tmpdir(), 'speci5-')); });
  after(() => { rmSync(tmp, { recursive: true, force: true }); });

  it('returns {} when config file does not exist', () => {
    const result = readConfig(join(tmp, 'nonexistent'));
    assert.deepEqual(result, {});
  });

  it('parses version and scope', () => {
    writeFileSync(join(tmp, '.speci5.config.yml'), [
      '# speci5 configuration',
      'version: "0.1.7"',
      'scope: project',
    ].join('\n') + '\n');
    const result = readConfig(tmp);
    assert.equal(result.version, '0.1.7');
    assert.equal(result.scope, 'project');
  });
});

// ─── writeConfig ─────────────────────────────────────────────────────────────

describe('writeConfig', () => {
  let tmp;
  before(() => { tmp = mkdtempSync(join(tmpdir(), 'speci5-')); });
  after(() => { rmSync(tmp, { recursive: true, force: true }); });

  it('writes a config file with version and scope', () => {
    const restore = silence();
    writeConfig({ version: '2.0.0', scope: 'user' }, tmp);
    restore();

    const content = readFileSync(join(tmp, '.speci5.config.yml'), 'utf8');
    assert.match(content, /version: "2\.0\.0"/);
    assert.match(content, /scope: user/);
  });

  it('round-trips through readConfig', () => {
    const restore = silence();
    writeConfig({ version: '3.1.0', scope: 'project' }, tmp);
    restore();

    const config = readConfig(tmp);
    assert.equal(config.version, '3.1.0');
    assert.equal(config.scope, 'project');
  });
});

// ─── deleteExistingSkills ────────────────────────────────────────────────────

describe('deleteExistingSkills', () => {
  let tmp;
  beforeEach(() => { tmp = mkdtempSync(join(tmpdir(), 'speci5-')); });
  after(() => { rmSync(tmp, { recursive: true, force: true }); });

  it('does nothing when skills dir does not exist', () => {
    assert.doesNotThrow(() => deleteExistingSkills(tmp, '.claude/skills'));
  });

  it('deletes only speci5* directories', () => {
    const skillsDir = join(tmp, '.claude', 'skills');
    mkdirSync(skillsDir, { recursive: true });
    mkdirSync(join(skillsDir, 'speci5-plan'));
    mkdirSync(join(skillsDir, 'speci5-spec'));
    mkdirSync(join(skillsDir, 'other-tool'));

    const restore = silence();
    deleteExistingSkills(tmp, '.claude/skills');
    restore();

    assert(!existsSync(join(skillsDir, 'speci5-plan')));
    assert(!existsSync(join(skillsDir, 'speci5-spec')));
    assert(existsSync(join(skillsDir, 'other-tool')));
  });
});

// ─── copyFiles ───────────────────────────────────────────────────────────────

describe('copyFiles', () => {
  let tmp;
  before(() => { tmp = mkdtempSync(join(tmpdir(), 'speci5-')); });
  after(() => { rmSync(tmp, { recursive: true, force: true }); });

  it('copies all skill folders from PKG_ROOT/skills to dest', () => {
    const pkgRoot = makePkgRoot(tmp, ['speci5-plan', 'speci5-spec']);
    const dest = join(tmp, 'dest');
    mkdirSync(dest);

    const restore = silence();
    copyFiles(dest, '.claude/skills', pkgRoot);
    restore();

    assert(existsSync(join(dest, '.claude', 'skills', 'speci5-plan', 'SKILL.md')));
    assert(existsSync(join(dest, '.claude', 'skills', 'speci5-spec', 'SKILL.md')));
  });
});

// ─── createSpecDir ───────────────────────────────────────────────────────────

describe('createSpecDir', () => {
  let tmp;
  before(() => { tmp = mkdtempSync(join(tmpdir(), 'speci5-')); });
  after(() => { rmSync(tmp, { recursive: true, force: true }); });

  it('creates .spec/ideas and .spec/features', () => {
    const restore = silence();
    createSpecDir(tmp);
    restore();

    assert(existsSync(join(tmp, '.spec', 'ideas')));
    assert(existsSync(join(tmp, '.spec', 'features')));
  });

  it('does not throw if directories already exist', () => {
    const restore = silence();
    assert.doesNotThrow(() => createSpecDir(tmp));
    restore();
  });
});

// ─── printUsage ──────────────────────────────────────────────────────────────

describe('printUsage', () => {
  let tmp;
  before(() => { tmp = mkdtempSync(join(tmpdir(), 'speci5-')); });
  after(() => { rmSync(tmp, { recursive: true, force: true }); });

  it('outputs version from package.json', () => {
    const pkgRoot = makePkgRoot(tmp);
    let output = '';
    const orig = console.log;
    console.log = (...args) => { output += args.join(' '); };
    printUsage({ PKG_ROOT: pkgRoot });
    console.log = orig;

    assert.match(output, /speci5 v1\.2\.3/);
    assert.match(output, /init/);
    assert.match(output, /update/);
  });
});

// ─── init ────────────────────────────────────────────────────────────────────

describe('init', () => {
  let tmp;
  beforeEach(() => { tmp = mkdtempSync(join(tmpdir(), 'speci5-')); });
  after(() => { rmSync(tmp, { recursive: true, force: true }); });

  it('copies skills and writes config at project level', async () => {
    const pkgRoot = makePkgRoot(tmp, ['speci5-plan']);
    const cwd = join(tmp, 'project');
    mkdirSync(cwd);

    const restore = silence();
    await init({ PKG_ROOT: pkgRoot, CWD: cwd, HOME: tmp, force: true, userLevel: false });
    restore();

    assert(existsSync(join(cwd, '.claude', 'skills', 'speci5-plan', 'SKILL.md')));
    assert(existsSync(join(cwd, '.spec', 'ideas')));
    assert(existsSync(join(cwd, '.speci5.config.yml')));
    const config = readConfig(cwd);
    assert.equal(config.scope, 'project');
  });

  it('copies skills to HOME and skips spec dir at user level', async () => {
    const pkgRoot = makePkgRoot(tmp, ['speci5-plan']);
    const home = join(tmp, 'home');
    const cwd = join(tmp, 'project2');
    mkdirSync(home);
    mkdirSync(cwd);

    const restore = silence();
    await init({ PKG_ROOT: pkgRoot, CWD: cwd, HOME: home, force: true, userLevel: true });
    restore();

    assert(existsSync(join(home, '.claude', 'skills', 'speci5-plan', 'SKILL.md')));
    assert(!existsSync(join(home, '.spec')));
    const config = readConfig(cwd);
    assert.equal(config.scope, 'user');
  });
});

// ─── update ──────────────────────────────────────────────────────────────────

describe('update', () => {
  let tmp;
  beforeEach(() => { tmp = mkdtempSync(join(tmpdir(), 'speci5-')); });
  after(() => { rmSync(tmp, { recursive: true, force: true }); });

  it('copies updated skills without force', async () => {
    const pkgRoot = makePkgRoot(tmp, ['speci5-plan']);
    const cwd = join(tmp, 'project');
    mkdirSync(cwd);
    writeFileSync(join(cwd, '.speci5.config.yml'), 'scope: project\n');

    const restore = silence();
    await update({ PKG_ROOT: pkgRoot, CWD: cwd, HOME: tmp, force: false, userLevel: false });
    restore();

    assert(existsSync(join(cwd, '.claude', 'skills', 'speci5-plan', 'SKILL.md')));
  });

  it('deletes existing speci5 skills before copying when force=true', async () => {
    const pkgRoot = makePkgRoot(tmp, ['speci5-plan']);
    const cwd = join(tmp, 'project2');
    mkdirSync(cwd);
    writeFileSync(join(cwd, '.speci5.config.yml'), 'scope: project\n');

    // Pre-plant a stale skill that is NOT in the new package
    const staleSkill = join(cwd, '.claude', 'skills', 'speci5-old');
    mkdirSync(staleSkill, { recursive: true });

    const restore = silence();
    await update({ PKG_ROOT: pkgRoot, CWD: cwd, HOME: tmp, force: true, userLevel: false });
    restore();

    assert(!existsSync(staleSkill), 'stale skill should be deleted');
    assert(existsSync(join(cwd, '.claude', 'skills', 'speci5-plan', 'SKILL.md')));
  });
});
