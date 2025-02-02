import React, { useState } from "react";
import KetoDiet from "./KetoDiet";
import JuiceDiet from "./JuiceDiet";
import IntermittentFasting from "./IntermittentFasting";
import LowCarpDiet from "./LowCarpDiet";

const DietTypes = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="container mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center text-emerald-700 mb-8">
        Explore Different Diet Types
      </h1>
      <div className="space-y-6">
        <div className="border rounded-lg shadow-lg overflow-hidden">
          <button
            onClick={() => toggleSection(1)}
            className="w-full flex justify-between items-center p-4 bg-emerald-100 hover:bg-emerald-200 text-emerald-900 font-semibold text-lg"
          >
            1. Keto Diet
            <span className="text-xl">{openSection === 1 ? "−" : "+"}</span>
          </button>
          {openSection === 1 && (
            <div className="p-4 bg-white">
              <KetoDiet />
            </div>
          )}
        </div>

        <div className="border rounded-lg shadow-lg overflow-hidden">
          <button
            onClick={() => toggleSection(2)}
            className="w-full flex justify-between items-center p-4 bg-emerald-100 hover:bg-emerald-200 text-emerald-900 font-semibold text-lg"
          >
            2. Juice Diet
            <span className="text-xl">{openSection === 2 ? "−" : "+"}</span>
          </button>
          {openSection === 2 && (
            <div className="p-4 bg-white">
              <JuiceDiet />
            </div>
          )}
        </div>

        <div className="border rounded-lg shadow-lg overflow-hidden">
          <button
            onClick={() => toggleSection(3)}
            className="w-full flex justify-between items-center p-4 bg-emerald-100 hover:bg-emerald-200 text-emerald-900 font-semibold text-lg"
          >
            3. Intermittent Fasting
            <span className="text-xl">{openSection === 3 ? "−" : "+"}</span>
          </button>
          {openSection === 3 && (
            <div className="p-4 bg-white">
              <IntermittentFasting />
            </div>
          )}
        </div>

        <div className="border rounded-lg shadow-lg overflow-hidden">
          <button
            onClick={() => toggleSection(4)}
            className="w-full flex justify-between items-center p-4 bg-emerald-100 hover:bg-emerald-200 text-emerald-900 font-semibold text-lg"
          >
            4. Low Carb Diet
            <span className="text-xl">{openSection === 4 ? "−" : "+"}</span>
          </button>
          {openSection === 4 && (
            <div className="p-4 bg-white">
              <LowCarpDiet />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DietTypes;
