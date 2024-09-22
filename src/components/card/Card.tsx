import { MouseEvent, useCallback, useState } from "react";
import {
  ElipsisSVG,
  ExpandSVG,
  SearchSVG,
  SettingSVG,
} from "../../assets/svgs";

import classes from "./card.module.scss";
import { Link } from "react-router-dom";
import AreaChart from "../charts/AreaChart/AreaChart";
import BarChart from "../charts/BarChart";
import BasicBarChart from "../charts/BasicBarChart";
import PieChart from "../charts/PieChart/PieChart";
import RadialBar from "../charts/RadialBar/RadialBarChart";
import {SemiDonutChart} from "../charts/SemiDonut/SemiDonutChart";

interface Props {
  title: string;
  timeTab?: boolean;
  multiTab?: boolean;
  tools?: boolean;
  chart: string;
}

function Card  ({ title, timeTab, multiTab, chart, tools }: Props)  {
  
  const periods = ["7 days", "30 days", "60 days"];
  const orders = ["First tab", "Second Tab", "Third tab"];
  const [activeTabId, setActiveTabId] = useState(0);
  const handleClick = useCallback((event: MouseEvent<HTMLLIElement>) => {
    setActiveTabId(event.currentTarget.value ?? 0);
  }, []);

  const renderTabs = useCallback(
    (tabs: string[]) => (
      <ul className={classes.cardTabs}>
        {tabs.map((tab, index) => (
          <li
            key={index}
            role="button"
            aria-selected={activeTabId === index}
            className={classes.cardTabs_tab}
            value={index}
            onClick={handleClick}
          >
            {tab}
          </li>
        ))}
      </ul>
    ),
    [activeTabId, handleClick]
  );

  const chartComponents: Record<string, JSX.Element> = {
    area: <AreaChart />,
    bar: <BarChart />,
    basic: <BasicBarChart />,
    pie: <PieChart />,
    radial: <RadialBar />,
    donut: <SemiDonutChart />,
  };

  return (
    <div className={classes.container}>
      <div className={classes.cardInfo}>
        <div>
          <h3>{title}</h3>
          <p>Description</p>
        </div>
        <div className={classes.cardInfo_tools}>
          {tools ? (
            <>
              <SearchSVG />
              <ExpandSVG />
              <SettingSVG />
              <ElipsisSVG />
            </>
          ) : (
            <ElipsisSVG />
          )}
        </div>
      </div>

      {timeTab ? renderTabs(periods) : multiTab ? renderTabs(orders) : null}

      <div className={classes.chart}>{chartComponents[chart] || null}</div>

      <Link to="./" className={classes.details}>
        View details
      </Link>
    </div>
  );
};

export default Card;
