import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import {
  getAllDriversByYear,
  getDriverStandings,
  getConstructorsStandings,
  getSchedule,
  getTracks,
  getLapTimesByTrack
} from "./services/ErgastApi";

import SimpleGraphExamples from "./components/simpleGraphExamples/SimpleGraphExamples";
import DoughnutGraph from "./components/doughnutGraph/DoughnutGraph";
import LapTimesLineGraph from "./components/lapTimesLineGraph/LapTimesLineGraph";
import TrackOptions from "./components/trackOptions/TrackOptions";

function App() {
  let drivers_list;
  const [drivers, setDrivers] = useState(0);
  const [constructorStandings, setConstructorStandings] = useState(0);
  const [tracks, setTracks] = useState(0);
  const [lapTimes, setLapTimes] = useState(0);
  useEffect(() => {
    //   getAllDrivers().then((data) => {
    //     setDrivers(data);
    //     console.log("bam");
    //   });
    // getDriverStandings().then((data) => {});
    // getConstructorsStandings().then((data) => {
    //   setConstructorStandings(data);
    // });
    // getTracks().then((data) => {
    //   setTracks(data);
    // });
    getLapTimesByTrack(4).then((data) => {
      setLapTimes(data);
    });
  }, []);
  return (
    <div className="App">
      {/* <SimpleGraphExamples /> */}
      {/* <DoughnutGraph data={constructorStandings} /> */}

      {/* <TrackOptions tracks={tracks}/> */}
      <LapTimesLineGraph data={lapTimes} />
    </div>
  );
}

export default App;
