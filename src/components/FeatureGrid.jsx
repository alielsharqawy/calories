// src/components/FeatureGrid.jsx
import React from "react";
import { FaAppleAlt, FaCalculator, FaInfoCircle } from "react-icons/fa";

const FeatureGrid = () => {
  const features = [
    {
      id: 1,
      icon: <FaAppleAlt className="w-12 h-12 text-green-500" />,
      title: "Diet Types",
      description: "A brief overview of the different types of diets.",
    },
    {
      id: 2,
      icon: <FaCalculator className="w-12 h-12 text-yellow-500" />,
      title: "Calories Calculator",
      description:
        "Calculate your daily caloric needs and macronutrient distribution.",
    },
    {
      id: 3,
      icon: <FaInfoCircle className="w-12 h-12 text-blue-500" />,
      title: "InBody Info",
      description:
        "Analyze your body composition measurements for better insights.",
    },
    // Add more features as needed
  ];

  return (
    <div className="py-12">
      <div className="max-w-8xl  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-green-500 text-xl font-semibold tracking-wide uppercase">
            Our Features
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            What We Offer
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="pt-6">
              <div className="flow-root bg-slate-50 rounded-lg px-6 pb-8 shadow-md h-full">
                <div className="-mt-6">
                  <div className="flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 text-center">
                    {feature.title}
                  </h3>
                  <p className="mt-5 text-base text-gray-500 text-center">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureGrid;
