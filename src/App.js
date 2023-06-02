import React, { useState } from "react";
import "./App.css";
import ThemeToggle from "./ThemeToggle";

export default function App() {
  return (
    <div className="App container">
      <ThemeToggle />
      <div>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Enter a City"
            aria-label="Search"
          />
          <button className="btn my-2 my-sm-0" type="search">
            Search
          </button>
        </form>
      </div>

      <div className="first-section container">
        <div className="row">
          <div className="col-4 col-md-8">
            <div class="row">
              <div class="col-sm-12">Wind</div>
              <div class="col-sm-12">Humidity</div>
              <div class="col-sm-12">How are you</div>
            </div>
          </div>
          <div className="col-6 col-md-4">10 C</div>
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
