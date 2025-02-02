import React from "react";

function KetoDiet() {
  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h2 className="text-4xl font-bold text-center text-emerald-700 mb-8">
        Keto Diet
      </h2>
      <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-lg shadow-lg mb-8 text-center">
        <p className="text-lg text-gray-800 leading-relaxed">
          The Keto diet is a low-carbohydrate, high-fat eating plan designed to
          induce a metabolic state called ketosis, where the body burns fat as
          its primary source of energy instead of carbohydrates.
        </p>
      </div>

      <div className="space-y-8">
        {[
          {
            title: "How to Follow:",
            items: [
              "Reduce carbohydrate intake to below 50 grams per day.",
              "Increase consumption of healthy fats such as avocado, olive oil, and nuts.",
              "Consume moderate amounts of protein to maintain muscle mass.",
            ],
          },
          {
            title: "Benefits:",
            items: [
              "May support weight loss by promoting fat burning.",
              "Could help stabilize blood sugar levels and improve insulin sensitivity.",
              "Might enhance mental clarity and energy levels.",
            ],
          },
          {
            title: "Challenges:",
            items: [
              "Initial adaptation phase may cause 'Keto Flu' symptoms such as fatigue and headaches.",
              "Requires strict adherence and careful meal planning to sustain.",
            ],
          },
          {
            title: "Additional Tips:",
            items: [
              "Consult a nutritionist before starting to ensure it aligns with your health needs.",
              "Monitor electrolyte levels and stay hydrated to prevent imbalances.",
              "Incorporate nutrient-dense, whole foods to maximize health benefits.",
            ],
          },
        ].map((section, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow border-l-4 border-emerald-500"
          >
            <h3 className="text-2xl font-semibold text-emerald-700 mb-4 flex items-center">
              <span className="inline-block bg-emerald-500 text-white px-3 py-1 rounded-lg mr-2">
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

export default KetoDiet;
