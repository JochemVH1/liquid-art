---
name: write-session-memory
description: Use when explicitly asked to capture session learnings, outcomes, or durable notes into the repo's .github/memory folder.
---

# Writing Session Memory

## Overview

Capture a session in a short, durable markdown note that future sessions can scan quickly. Keep it factual, concise, and tied to the current repository work.

## When to Use

- The user asks to save session learnings, a session summary, or a memory note
- The user asks to write something into `.github/memory`
- The goal is a reusable repo note, not a plan, transcript, or changelog

Do not use for:
- Feature planning
- Implementation notes that belong in `docs/`
- General conversation summaries
- Personal notes outside the repo

## Quick Reference

| Decision | Rule |
|---|---|
| Location | Always write to `repo-root\.github\memory\` |
| Filename | Use `YYYY-MM-DD-<session-topic>.md` |
| Existing note | Update the existing note for the same session/topic instead of creating duplicates |
| Tone | Factual, concise, reusable |
| Content | Only verified facts from the current session |

## Required Template

Use this heading order:

```md
# Session Learnings

## Outcome

## Key Changes

## Learnings

## Verification

## Notes
```

- If a section has nothing to add, write `None` or `Not run`.
- Keep each section short.
- Do not add frontmatter, JSON, YAML, or extra headings.

## Common Mistakes

- Writing the note in `docs/` or another folder
- Inventing a new format instead of using the template
- Copying the full chat transcript
- Adding speculation or cleanup that was not confirmed in the session
- Creating duplicate memory files for the same session

## Good Output Shape

- **Outcome:** what changed or what was learned
- **Key Changes:** concrete files, routes, components, or docs
- **Learnings:** the reusable lesson
- **Verification:** tests, build, or manual checks if relevant
- **Notes:** open questions or follow-ups, if any
