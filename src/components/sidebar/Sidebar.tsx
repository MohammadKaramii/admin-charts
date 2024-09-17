import { Link} from "react-router-dom";

import sidebarNav from "../../config/sidebarNav";

import classes from "./Sidebar.module.scss";
import { LogoSVG } from "../../assets/svgs";

function Sidebar() {


  return (
    <div className={classes.sidebar}>
       <div className={classes.sidebar__logo}>
        <LogoSVG/>
      </div>
      <div className={classes.sidebar__menu}>
        {sidebarNav.map((nav, index) => (
          <Link
            to={nav.link}
            key={`nav-${index}`}
            className={`${classes.sidebar__menu__item} ${
              index === 6 && classes.active
            }`}
          >
            <div className={classes.sidebar__menu__item__icon}>
              <nav.icon />
            <div className={classes.sidebar__menu__item__txt}>
              {nav.section}
            </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
