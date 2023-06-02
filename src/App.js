import React, { useState } from "react";
import "./App.css";
import ThemeToggle from "./ThemeToggle";

export default function App() {
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
          <div className=" temperature-section col-sm-12 col-md-8 col-lg-9">10 C</div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-2">1 Sec</div>
          <div className="col-sm-2">2 Sec</div>
          <div className="col-sm-2">3 sec</div>
        </div>
      </div>
      <footer>
        <a href="https://github.com/lilianastrajescu/weather-app-react">
          Open source Code by Liliana Strajescu
        </a>
      </footer>
    </div>
  );
}
