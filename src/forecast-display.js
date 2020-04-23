import React, { useContext, useEffect } from "react";
import { WeatherContext } from "./contexts/weather-context";

const ForecastDisplay = () => {
  const [forecast] = useContext(WeatherContext);

  useEffect(() => {
    if (forecast) {
      console.log(forecast);
    }
  });

  return forecast ? (
    <div>{`Weather for ${forecast.location.country}: Currently ${forecast.current.temperature} degrees, precipitation is ${forecast.current.precip}mm, humidity of ${forecast.current.humidity}%. The high will be ${forecast.forecast.maxtemp} and the low will be ${forecast.forecast.mintemp}`}</div>
  ) : (
    <div>Please search for a location</div>
  );
};

export default ForecastDisplay;
