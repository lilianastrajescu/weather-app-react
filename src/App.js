import React, { useState } from "react";
import "./App.css";
import ThemeToggle from "./ThemeToggle";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function App(props) {
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState(props.defaultCity);
    const [isChecked, setIsChecked] = useState(false);

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
    const apiKey = "d8875103aceb9bfca53f24861ccb50c4";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
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
          <div className="row form-content">
            <div className="col-sm-12 col-md-10 section-content-form">
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
        <WeatherInfo data={weatherData} isChecked={isChecked} />

        <footer>
          <a href="https://github.com/lilianastrajescu/weather-app-react">
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
