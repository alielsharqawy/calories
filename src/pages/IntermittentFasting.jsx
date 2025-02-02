import React from "react";

function IntermittentFasting() {
  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">
        Intermittent Fasting
      </h2>
      <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-6 rounded-lg shadow-lg mb-8 text-center">
        <p className="text-lg text-gray-800 leading-relaxed">
          Intermittent fasting is an eating pattern that cycles between periods
          of fasting and eating. It does not specify which foods to eat, but
          rather when to eat them.
        </p>
      </div>

      <div className="space-y-8">
        {[
          {
            title: "How to Follow:",
            items: [
              "16/8 Method: Fast for 16 hours and eat within an 8-hour window.",
              "5:2 Method: Eat normally for 5 days a week and reduce calorie intake to 500-600 for 2 days.",
            ],
          },
          {
            title: "Benefits:",
            items: [
              "May aid in weight loss and improve metabolism.",
              "Could help in improving heart health and reducing chronic disease risks.",
            ],
          },
          {
            title: "Challenges:",
            items: [
              "May cause hunger and weakness initially.",
              "Not suitable for everyone, especially those with certain medical conditions.",
            ],
          },
          {
            title: "Additional Tips:",
            items: [
              "Consult a nutritionist before starting this regimen.",
              "Stay hydrated by drinking enough water during fasting periods.",
            ],
          },
        ].map((section, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow border-l-4 border-blue-500"
          >
            <h3 className="text-2xl font-semibold text-blue-600 mb-4 flex items-center">
              <span className="inline-block bg-blue-500 text-white px-3 py-1 rounded-lg mr-2">
                {index + 1}
              </span>
              {section.title}
            </h3>
            <ul className="list-disc list-inside text-gray-800 space-y-2 text-lg">
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
}

export default IntermittentFasting;
