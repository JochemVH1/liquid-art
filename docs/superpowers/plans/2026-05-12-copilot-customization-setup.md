# Copilot Customization Setup Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Establish repo-local scaffolding for Copilot instructions, reusable skill/agent templates, and LSP support so future workflow automation has a clear home.

**Architecture:** Keep all repo-facing Copilot configuration in small, focused files under `.github/` plus root instruction files where the CLI already looks. Treat skills and agents as reusable templates and conventions, not monolithic blobs, so future workflow changes stay isolated. Keep editor/LSP setup separate from human-facing instructions so language-server tweaks can evolve without rewriting guidance.

**Tech Stack:** Markdown instruction files, JSON LSP config, TypeScript language server, Copilot CLI repo instructions

---

### Task 1: Add repo instruction baseline

**Files:**
- Create: `AGENTS.md`
- Create: `.github/copilot-instructions.md`
- Create: `.github/instructions/copilot-workflow.instructions.md`
- Create: `.github/instructions/testing.instructions.md`

- [ ] **Step 1: Write the instruction baseline**

Create concise repo guidance that tells Copilot how to work in this project:

```md
# AGENTS.md

- Use React + Vite patterns already present in the repo.
- Prefer small focused files over wide refactors.
- Run `npm test` and `npm run build` before finishing work.
- Keep UI changes minimal unless the task explicitly asks for a redesign.
```

```md
# .github/copilot-instructions.md

Use the repository’s existing patterns for React components, routing, styling, and testing.
Prefer isolated changes that are easy to review and revert.
```

```md
# .github/instructions/copilot-workflow.instructions.md

When a task is multi-step, plan first, then implement, then verify with tests and build output.
Use subagents for independent work where it reduces context switching.
```

```md
# .github/instructions/testing.instructions.md

Use Vitest and React Testing Library for UI behavior.
Write focused tests that cover user-visible behavior, not implementation details.
```

- [ ] **Step 2: Verify the instruction files are discoverable**

Run:

```bash
git status --short
```

Expected: the four new instruction files appear as untracked files before commit.

- [ ] **Step 3: Commit**

```bash
git add AGENTS.md .github/copilot-instructions.md .github/instructions/copilot-workflow.instructions.md .github/instructions/testing.instructions.md
git commit -m "docs: add copilot instruction baseline"
```

### Task 2: Add skill and agent scaffolding

**Files:**
- Create: `.github/skills/README.md`
- Create: `.github/agents/README.md`
- Create: `docs/superpowers/customization/skill-template.md`
- Create: `docs/superpowers/customization/agent-template.md`

- [ ] **Step 1: Write the reusable templates**

Document where future reusable workflows live and how they should be structured:

```md
# .github/skills/README.md

Use this directory for reusable, repeatable workflow definitions.
Each skill should focus on one job, include clear activation criteria, and stay small enough to review quickly.
```

```md
# .github/agents/README.md

Use this directory for reusable agent prompts or role definitions.
Keep each agent narrowly focused so it can be reused for implementation, review, or research without extra context.
```

```md
# docs/superpowers/customization/skill-template.md

# [Skill Name]

## Purpose
## When to Use
## Workflow
## Non-Goals
```

```md
# docs/superpowers/customization/agent-template.md

# [Agent Name]

## Role
## Inputs
## Output
## Review Criteria
```

- [ ] **Step 2: Verify the scaffold does not overlap with repo instructions**

Run:

```bash
git status --short
```

Expected: only the four new scaffolding files are listed before commit.

- [ ] **Step 3: Commit**

```bash
git add .github/skills/README.md .github/agents/README.md docs/superpowers/customization/skill-template.md docs/superpowers/customization/agent-template.md
git commit -m "docs: scaffold skill and agent templates"
```

### Task 3: Configure LSP support

**Files:**
- Create: `.github/lsp.json`

- [ ] **Step 1: Write the language-server config**

Use a TypeScript language server for React/JSX files so Copilot has stronger code intelligence:

```json
{
  "lspServers": {
    "typescript": {
      "command": "typescript-language-server",
      "args": ["--stdio"],
      "fileExtensions": {
        ".ts": "typescript",
        ".tsx": "typescript",
        ".js": "typescript",
        ".jsx": "typescript"
      }
    }
  }
}
```

- [ ] **Step 2: Verify the language server is available**

Run:

```bash
npm install -g typescript-language-server
```

Expected: the command completes without errors and `typescript-language-server` is available on the PATH.

- [ ] **Step 3: Verify Copilot can see the configured server**

Run:

```text
/lsp
```

Expected: the TypeScript server is listed as configured for the repository.

- [ ] **Step 4: Commit**

```bash
git add .github/lsp.json
git commit -m "docs: add copilot lsp config"
```

## Coverage Check

- Repo instruction baseline: Task 1
- Skill/agent scaffolding: Task 2
- LSP support: Task 3

## Notes

This plan intentionally stops at setup. It creates the home for future custom skills, agents, and instruction files without implementing any specific workflow automation yet.
