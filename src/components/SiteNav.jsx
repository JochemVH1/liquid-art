import { Link, NavLink } from 'react-router-dom';

export default function SiteNav() {
  return (
    <nav aria-label="Primary" className="site-nav">
      <ul className="site-nav__list">
        <li>
          <NavLink
            to="/gallery"
            className={({ isActive }) => (isActive ? 'site-nav__link is-active' : 'site-nav__link')}
          >
            Gallery
          </NavLink>
        </li>
        <li>
          <Link className="site-nav__link" to="/#about">
            About
          </Link>
        </li>
        <li>
          <Link className="site-nav__link" to="/#contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
