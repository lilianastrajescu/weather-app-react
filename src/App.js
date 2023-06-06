import React, { useState } from "react";
import "./App.css";
import ThemeToggle from "./ThemeToggle";
import axios from "axios";

import contrast from "./img/contrast.png"

export default function App() {
const [ready, setReady] = useState(false);
const [temperature, setTemperature] = useState(null);

function handleResponse(response){
  console.log(response.data)
  setTemperature(response.data.main.temp)
  setReady(true)
}

if (ready){
  return (
    <div className="App container">
      <div className="container first-container">
        <div className="row form-content">
          <ThemeToggle />
          <div className="col-sm-12 col-md-10 section-content-form">
            <form className="search-form">
              <input
                className="form-input"
                type="value"
                placeholder="Enter a City"
                aria-label="Search"
              />
              <button className="search-button" type="search">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="content-section">
        <div className="row">
          <div className=" col-sm-12 col-md-4 col-lg-3">
            <div className="row section-details-weather">
              <div className="col-sm-12 details-weather">Wind</div>
              <div className="col-sm-12 details-weather">Humidity</div>
              <div className="col-sm-12 details-weather">How are you</div>
            </div>
          </div>
          <div className=" temperature-section col-sm-12 col-md-8 col-lg-9">
            <img src={contrast} alt="sun" />
            <p>{Math.round(temperature)}°C</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row days-container">
          <div className="col-md-2 days-boxes">
            <h6>Monday</h6>
            <img src={contrast} alt="sun"></img>
            <p>5 °</p>
          </div>
          <div className=" col-md-2 days-boxes">
            <h6>Monday</h6>
            <img src={contrast} alt="sun"></img>
            <p>5 °</p>
          </div>
          <div className="col-md-2 days-boxes">
            <h6>Monday</h6>
            <img src={contrast} alt="sun"></img>
            <p>5 °</p>
          </div>
          <div className="col-md-2 days-boxes">
            <h6>Monday</h6>
            <img src={contrast} alt="sun"></img>
            <p>5 °</p>
          </div>
          <div className="col-md-2 days-boxes">
            <h6>Monday</h6>
            <img src={contrast} alt="sun"></img>
            <p>5 °</p>
          </div>
        </div>
      </div>
      <footer>
        <a href="https://github.com/lilianastrajescu/weather-app-react">
          Coded by Liliana Strajescu
        </a>
      </footer>
    </div>
  );
} else {
const apiKey = "d8875103aceb9bfca53f24861ccb50c4";
let city = "London";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(handleResponse);

return "Loading"
}

}
