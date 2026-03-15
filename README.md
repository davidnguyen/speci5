# speci5

A spec-driven development framework for AI-assisted coding. Gives your AI coding agent a structured workflow: **brainstorm** → **specify** → **plan** → **check**.

## Install

Add speci5 to any project:

```bash
npx @atheneworkai/speci5 init
```

Or install skills at the user level (available across all projects):

```bash
npx @atheneworkai/speci5 init --user
```

Options:
- `--user` — Install skills to `~/.claude/skills/` instead of the project's `.claude/skills/`
- `--force` — Overwrite existing files without prompting

This copies the skill definitions into your project (or home directory) and creates a `.speci5.config.yml` to remember your configuration:

```
.claude/skills/                    # Skill definitions (slash commands)
.spec/ideas/                       # Your brainstormed ideas go here
.spec/features/                    # Structured specs land here
.speci5.config.yml                 # Remembers scope and version
```

To update to the latest version:

```bash
npx @atheneworkai/speci5 update
```

The `update` command reads `.speci5.config.yml` to determine where skills were installed, so you don't need to pass `--user` again.

## Usage

Once installed, the skills are available as `/slash` commands in Copilot Chat:

| Command | What it does |
|---------|-------------|
| `/speci5.brainstorm` | Elaborate rough thoughts into structured idea documents |
| `/speci5.specify` | Transform ideas into feature and story specs |
| `/speci5.plan` | Create concrete implementation tasks from a story |
| `/speci5.check` | Verify code against a story's plan and update progress |

### Workflow

```
1. /speci5.brainstorm "user authentication with OAuth"
   → writes .spec/ideas/user-auth-oauth.md

2. /speci5.specify
   → writes .spec/features/user-auth/feature.md
   → writes .spec/features/user-auth/oauth-login/story.md

3. /speci5.plan .spec/features/user-auth/oauth-login
   → writes .spec/features/user-auth/oauth-login/plan.md

4. (implement the code)

5. /speci5.check .spec/features/user-auth/oauth-login
   → updates plan.md checkboxes, reports progress
```

## How it works

Speci5 is a set of AI coding skills that enforce a spec-driven workflow. Instead of jumping straight to code, you capture ideas, break them into features and stories with acceptance criteria, then create concrete implementation plans — all tracked in `.spec/` alongside your code.

See [CLAUDE.md](CLAUDE.md) for the full framework reference.

## License

MIT
