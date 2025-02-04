import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import KetoDiet from "./diet_type/KetoDiet";
import JuiceDiet from "./diet_type/JuiceDiet";
import IntermittentFasting from "./diet_type/IntermittentFasting";
import LowCarpDiet from "./diet_type/LowCarpDiet";
import WeightGainDiet from "./diet_type/WeightGainDiet";

const DietTypes = () => {
  const { t } = useTranslation();
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="p-6 w-full mx-auto sm:px-6 lg:px-20 py-5 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-all">
      <h1 className="text-2xl sm:text-3xl font-bold text-emerald-700 dark:text-emerald-400 mb-8">
        {t("diet_types.title")}
      </h1>
      <div className="space-y-6">
        {[
          { id: 1, title: t("diet_types.keto"), component: <KetoDiet /> },
          { id: 2, title: t("diet_types.juice"), component: <JuiceDiet /> },
          {
            id: 3,
            title: t("diet_types.intermittent"),
            component: <IntermittentFasting />,
          },
          {
            id: 4,
            title: t("diet_types.low_carp"),
            component: <LowCarpDiet />,
          },
          {
            id: 5,
            title: t("diet_types.weight_gain"),
            component: <WeightGainDiet />,
          },
        ].map(({ id, title, component }) => (
          <div
            key={id}
            className="border rounded-lg shadow-lg overflow-hidden bg-gray-100 dark:bg-gray-800"
          >
            <button
              onClick={() => toggleSection(id)}
              className="w-full flex justify-between items-center p-3 sm:p-4 bg-emerald-100 dark:bg-emerald-700 hover:bg-emerald-200 dark:hover:bg-emerald-600 text-emerald-900 dark:text-gray-100 font-semibold text-base sm:text-lg"
            >
              {id}. {title}
              <span className="text-xl">{openSection === id ? "−" : "+"}</span>
            </button>
            {openSection === id && (
              <div className="p-4 bg-white dark:bg-gray-900 w-full min-h-[150px] sm:min-h-[250px] lg:min-h-[300px] overflow-x-auto">
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
