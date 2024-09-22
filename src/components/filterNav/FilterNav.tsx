import { useState, useEffect, useCallback, MouseEvent } from "react";
import { MenuSVG, SearchSVG } from "../../assets/svgs";
import RadioButton from "../radioButton/RadioButton";

import classes from "./FilterNav.module.scss";


function FilterNav() {
 
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const breakpoint = 768;

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < breakpoint);
    };
    window.addEventListener("resize", checkScreenSize);
    checkScreenSize();
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const tabs = ["Tab 1", "Tab 2", "Tab 3"];
  const [activeTabId, setActiveTabId] = useState(0);

  const handleClick = useCallback((event: MouseEvent<HTMLLIElement>) => {
    setActiveTabId(event.currentTarget.value ?? 0);
  }, []);

  return (
    <>
      {isSmallScreen ? (
        <>
          <ul className={classes.tabs}>
            {tabs.map((tab, index) => (
              <li
                key={index}
                role="button"
                aria-selected={activeTabId === index}
                className={classes.tab}
                value={index}
                onClick={handleClick}
              >
                {tab}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <div className={classes.filterNav}>
          <div className={classes.filterNav_left}>
            <MenuSVG className={classes.filterNav_menuIcon} />
            <RadioButton />
            <RadioButton />
            <RadioButton />
            <div className={classes.filterNav_left_divider}></div>
            <RadioButton />
            <RadioButton />
            <RadioButton />
            <div className={classes.filterNav_left_divider}></div>
            <RadioButton />
            <RadioButton />
          </div>
          <div className={classes.filterNav_right}>
            <h4>Filter</h4>
            <div className={classes.filterNav_right_searchBox}>
              <input
                type="text"
                placeholder="Find"
                className={classes.filterNav_right_searchBox_input}
                defaultChecked
              />
              <SearchSVG className={classes.filterNav_right_searchBox_icon} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default FilterNav;
