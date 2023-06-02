import React, { useState } from "react";

const ThemeToggle = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    document.body.setAttribute("theme", isChecked ? "light" : "dark");
  };

  return (
    <div className="dark-mode-section col-sm-4">
      <input
        type="checkbox"
        id="theme-toggle"
        checked={isChecked}
        onChange={handleToggle}
      />
      <label htmlFor="theme-toggle"></label>
    </div>
  );
};

export default ThemeToggle;
