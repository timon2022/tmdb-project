// Header.jsx


import { ThemeToggle } from 'features/theme-toggle';
import styles from './header.module.css';
import { Link, NavLink } from 'react-router';
import logoUrl from 'shared/assets/images/header-logo.svg';

const NAV_ITEMS = [
  { to: '/', label: 'Main' },
  { to: '/category/popular', label: 'Category movies' },
  { to: '/filtered', label: 'Filtered movies' },
  { to: '/search', label: 'Search' },
  { to: '/favorites', label: 'Favorites' },
];


export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.header_content} `}>
        <Link to="/" className={styles.logoLink}>
          <img src={logoUrl} alt="Logo" width={200} />
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {NAV_ITEMS.map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} className={({ isActive }) =>
                  isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                }>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <ThemeToggle />
      </div>

    </header>
  );
};

export default Header;