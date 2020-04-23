import React, { useContext, useEffect, useState } from "react";
import { WeatherContext } from "./contexts/weather-context";

const ForecastDisplay = () => {
  const [forecast] = useContext(WeatherContext);
  const [date, setDate] = useState({
    year: null,
    month: null,
    day: null,
    weekday: null,
    forecastKey: ``,
  });

  useEffect(() => {
    if (forecast) {
      const unix_time = forecast.location.localtime_epoch;
      const dateObject = new Date(unix_time * 1000);
      setDate({
        year: dateObject.getUTCFullYear(),
        month: dateObject.getUTCMonth(),
        day: dateObject.getUTCDate(),
        weekday: dateObject.getUTCDay(),
        forecastKey: `${dateObject.getUTCFullYear()}-${dateObject.getUTCMonth()}-${dateObject.getUTCDate()}`,
      });
    }
  }, [forecast]);
  if (forecast) {
    console.log(forecast.forecast.keys);
  }
  return forecast ? (
    <div>{`Weather for ${forecast.location.country} on ${date.year}: Currently ${forecast.current.temperature} degrees, precipitation is ${forecast.current.precip}mm, humidity of ${forecast.current.humidity}%. The high will be ${forecast.forecast.maxtemp} and the low will be ${forecast.forecast.mintemp}`}</div>
  ) : (
    <div>Please search for a location</div>
  );
};

export default ForecastDisplay;
