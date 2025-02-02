import React from "react";

const DietTemplate = ({ title, description, sections }) => {
  return (
    <div className="py-5 px-20 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-all">
      <h2 className="text-4xl font-bold text-center text-emerald-700 dark:text-emerald-400 mb-8">
        {title}
      </h2>
      <div className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-lg shadow-lg mb-8 text-center">
        <p className="text-lg text-gray-800 dark:text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="space-y-8">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow border-l-4 border-emerald-500 dark:border-emerald-400"
          >
            <h3 className="text-2xl font-semibold text-emerald-700 dark:text-emerald-400 mb-4 flex items-center">
              <span className="inline-block bg-emerald-500 dark:bg-emerald-400 text-white px-3 py-1 rounded-lg mr-2">
                {index + 1}
              </span>
              {section.title}
            </h3>
            <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 space-y-2 text-lg">
              {section.items.map((item, idx) => (
                <li key={idx} className="pl-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DietTemplate;
