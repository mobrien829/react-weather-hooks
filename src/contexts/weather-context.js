import React, { useState, createContext } from "react";

export const WeatherContext = createContext();

export const WeatherContextProvider = (props) => {
  const [forecast, setForecast] = useState();
  return (
    <WeatherContext.Provider value={[forecast, setForecast]}>
      {props.children}
    </WeatherContext.Provider>
  );
};
