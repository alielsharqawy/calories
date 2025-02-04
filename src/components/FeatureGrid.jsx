import React from "react";
import {
  FaAppleAlt,
  FaCalculator,
  FaBook,
  FaDumbbell,
  FaPenFancy,
} from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { useTranslation } from "react-i18next";
import DietTypes from "../pages/DietTypes";
import CalorieCalculator from "../pages/CalorieCalculator";
import HealthyRecipesLibrary from "../pages/HealthyRecipesLibrary";
import InBodyAnalyzer from "../pages/InBodyUploader";


const FeatureGrid = () => {
  const { t } = useTranslation();

  const features = [
    {
      id: 1,
      icon: <FaAppleAlt className="w-12 h-12 text-green-500" />,
      title: t("features.diet_types.title"),
      description: t("features.diet_types.description"),
      target: "diet-types",
    },
    {
      id: 2,
      icon: <FaCalculator className="w-12 h-12 text-yellow-500" />,
      title: t("features.calories_calculator.title"),
      description: t("features.calories_calculator.description"),
      target: "calorie-calculator",
    },
    {
      id: 3,
      icon: <FaDumbbell className="w-12 h-12 text-blue-500" />,
      title: t("features.healthy_recipes.title"),
      description: t("features.healthy_recipes.description"),
      target: "healthy-recipes",
    },
    {
      id: 4,
      icon: <FaBook className="w-12 h-12 text-red-500" />,
      title: t("features.inbody_info.title"),
      description: t("features.inbody_info.description"),
      target: "body-info",
    },
  ];

  return (
    <div className="w-full min-h-screen px-4 sm:px-6 lg:px-20 py-5 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-green-500 dark:text-green-400 text-xl font-semibold tracking-wide uppercase">
            {t("features.section_title")}
          </h2>
          <p className="mt-2 text-xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
            {t("features.section_subtitle")}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <ScrollLink
              to={feature.target}
              key={feature.id}
              smooth={true}
              duration={500}
              offset={-100}
              className="group cursor-pointer"
            >
              <div className="pt-6 h-full">
                <div className="flow-root bg-slate-50 dark:bg-gray-800 rounded-lg px-6 pb-8 shadow-md dark:shadow-lg group-hover:shadow-lg transition-shadow duration-200 h-full">
                  <div className="-mt-6">
                    <div className="flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 dark:text-gray-100 text-center group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors duration-200">
                      {feature.title}
                    </h3>
                    <p className="mt-5 text-base text-gray-500 dark:text-gray-300 text-center">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollLink>
          ))}
        </div>
      </div>

      {/* الأقسام المستهدفة داخل الصفحة */}
      <div id="diet-types" className="py-10">
        <DietTypes />
      </div>
      <div id="calorie-calculator" className="py-10">
        <CalorieCalculator />
      </div>
      <div id="healthy-recipes" className="py-10">
        <HealthyRecipesLibrary />
      </div>
      <div id="body-info" className="py-10">
        <InBodyAnalyzer />
      </div>
    </div>
  );
};

export default FeatureGrid;
