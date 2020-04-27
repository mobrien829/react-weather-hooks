import React, { useState, useContext } from "react";
import { WeatherContext } from "./contexts/weather-context";
import ForecastDisplay from "./forecast-display";
import SearchForm from "./search-form";
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
        <div className="about-app">
          <h1 className="app-title">Weathering Hooks</h1>
          <p className="app-description">
            A simple, hook-based React.js weather app
          </p>
        </div>
      </header>
      <SearchForm setLocation={setLocation} fetchWeather={fetchWeather} />
      <div>
        <ForecastDisplay forecastKey={forecastKey} />
      </div>
    </div>
  );
}

export default App;
