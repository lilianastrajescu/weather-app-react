import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcons from "./WeatherIcons";
import WeatherTemperature from "./WeatherTemperature";


export default function WeatherInfo(props){
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
            <div className="col-md-2 days-boxes">
              <h6>Monday</h6>
              <WeatherIcons
                code={props.data.icon}
                alt={props.data.description}
              />
              <p>{Math.round(props.data.temperature)}°C</p>
            </div>
            <div className=" col-md-2 days-boxes">
              <h6>Tuesday</h6>
              <WeatherIcons
                code={props.data.icon}
                alt={props.data.description}
              />
              <p>{Math.round(props.data.temperature)}°C</p>
            </div>
            <div className="col-md-2 days-boxes">
              <h6>Monday</h6>
              <WeatherIcons
                code={props.data.icon}
                alt={props.data.description}
              />
              <p>{Math.round(props.data.temperature)}°C</p>
            </div>
            <div className="col-md-2 days-boxes">
              <h6>Monday</h6>
              <WeatherIcons
                code={props.data.icon}
                alt={props.data.description}
              />
              <p>{Math.round(props.data.temperature)}°C</p>
            </div>
            <div className="col-md-2 days-boxes">
              <h6>Monday</h6>
              <WeatherIcons
                code={props.data.icon}
                alt={props.data.description}
              />
              <p>{Math.round(props.data.temperature)}°C</p>
            </div>
          </div>
        </div>
      </div>
    );
}