import styles from "./AppNav.module.css";
import { NavLink } from "react-router-dom";
function AppNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="cities">Cities</NavLink>
        </li>
        <NavLink to="countries">Countries</NavLink>
      </ul>
    </nav>
  );
}

export default AppNav;
