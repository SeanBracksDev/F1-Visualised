import React from "react";
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import {
  f1TeamColourBorders,
  f1TeamColourFills,
} from "../../definitions/teamColours";

const DoughnutGraph = (props) => {
  let data = props.data;
  if (data !== 0) {
    let team_names = data.map((row) => row.name.replace(" F1 Team", "")); // for some reason Haas & Alpine have "F1 Team" appended, so remove for team colour
    let team_points = data.map((row) => parseInt(row.points));

    const plot_data = {
      labels: team_names,
      datasets: [
        {
          data: team_points,
          backgroundColor: team_names.map(
            (t_name) => f1TeamColourFills[t_name]
          ),
          borderColor: team_names.map((t_name) => f1TeamColourBorders[t_name]),
          borderWidth: 2,
        },
      ],
    };

    return (
      <div style={{ width: "500px" }}>
        <Doughnut data={plot_data} />
      </div>
    );
  }
};

export default DoughnutGraph;
