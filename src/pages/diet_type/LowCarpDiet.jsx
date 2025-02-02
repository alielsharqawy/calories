import React from "react";
import DietTemplate from "../../components/DietTemplate";

const LowCarpDiet = () => {
  return (
    <DietTemplate
      title="Low-Carp Diet"
      description="The Low-Carp Diet focuses on reducing carbohydrate intake while increasing the consumption of proteins and healthy fats to promote weight loss and overall health improvement."
      sections={[
        {
          title: "How to Follow:",
          items: [
            "Avoid or limit high-carp foods such as bread, pasta, and rice.",
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
      ]}
    />
  );
};

export default LowCarpDiet;
