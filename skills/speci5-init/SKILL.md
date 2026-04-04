---
name: speci5-init
description: "Initialise a new product by creating .spec/PRD.<domain>.md through a guided interview. This is the required first step before brainstorming. WHEN: /init, initialise project, create PRD, new project, set up spec, start a new product, no PRD exists, speci5 init. DO NOT USE FOR: adding or changing features (use brainstorm), writing specs (use specify), creating plans (use plan)."
argument-hint: "Optionally describe your product to get started"
---

# Init

Create the Product Requirements Document for a new product through a short guided interview.

This is the **first step** in the speci5 workflow. It produces `.spec/PRD.<domain>.md` — the single source of truth for product intent that all other skills depend on.

<HARD-GATE>
This skill has exactly ONE output:
- `.spec/PRD.<domain>.md` — created once per product

Do NOT create feature files, story files, plans, or code. Once the PRD exists, use **brainstorm** to explore and evolve features.
</HARD-GATE>

## Triggers

Activate this skill when:
- The user is starting a new product or project
- No `.spec/PRD.*.md` file exists
- The user has been redirected here from **brainstorm**

## Rules

1. **Check first** — Scan `.spec/` for any existing `PRD.*.md` file. If one exists, tell the user and stop — the PRD is already initialised. Suggest `/speci5-brainstorm` for feature work.
2. **Business language only** — The PRD captures user-facing intent, not implementation. No technology names, architecture, or technical constraints unless they directly affect what users can do.
3. **One question at a time** — Don't overwhelm the user. Ask, listen, then ask the next question.
4. **Confirm before writing** — Show a summary of answers and get the user's sign-off before creating the file.

## Conversation Style

- **One question at a time.** Don't list all questions upfront.
- **Prefer multiple choice** when it helps — easier to answer than open-ended.
- **Keep it short** — The PRD starts lean. Features grow through brainstorming, not through an exhaustive upfront interview.

## Steps

### Step 1: Check for Existing PRD

Scan `.spec/` for any file matching `PRD.*.md`.

- **If found**: Inform the user that the product is already initialised. Show the filename and suggest using `/speci5-brainstorm` to add, change, or remove features.
- **If not found**: Proceed to Step 2.

### Step 2: Interview the User

Ask the following questions **one at a time**, in order. Wait for an answer before asking the next:

1. **What is the name of your product?**
2. **In one or two sentences, what does it do?** (Describe it for someone unfamiliar with it.)
3. **Who are the primary users?** What are their goals or pain points?
4. **What are the 1–3 most important outcomes this product needs to achieve?**
5. **Is there anything this product explicitly will NOT do?** (Optional — skip if the user is unsure.)

### Step 3: Derive the Domain

From the product name, derive a kebab-case domain identifier:
- Lowercase, hyphens only, no special characters
- Example: "My Awesome App" → `my-awesome-app`

Confirm the domain with the user if it's not obvious.

### Step 4: Confirm Before Writing

Summarise the gathered answers as a preview of the PRD. Ask the user to confirm or correct before writing.

### Step 5: Select Design System

Scan `.spec/design-systems/` for subdirectories that contain a `DESIGN.md` file.

- **If design systems found**: Present a numbered list with each folder name and a one-line description from its `DESIGN.md`. Ask: _"Which design system should this product use?"_ Accept a number, a slug name, or "none". Record the selected slug.
- **If no design systems found**: Skip selection and proceed to Step 6. After presenting the PRD in Step 7, suggest using `/speci5-design` to create one.

### Step 6: Write the PRD

Write `.spec/PRD.<domain>.md` using the [PRD template](./assets/prd.md).

Leave the `Features` section empty or with a single placeholder — features are added through brainstorming, not during initialisation. Fill the `Design System` section with the slug selected in Step 5, or leave it blank if no design system was found or chosen.

### Step 7: Present

Show the created file path and content. Then suggest the next step:

> Your PRD is ready. Use `/speci5-brainstorm` to start exploring features.

If no design system was found or selected in Step 5, also suggest:

> No design system is linked yet. Use `/speci5-design` to create one, then update the **Design System** section in your PRD.

## Output Format

See [PRD template](./assets/prd.md).
