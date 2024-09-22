import { useState, useCallback, MouseEvent } from "react";
import mobileNav from "../../config/mobileNav";
import { Link } from "react-router-dom";

import classes from "./NavMenuMobile.module.scss";

const NavMenuMobile = () => {
  const [activePage, setActivePageId] = useState(6);

  const handleClick = useCallback((event: MouseEvent<HTMLAnchorElement>) => {
    const targetPageIndex = Number(event.currentTarget.getAttribute("data-id"));

    setActivePageId(targetPageIndex);
  }, []);

  return (
    <div className={classes.nav__menu}>
      {mobileNav.map((nav, index) => (
        <Link
          to={nav.link}
          key={`nav-${index}`}
          className={`${classes.nav__menu__item} ${
            activePage === index && classes.active
          }`}
          data-id={index}
          onClick={handleClick}
        >
          <div className={classes.nav__menu__item__icon}>
            <nav.icon />
            <div className={classes.nav__menu__item__txt}>
              {nav.section}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NavMenuMobile;
