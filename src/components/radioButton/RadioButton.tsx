import { useState, useId, useCallback } from "react";
import { ArrowDownSVG} from "../../assets/svgs";

import classes from "./RadioButton.module.scss";


const RadioButton = () => {
  
    const [checked, setChecked] = useState(false);

    const handleClick = useCallback(() => {
      setChecked(!checked);
    }, [checked]);
  
    const inputId = useId();
  
  
    return (
    <label
      className={`${classes.radioButtons} ${
        checked === true && classes.checked
      }`}
      htmlFor={inputId}
    >
      <input
        type="radio"
        id={inputId}
        onClick={handleClick}
        checked={checked}
      />
      <span
        className={`${classes.radioButtons_bullet} ${
          checked === true && classes.checked
        }`}
      />
      Text
      {checked ? <ArrowDownSVG /> : null}
    </label>
  );
};

export default RadioButton;
