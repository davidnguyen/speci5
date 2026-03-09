---
name: speci5.brainstorm
description: "Elaborate and expand user input into structured idea documents in .spec/ideas/. Takes rough thoughts, researches patterns, surfaces trade-offs and open questions. WHEN: /brainstorm, brainstorm idea, new idea, capture idea, explore concept, elaborate on, think about, research idea. DO NOT USE FOR: writing specs (use specify), creating plans (use plan), checking implementation (use check)."
argument-hint: "Describe the idea or concept you want to brainstorm"
---

# Brainstorm

Take user input and elaborate, research, and expand it into a well-structured idea document.

## Triggers

Activate this skill when the user wants to:
- Capture a new idea or concept
- Elaborate on a rough thought
- Research patterns, prior art, or trade-offs for an idea
- Update or refine an existing idea document

## Rules

1. Use **kebab-case** for all filenames (e.g., `user-auth.md`).
2. Do NOT create feature or story files — that's the **specify** skill's job.
3. If updating an existing idea, preserve human-written content and append/refine rather than overwrite.
4. Keep language clear and concise — this is a thinking artifact, not a formal spec.

## Steps

1. **Read existing ideas** — Scan `.spec/ideas/` to understand what's already been captured and avoid duplication.
2. **Elaborate** — Based on the user's input:
   - Add depth: consider edge cases, implications, and constraints.
   - Research related patterns, prior art, and best practices.
   - Surface open questions and trade-offs worth discussing.
3. **Write or update** — If the input closely relates to an existing idea file, **update** it. Otherwise, **create** a new file in `.spec/ideas/`.
4. **Present** — Show the user the resulting idea document and highlight any open questions.

## Output Format

See [output template](./assets/output.md).
