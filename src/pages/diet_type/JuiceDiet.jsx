import React from "react";
import DietTemplate from "../../components/DietTemplate";

const JuiceDiet = () => {
  return (
    <DietTemplate
      title="Juice Diet"
      description="The Juice Diet is a short-term dietary regimen that involves consuming only fresh fruit and vegetable juices for a specific period to detoxify the body and promote weight loss."
      sections={[
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
      ]}
    />
  );
};

export default JuiceDiet;
