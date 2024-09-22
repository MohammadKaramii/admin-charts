import Chart from "react-apexcharts";

const BasicBarChart = () => {
  const series = [
    {
      name: "Net Profit",
      data: [68, 68, 68, 68, 68, 68],
    },
    {
      name: "Revenue",
      data: [84, 84, 84, 84, 84, 84],
    },
    {
      name: "Free Cash Flow",
      data: [30, 30, 30, 30, 30, 30],
    },
  ];

  return (
    <Chart
      options={{
        colors: ["#93c5fd", "#1d4ed8", "#888888"],
        chart: {
          type: "bar",
          height: 350,
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
          },
        },

        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        xaxis: {
          categories: ["XS", "S", "M", "L", "XL", "XXL"],
          labels:{
            style:{
                fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
            }
          }
        },
        yaxis: {
          stepSize: 10,
        },
        fill: {
          opacity: 1,
        },
        legend: {
          show: false,
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
      type="bar"
      width={480}
      height={272}
    />
  );
};

export default BasicBarChart;
