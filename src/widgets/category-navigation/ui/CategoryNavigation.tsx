import { NavLink } from "react-router";
import styles from "./CategoryNavigation.module.css";

const NAV_ITEMS = [
  { to: "/category/popular", label: "Popular" },
  { to: "/category/top_rated", label: "Top Rated" },
  { to: "/category/upcoming", label: "Upcoming" },
  { to: "/category/now_playing", label: "Now playing" },
];

export const CategoryNavigation = () => {
  return (
    <div className={styles.container}>    
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {NAV_ITEMS.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};