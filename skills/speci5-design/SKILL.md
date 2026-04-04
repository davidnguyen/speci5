---
name: speci5-design
description: "Create or update design systems in .spec/design-systems/. Each design system is a DESIGN.md-format markdown file capturing colors, typography, spacing, components, elevation, and guidelines for AI-assisted UI development. WHEN: /design, create design system, add design system, update design system, edit design system, list design systems, what design systems exist, show design system, design tokens, colors and typography, component styles. NOT FOR: brainstorming features (use brainstorm), writing specs (use spec), creating plans (use plan)."
argument-hint: "What do you want to do? e.g. 'create a dark theme system', 'update the colors in my-app', or leave blank to list all"
---

# Design Systems

Create and update DESIGN.md-format design system files in `.spec/design-systems/`.

A design system file is a plain-markdown specification of visual design tokens and patterns — colors, typography, spacing, components, elevation, and guidelines. It is the single source of truth an AI coding agent reads to produce consistent UI.

<HARD-GATE>
This skill has exactly ONE output location:
- `.spec/design-systems/<slug>/DESIGN.md` — created or updated

Do NOT create feature files, story files, plans, or code. Do NOT modify files outside `.spec/design-systems/`. Do NOT delete files.
</HARD-GATE>

## Triggers

Activate this skill when the user wants to:
- Create a new design system for a project or domain
- Update specific sections of an existing design system (colors, fonts, components, etc.)
- List or review the design systems that already exist

## Rules

1. Use **kebab-case** for all folder names (e.g., `my-app`, `admin-dark-theme`).
2. Preserve human edits — when updating, only modify the sections explicitly requested. Keep everything else intact.
3. Keep values concrete and usable: hex codes for colors, pixel/rem values for sizes, real font names for typography.
4. Include usage guidance alongside values — not just `#6366F1` but `#6366F1: Primary brand color, used for CTAs and links`.
5. If the user's request is vague (e.g. "create a dark theme"), ask one targeted question before proceeding — enough to make the output accurate, not an exhaustive interview.

## Conversation Style

- **Bias toward action.** For create and update, proceed directly if you have enough to work with.
- **One question at a time** if you do need to ask.
- **Prefer multiple choice** when possible — offer concrete options rather than open-ended questions.

## Steps

### List

1. Scan `.spec/design-systems/` for all subdirectories containing a `DESIGN.md` file.
2. For each, read the first heading and any brief description from its `DESIGN.md`.
3. Present a summary: folder name, title, and a one-line description of each.
4. If none exist, say so and suggest creating one.

### Create

1. **Read PRD context** — scan `.spec/` for any `PRD.*.md` files and read them. Use the product name, target audience, goals, and constraints to inform the visual direction and naming of the design system.
2. **Check for duplicates** — scan `.spec/design-systems/` to ensure no file with the same name already exists. If one does, suggest updating it instead.
3. **Gather context** — if the user hasn't specified, ask one question: "What's the visual style of this design system — e.g. minimal and light, bold and dark, playful, corporate?" Use that to inform defaults. If the project has existing code or a framework in use (e.g. Tailwind, shadcn), scan for color variables, font imports, or component patterns to seed the design system with real values.
4. **Write the file** — create `.spec/design-systems/<slug>/DESIGN.md` using the [output template](./assets/output.md). Fill every section with concrete values. Do not leave placeholder sections empty — infer sensible defaults if values are not specified.
5. **Present** — show the created file path and a summary of what was written.

### Update

1. **Read PRD context** — scan `.spec/` for any `PRD.*.md` files and read them. Use the product context to validate that proposed changes remain consistent with the product's goals and audience.
2. **Identify the file** — if the user named the design system, find `.spec/design-systems/<slug>/DESIGN.md`. If ambiguous, list matching files and ask.
3. **Read the current file** — load its full contents before making any changes.
4. **Apply the changes** — modify only the sections the user asked to change. Preserve all other content exactly.
5. **Present a diff summary** — describe what changed (e.g., "Updated primary color from `#3B82F6` to `#6366F1`, added `Danger` semantic color").

## Output Format

See [output template](./assets/output.md).
