import React, { useEffect, useState, useContext } from "react";
import logo from "./logo.svg";
import { WeatherContext } from "./contexts/weather-context";
import ForecastDisplay from "./forecast-display";
import "./App.css";

function App() {
  const [location, setLocation] = useState();
  const [lastForecast, setLastForecast] = useContext(WeatherContext);
  const fetchWeather = (event) => {
    event.preventDefault();

    fetch(
      `https://still-depths-86857.herokuapp.com/forecast?location=${location}`
    )
      .then((res) => res.json())
      .then((data) => setLastForecast(data.forecastData));
  };

  return (
    <div className="App">
      <header>
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
      </header>
      <div>
        <ForecastDisplay />
      </div>
    </div>
  );
}

export default App;
