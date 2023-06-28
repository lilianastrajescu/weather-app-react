import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcons from "./WeatherIcons";
import WeatherTemperature from "./WeatherTemperature";



export default function WeatherInfo(props){
    const getDayOfWeek = (date) => {
      const days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ];
      const dayIndex = new Date(date).getDay();
      return days[dayIndex];
    };
    return (
      <div>
        <div>
          <div className="row content-section">
            <div className=" col-sm-8 col-md-8 col-lg-3 container-details">
              <div className="row section-details-weather">
                <div className="col-sm-12 details-weather">
                  <FormattedDate date={props.data.date} />
                </div>
                <div className="col-sm-12 details-weather">
                  Wind: {props.data.wind} Km/h
                </div>
                <div className="col-sm-12 details-weather">
                  Humidity: {props.data.humidity}
                </div>
              </div>
            </div>
            <div className=" row temperature-section">
              <div className="col-md-4 forecast-section">
                <span className="city-name">{props.data.city}</span>
              </div>
              <div className="col-md-8 temperature-icon-section">
                <WeatherIcons className="col-md-8" code={props.data.icon} />
                <WeatherTemperature celsius={props.data.temperature} />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row days-container">
            {props.forecastData.slice(0, 5).map((data, index) => (
              <div className="col-md-2" key={index}>
                <h6>{getDayOfWeek(data.dt_txt)}</h6>
                <p>{data.main.temp}°C</p>
                <img
                  src={`./icons-weather/{data.weather[0].icon}.png`}
                  alt={data.weather[0].description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}