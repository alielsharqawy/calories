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
  };

  return (
    <div className="flex flex-col lg:flex-row lg:space-x-6 p-6 rounded-lg shadow-lg w-full max-w-7xl mx-auto">
      <div className="w-full lg:w-1/2 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-emerald-700">
          Calorie Calculator
        </h2>
        {[
          { label: "Age (years)", value: age, setter: setAge },
          { label: "Weight (kg)", value: weight, setter: setWeight },
          { label: "Height (cm)", value: height, setter: setHeight },
        ].map(({ label, value, setter }) => (
          <div key={label} className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              {label}:
            </label>
            <input
              type="number"
              value={value}
              onChange={(e) => setter(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        ))}
        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">
            Gender:
          </label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">
            Activity Level:
          </label>
          <select
            value={activityLevel}
            onChange={(e) => setActivityLevel(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
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
          <div className="mt-6 p-4 bg-emerald-100 text-emerald-800 rounded-lg text-center">
            Your daily caloric needs: <strong>{calories}</strong> kcal.
          </div>
        )}
      </div>
      <div className="w-full lg:w-1/2 flex flex-col space-y-6">
        {macros && (
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-center text-emerald-700">
              Macronutrient Distribution
            </h3>
            <Pie
              data={{
                labels: [
                  `Protein: ${macros.protein}g`,
                  `Carbohydrates: ${macros.carbs}g`,
                  `Fats: ${macros.fats}g`,
                ],
                datasets: [
                  {
                    data: [macros.protein, macros.carbs, macros.fats],
                    backgroundColor: [
                      "rgba(75, 192, 192, 0.6)",
                      "rgba(255, 206, 86, 0.6)",
                      "rgba(255, 99, 132, 0.6)",
                    ],
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
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-center text-emerald-700">
              BMI Indicator
            </h3>
            <Bar
              data={{
                labels: ["Underweight", "Normal", "Overweight", "Obese"],
                datasets: [
                  {
                    label: "BMI Value",
                    data: [18.5, 24.9, 29.9, 35],
                    backgroundColor: ["blue", "green", "orange", "red"],
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
