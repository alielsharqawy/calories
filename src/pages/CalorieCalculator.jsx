import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Title, Tooltip, Legend);

const CalorieCalculator = () => {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("1.2");
  const [calories, setCalories] = useState(null);
  const [macros, setMacros] = useState(null);

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
  };

  return (
    <div className="flex flex-col md:flex-row md:space-x-4 p-4">
      <div className="md:w-1/2 p-5 rounded-md">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Calorie Calculator
        </h2>
        {[
          { label: "Age (years)", value: age, setter: setAge },
          { label: "Weight (kg)", value: weight, setter: setWeight },
          { label: "Height (cm)", value: height, setter: setHeight },
        ].map(({ label, value, setter }) => (
          <div key={label} className="mb-4">
            <label className="block mb-1">{label}:</label>
            <input
              type="number"
              value={value}
              onChange={(e) => setter(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        ))}
        <div className="mb-4">
          <label className="block mb-1">Gender:</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-1">Activity Level:</label>
          <select
            value={activityLevel}
            onChange={(e) => setActivityLevel(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          >
            {["1.2", "1.375", "1.55", "1.725", "1.9"].map((level, idx) => (
              <option key={idx} value={level}>
                {
                  [
                    "Sedentary",
                    " Lightly active (light exercise 1-3 days/week)",
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
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
        >
          Calculate Calories
        </button>
        {calories && (
          <div className="mt-4 p-4 bg-green-100 text-green-700 rounded text-center">
            <p>
              Your daily caloric needs: <strong>{calories}</strong> kcal.
            </p>
          </div>
        )}
      </div>
      {macros && (
        <div className="md:w-1/2 mt-8 md:mt-0 p-5 rounded-md">
          <Pie
            data={{
              labels: ["Protein (g)", "Carbohydrates (g)", "Fats (g)"],
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
    </div>
  );
};

export default CalorieCalculator;
