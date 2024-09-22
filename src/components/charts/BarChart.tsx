import { useCallback } from "react";
import Chart from "react-apexcharts";

const BarChart = () => {
  const series = [
    {
      name: "sales",
      data: [
        {
          x: "jan",
          y: 70000,
        },
        {
          x: "feb",
          y: 80000,
        },
        {
          x: "mar",
          y: 65000,
        },
        {
          x: "apr",
          y: 70000,
        },
        {
          x: "may",
          y: 65000,
        },
        {
          x: "jun",
          y: 90000,
        },
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
        chart: {
          toolbar: {
            tools: {
              download: false,
            },
          },
        },
        plotOptions: {
          bar: {
            columnWidth: "60%",
          },
        },
        colors: ["#00b7c3"],
        dataLabels: {
          enabled: false,
        },
        yaxis: {
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
              fontSize: "12px",
            },
          },
        },
        xaxis: {
          title: {
            text: "X-axis title",
            style: {
              fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
              fontWeight: 600,
              fontSize: "10px",
            },
          },
        },
      }}
      series={series}
      type="bar"
      width={300}
      height={230}
    />
  );
};

export default BarChart;
