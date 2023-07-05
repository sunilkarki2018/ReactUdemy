import { NavLink } from "react-router-dom";

import classes from "./EventsNavigation.module.css";

function MembersNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/members"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              All Members
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/members/new"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              New Member
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MembersNavigation;
