import { useCallback } from "react";
import Chart from "react-apexcharts";

import "./AreaChart.scss";
const AreaChart = () => {
 
  const series = [
    {
      name: "Line 1",
      data: [
        { x: "Jan", y: 70000 },
        { x: "Feb", y: 90000 },
        { x: "Mar", y: 85000 },
        { x: "Apr", y: 20000 },
        { x: "May", y: 80000 },
        { x: "Jun", y: 10000 },
      ],
    },
    {
      name: "Line 2",
      data: [
        { x: "Jan", y: 50000 },
        { x: "Feb", y: 60000 },
        { x: "Mar", y: 40000 },
        { x: "Apr", y: 50000 },
        { x: "May", y: 52000 },
        { x: "Jun", y: 70000 },
      ],
    },
  ];
  
  const labelFormatter = useCallback((value: number) => {
    const val = Math.abs(value);
    return val >= 1000 ? val / 1000 + " K" : val.toString();
  }, []);

  return (
    <Chart
      options={{
        colors: ["#B146C2", "#00B7C3"],
        chart: {
          type: "area",
          height: 350,
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
          width: 3,
        },

        xaxis: {
          type: "category",
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],

          axisBorder: {
            show: true,
          },
          axisTicks: {
            show: true,
          },
          title: {
            text: "X-axis title",
            style: {
              fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
              fontWeight: 600,
              fontSize: "10px",
            },
          },
          labels: {
            style: {
              fontSize: "12px",
            },
          },
        },
        yaxis: {
          floating: false,
          title: {
            text: "Y-axis title",
            style: {
              fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
              fontWeight: 600,
              fontSize: "10px",
            },
          },
          labels: {
            formatter: labelFormatter,
            style: {
              fontSize: "10px",
            },
          },
        },
        fill: {
          opacity: 0.5,
        },

        legend: {
          fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
          fontSize: "12px",
          markers: {
            shape: "square",
          },
        },
        responsive: [
          {
            breakpoint: 780,
            options: {
              chart: {
                width: 320,
              },
              legend: {
                show: false,
              },
            },
          },
        ],
      }}
      series={series}
      type="area"
      width={500}
      height={250}
    />
  );
};

export default AreaChart;
