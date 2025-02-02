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

  return (
    <nav className="bg-emerald-500 dark:bg-gray-900 text-white dark:text-gray-900 transition-all py-4 px-3 shadow-xl">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-white">
          <Link to="/">HealthTec</Link>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <ul
          className={`md:flex md:space-x-6 absolute md:static left-0 top-16 w-full md:w-auto text-white md:bg-transparent p-4 space-y-4 md:space-y-0 transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li className="text-lg font-medium cursor-pointer hover:text-orange-500">
            <Link to="/">Home</Link>
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
              <li className="py-2 px-4 cursor-pointer hover:bg-orange-500">
                <Link to="/keto-diet">Keto Diet</Link>
              </li>
              <li className="py-2 px-4 cursor-pointer hover:bg-orange-500">
                <Link to="/juice-diet">Juice Diet</Link>
              </li>
              <li className="py-2 px-4 cursor-pointer hover:bg-orange-500">
                <Link to="/intermittent-fasting">
                  Intermittent Fasting Diet
                </Link>
              </li>
              <li className="py-2 px-4 cursor-pointer hover:bg-orange-500">
                <Link to="/low-carp-diet">Low Carp Diet</Link>
              </li>
              <li className="py-2 px-4 cursor-pointer hover:bg-orange-500">
                <Link to="/gain-diet">Weight Gain Diet</Link>
              </li>
            </ul>
          </li>
          <li className="text-lg font-medium cursor-pointer hover:text-orange-500">
            <Link to="/calorie-calculator">Calories Calculator</Link>
          </li>
          <li className="text-lg font-medium cursor-pointer hover:text-orange-500">
            <Link to="/body-info">InBody Info</Link>
          </li>
          <li className="text-lg font-medium cursor-pointer">
            <DarkModeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
