import { MouseEvent, useCallback, useState } from "react";
import { ElipsisSVG, LinkSVG, VanArsdelLogoSVG } from "../../assets/svgs";

import classes from "./PageNav.module.scss";

function PageNav() {
  const tabs = ["Home", "Timeline", "Chat", "Assigned to you"];
  const [activeTabId, setActiveTabId] = useState(0);

  const handleClick = useCallback((event: MouseEvent<HTMLLIElement>) => {
    const targetTabIndex = event.currentTarget.value ?? 0;

    setActiveTabId(targetTabIndex);
  }, []);

  return (
    <div className={classes.topNav}>
      <div className={classes.topNav_left}>
        <VanArsdelLogoSVG />
        <h3 className={classes.topNav_left_title}>Van Arsdel</h3>
        <ul className={classes.topNav_left_tabsContainer}>
          {tabs.map((tab, index) => (
            <li
              key={index}
              role="button"
              aria-selected={activeTabId === index}
              className={classes.topNav_left_tabsContainer_tab}
              value={index}
              onClick={handleClick}
            >
              {tab}
            </li>
          ))}
        </ul>
      </div>
      <div className={classes.topNav_right}>
        <LinkSVG className={classes.topNav_right_icon} />
        <ElipsisSVG  className={classes.topNav_right_icon}  />
      </div>
    </div>
  );
}

export default PageNav;
