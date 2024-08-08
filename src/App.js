import React, { useState } from "react";
import weatherinfo from "./weatherinfo";
import axios from "axios";
import "./App.css";

export default function App(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.wind.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function search() {
    const apikey = "62231151ce343c4d68652e1617efc22f";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?
    q=${city}&appid=${apikey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(even) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="container">
          <weather defaultcity="New York" />
          <div className="weather">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-7">
                  <input
                    type="search"
                    placeholder="Enter a city.."
                    className="form-control"
                    autoFocus="on"
                    onChange={handleCityChange}
                  />
                </div>
                <div className="col-2">
                  <input
                    type="submit"
                    value="search"
                    className="btn btn-primary w-100"
                  />
                </div>
              </div>
            </form>
            <weatherInfo data={weatherData} />
          </div>
          <footer>
            This project was coded by{" "}
            <a href="https://www.dinah.io/" target="_blank">
              Dinah Buhane
            </a>{" "}
            and is{" "}
            <a href=" https://github.com/tinah1992" target="_blank">
              open-sourced on github
            </a>
          </footer>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading......";
  }
}
