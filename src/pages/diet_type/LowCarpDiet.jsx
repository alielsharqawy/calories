import React from "react";
import { useTranslation } from "react-i18next";
import DietTemplate from "../../components/DietTemplate";

const LowCarbDiet = () => {
  const { t } = useTranslation();

  return (
    <DietTemplate
      title={t("low_carb_diet.title")}
      description={t("low_carb_diet.description")}
      sections={[
        {
          title: t("low_carb_diet.how_to_follow"),
          items: [
            t("low_carb_diet.steps.avoid_high_carb"),
            t("low_carb_diet.steps.increase_vegetables"),
            t("low_carb_diet.steps.choose_protein"),
            t("low_carb_diet.steps.use_healthy_oils"),
          ],
        },
        {
          title: t("low_carb_diet.benefits"),
          items: [
            t("low_carb_diet.benefits_list.weight_loss"),
            t("low_carb_diet.benefits_list.cholesterol"),
            t("low_carb_diet.benefits_list.reduce_appetite"),
          ],
        },
        {
          title: t("low_carb_diet.challenges"),
          items: [
            t("low_carb_diet.challenges_list.fatigue"),
            t("low_carb_diet.challenges_list.deficiencies"),
            t("low_carb_diet.challenges_list.sustainability"),
          ],
        },
        {
          title: t("low_carb_diet.additional_tips"),
          items: [
            t("low_carb_diet.tips_list.consult_nutritionist"),
            t("low_carb_diet.tips_list.stay_hydrated"),
            t("low_carb_diet.tips_list.monitor_body"),
            t("low_carb_diet.tips_list.fiber_rich"),
          ],
        },
      ]}
    />
  );
};

export default LowCarbDiet;
