import React from "react";
import windy from "./icons-weather/windy.png";
import windyDark from "./icons-weather/windy-dark.png";

const DarkModeIcon = ({ isDarkMode }) => {
  return (
    <img
      src={isDarkMode ? windyDark : windy}
      alt={isDarkMode ? "Dark Mode" : "Light Mode"}
    />
  );
};

export default DarkModeIcon;