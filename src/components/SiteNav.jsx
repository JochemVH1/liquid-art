import { NavLink } from 'react-router-dom';

const navigationItems = [
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' }
];

export default function SiteNav() {
  return (
    <nav aria-label="Primary" className="site-nav">
      <ul className="site-nav__list">
        {navigationItems.map(({ to, label, end }) => (
          <li key={label}>
            <NavLink
              to={to}
              end={end}
              className={({ isActive }) => (isActive ? 'site-nav__link is-active' : 'site-nav__link')}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
