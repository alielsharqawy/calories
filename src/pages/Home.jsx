import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import dietHeroImage from "../assets/hero.png";
import FeatureGrid from "../components/FeatureGrid";
import CalorieCalculator from "./CalorieCalculator";
import Footer from "../components/Footer";

function HomePage() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <div className="min-h-screen flex flex-col bg-lightBg dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-all">
      <div className="container flex flex-col md:flex-row items-center py-5 px-20">

        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            {t("home.title")}
          </h1>
          <h2 className="text-3xl md:text-5xl font-extrabold text-emerald-700 mt-2">
            {t("home.subtitle")}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-4 mb-6 leading-relaxed">
            {t("home.description")}
          </p>
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            <Link to="/feature-grid">
              <button className="bg-emerald-500 text-white py-3 px-6 rounded-lg shadow hover:bg-emerald-600 transition">
                {t("home.get_started")}
              </button>
            </Link>
          </div>
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src={dietHeroImage}
            alt={t("home.title")}
            className="w-full max-w-full h-auto"
          />
        </div>
      </div>
      <FeatureGrid />
      <CalorieCalculator />
      <Footer />
    </div>
  );
}

export default HomePage;
