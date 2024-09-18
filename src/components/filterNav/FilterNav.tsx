import { MenuSVG, SearchSVG } from "../../assets/svgs";
import RadioButton from "../radioButton/RadioButton";
import classes from "./FilterNav.module.scss";

function FilterNav() {
  return (
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
          />
          <SearchSVG  className={classes.filterNav_right_searchBox_icon} />
        </div>
      </div>
    </div>
  );
}

export default FilterNav;
