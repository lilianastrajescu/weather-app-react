import React from "react";

export default function WeatherIcons(iconName) {
    let iconUrl;
    switch (iconName) {
      case "01d":
        iconUrl = "images/icons-weather/01d.png";
        break;
      case "01n":
        iconUrl = "images/icons-weather/01n.png";
        break;
      case "02d":
        iconUrl = "images/icons-weather/02d.png";
        break;
      case "02n":
        iconUrl = "images/icons-weather/02n.png";
        break;
      case "03d":
        iconUrl = "images/icons-weather/03d.png";
        break;
      case "03n":
        iconUrl = "images/icons-weather/03n.png";
        break;
      case "04d":
        iconUrl = "images/icons-weather/04d.png";
        break;
      case "04n":
        iconUrl = "images/icons-weather/04n.png";
        break;
      case "09d":
        iconUrl = "images/icons-weather/09d.png";
        break;
      case "09n":
        iconUrl = "images/icons-weather/09n.png";
        break;
      case "10d":
        iconUrl = "images/icons-weather/10d.png";
        break;
      case "10n":
        iconUrl = "images/icons-weather/10n.png";
        break;
      case "11d":
        iconUrl = "images/icons-weather/11d.png";
        break;
      case "11n":
        iconUrl = "images/icons-weather/11n.png";
        break;
      case "13d":
        iconUrl = "images/icons-weather/13d.png";
        break;
      case "13n":
        iconUrl = "images/icons-weather/13n.png";
        break;
      case "50d":
        iconUrl = "images/icons-weather/50d.png";
        break;
      case "50n":
        iconUrl = "images/icons-weather/50n.png";
        break;
      default:
        break;
    }
    return iconUrl;
  }
