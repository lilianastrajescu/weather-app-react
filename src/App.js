import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Enter a City"
          aria-label="Search"
        />
        <button className="btn my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>

      <footer>
        <a href="https://github.com/lilianastrajescu/weather-app-react">
          Open source Code by Liliana Strajescu
        </a>
      </footer>
    </div>
  );
}
