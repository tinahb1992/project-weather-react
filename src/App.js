import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./App.css";

export default function App(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function search() {
    const apikey = "8c78e9e7e9928cd1a2a6f923072c3dec";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?
    q=${city}&appid=${apikey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
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
            <weatherForecast coordinates={weatherData.coordinates} />
          </div>
          <footer>
            This project was coded by{" "}
            <a
              href="https://www.dinah.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dinah Buhane
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/tinahb1992/project-weather-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              open-sourced on github
            </a>{" "}
            and{" "}
            <a
              href="https://app.netlify.com/sites/singular-cheesecake-f585cf/overview"
              target="_blank"
              rel="noopener noreferrer"
            >
              hosted on netlify
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
