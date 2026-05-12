# Architecture

## Overview

This repository is a small React + Vite portfolio for a liquid-inspired art collection. The app is intentionally simple: it renders a handful of routed pages, shares one site shell, and reads artwork content from a local data module.

## Runtime structure

The execution flow is:

`src/main.jsx` -> `src/App.jsx` -> `BrowserRouter` -> `src/routes.jsx` -> shared layout + page components

`src/App.jsx` keeps router setup isolated. `src/routes.jsx` defines the public routes and redirects. `SiteLayout` provides the header, navigation, footer, and skip link, while page components render route-specific content inside that shell.

## Code organization

- `src/components/` holds reusable UI pieces.
- `src/pages/` holds route-level screens.
- `src/data/artworks.js` holds the artwork collection used by the home, gallery, and detail views.
- `src/styles/global.css` owns the app-wide styling, layout, and responsive behavior.

Keep these boundaries stable. Shared UI belongs in components, route-specific content belongs in pages, and content data belongs in the data module.

## Data model

Artwork content is stored as a static array of objects. Each item currently provides:
- `id`
- `title`
- `image`
- `year`
- `medium`
- `description`

The home page features the first artwork, the gallery renders the collection, and the detail page resolves an artwork by `id`.

## Navigation and layout

Navigation is route-based for the gallery and hash-based for the about/contact sections in the footer. `SiteLayout` also handles smooth scrolling to hash targets, with reduced-motion support.

## Styling

The visual system is centralized in `src/styles/global.css`. Class names are component-scoped and descriptive, with responsive rules handling the gallery grid, featured artwork layout, and footer cards.

## Testing

The test suite uses Vitest and React Testing Library. Tests focus on user-visible behavior:
- routing and page rendering
- shared layout behavior
- artwork card/detail output
- data shape

Prefer tests that describe what a user sees rather than implementation internals.

## Extension guidance

When adding new work:
1. Extend `src/data/artworks.js` for new collection items.
2. Add route-level behavior in `src/pages/`.
3. Extract shared UI into `src/components/` if it is reused.
4. Keep global styling consolidated unless a new pattern truly needs its own file.
5. Add or update tests alongside the changed user-facing behavior.
