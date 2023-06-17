import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcons from "./WeatherIcons";



export default function WeatherInfo(props){
    return (
      <div>
        <div className="content-section">
          <div className="row">
            <div className=" col-sm-12 col-md-4 col-lg-3">
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
                <div className="col-sm-12 details-weather text-capitalize">
                  {props.data.description}
                </div>
              </div>
            </div>
            <div className=" row temperature-section col-sm-12 col-md-8 col-lg-9">
              <WeatherIcons code={props.data.icon}/>

              <div className="row section-city-temperature">
                <p className="col-md-8">
                  {" "}
                  {Math.round(props.data.temperature)}°C
                </p>
                <p className="col-md-8">
                  <span className="city-name">{props.data.city}</span>
                </p>
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