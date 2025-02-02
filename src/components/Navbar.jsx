import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDietsOpen, setIsDietsOpen] = useState(false);
  const location = useLocation();

  React.useEffect(() => {
    setIsOpen(false);
    setIsDietsOpen(false);
  }, [location.pathname]);

  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu when a link is clicked
    setIsDietsOpen(false); // Close the dropdown if it's open
  };

  return (
    <nav className="bg-emerald-500 dark:bg-gray-900 text-white transition-all py-4 px-3 shadow-xl">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-white">
          <Link to="/" onClick={handleLinkClick}>
            HealthTec
          </Link>
        </div>
        <div className="flex justify-center items-center gap-5">
          <DarkModeToggle />
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <ul
            className={`md:flex md:space-x-6 absolute md:static left-0 top-16 w-full md:w-auto bg-emerald-500 dark:bg-gray-900 text-white md:bg-transparent p-4 space-y-4 md:space-y-0 transition-all duration-300 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <li className="text-lg font-medium cursor-pointer hover:text-orange-500">
              <Link to="/" onClick={handleLinkClick}>
                Home
              </Link>
            </li>
            <li className="relative">
              <button
                className="text-lg font-medium flex items-center cursor-pointer hover:text-orange-500"
                onClick={() => setIsDietsOpen(!isDietsOpen)}
              >
                Diets Types <ChevronDown size={16} className="ml-1" />
              </button>
              <ul
                className={`absolute left-0 mt-2 w-48 bg-emerald-900 dark:bg-gray-700 shadow-lg rounded-lg overflow-hidden transition-all duration-300 ${
                  isDietsOpen ? "block" : "hidden"
                }`}
              >
                {[
                  { to: "/keto-diet", label: "Keto Diet" },
                  { to: "/juice-diet", label: "Juice Diet" },
                  {
                    to: "/intermittent-fasting",
                    label: "Intermittent Fasting Diet",
                  },
                  { to: "/low-carp-diet", label: "Low Carb Diet" },
                  { to: "/gain-diet", label: "Weight Gain Diet" },
                ].map(({ to, label }) => (
                  <li
                    key={to}
                    className="py-2 px-4 cursor-pointer hover:bg-orange-500"
                  >
                    <Link to={to} onClick={handleLinkClick}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="text-lg font-medium cursor-pointer hover:text-orange-500">
              <Link to="/calorie-calculator" onClick={handleLinkClick}>
                Calories Calculator
              </Link>
            </li>
            <li className="text-lg font-medium cursor-pointer hover:text-orange-500">
              <Link to="/body-info" onClick={handleLinkClick}>
                InBody Info
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
