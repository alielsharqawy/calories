import React from "react";
import DietTemplate from "../../components/DietTemplate";

const KetoDiet = () => {
  return (
    <DietTemplate
      title="Keto Diet"
      description="The Keto diet is a low-carbohydrate, high-fat eating plan designed to induce a metabolic state called ketosis, where the body burns fat as its primary source of energy instead of carbohydrates."
      sections={[
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
      ]}
    />
  );
};

export default KetoDiet;
