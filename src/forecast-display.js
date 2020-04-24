import React, { useContext, useEffect, useState } from "react";
import { WeatherContext } from "./contexts/weather-context";

const ForecastDisplay = ({ forecastKey }) => {
  const [forecast] = useContext(WeatherContext);
  const [date, setDate] = useState({
    year: null,
    month: null,
    day: null,
    weekday: null,
  });
  const [forecastData, setForecastData] = useState({});

  useEffect(() => {
    if (forecast) {
      const unix_time = forecast.location.localtime_epoch;
      const dateObject = new Date(unix_time * 1000);
      // setForecastKey(Object.keys(forecast.forecast)[0]);
      setForecastData(forecast.forecast[forecastKey]);
      // console.log(forecast.forecast[forecastKey]);
    }
  }, [forecastData, forecast, forecastKey]);

  return forecastData && forecast ? (
    <div>{`Weather for ${forecast.location.country} on ${date.year}: Currently ${forecast.current.temperature} degrees, precipitation is ${forecast.current.precip}mm, humidity of ${forecast.current.humidity}%. The high will be ${forecastData.maxtemp} and the low will be ${forecastData.mintemp}`}</div>
  ) : (
    <div>Please search for a location</div>
  );
};

export default ForecastDisplay;
