import React from "react";
import windy from "./icons-weather/windy.png";
import windyDarkTheme from "./icons-weather/windy-dark-theme.png";

const DarkModeIcon = ({ isDarkMode }) => {
  return (
    <img
      src={isDarkMode ? windyDarkTheme : windy}
      alt={isDarkMode ? "Dark Mode" : "Light Mode"}
    />
  );
};

export default DarkModeIcon;