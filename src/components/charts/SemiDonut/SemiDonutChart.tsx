import { memo, useMemo } from "react";
import Chart from "react-apexcharts";

import classes from "./SemiDonutChart.module.scss";

function SemiDonutChartView () {
 
  const series = useMemo(() => [76, 24], []);

  const percentageLabel = useMemo(() => {
    const total = series.reduce((a, b) => a + b, 0);
    const maxValue = Math.max(...series);
    const maxPercentage = (maxValue / total) * 100;
    const formattedPercentage = Number.isInteger(maxPercentage)
      ? maxPercentage
      : maxPercentage.toFixed(2);
    return `${formattedPercentage}%`;
  }, [series]);

  return (
    <>
      <span className={classes.min}>0</span>
      <Chart
        options={{
          colors: ["#00b7c3", "#D1D1D1"],
          chart: {
            type: "donut",

            fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
          },
          stroke: {
            width: 4,
            colors: ["#ffffff"],
          },
          plotOptions: {
            pie: {
              startAngle: -90,
              endAngle: 90,
              expandOnClick: false,
              donut: {
                size: "70%",
                labels: {
                  show: true,
                  value: {
                    show: false,
                  },
                  total: {
                    show: true,
                    fontSize: "24px",
                    fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
                    fontWeight: 600,
                    showAlways: false,
                    color: "#000000",
                    formatter: () => "",
                    label: percentageLabel,
                  },
                },
              },
            },
          },

          dataLabels: {
            enabled: false,
          },
          labels: ["Label 1", "Label 2"],

          legend: {
            position: "bottom",
            fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
            fontSize: "12px",
            offsetY: -70,
            markers: {
              shape: "square",
            },
          },
        }}
        series={series}
        type="donut"
      />
      <span className={classes.max}>100</span>
    </>
  );
};


export const SemiDonutChart = memo(SemiDonutChartView);