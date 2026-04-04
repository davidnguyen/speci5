Write to `.spec/PRD.<domain>.md` using this structure. The `<domain>` is a kebab-case identifier derived from the product name (e.g. `my-app` → `PRD.my-app.md`).

**The PRD captures business intent only.** Describe what the product does for users and why — not how it is built. No technology names, architecture decisions, database schemas, or implementation details belong here.

```markdown
---
domain: <domain>
owner: <name or team>
status: draft
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

## Success Metrics
How will we know the Goals have been achieved? Define at least one measurable indicator per Goal.
- **Goal 1 metric**: ...

## Non-Goals
Explicit boundaries — what this product will NOT do. Prevents scope creep.
- ...

## Features
User-facing capabilities added through brainstorming. Each entry answers: what can a user do, and why does it matter?
Do NOT describe how a feature is implemented — only what it does for the user.

## Design System
The visual design system used to guide UI implementation for this product.
- **System**: `<design-system-slug>` (`.spec/design-systems/<design-system-slug>/DESIGN.md`)

## Constraints
Business, legal, or UX constraints the product must respect. Avoid technical constraints unless they directly limit user-facing behaviour.
- ...

## Assumptions
What we believe to be true but haven't verified. If an assumption proves wrong, the product strategy may need revisiting.
- ...

## Dependencies
External products, services, or third parties the product relies on from a user or business perspective (not implementation).
- ...

## Open Questions
Unresolved questions that could affect scope or direction. Update or remove as answered.
- ...
```

### Notes on creation

- Derive the `<domain>` from the product name (kebab-case, lowercase, no special characters).
- Use the domain in both the filename (`PRD.<domain>.md`) and the `domain` front matter field.
- Set `status` to `draft` initially; update to `review` or `approved` as the document matures.
- Fill sections from the interview answers (Steps 2–4 in the init skill).
- Leave `Features` empty at creation — features are added through `/speci5-brainstorm`.
- Set `Design System` to the slug selected during init (e.g. `minimal-light`), or leave blank if none exists yet. Use `/speci5-design` to create one.
- `Non-Goals`, `Constraints`, `Assumptions`, `Dependencies`, and `Open Questions` may be empty initially; add `- TBD` if unknown.
- `Experience Qualities` captures accessibility, ease-of-use targets, and device/context expectations — not design system or wireframes.
- Keep all sections present even if short — they serve as anchors for future updates.
