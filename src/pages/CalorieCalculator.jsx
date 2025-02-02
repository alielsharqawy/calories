import React, { useState } from "react";
import { Pie, Bar } from "react-chartjs-2";
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
      alert("Please fill in all fields.");
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
      plan =
        "Weight Gain Diet: Increase your calorie intake by 300-500 kcal per day.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      plan =
        "Maintenance Diet: Maintain your current calorie intake for a balanced lifestyle.";
    } else if (bmi >= 25) {
      plan =
        "Weight Loss Diet: Reduce your calorie intake by 300-500 kcal per day.";
    }
    setDietPlan(plan);
  };

  return (
    <div className="flex flex-col lg:flex-row lg:space-x-6 p-6 w-full mx-auto dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-all">
      <div className="w-full lg:w-1/2 p-6 dark:bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-emerald-700 dark:text-emerald-400">
          Calorie Calculator
        </h2>
        {[
          { label: "Age (years)", value: age, setter: setAge },
          { label: "Weight (kg)", value: weight, setter: setWeight },
          { label: "Height (cm)", value: height, setter: setHeight },
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
            Gender:
          </label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:text-white"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
            Activity Level:
          </label>
          <select
            value={activityLevel}
            onChange={(e) => setActivityLevel(e.target.value)}
            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:text-white"
          >
            {["1.2", "1.375", "1.55", "1.725", "1.9"].map((level, idx) => (
              <option key={idx} value={level}>
                {
                  [
                    "Sedentary (little or no exercise)",
                    "Lightly active (light exercise 1-3 days/week)",
                    "Moderately active (moderate exercise 3-5 days/week)",
                    "Very active (hard exercise 6-7 days/week)",
                    "Super active (very hard exercise or physical job)",
                  ][idx]
                }
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={calculateBMR}
          className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition duration-200"
        >
          Calculate
        </button>
        {calories && (
          <div className="mt-6 p-4 bg-emerald-100 dark:bg-emerald-800 text-emerald-800 dark:text-emerald-200 rounded-lg text-center">
            Your daily caloric needs: <strong>{calories}</strong> kcal.
          </div>
        )}
      </div>
      <div className="w-full lg:w-1/2 flex flex-col space-y-6">
        {macros && (
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-center text-emerald-700 dark:text-emerald-400">
              Macronutrient Distribution
            </h3>
            <Pie
              data={{
                labels: ["Protein", "Carbohydrates", "Fats"],
                datasets: [
                  {
                    data: [macros.protein, macros.carbs, macros.fats],
                    backgroundColor: ["#118B50", "#5DB996", "#E3F0AF"],
                  },
                ],
              }}
              options={{
                responsive: true,
                plugins: {
                  legend: { position: "top" },
                  title: { display: true, text: "Macronutrient Distribution" },
                },
              }}
            />
          </div>
        )}
        {bmi && (
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-center text-emerald-700 dark:text-emerald-400">
              BMI Indicator
            </h3>
            <Bar
              data={{
                labels: ["Underweight", "Normal", "Overweight", "Obese"],
                datasets: [
                  {
                    label: "BMI Value",
                    data: [18.5, 24.9, 29.9, 35],
                    backgroundColor: [
                      "#97BE5A",
                      "#FFE8C5",
                      "#FFA27F",
                      "#FF0000",
                    ],
                  },
                ],
              }}
              options={{
                responsive: true,
                plugins: { title: { display: true, text: `Your BMI: ${bmi}` } },
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CalorieCalculator;
