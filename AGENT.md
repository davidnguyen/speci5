A spec-driven development framework for AI-assisted coding. Gives your AI coding agent a structured workflow: **init** → **brainstorm** → **specify** → **plan** → **implement** → **check**.

This project uses a spec-driven workflow. All specifications live in `.spec/`.

## Folder Structure

```
.spec/
  PRD.<domain>.md       # PRD for a domain — one file per domain
  PRD.<domain>.md       # Complex projects can have multiple domains
  features/             # Structured specs: features → stories
    <feature-slug>/
      feature.md        # Feature-level spec
      <story-slug>/
        story.md        # Story spec + acceptance criteria
        plan.md         # Implementation plan + task checklist
```

## Workflow Skills

Each skill is a `/` slash command in Copilot Chat, defined in `.claude/skills/`.

| Skill | Command | Purpose |
|-------|---------|---------|
| Init | `/speci5-init` | Create a `PRD.<domain>.md` for a new product or domain via guided interview |
| Brainstorm | `/speci5-brainstorm` | Add, change, or remove features in an existing domain PRD |
| Specify | `/speci5-specify` | Transform PRD features into feature and story specs |
| Plan | `/speci5-plan` | Create implementation tasks from a story || Implement | `/speci5-implement` | Implement a story's tasks using worktree-isolated agents || Check | `/speci5-check` | Verify source code against a story's plan |

## Conventions

- All folder and file names use **kebab-case**.
- Each command owns its output and does not modify other commands' files.
- Specs are the source of truth for what to build and how.

## Sample Apps