import React from "react";

function JuiceDiet() {
  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h2 className="text-4xl font-bold text-center text-orange-600 mb-8">
        Juice Diet
      </h2>
      <div className="bg-gradient-to-r from-orange-100 to-yellow-100 p-6 rounded-lg shadow-lg mb-8 text-center">
        <p className="text-lg text-gray-800 leading-relaxed">
          The Juice Diet is a short-term dietary regimen that involves consuming
          only fresh fruit and vegetable juices for a specific period to
          detoxify the body and promote weight loss.
        </p>
      </div>

      <div className="space-y-8">
        {[
          {
            title: "How to Follow:",
            items: [
              "Choose a variety of fresh fruits and vegetables.",
              "Use a juicer or blender to extract the juice.",
              "Replace solid meals with juices for a duration of 3 to 7 days.",
            ],
          },
          {
            title: "Benefits:",
            items: [
              "Provides a high intake of vitamins and minerals.",
              "May promote short-term weight loss.",
              "Supports body detoxification and digestion.",
            ],
          },
          {
            title: "Challenges:",
            items: [
              "Low in protein and fiber, which may lead to hunger and muscle loss.",
              "Not sustainable as a long-term dietary solution.",
              "Possible rapid weight regain after returning to a regular diet.",
            ],
          },
          {
            title: "Additional Tips:",
            items: [
              "Consult a nutritionist before starting to ensure it's suitable for your health.",
              "Drink plenty of water to stay hydrated.",
              "Avoid adding sugar to juices to maintain their natural health benefits.",
              "Monitor how your body responds and discontinue if adverse effects occur.",
            ],
          },
        ].map((section, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow border-l-4 border-orange-500"
          >
            <h3 className="text-2xl font-semibold text-orange-600 mb-4 flex items-center">
              <span className="inline-block bg-orange-500 text-white px-3 py-1 rounded-lg mr-2">
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

export default JuiceDiet;
