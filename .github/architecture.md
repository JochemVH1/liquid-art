Keep the architecture simple and data-driven:
- `src/main.jsx` boots the app and loads the global stylesheet.
- `src/App.jsx` only wires the router.
- `src/routes.jsx` owns page-level routing and redirects.
- `src/components/` contains shared UI like the site shell, navigation, and artwork cards.
- `src/pages/` contains route-level screens and should stay thin.
- `src/data/artworks.js` is the single in-repo content source for the gallery and detail pages.
- `src/styles/global.css` holds the app-wide visual system and responsive rules.