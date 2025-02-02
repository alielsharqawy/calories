import React, { useState } from "react";
import KetoDiet from "./diet_type/KetoDiet";
import JuiceDiet from "./diet_type/JuiceDiet";
import IntermittentFasting from "./diet_type/IntermittentFasting";
import LowCarpDiet from "./diet_type/LowCarpDiet";
import WeightGainDiet from "./diet_type/WeightGainDiet";

const DietTypes = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="w-full min-h-screen px-4 sm:px-6 lg:px-20 py-5 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-all">
      <h1 className="text-3xl font-bold text-center text-emerald-700 dark:text-emerald-400 mb-8">
        Explore Different Diet Types
      </h1>
      <div className="space-y-6">
        {[
          { id: 1, title: "Keto Diet", component: <KetoDiet /> },
          { id: 2, title: "Juice Diet", component: <JuiceDiet /> },
          {
            id: 3,
            title: "Intermittent Fasting",
            component: <IntermittentFasting />,
          },
          { id: 4, title: "Low Carb Diet", component: <LowCarpDiet /> },
          { id: 5, title: "Weight Gain Diet", component: <WeightGainDiet /> },
        ].map(({ id, title, component }) => (
          <div
            key={id}
            className="border rounded-lg shadow-lg overflow-hidden bg-gray-100 dark:bg-gray-800"
          >
            <button
              onClick={() => toggleSection(id)}
              className="w-full flex justify-between items-center p-4 bg-emerald-100 dark:bg-emerald-700 hover:bg-emerald-200 dark:hover:bg-emerald-600 text-emerald-900 dark:text-gray-100 font-semibold text-lg"
            >
              {id}. {title}
              <span className="text-xl">{openSection === id ? "−" : "+"}</span>
            </button>
            {openSection === id && (
              <div className="p-4 bg-white dark:bg-gray-900 w-full min-h-[200px] sm:min-h-[250px] lg:min-h-[300px]">
                {component}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DietTypes;
