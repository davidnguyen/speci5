---
name: speci5-brainstorm
description: "Add, change, or remove features in .spec/PRD.<domain>.md. WHEN: brainstorm, new feature, change feature, remove feature, capture idea. REQUIRES: existing PRD (run /speci5-init first). NOT FOR: creating PRDs, writing specs, planning, or checking implementation."
argument-hint: "Describe what you want to add, change, or remove"
---

# Brainstorm

Explore and evolve product features through dialogue — and keep `.spec/PRD.<domain>.md` up to date.

The PRD captures **business intent only**: what the product does, who it serves, and why features exist. It does not describe technology choices, architecture, or implementation details. Your job is to help the user articulate the *why* and *what*, not the *how*.

**Requires an existing PRD.** If no `.spec/PRD.*.md` file exists, stop and direct the user to `/speci5-init`.

<HARD-GATE>
Do NOT create feature files, story files, idea files, plans, code, or new PRD files. This skill has exactly ONE output:
- `.spec/PRD.<domain>.md` — updates to an existing file only

If no PRD exists, do NOT create one. Tell the user to run `/speci5-init` first.
The **specify** skill is the next step after brainstorming.
</HARD-GATE>

## Triggers

Activate this skill when the user wants to:
- Add a new feature to the product
- Change or refine an existing feature
- Remove or deprecate a feature
- Capture a rough idea or concept
- Explore trade-offs before committing to a direction

## Rules

1. **PRD must exist** — Check `.spec/` for a `PRD.*.md` file before doing anything else. If none is found, stop: *"No PRD found. Please run `/speci5-init` to set up your first product domain."*
2. Do NOT create feature files, story files, idea files, plans, or new PRD files — those belong to other skills.
3. **Preserve human edits** — When updating the PRD, append or refine. Never overwrite sections the user has written unless they explicitly ask.
4. **Business language only** — The PRD must describe user-facing behaviour and business value. No technology names, architecture decisions, database schemas, API designs, or implementation details. If the user drifts into implementation, redirect: *"Let's capture what it should do for the user — the how comes later in the plan."*
5. Keep language clear and concise.
6. **YAGNI ruthlessly** — Strip unnecessary complexity. If a feature isn't clearly needed now, leave it out.

## Conversation Style

- **One question at a time.** Don't overwhelm the user with multiple questions in one message.
- **Prefer multiple choice** when possible — easier to answer than open-ended.
- **Be flexible** — go back and clarify when something doesn't make sense.
- **Don't skip questions** — even "obvious" ideas contain unexamined assumptions.

## Steps

### Step 1: Load the PRD

Scan `.spec/` for all files matching `PRD.*.md`.

- **If none found**: Stop immediately. Respond: *"No PRD found in `.spec/`. Please run `/speci5-init` to create one before brainstorming."*
- **If exactly one found**: Read it to load the product context (name, goals, existing features) before continuing.
- **If multiple found**: Infer the correct domain from the user's input (keywords, mentioned feature names, or context). If the domain is unambiguous, proceed with that file. If it is unclear, ask: *"I found multiple PRDs: [list them]. Which one does this relate to?"* — then read the chosen file before continuing.

### Step 2: Understand Intent

Ask the user what they want to do (offer choices):

> Are you looking to **(A) add a new feature**, **(B) change an existing feature**, or **(C) remove a feature**?

Use their answer to frame the rest of the conversation:
- **Add**: What problem does this solve? Who benefits? Is it clearly needed now?
- **Change**: What's wrong with the current behaviour? What outcome does the change produce?
- **Remove**: Why remove it? What are the dependencies or risks?

### Step 3: Explore Project Context

Scan the codebase and existing PRD domains to understand what's already built. Don't propose directions that duplicate or conflict with what already exists.

### Step 4: Check Scope

If the input covers multiple independent concerns, flag this and help the user focus on one at a time. Each brainstorm session should resolve into a single, well-understood change to the PRD.

### Step 5: Ask Clarifying Questions

Before updating anything, ask targeted questions one at a time to uncover purpose, constraints, and success criteria. Keep questions anchored to user outcomes and business value — not technology or implementation. Don't skip this step — unexamined assumptions cause the most wasted work.

### Step 6: Update the PRD

Once aligned with the user, update `.spec/PRD.<domain>.md` using business language only — no implementation details:
- **Add**: Append to the `Features` section describing the capability and the user need it addresses.
- **Change**: Update the relevant feature entry; describe the new intended behaviour, not how to build it.
- **Remove**: Strike or remove the feature entry; add a brief note in a `## Removed` section if the history is worth preserving.

### Step 7: Present

Show the updated PRD section(s) and highlight any open questions that should be resolved before specifying.
