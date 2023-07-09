import React, { useState } from "react";
import "./App.css";
import ThemeToggle from "./ThemeToggle";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function App(props) {
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState(props.defaultCity);
  const [isChecked, setIsChecked] = useState(false);
  const [forecastData, setForecastData] = useState([]);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
    });
  }
  function search() {
    const apiKey = "aea06fe0a91132d87cff36a96a5249bf";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    const forecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(forecastApiUrl).then((response) => {
      setForecastData(response.data.list);
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    search(city);
  }
  function handleCityChange(e) {
    setCity(e.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="App container">
        <div className="container first-container">
          <ThemeToggle isChecked={isChecked} setIsChecked={setIsChecked} />
          <div className="form-content">
            <div className="section-content-form">
              <form className="search-form" onSubmit={handleSubmit}>
                <input
                  className="form-input"
                  type="value"
                  placeholder="Enter a City"
                  aria-label="Search"
                  onChange={handleCityChange}
                />
                <button className="search-button" type="search">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
        <WeatherInfo data={weatherData} forecastData={forecastData} />

        <footer>
          <a
            href="https://github.com/lilianastrajescu/weather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            Coded by Liliana Strajescu
          </a>
        </footer>
      </div>
    );
  } else {
    search();
    return "Loading";
  }
}
