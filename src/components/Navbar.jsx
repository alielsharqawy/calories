import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next"; 
import DarkModeToggle from "./DarkModeToggle";
import LanguageToggle from "./LanguageToggle";

function Navbar() {
  const { t } = useTranslation(); 
  const [isOpen, setIsOpen] = useState(false);
  const [isDietsOpen, setIsDietsOpen] = useState(false);
  const location = useLocation();

  React.useEffect(() => {
    setIsOpen(false);
    setIsDietsOpen(false);
  }, [location.pathname]);

  const handleLinkClick = () => {
    setIsOpen(false); 
    setIsDietsOpen(false);
  };

  return (
    <nav className="bg-emerald-500 dark:bg-gray-900 text-white transition-all py-4 px-3 shadow-xl flex justify-between items-center">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link to="/" onClick={handleLinkClick}>
            {t("navbar.brand_name")}
          </Link>
        </div>
        <div className="flex justify-center items-center gap-3">
          <ul
            className={`md:flex md:space-x-6 absolute md:static left-0 top-16 w-full md:w-auto md:bg-transparent p-4 space-y-4 md:space-y-0 transition-all duration-300 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <li className="text-lg font-medium cursor-pointer hover:text-orange-500 px-2">
              <Link to="/" onClick={handleLinkClick}>
                {t("navbar.home")}
              </Link>
            </li>
            <li className="relative">
              <button
                className="text-lg font-medium flex items-center cursor-pointer hover:text-orange-500"
                onClick={() => setIsDietsOpen(!isDietsOpen)}
              >
                {t("navbar.diets")} <ChevronDown size={16} className="ml-1" />
              </button>
              <ul
                className={`absolute left-0 mt-2 w-48 bg-emerald-900 dark:bg-gray-700 shadow-lg rounded-lg overflow-hidden transition-all duration-300 ${
                  isDietsOpen ? "block" : "hidden"
                }`}
              >
                {[
                  { to: "/keto-diet", label: t("navbar.keto_diet") },
                  { to: "/juice-diet", label: t("navbar.juice_diet") },
                  {
                    to: "/intermittent-fasting",
                    label: t("navbar.intermittent_fasting"),
                  },
                  { to: "/low-carp-diet", label: t("navbar.low_carp_diet") },
                  { to: "/gain-diet", label: t("navbar.weight_gain_diet") },
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
                {t("navbar.calories_calculator")}
              </Link>
            </li>
            <li className="text-lg font-medium cursor-pointer hover:text-orange-500">
              <Link to="/body-info" onClick={handleLinkClick}>
                {t("navbar.body_info")}
              </Link>
            </li>
          </ul>
          <LanguageToggle />
          <DarkModeToggle />
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
