import React from "react";

function LowCarbDiet() {
  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h2 className="text-4xl font-bold text-center text-green-600 mb-8">
        Low-Carb Diet
      </h2>
      <div className="bg-gradient-to-r from-green-100 to-teal-100 p-6 rounded-lg shadow-lg mb-8 text-center">
        <p className="text-lg text-gray-800 leading-relaxed">
          The Low-Carb Diet focuses on reducing carbohydrate intake while
          increasing the consumption of proteins and healthy fats to promote
          weight loss and overall health improvement.
        </p>
      </div>

      <div className="space-y-8">
        {[
          {
            title: "How to Follow:",
            items: [
              "Avoid or limit high-carb foods such as bread, pasta, and rice.",
              "Increase consumption of non-starchy vegetables, proteins, and healthy fats.",
              "Choose protein sources like meat, fish, eggs, and nuts.",
              "Use healthy oils such as olive oil and coconut oil for cooking.",
            ],
          },
          {
            title: "Benefits:",
            items: [
              "May support weight loss and improve blood sugar levels.",
              "Could help enhance cholesterol and triglyceride levels.",
              "Might reduce appetite and promote a sense of fullness.",
            ],
          },
          {
            title: "Challenges:",
            items: [
              "May cause fatigue or dizziness initially due to carbohydrate reduction.",
              "Could lead to nutrient deficiencies if meal planning is not well balanced.",
              "Might be difficult to sustain long-term due to food restrictions.",
            ],
          },
          {
            title: "Additional Tips:",
            items: [
              "Consult a nutritionist before starting to ensure nutritional needs are met.",
              "Drink plenty of water to stay hydrated.",
              "Monitor how your body responds and adjust the diet as needed.",
              "Choose fiber-rich carbohydrate sources like leafy vegetables.",
            ],
          },
        ].map((section, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow border-l-4 border-green-500"
          >
            <h3 className="text-2xl font-semibold text-green-600 mb-4 flex items-center">
              <span className="inline-block bg-green-500 text-white px-3 py-1 rounded-lg mr-2">
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

export default LowCarbDiet;
