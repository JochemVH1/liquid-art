# Liquid Art Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a minimal React + Vite portfolio site that showcases liquid art with a gallery-first homepage, artwork detail pages, and a quiet about/contact section.

**Architecture:** Use a small route-based React app with a shared layout, a single artwork data source, and focused presentational components. Keep the visual system in plain CSS so the artwork stays dominant and the implementation stays easy to maintain.

**Tech Stack:** React, Vite, react-router-dom, plain CSS, Vitest, React Testing Library

---

### Task 1: Scaffold app shell and artwork data

**Files:**
- Create: `package.json`
- Create: `vite.config.js`
- Create: `index.html`
- Create: `src/main.jsx`
- Create: `src/App.jsx`
- Create: `src/data/artworks.js`
- Create: `src/styles/global.css`
- Create: `src/data/artworks.test.js`

- [ ] **Step 1: Write the failing test**

```jsx
// src/data/artworks.test.js
import { artworks } from './artworks';

test('artwork records include the fields the site needs', () => {
  expect(artworks[0]).toEqual(
    expect.objectContaining({
      id: expect.any(String),
      title: expect.any(String),
      image: expect.any(String),
      year: expect.any(String),
      medium: expect.any(String),
      description: expect.any(String)
    })
  );
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- --run src/data/artworks.test.js`
Expected: FAIL because `src/data/artworks.js` does not exist yet.

- [ ] **Step 3: Write minimal implementation**

```js
// src/data/artworks.js
export const artworks = [
  {
    id: 'liquid-1',
    title: 'Chromatic Flow',
    image: '/artwork/chromatic-flow.jpg',
    year: '2026',
    medium: 'Mixed media',
    description: 'Layered color fields with soft motion and reflective depth.'
  }
];
```

```jsx
// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

```jsx
// src/App.jsx
import { artworks } from './data/artworks';

export default function App() {
  return (
    <main className="app-shell">
      <h1>Liquid Art</h1>
      <p>{artworks[0].title}</p>
    </main>
  );
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- --run src/data/artworks.test.js`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add package.json vite.config.js index.html src/main.jsx src/App.jsx src/data/artworks.js src/styles/global.css src/data/artworks.test.js
git commit -m "feat: scaffold liquid art portfolio"
```

### Task 2: Build shared layout and homepage feature

**Files:**
- Create: `src/components/SiteLayout.jsx`
- Create: `src/components/SiteNav.jsx`
- Create: `src/pages/HomePage.jsx`
- Modify: `src/App.jsx`
- Modify: `src/styles/global.css`

- [ ] **Step 1: Write the failing test**

```jsx
// src/components/SiteLayout.test.jsx
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SiteLayout from './SiteLayout';

test('layout renders the global navigation and page content', () => {
  render(
    <MemoryRouter>
      <SiteLayout>
        <p>Gallery content</p>
      </SiteLayout>
    </MemoryRouter>
  );

  expect(screen.getByRole('navigation')).toBeInTheDocument();
  expect(screen.getByText('Gallery content')).toBeInTheDocument();
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- --run src/components/SiteLayout.test.jsx`
Expected: FAIL because the layout component does not exist yet.

- [ ] **Step 3: Write minimal implementation**

```jsx
// src/components/SiteNav.jsx
import { Link } from 'react-router-dom';

export default function SiteNav() {
  return (
    <nav aria-label="Primary">
      <Link to="/">Gallery</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
```

```jsx
// src/components/SiteLayout.jsx
import SiteNav from './SiteNav';

export default function SiteLayout({ children }) {
  return (
    <div className="site-shell">
      <header className="site-header">
        <SiteNav />
      </header>
      <section>{children}</section>
    </div>
  );
}
```

```jsx
// src/pages/HomePage.jsx
import { artworks } from '../data/artworks';

export default function HomePage() {
  const feature = artworks[0];

  return (
    <section className="hero">
      <img src={feature.image} alt={feature.title} />
      <div className="hero-copy">
        <h1>{feature.title}</h1>
        <p>{feature.description}</p>
      </div>
    </section>
  );
}
```

```jsx
// src/App.jsx
import { BrowserRouter } from 'react-router-dom';
import SiteLayout from './components/SiteLayout';
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <BrowserRouter>
      <SiteLayout>
        <HomePage />
      </SiteLayout>
    </BrowserRouter>
  );
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- --run src/components/SiteLayout.test.jsx`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/components/SiteLayout.jsx src/components/SiteNav.jsx src/pages/HomePage.jsx src/App.jsx src/styles/global.css src/components/SiteLayout.test.jsx
git commit -m "feat: add shared layout and homepage"
```

### Task 3: Add gallery and artwork detail routing

**Files:**
- Create: `src/pages/GalleryPage.jsx`
- Create: `src/pages/ArtworkDetailPage.jsx`
- Create: `src/pages/AboutPage.jsx`
- Create: `src/pages/ContactPage.jsx`
- Create: `src/components/ArtworkCard.jsx`
- Create: `src/routes.jsx`
- Modify: `src/App.jsx`

- [ ] **Step 1: Write the failing test**

```jsx
// src/pages/ArtworkDetailPage.test.jsx
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ArtworkDetailPage from './ArtworkDetailPage';

test('detail page shows the selected artwork metadata', () => {
  render(
    <MemoryRouter initialEntries={['/artworks/liquid-1']}>
      <ArtworkDetailPage />
    </MemoryRouter>
  );

  expect(screen.getByRole('heading', { name: /chromatic flow/i })).toBeInTheDocument();
  expect(screen.getByText('Mixed media')).toBeInTheDocument();
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- --run src/pages/ArtworkDetailPage.test.jsx`
Expected: FAIL because the route/page does not exist yet.

- [ ] **Step 3: Write minimal implementation**

```jsx
// src/routes.jsx
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import ArtworkDetailPage from './pages/ArtworkDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/artworks/:artworkId" element={<ArtworkDetailPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}
```

```jsx
// src/pages/GalleryPage.jsx
import { Link } from 'react-router-dom';
import { artworks } from '../data/artworks';
import ArtworkCard from '../components/ArtworkCard';

export default function GalleryPage() {
  return (
    <section className="gallery-grid">
      {artworks.map((artwork) => (
        <Link key={artwork.id} to={`/artworks/${artwork.id}`} className="gallery-card">
          <ArtworkCard artwork={artwork} />
        </Link>
      ))}
    </section>
  );
}
```

```jsx
// src/components/ArtworkCard.jsx
export default function ArtworkCard({ artwork }) {
  return (
    <>
      <img src={artwork.image} alt={artwork.title} />
      <h2>{artwork.title}</h2>
      <p>{artwork.year}</p>
    </>
  );
}
```

```jsx
// src/pages/ArtworkDetailPage.jsx
import { Link, useParams } from 'react-router-dom';
import { artworks } from '../data/artworks';

export default function ArtworkDetailPage() {
  const { artworkId } = useParams();
  const artwork = artworks.find((item) => item.id === artworkId) ?? artworks[0];

  return (
    <article className="detail-view">
      <img src={artwork.image} alt={artwork.title} />
      <h1>{artwork.title}</h1>
      <p>{artwork.medium}</p>
      <p>{artwork.year}</p>
      <p>{artwork.description}</p>
      <Link to="/gallery">Back to gallery</Link>
    </article>
  );
}
```

```jsx
// src/pages/AboutPage.jsx
export default function AboutPage() {
  return (
    <section className="text-page">
      <h1>About</h1>
      <p>Short artist biography and statement.</p>
    </section>
  );
}
```

```jsx
// src/pages/ContactPage.jsx
export default function ContactPage() {
  return (
    <section className="text-page">
      <h1>Contact</h1>
      <p>
        <a href="mailto:studio@example.com">studio@example.com</a>
      </p>
    </section>
  );
}
```

```jsx
// src/App.jsx
import { BrowserRouter } from 'react-router-dom';
import SiteLayout from './components/SiteLayout';
import AppRoutes from './routes';

export default function App() {
  return (
    <BrowserRouter>
      <SiteLayout>
        <AppRoutes />
      </SiteLayout>
    </BrowserRouter>
  );
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- --run src/pages/ArtworkDetailPage.test.jsx`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/pages/GalleryPage.jsx src/pages/ArtworkDetailPage.jsx src/components/ArtworkCard.jsx src/routes.jsx src/App.jsx src/pages/ArtworkDetailPage.test.jsx
git commit -m "feat: add gallery and detail routing"
```

### Task 4: Polish responsive styling and accessibility

**Files:**
- Modify: `src/styles/global.css`
- Modify: `src/components/SiteNav.jsx`
- Modify: `src/pages/HomePage.jsx`
- Modify: `src/pages/GalleryPage.jsx`
- Modify: `src/pages/ArtworkDetailPage.jsx`
- Create: `src/App.a11y.test.jsx`

- [ ] **Step 1: Write the failing test**

```jsx
// src/App.a11y.test.jsx
import { render, screen } from '@testing-library/react';
import App from './App';

test('primary navigation is labeled for assistive technology', () => {
  render(<App />);

  expect(screen.getByRole('navigation', { name: /primary/i })).toBeInTheDocument();
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- --run src/App.a11y.test.jsx`
Expected: FAIL if the nav lacks an accessible label.

- [ ] **Step 3: Write minimal implementation**

```jsx
// src/components/SiteNav.jsx
import { Link } from 'react-router-dom';

export default function SiteNav() {
  return (
    <nav aria-label="Primary">
      <Link to="/">Gallery</Link>
      <Link to="/gallery">Browse</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
```

```css
/* src/styles/global.css */
:root {
  color-scheme: light;
  font-family: Inter, system-ui, sans-serif;
  background: #f6f4ef;
  color: #171717;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: #f6f4ef;
}

img {
  display: block;
  max-width: 100%;
}

.site-shell {
  padding: 24px;
  max-width: 1280px;
  margin: 0 auto;
}

.site-header nav {
  display: flex;
  gap: 16px;
}

.hero,
.gallery-grid,
.detail-view {
  display: grid;
  gap: 24px;
}

.text-page {
  max-width: 640px;
  display: grid;
  gap: 16px;
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- --run src/App.a11y.test.jsx`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/styles/global.css src/components/SiteNav.jsx src/pages/HomePage.jsx src/pages/GalleryPage.jsx src/pages/ArtworkDetailPage.jsx src/App.a11y.test.jsx
git commit -m "feat: polish responsive layout and a11y"
```

### Task 5: Verify production build and finalize content

**Files:**
- Modify: `src/data/artworks.js`
- Modify: `src/pages/HomePage.jsx`
- Modify: `src/pages/GalleryPage.jsx`
- Modify: `src/pages/ArtworkDetailPage.jsx`

- [ ] **Step 1: Write the failing test**

```bash
npm run build
```

Expected: PASS after all routes, images, and imports are wired correctly.

- [ ] **Step 2: Run build to verify it passes**

Run: `npm run build`
Expected: Vite build completes without errors or unresolved imports.

- [ ] **Step 3: Write minimal implementation**

```js
// src/data/artworks.js
export const artworks = [
  {
    id: 'chromatic-flow',
    title: 'Chromatic Flow',
    image: '/artwork/chromatic-flow.jpg',
    year: '2026',
    medium: 'Mixed media',
    description: 'Layered color fields with soft motion and reflective depth.'
  },
  {
    id: 'vessel-drift',
    title: 'Vessel Drift',
    image: '/artwork/vessel-drift.jpg',
    year: '2026',
    medium: 'Acrylic on panel',
    description: 'Fluid gradients that read like suspended motion.'
  }
];
```

- [ ] **Step 4: Run build to verify it passes**

Run: `npm run build`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/data/artworks.js src/pages/HomePage.jsx src/pages/GalleryPage.jsx src/pages/ArtworkDetailPage.jsx
git commit -m "feat: finalize portfolio content"
```

## Coverage Check

- Homepage / featured artwork: Tasks 1, 2, 5
- Gallery grid: Tasks 3, 5
- Artwork detail page: Task 3
- About / contact navigation: Tasks 2, 4
- Minimal visual system: Task 4
- Responsive behavior: Task 4
- Accessibility: Task 4
- Production build verification: Task 5

## Notes

This plan assumes a brand-new React + Vite project with no existing app structure. If you already have a codebase, the same tasks still apply, but the file paths should be adapted to match the existing routing and styling conventions.
