import React, { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="flex items-center gap-2 px-2 py-2 border-none outline-none rounded-md transition-all"
    >
      {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
      <span>{darkMode ? "" : ""}</span>
    </button>
  );
};

export default DarkModeToggle;
