// Doughnut CHART IN REACT JS
import React from "react";
import { Doughnut } from "react-chartjs-2";
// import Chart from "chart.js/auto";

const DoughnutChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Sales for 2020 (M)",
        data: [3, 5, 4, 3, 5],
        backgroundColor: [
          "rgba(53, 162, 235, 0.5)",
          "rgba(83, 62, 235, 0.5)",
          "rgba(153, 162, 35, 0.5)",
          "rgba(31, 12, 235, 0.5)",
          "rgba(232, 162, 235, 0.5)",
        ],
        pointBackgroundColor: [
          "rgba(53, 162, 235, 0.5)",
          "rgba(83, 62, 235, 0.5)",
          "rgba(153, 162, 35, 0.5)",
          "rgba(31, 12, 235, 0.5)",
          "rgba(232, 162, 235, 0.5)",
        ],
        fill: true,
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Doughnut Chart",
      },
    },
  };

  return (
    <>
      <Doughnut data={data} options={options} />
    </>
  );
};

export default DoughnutChart;
