import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahreheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          &deg;C /{" "}
          <a href="/" onClick={showFahrenheit}>
            &deg;F
          </a>
        </span>
      </div>
    );
  } else {
    let fahreheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(fahreheit())}</span>
        <span className="unit">
          <a href="/" onClick={showCelsius}>
            &deg;C
          </a>{" "}
          / &deg;F
        </span>
      </div>
    );
  }
}
