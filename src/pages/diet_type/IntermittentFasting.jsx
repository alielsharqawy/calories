import React from "react";
import DietTemplate from "../../components/DietTemplate";

const IntermittentFasting = () => {
  return (
    <DietTemplate
      title="Intermittent Fasting"
      description="Intermittent fasting is an eating pattern that cycles between periods of fasting and eating. It does not specify which foods to eat, but rather when to eat them."
      sections={[
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
      ]}
    />
  );
};

export default IntermittentFasting;
