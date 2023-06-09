import React, { useState } from "react";

const ThemeToggle = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    document.body.setAttribute("theme", isChecked ? "light" : "dark");
  };

  return (
    <div className="dark-mode-section col-sm-4">
      <label class="switch">
        <input type="checkbox" checked={isChecked} onChange={handleToggle} />
        <span class="slider"></span>
      </label>
    </div>
  );
};

export default ThemeToggle;
