// CHARTS IN REACT JS
import React from "react";
import BarChart from "./BarChart";
import DoughnutChart from "./DoughnutChart";
import LineChart from "./LineChart";
import "./ReactCharts.css";
import Chart from "chart.js/auto";

const ReactCharts = () => {
  return (
    <div className="charts-container">
      {/* LINE CHART IN REACT JS */}
      <div className="chart">
        <LineChart />
      </div>

      {/* BAR CHART IN REACT JS */}
      <div className="chart">
        <BarChart />
      </div>

      {/* Doughnut CHART IN REACT JS */}
      <div className="chart">
        <DoughnutChart />
      </div>
    </div>
  );
};

export default ReactCharts;
