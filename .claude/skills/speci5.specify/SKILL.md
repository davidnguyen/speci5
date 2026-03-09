---
name: speci5.specify
description: "Transform idea documents from .spec/ideas/ into structured feature and story specs in .spec/features/. Creates feature.md and story.md files organized by feature folders and story subfolders. WHEN: /specify, write spec, create spec, turn idea into spec, specify feature, define stories, break down feature, structure requirements. DO NOT USE FOR: brainstorming ideas (use brainstorm), creating plans (use plan), checking implementation (use check)."
argument-hint: "Name the idea(s) to specify, or leave blank to process all ideas"
---

# Specify

Transform idea documents into structured feature and story specs.

## Triggers

Activate this skill when the user wants to:
- Convert ideas into formal feature/story specifications
- Break a feature down into deliverable stories
- Create or update feature and story specs
- Structure requirements from idea documents

## Rules

1. Use **kebab-case** for all folder and file names.
2. Each story must have concrete, testable acceptance criteria.
3. Stories should be small enough to implement in a single focused effort.
4. Do NOT create `plan.md` files — that's the **plan** skill's job.
5. Link stories in `feature.md` using relative paths.
6. If features/stories already exist, update them — do not overwrite human edits.
7. Present the proposed feature/story breakdown to the user for confirmation before writing files.

## Steps

1. **Read ideas** — Read the specified idea file(s) from `.spec/ideas/`. If none specified, read all.
2. **Read existing specs** — Scan `.spec/features/` to avoid duplicating or conflicting with what's already specified.
3. **Synthesize** — Break ideas into **features** (cohesive capabilities) and **stories** (independently deliverable slices of a feature).
4. **Propose** — Present the feature/story breakdown to the user for confirmation.
5. **Write specs** — For each feature, create a folder with `feature.md`. For each story, create a subfolder with `story.md`.

## Folder Structure

```
.spec/features/
  <feature-slug>/
    feature.md
    <story-slug>/
      story.md
```

## Output Formats

See [output templates](./assets/output.md).
