# Implementation Report

After completing the implementation, print this summary to the user:

```
## Implementation Complete: <Story Title>

Mode: <default|sub-agent>
Tasks implemented: X/Y

### Completed
- ✅ <task description>
- ✅ <task description>

### Skipped / Blocked
- ⚠️ <task description> — <reason: missing dep / ambiguous spec / conflict>

### Acceptance Criteria Status
- ✅ <criterion>
- ⚠️ <criterion> — <what still needs attention>

### Next step
Run `/speci5-check .spec/features/<feature>/<story>` to verify.
```

**In sub-agent mode**, add a merge section if relevant:

```
### Merge Notes
- Branches merged: <branch1>, <branch2>, ...
- Conflicts resolved: <file> — <how resolved>
- Manual attention needed: <file> — <description>
```
