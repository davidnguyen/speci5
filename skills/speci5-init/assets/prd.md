Write to `.spec/PRD.<domain>.md` using this structure. The `<domain>` is a kebab-case identifier derived from the product name (e.g. `my-app` → `PRD.my-app.md`).

**The PRD captures business intent only.** Describe what the product does for users and why — not how it is built. No technology names, architecture decisions, database schemas, or implementation details belong here.

```markdown
---
domain: <domain>
---

# Product Requirements Document: <Product Name>

## Overview
What this product is and what problem it solves, in 2–3 sentences. Written for a non-technical reader.

## Target Audience
Who are the primary users? Describe their goals, context, and pain points briefly. Avoid role titles like "developer" unless that is genuinely the user.

## Goals
What does success look like for the business or user? Be outcome-focused and measurable where possible.
- **Goal 1**: ...
- **Goal 2**: ...

## Non-Goals
Explicit boundaries — what this product will NOT do. Prevents scope creep.
- ...

## Features
User-facing capabilities added through brainstorming. Each entry answers: what can a user do, and why does it matter?
Do NOT describe how a feature is implemented — only what it does for the user.

## Constraints
Business, legal, or UX constraints the product must respect. Avoid technical constraints unless they directly limit user-facing behaviour.
- ...
```

### Notes on creation

- Derive the `<domain>` from the product name (kebab-case, lowercase, no special characters).
- Use the domain in both the filename (`PRD.<domain>.md`) and the `domain` front matter field.
- Fill sections from the interview answers (Steps 2–4 in the init skill).
- Leave `Features` empty at creation — features are added through `/speci5-brainstorm`.
- `Non-Goals` and `Constraints` may be empty initially; add `- TBD` if unknown.
- Keep all sections present even if short — they serve as anchors for future updates.
