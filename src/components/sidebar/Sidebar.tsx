import { MouseEvent, useCallback, useState } from "react";
import { LogoSVG } from "../../assets/svgs";
import { Link } from "react-router-dom";
import sidebarNav from "../../config/sidebarNav";

import classes from "./Sidebar.module.scss";

function Sidebar() {
  const [activePage, setActivePageId] = useState(6);

  const handleClick = useCallback((event: MouseEvent<HTMLAnchorElement>) => {
    const targetPageIndex =
      Number(event.currentTarget.getAttribute("data-id"));

    setActivePageId(targetPageIndex);
  }, []);

  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebar__logo}>
        <LogoSVG />
      </div>
      <div className={classes.sidebar__menu}>
        {sidebarNav.map((nav, index) => (
          <Link
            to={nav.link}
            key={`nav-${index}`}
            className={`${classes.sidebar__menu__item} ${
              activePage === index && classes.active
            }`}
            data-id={index}
            onClick={handleClick}
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
