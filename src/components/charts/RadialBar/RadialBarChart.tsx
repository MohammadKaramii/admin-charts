import Chart from "react-apexcharts";

import "./RadialBar.scss";

const RadialBarChart = () => {
  
  const series = [90, 80, 70, 50, 80, 50, 40, 30];

  return (
    <div className="container">
      <Chart
        options={{
          chart: {
            type: "radialBar",
          },
          plotOptions: {
            radialBar: {
              offsetY: 0,
              offsetX: -50,
              startAngle: 0,
              endAngle: 270,

              hollow: {
             
            size: "5%",
                background: "transparent",
                image: undefined,
              },
              dataLabels: {
                name: {
                  show: false,
                },
                value: {
                  show: false,
                },
              },
         
            },
         
          },
          colors: [   "#555555","#2563eb", "#3b82f6", "#aaaaaa", "#60a5fa","#1d4ed8","#1e3a8a","#bfdbfe",      ],
          
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
          yaxis: {
            reversed: true,
          },
          labels: ["30%", "30%","30%", "30%","30%", "30%","30%", "30%",],
  
          legend: {
            show: true,
            position: "left",
            fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
            fontSize: "12px",
            markers: {
              shape: "square",
            },
          },
          
        }}
        series={series}
        type="radialBar"
        width={400}
        height={400}
      />
    </div>
  );
};

export default RadialBarChart;
