# Session Learnings

## Outcome

Refactored the About and Contact sections out of `SiteLayout` and into a dedicated `HomeInfoSections` component rendered by `HomePage`.

## Learnings

- Shared layout components should stay focused on app-wide shell concerns like navigation, routing wrappers, and page framing.
- Page-specific content is easier to maintain when it lives with the page that owns it.
- Route checks inside a shared shell can quickly become awkward once content starts growing or changing by page.
- A small reusable component is a cleaner boundary than conditional rendering when a section belongs to one page.

## Result

- `SiteLayout` is now simpler.
- `HomePage` owns the About/Contact content directly.
- The section markup can still be reused later if needed without keeping page logic in the shell.
