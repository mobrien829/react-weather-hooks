import React, { useEffect, useState, useContext } from "react";
import logo from "./logo.svg";
import { WeatherContext } from "./contexts/weather-context";
import ForecastDisplay from "./forecast-display";
import "./App.css";

function App() {
  const [location, setLocation] = useState();
  const [lastForecast, setLastForecast] = useContext(WeatherContext);
  const [forecastKey, setForecastKey] = useState();
  const fetchWeather = (event) => {
    event.preventDefault();

    fetch(
      `https://still-depths-86857.herokuapp.com/forecast?location=${location}`
    )
      .then((res) => res.json())
      .then((data) => handleForecastData(data.forecastData));
  };

  const handleForecastData = (data) => {
    setLastForecast(data);
    setForecastKey(Object.keys(data.forecast)[0]);
    // setForecastKey(data.forecastData.forecast)
  };

  return (
    <div className="App">
      <header>
        <form className="search-form" onSubmit={(event) => fetchWeather(event)}>
          <label>
            Location:
            <input
              className="search-field"
              type="text"
              name="location"
              onChange={(event) => setLocation(event.target.value)}
            />
          </label>
          <input type="submit" value="Get Weather" />
        </form>
      </header>
      <div>
        <ForecastDisplay forecastKey={forecastKey} />
      </div>
    </div>
  );
}

export default App;
