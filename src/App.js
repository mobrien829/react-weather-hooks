import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [location, setLocation] = useState();
  const [lastForecast, setLastForecast] = useState();
  const fetchWeather = (event) => {
    event.preventDefault();

    fetch(
      `https://still-depths-86857.herokuapp.com/forecast?location=${location}`
    )
      .then((res) => res.json())
      .then((data) => setLastForecast(data));
  };
  useEffect(() => {
    if (lastForecast) {
      console.log(lastForecast);
    }
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      <div>
        <form onSubmit={(event) => fetchWeather(event)}>
          <label>
            Location
            <input
              type="text"
              placeholder="Location"
              name="location"
              onChange={(event) => setLocation(event.target.value)}
            />
          </label>
          <input type="submit" value="Get Weather" />
        </form>
      </div>
    </div>
  );
}

export default App;
