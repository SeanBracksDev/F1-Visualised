import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  f1DriverColourBorders,
  f1DriverColourFills,
} from "../../definitions/teamColours";

const LineGraph = (props) => {
  const [lowerLapBound, setLowerLapBound] = useState(0);
  const [upperLapBound, setUpperLapBound] = useState(0);

  // Haven't figured out a way to display data in graph as MM:SS:ss yet, so convert to just seconds
  // TODO Figure this out ^^
  function convert_timestamp_to_seconds(timestamp) {
    // Assumes input is like 'MM:SS:sss'
    let ts_split = timestamp.split(":");

    let seconds =
      parseFloat(ts_split[0]) * 60 +
      parseFloat(ts_split[1]) +
      parseFloat("0." + ts_split[2]);
    return seconds;
  }

  function handleLapsFilter(){

  }

  let data = props.data;

  // only try and process/display data if we have any
  if (data !== 0) {
    const number_laps = Object.keys(data["lapTimes"]).length;
    // TODO Make laps start from 1, not 0
    const laps_arr = Array.from(Array(number_laps).keys());
    const track_country = data["Circuit"]["Location"]["country"];
    let track_id = data["Circuit"]["circuitId"];
    track_id = track_id.charAt(0).toUpperCase() + track_id.slice(1);
    let drivers_laps = {};

    // TODO is there a more efficient way to do this? Probably.
    // TODO Select which drivers to load data for in a previous step?
    // TODO Optional selection for a range of laps, e.g lap 10 to lap 20 etc.
    for (const lap of data["lapTimes"]) {
      for (const driver_lap of lap["Timings"]) {
        let lap_in_seconds = convert_timestamp_to_seconds(driver_lap["time"]);
        if (drivers_laps.hasOwnProperty(driver_lap["driverId"])) {
          drivers_laps[driver_lap["driverId"]].push(lap_in_seconds);
        } else {
          drivers_laps[driver_lap["driverId"]] = [lap_in_seconds];
        }
      }
    }

    let datasets = Object.keys(drivers_laps).map(function (driver, index) {
      return {
        label: driver,
        data: drivers_laps[driver],
        backgroundColor: f1DriverColourBorders[driver],
        borderColor: f1DriverColourFills[driver],
      };
    });

    const options = {
      // TODO Styling of all titles
      scales: {
        x: {
          title: {
            display: true,
            text: "Lap",
          },
        },
        y: {
          title: {
            display: true,
            text: "Lap Time (s)",
          },
        },
      },
      plugins: {
        title: {
          display: true,
          text: `Driver Lap times for ${track_country} - ${track_id} (Round ${data["round"]})`,
        },
        legend: {
          display: true,
          title: {
            display: true,
            text: "Drivers",
          },
        },
      },
    };

    const plot_data = {
      labels: laps_arr,
      datasets: datasets,
    };

    return (
      <div style={{ width: "1400px" }}>
        <select name="lower_lap_bound" id="lower_lap_bound">
          {laps_arr.map((lap) => {
            return <option onChange={handleLapsFilter()} value={`${lap}`}>{lap}</option>;
          })}
        </select>
        <select name="upper_lap_bound" id="upper_lap_bound">
          {laps_arr.map((lap) => {
            return <option onChange={handleLapsFilter()} value={`${lap}`}>{lap}</option>;
          })}
        </select>
        <Line data={plot_data} options={options} />
      </div>
    );
  }
};

export default LineGraph;
