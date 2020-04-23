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
      const month =
        dateObject.getUTCMonth() + 1 < 10
          ? `0` + (dateObject.getUTCMonth() + 1)
          : dateObject.getUTCMonth() + 1;
      setDate({
        year: dateObject.getUTCFullYear(),
        month,
        weekday: dateObject.getUTCDay(),
        forecastKey: `${dateObject.getUTCFullYear()}-${month}-${dateObject.getUTCDate()}`,
      });
    }
  }, [forecast, date]);
  if (forecast) {
    console.log(forecast);
  }
  return forecast ? (
    <div>{`Weather for ${forecast.location.country} on ${date.year}: Currently ${forecast.current.temperature} degrees, precipitation is ${forecast.current.precip}mm, humidity of ${forecast.current.humidity}%. The high will be ${forecast.forecast.maxtemp} and the low will be ${forecast.forecast.mintemp}`}</div>
  ) : (
    <div>Please search for a location</div>
  );
};

export default ForecastDisplay;
