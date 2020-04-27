import React from "react";

const SearchForm = ({ fetchWeather, setLocation }) => {
  return (
    <form className="search-form" onSubmit={(event) => fetchWeather(event)}>
      <label className="search-label" htmlFor="location">
        Location:
      </label>
      <input
        className="search-field"
        id="location"
        type="text"
        name="location"
        onChange={(event) => setLocation(event.target.value)}
      />

      <input type="submit" value="Get Weather" />
    </form>
  );
};

export default SearchForm;
