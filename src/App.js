import React, { useState } from "react";
import "./App.css";
import ThemeToggle from "./ThemeToggle";
import axios from "axios";
import FormattedDate from "./FormattedDate";



export default function App(props) {

  const [weatherData, setWeatherData] = useState({});

   function handleResponse(response) {
     setWeatherData({
       ready: true,
       temperature: response.data.main.temp,
       wind: response.data.wind.speed,
       city: response.data.name,
       humidity: response.data.main.humidity,
       iconUrl: "",
       description: response.data.weather[0].description,
       date: new Date (response.data.dt * 1000),
     });
   }

   if (weatherData.ready) {
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
                 <div className="col-sm-12 details-weather">
                     <FormattedDate date={weatherData.date} />
                 </div>
                 <div className="col-sm-12 details-weather">
                   Wind: {weatherData.wind} Km/h
                 </div>
                 <div className="col-sm-12 details-weather">
                   Humidity: {weatherData.humidity}
                 </div>
                 <div className="col-sm-12 details-weather text-capitalize">
                   {weatherData.description}
                 </div>
               </div>
             </div>
             <div className=" row temperature-section col-sm-12 col-md-8 col-lg-9">
               <img src={weatherData.iconUrl} alt="sun" />
               <div className="row section-city-temperature">
                 <p className="col-md-8">
                   {" "}
                   {Math.round(weatherData.temperature)}°C
                 </p>
                 <p className="col-md-8">
                   <span className="city-name">{weatherData.city}</span>
                 </p>
               </div>
             </div>
           </div>
         </div>
         <div className="container">
           <div className="row days-container">
             <div className="col-md-2 days-boxes">
               <h6>Monday</h6>
               <img
                 src={weatherData.iconUrl}
                 alt={weatherData.description}
               ></img>
               <p>{Math.round(weatherData.temperature)}°C</p>
             </div>
             <div className=" col-md-2 days-boxes">
               <h6>Monday</h6>
               <img
                 src={weatherData.iconUrl}
                 alt={weatherData.description}
               ></img>
               <p>{Math.round(weatherData.temperature)}°C</p>
             </div>
             <div className="col-md-2 days-boxes">
               <h6>Monday</h6>
               <img
                 src={weatherData.iconUrl}
                 alt={weatherData.description}
               ></img>
               <p>{Math.round(weatherData.temperature)}°C</p>
             </div>
             <div className="col-md-2 days-boxes">
               <h6>Monday</h6>
               <img
                 src={weatherData.iconUrl}
                 alt={weatherData.description}
               ></img>
               <p>{Math.round(weatherData.temperature)}°C</p>
             </div>
             <div className="col-md-2 days-boxes">
               <h6>Monday</h6>
               <img
                 src={weatherData.iconUrl}
                 alt={weatherData.description}
               ></img>
               <p>{Math.round(weatherData.temperature)}°C</p>
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
     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;

     axios.get(apiUrl).then(handleResponse);

     return "Loading";
   }
}
