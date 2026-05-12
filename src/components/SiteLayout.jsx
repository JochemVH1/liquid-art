import { useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import SiteNav from './SiteNav';

export default function SiteLayout({ children }) {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const element = document.getElementById(location.hash.slice(1));
    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
    element?.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
  }, [location.hash, location.pathname]);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <header className="site-header">
        <Link className="site-title" to="/">
          Liquid Art Portfolio
        </Link>
        <SiteNav />
      </header>
      <main className="site-main" id="main-content" tabIndex={-1}>
        {children ?? <Outlet />}
      </main>
    </div>
  );
}
