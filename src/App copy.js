import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { getAllDriversByYear } from "./services/ErgastApi";

function App() {
  const [drivers, setDrivers] = useState(0);
  let drivers_list = [];
  useEffect(() => {
    getAllDriversByYear().then((data) => {
      setDrivers(data);
      // console.log(drivers);
      console.log(drivers_list);
    });
  }, [drivers]);

  drivers_list = (drivers.length > 0) ? drivers.map((id) => <li>{id}</li>) : 1;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>{drivers_list}</ul>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
