import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDietsOpen, setIsDietsOpen] = useState(false);

  return (
    <nav className="bg-emerald-900 text-white  p-2 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">HealthTec</div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <ul
          className={`md:flex md:space-x-6 absolute md:static left-0 top-16 w-full md:w-auto bg-emerald-900 md:bg-transparent p-4 space-y-4 md:space-y-0 transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li className="hover:text-green-500 text-lg font-medium cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="relative">
            <button
              className="hover:text-green-500 text-lg font-medium flex items-center cursor-pointer"
              onClick={() => setIsDietsOpen(!isDietsOpen)}
            >
              Diets Types <ChevronDown size={16} className="ml-1" />
            </button>
            <ul
              className={`absolute left-0 mt-2 w-48 bg-emerald-900 shadow-lg rounded-lg overflow-hidden transition-all duration-300 ${
                isDietsOpen ? "block" : "hidden"
              }`}
            >
              <li className="hover:bg-green-500 py-2 px-4 cursor-pointer">
                <Link to="/keto-diet">Keto Diet</Link>
              </li>
              <li className="hover:bg-green-500 py-2 px-4 cursor-pointer">
                <Link to="/juice-diet">Juice Diet</Link>
              </li>
              <li className="hover:bg-green-500 py-2 px-4 cursor-pointer">
                <Link to="/intermittent-fasting">IntermittentFasting Diet</Link>
              </li>
              <li className="hover:bg-green-500 py-2 px-4 cursor-pointer">
                <Link to="/low-carp-diet">Low Carp Diet</Link>
              </li>
            </ul>
          </li>
          <li className="hover:text-green-500 text-lg font-medium cursor-pointer">
            <Link to="/calorie-calculator">Calories Calculator</Link>
          </li>
          <li className="hover:text-green-500 text-lg font-medium cursor-pointer">
            <Link to="/body-info">InBody Info</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
