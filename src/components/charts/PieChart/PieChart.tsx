import Chart from "react-apexcharts";

import "./PieChart.scss"

const PieChart = () => {
  const series = [35, 25, 15, 10, 20];

  return (
    <Chart
      options={{
       colors: ["#a6e9ed", "#00666d", "#005b70", "#00b7c3", "#f5f5f5"],
        chart: {
          type: "donut",
        },
        legend:{show:false},
        dataLabels:{enabled:false},
        plotOptions: {
            pie: {
            
                donut: {
                size: '70%',
                labels: {
                    show: true,
                    value: {
                      show: false,
                    },
                    total: {
                      show: true,
                      fontSize: "28px",
                      fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
                      fontWeight: 600,
                      showAlways: true,
                      color: "#000000",
                      label: "1000",
                    },
                  },
              },
              
            }
          },
        responsive: [
          {
            breakpoint: 780,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      }}
      series={series}
      type="donut"
      width={250}
      height={236}
    />
  );
};

export default PieChart;
