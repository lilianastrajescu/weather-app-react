import React, { useState } from "react";
import "./App.css";



export default function App() {
  document.getElementById("theme-toggle").addEventListener("click", (e) => {
    const checked = e.target.checked;
    document.body.setAttribute("theme", checked ? "dark" : "light");
  });
  return (
    <div className="App">
     
      <div class="container">
    <input type="checkbox" id="theme-toggle"/>
    <label for="theme-toggle"></label>
    
 

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

        <footer>
          <a href="https://github.com/lilianastrajescu/weather-app-react">
            Open source Code by Liliana Strajescu
          </a>
        </footer>
      </div>
    </div>
    
  );
  
}
