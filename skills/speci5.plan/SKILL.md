---
name: speci5.plan
description: "Read a story spec and create a concrete implementation plan with tasks in .spec/features/<feature>/<story>/plan.md. Analyzes the codebase to produce specific, actionable tasks with file paths and function names. WHEN: /plan, create plan, plan story, break down story, implementation tasks, plan implementation, what to build. DO NOT USE FOR: brainstorming ideas (use brainstorm), writing specs (use specify), checking implementation (use check)."
argument-hint: "Path to the story folder, e.g. .spec/features/user-auth/login-with-email"
---

# Plan

Read a story spec and create a concrete implementation plan with tasks.

## Triggers

Activate this skill when the user wants to:
- Create an implementation plan for a story
- Break a story into concrete development tasks
- Understand what needs to be built for a story
- Update an existing plan with revised tasks

## Rules

1. Tasks must be **specific and actionable** — not vague ("implement feature") but concrete ("Create `POST /api/auth/login` route in `src/routes/auth.ts`").
2. Include tasks for tests where the story's acceptance criteria warrant them.
3. If a `plan.md` already exists, update it — preserve any checked-off tasks and add/revise remaining ones.
4. Do NOT modify `story.md` or `feature.md` — those are the **specify** skill's domain.
5. Do NOT implement the code — only produce the plan.

## Steps

1. **Read the story** — Load `.spec/features/<feature>/<story>/story.md`.
2. **Read the feature** — Load the parent `feature.md` for broader context.
3. **Analyze the codebase** — Understand:
   - Project structure, tech stack, and conventions.
   - What related code already exists.
   - Where new code should be placed.
4. **Break down tasks** — Convert acceptance criteria into ordered, actionable implementation tasks with specific file paths and module names.
5. **Write the plan** — Save to `.spec/features/<feature>/<story>/plan.md`.

## Output Format

See [output template](./assets/output.md).
