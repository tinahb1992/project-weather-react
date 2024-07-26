import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
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
          <h1>New York</h1>
          <ul>
            <li>Wednesday 07:00</li>
            <li>Mostly Cloudy</li>
          </ul>
          <div className="row mt-3">
            <div className="col-6">
              <div className="clearfix">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt="Mostly Cloudy"
                  className="float-left"
                />
                <span className="float-left">
                  <span className="temperature">6</span>
                  <span className="unit">&deg;C</span>
                </span>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>Precipitation: 15%</li>
                <li>Humidity: 72%</li>
                <li>Wind: 13km/h</li>
              </ul>
            </div>
          </div>
        </div>
        <footer>
          This project was coded by{" "}
          <a href="https://www.dinah.io/" target="_blank">
            Dinah Buthane
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/tinahb1992/project-weather-react"
            target="_blank"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
