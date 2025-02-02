import React from "react";
import DietTemplate from "../../components/DietTemplate";

const WeightGainDiet = () => {
  return (
    <DietTemplate
      title="Weight Gain Diet"
      description="The Weight Gain diet focuses on increasing calorie intake through nutrient-dense foods, ensuring a healthy and balanced weight gain approach."
      sections={[
        {
          title: "How to Follow:",
          items: [
            "Increase daily calorie intake by 300-500 kcal.",
            "Consume more protein-rich foods like lean meats, dairy, and legumes.",
            "Incorporate healthy fats from nuts, avocados, and olive oil.",
            "Eat frequent meals and snacks throughout the day.",
          ],
        },
        {
          title: "Benefits:",
          items: [
            "Supports muscle growth and strength.",
            "Enhances overall energy levels.",
            "Helps maintain a balanced metabolic rate.",
          ],
        },
        {
          title: "Challenges:",
          items: [
            "Requires consistent meal planning.",
            "May lead to unhealthy fat gain if not properly managed.",
          ],
        },
        {
          title: "Additional Tips:",
          items: [
            "Stay hydrated and monitor micronutrient intake.",
            "Incorporate strength training to maximize lean muscle gain.",
            "Avoid excessive junk food intake to ensure quality weight gain.",
          ],
        },
      ]}
    />
  );
};

export default WeightGainDiet;
