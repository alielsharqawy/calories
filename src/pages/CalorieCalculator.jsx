import React, { useState } from "react";
import { Pie, Bar } from "react-chartjs-2";
import { useTranslation } from "react-i18next";
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale
);

const CalorieCalculator = () => {
  const { t } = useTranslation();
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("1.2");
  const [calories, setCalories] = useState(null);
  const [macros, setMacros] = useState(null);
  const [bmi, setBmi] = useState(null);
  const [dietPlan, setDietPlan] = useState(null);

  const calculateBMR = () => {
    if (!age || !weight || !height) {
      alert(t("calorie_calculator.alert_fill_fields"));
      return;
    }

    const bmr =
      gender === "male"
        ? 10 * weight + 6.25 * height - 5 * age + 5
        : 10 * weight + 6.25 * height - 5 * age - 161;

    const dailyCalories = bmr * parseFloat(activityLevel);
    setCalories(dailyCalories.toFixed(2));

    setMacros({
      protein: ((dailyCalories * 0.3) / 4).toFixed(2),
      carbs: ((dailyCalories * 0.4) / 4).toFixed(2),
      fats: ((dailyCalories * 0.3) / 9).toFixed(2),
    });

    const bmiValue = (weight / ((height / 100) * (height / 100))).toFixed(1);
    setBmi(bmiValue);

    determineDietPlan(dailyCalories, bmiValue);
  };

  const determineDietPlan = (dailyCalories, bmi) => {
    let plan;
    if (bmi < 18.5) {
      plan = t("calorie_calculator.diet_plans.gain");
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      plan = t("calorie_calculator.diet_plans.maintain");
    } else if (bmi >= 25) {
      plan = t("calorie_calculator.diet_plans.loss");
    }
    setDietPlan(plan);
  };

  return (
    <div className="p-6 w-full mx-auto dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-all">
      <h2 className="text-3xl font-bold mb-6 text-center text-emerald-700 dark:text-emerald-400">
        {t("calorie_calculator.title")}
      </h2>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* إدخال البيانات */}
        <div className="w-full lg:w-1/2 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          {[
            { label: t("calorie_calculator.age"), value: age, setter: setAge },
            {
              label: t("calorie_calculator.weight"),
              value: weight,
              setter: setWeight,
            },
            {
              label: t("calorie_calculator.height"),
              value: height,
              setter: setHeight,
            },
          ].map(({ label, value, setter }) => (
            <div key={label} className="mb-5">
              <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                {label}:
              </label>
              <input
                type="number"
                value={value}
                onChange={(e) => setter(e.target.value)}
                className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
          ))}

          <div className="mb-5">
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
              {t("calorie_calculator.gender")}
            </label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:text-white"
            >
              <option value="male">{t("calorie_calculator.male")}</option>
              <option value="female">{t("calorie_calculator.female")}</option>
            </select>
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
              {t("calorie_calculator.activity_level")}
            </label>
            <select
              value={activityLevel}
              onChange={(e) => setActivityLevel(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:text-white"
            >
              {t("calorie_calculator.activity_levels", {
                returnObjects: true,
              }).map((level, idx) => (
                <option key={idx} value={(idx + 1) * 0.2 + 1}>
                  {level}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={calculateBMR}
            className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition duration-200"
          >
            {t("calorie_calculator.calculate")}
          </button>

          {calories && (
            <div className="mt-6 p-4 bg-emerald-100 dark:bg-emerald-800 text-emerald-800 dark:text-emerald-200 rounded-lg text-center">
              {t("calorie_calculator.daily_needs", { calories })}
            </div>
          )}
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          {macros && (
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-center text-emerald-700 dark:text-emerald-400">
                {t("calorie_calculator.macronutrient_distribution")}
              </h3>
              <Pie
                data={{
                  labels: [
                    `${t("calorie_calculator.protein")}: ${macros.protein}g`,
                    `${t("calorie_calculator.carbohydrates")}: ${
                      macros.carbs
                    }g`,
                    `${t("calorie_calculator.fats")}: ${macros.fats}g`,
                  ],
                  datasets: [
                    {
                      data: [macros.protein, macros.carbs, macros.fats],
                      backgroundColor: ["#118B50", "#5DB996", "#E3F0AF"],
                    },
                  ],
                }}
              />
            </div>
          )}

          {bmi && (
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-center text-emerald-700 dark:text-emerald-400">
                {t("calorie_calculator.bmi_indicator")}
              </h3>
              <Bar
                data={{
                  labels: ["Underweight", "Normal", "Overweight", "Obese"],
                  datasets: [
                    {
                      label: "BMI Value",
                      data: [
                        bmi < 18.5 ? bmi : null,
                        bmi >= 18.5 && bmi <= 24.9 ? bmi : null,
                        bmi >= 25 && bmi <= 29.9 ? bmi : null,
                        bmi >= 30 ? bmi : null,
                      ],
                      backgroundColor: [
                        "#97BE5A",
                        "#00FF00",
                        "#FFA500",
                        "#FF0000",
                      ],
                    },
                  ],
                }}
              />
              <p className="text-center mt-4">{dietPlan}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CalorieCalculator;
