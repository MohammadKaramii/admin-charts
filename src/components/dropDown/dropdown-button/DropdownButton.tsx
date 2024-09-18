import { ArrowDownSVG } from "../../../assets/svgs";
import { clsx } from "../../../utilis/clsx";

import classes from "./DropdownButton.module.scss"; 

interface Props {
  isActive: boolean;
  onClick: () => void;
  label: string;
  children?: React.ReactNode;
  type?: string;
}

const DropdownButton = ({
  isActive,
  onClick,
  label,
  children,
  type = "",
}: Props) => {
  return (
    <>
      <button
        onClick={onClick}
        className={clsx(classes.listButton, {
          [classes.active]: isActive,
          [classes.option]: type === "option",
          [classes.item]: type === "item",
        })}
      >
        <ArrowDownSVG />
        {label}
      </button>
      {isActive && children && <ul>{children}</ul>}
    </>
  );
};

export default DropdownButton;
