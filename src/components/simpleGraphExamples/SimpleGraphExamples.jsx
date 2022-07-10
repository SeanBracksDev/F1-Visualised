import React, { useState } from "react";
import "chart.js/auto";
import { Doughnut, Line, Bar, Radar } from "react-chartjs-2";
import {
  f1TeamColourBorders,
  f1TeamColourFills,
} from "../../definitions/teamColours";

const SimpleGraph = () => {
  const teams = Object.keys(f1TeamColourBorders);
  const teamBorderColours = Object.values(f1TeamColourBorders);
  const teamFillColours = Object.values(f1TeamColourFills);

  const [data, setData] = useState([10, 12, 33, 4, 22, 10, 12, 33, 4, 22]);

  const incrementValue = (index) => {
    let newData = [...data];
    newData[index] += 1;
    setData(newData);
  };

  const some_data = {
    labels: teams,
    datasets: [
      {
        data: data,
        backgroundColor: teamFillColours,
        borderColor: teamBorderColours,
        borderWidth: 2,
        borderWidth: 2,
      },
    //   {
    //     data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    //     backgroundColor: teamFillColours,
    //     borderColor: teamBorderColours,
    //     borderWidth: 2,
    //   },
    ],
  };

  return (
    <div style={{ width: "800px" }}>
      <button onClick={() => incrementValue(0)}>click</button>
      <div>
        <Doughnut data={some_data} />
      </div>
      <div>
        <Line data={some_data} />
      </div>
      <div>
        <Bar data={some_data} />
      </div>
      <div>
        <Radar data={some_data} />
      </div>
    </div>
  );
};

export default SimpleGraph;
