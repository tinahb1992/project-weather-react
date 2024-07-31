import React, { useState } from "react";
import formattedDate from "./formattedDate";
import axios from "axios";
import "./App.css";

export default function App(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.wind.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="container">
          <weather defaultcity="New York" />
          <div className="weather">
            <form>
              <div className="row">
                <div className="col-7">
                  <input
                    type="search"
                    placeholder="Enter a city.."
                    className="form-control"
                    autoFocus="on"
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
            <h1>{weatherData.city}</h1>
            <ul>
              <li>
                <formattedDate date={weatherData.date} />
              </li>
              <li className="text-capitalize">{weatherData.description}</li>
            </ul>
            <div className="row mt-3">
              <div className="col-6">
                <div className="clearfix">
                  <img
                    src={weatherData.iconUrl}
                    alt={weatherData.description}
                    className="float-left"
                  />
                  <span className="float-left">
                    <span className="temperature">
                      {" "}
                      {Math.round(temperature)}{" "}
                    </span>
                    <span className="unit">&deg;C</span>
                  </span>
                </div>
              </div>
              <div className="col-6">
                <ul>
                  <li>Humidity: {weatherData.humidity}%</li>
                  <li>Wind: {weatherData.wind} km/h</li>
                </ul>
              </div>
            </div>
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
    const apikey = "bc2cd97eaa209e7d22d8f3c84081655f";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultcity}&appid=${apikey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading......";
  }
}
