import { Link, Outlet } from 'react-router-dom';
import SiteNav from './SiteNav';

export default function SiteLayout({ children }) {
  return (
    <div className="site-shell">
      <header className="site-header">
        <Link className="site-title" to="/">
          Liquid Art Portfolio
        </Link>
        <SiteNav />
      </header>
      <main className="site-main">{children ?? <Outlet />}</main>
    </div>
  );
}
