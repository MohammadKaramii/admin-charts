import { useState, useCallback } from "react";
import DropdownButton from "./dropdown-button/DropdownButton";

import classes from "./Dropdown.module.scss";

interface DropdownState {
  showList: boolean;
  activeOption: string | null;
}

const Dropdown = () => {
  const [dropdownState, setDropdownState] = useState<DropdownState>({
    showList: false,
    activeOption: null,
  });

  const toggleDropdownState = useCallback((key: string) => {
    setDropdownState((prevState) => {
      const isActive = prevState.activeOption === key;

      if (key === "showList") {
        return {
          ...prevState,
          showList: !prevState.showList,
        };
      }

      return {
        ...prevState,
        activeOption: isActive ? null : key,
      };
    });
  }, []);

  return (
    <li className={classes.listOptions}>
      <DropdownButton
        isActive={dropdownState.showList}
        onClick={() => toggleDropdownState("showList")}
        label="Group title"
      >
        <li>
          <DropdownButton
            isActive={dropdownState.activeOption === "showOption1"}
            onClick={() => toggleDropdownState("showOption1")}
            label="Option 1"
            type="option"
          >
            <li>
              <DropdownButton
                isActive={dropdownState.activeOption === "item1"}
                onClick={() => toggleDropdownState("item1")}
                label="Item 1"
                type="item"
              />
            </li>
          </DropdownButton>
        </li>

        <li>
          <DropdownButton
            isActive={dropdownState.activeOption === "showOption2"}
            onClick={() => toggleDropdownState("showOption2")}
            label="Option 2"
            type="option"
          >
            {dropdownState.activeOption === "showOption2" && (
              <ul>
                {[...Array(6)].map((_, index) => (
                  <li key={index}>
                    <DropdownButton
                      isActive={dropdownState.activeOption === `item${index}`}
                      onClick={() => toggleDropdownState(`item${index}`)}
                      label={`Item ${index + 1}`}
                      type="item"
                    />
                  </li>
                ))}
              </ul>
            )}
          </DropdownButton>
        </li>
      </DropdownButton>
    </li>
  );
};

export default Dropdown;
