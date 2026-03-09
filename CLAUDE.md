# Speci5 — Spec-Driven Development Framework

This project uses a spec-driven workflow. All specifications live in `.spec/`.

## Folder Structure

```
.spec/
  ideas/              # Raw ideas from brainstorming
    <slug>.md
  features/           # Structured specs: features → stories
    <feature-slug>/
      feature.md      # Feature-level spec
      <story-slug>/
        story.md      # Story spec + acceptance criteria
        plan.md       # Implementation plan + task checklist
```

## Workflow Skills

Each skill is a `/` slash command in Copilot Chat, defined in `.github/skills/`.

| Skill | Command | Purpose |
|-------|---------|---------|
| Brainstorm | `/brainstorm` | Elaborate and expand user input into idea documents |
| Specify | `/specify` | Transform ideas into features and stories |
| Plan | `/plan` | Create implementation tasks from a story |
| Check | `/check` | Verify source code against a story's plan |

## Conventions

- All folder and file names use **kebab-case**.
- Each command owns its output and does not modify other commands' files.
- Specs are the source of truth for what to build and how.
