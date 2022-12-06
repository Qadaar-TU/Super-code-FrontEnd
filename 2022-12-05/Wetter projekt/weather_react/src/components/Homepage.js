import { useState, useEffect } from "react";

const Homepage = () => {
  const [citydata, setCitydata] = useState();
  const [weatherdata, setWeatherdata] = useState();

  const api_key = process.env.REACT_APP_KEY;
  //   console.log(api_key);

  //   =================  BUTTON FUNCTION ============================
  const buttoncity = (event) => {
    let inputCity = document.querySelector(".city_input");

    event.preventDefault();
    setCitydata(inputCity.value);
  };

  // ===================   FETCH  ================================
  const showFetch = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${citydata}&appid=${api_key}`
    )
      .then((response) => response.json())
      .then((json) => setWeatherdata(json));
  };
  useEffect(showFetch, [citydata]);
  console.log(weatherdata);

  // ========================   RETURN ========================
  return (
    <div>
      <input
        type="text"
        name="#city_input"
        className="city_input"
        placeholder="Town"
      />
      <button onClick={buttoncity} className="buttoncity">
        Start
      </button>
      <p>{citydata}</p>

      <h3>{weatherdata?.name}</h3>
      <h3>{weatherdata?.sys?.country}</h3>
      <h3>{weatherdata?.main?.humidity}</h3>
      <h3>{weatherdata?.main?.temp}</h3>
    </div>
  );
};

export default Homepage;
