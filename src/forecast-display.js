import React, { useContext, useEffect, useState } from "react";
import { WeatherContext } from "./contexts/weather-context";

const ForecastDisplay = ({ forecastKey }) => {
  const [forecast] = useContext(WeatherContext);
  const [date, setDate] = useState("");
  const [forecastData, setForecastData] = useState({});

  useEffect(() => {
    if (forecast) {
      const unix_time = forecast.location.localtime_epoch;
      const dateObject = new Date(unix_time * 1000);
      setDate(dateObject.toUTCString());
      setForecastData(forecast.forecast[forecastKey]);
      // console.log(forecast.forecast[forecastKey]);
    }
  }, [forecastData, forecast, forecastKey]);
  if (forecast) {
    console.log(forecast.location);
  }

  const locationHelper = (data) => {
    const area = data.name;
    const country = data.country;
    const region = data.region;
    if (!region) {
      return `${area}, ${country}`;
    } else {
      return `${area}, ${region}, ${country}`;
    }
  };
  return forecastData && forecast ? (
    <div>{`Weather for ${locationHelper(
      forecast.location
    )} on ${date}: Currently ${
      forecast.current.temperature
    } degrees, precipitation is ${forecast.current.precip}mm, humidity of ${
      forecast.current.humidity
    }%. The high will be ${forecastData.maxtemp} and the low will be ${
      forecastData.mintemp
    }`}</div>
  ) : (
    <div>Please search for a location</div>
  );
};

export default ForecastDisplay;
