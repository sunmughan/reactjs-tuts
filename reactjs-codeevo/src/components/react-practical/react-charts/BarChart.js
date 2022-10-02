// Bar CHART IN REACT JS
import React from "react";
import { Bar } from "react-chartjs-2";
// import Chart from "chart.js/auto";

const BarChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Sales for 2020 (M)",
        data: [3, 5, 4, 3, 5],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        pointBackgroundColor: "rgba(53, 162, 235, 0.5)",
        fill: true,
        pointBorderColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Sales for 2019 (M)",
        data: [1, 2, 1, 1, 2],
        fill: true,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        pointBackgroundColor: "rgba(255, 99, 132, 0.5)",
        pointBorderColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Bar Chart",
      },
    },
    scales: {
      y: {
        min: 0,
        max: 6,
        stepSize: 1,
      },
    },
  };

  return (
    <>
      <Bar data={data} options={options} />
    </>
  );
};

export default BarChart;
