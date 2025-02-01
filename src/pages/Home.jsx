import React from "react";
import { Link } from "react-router-dom";
import dietHeroImage from "../assets/hero.png"; // Ensure this image is optimized
import FeatureGrid from "../components/FeatureGrid";
import CalorieCalculator from "./CalorieCalculator";

function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="container flex flex-col md:flex-row items-center py-5 px-10">
        {/* Left Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
            Discover the Best Diet Plans
          </h1>
          <h2 className="text-3xl md:text-5xl font-extrabold text-emerald-700 mt-2">
            To Achieve Your Health Goals
          </h2>
          <p className="text-gray-600 mt-4 mb-6 leading-relaxed">
            Welcome to our website! We offer comprehensive information on
            various diet plans to help you achieve your health objectives. Start
            your journey today and find the diet that's right for you.
          </p>
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            <Link to="/feature-grid">
              <button className="bg-emerald-500 text-white py-3 px-6 rounded-lg shadow hover:bg-emerald-600 transition">
                Get Started Today
              </button>
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src={dietHeroImage}
            alt="Personalized Diet Plans"
            className="w-full max-w-full h-auto"
          />
        </div>
      </div>
      <FeatureGrid />
      <CalorieCalculator />
    </div>
  );
}

export default HomePage;
