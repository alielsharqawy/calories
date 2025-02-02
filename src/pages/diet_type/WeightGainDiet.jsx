import React from "react";
import { useTranslation } from "react-i18next";
import DietTemplate from "../../components/DietTemplate";

const WeightGainDiet = () => {
  const { t } = useTranslation();

  return (
    <DietTemplate
      title={t("weight_gain_diet.title")}
      description={t("weight_gain_diet.description")}
      sections={[
        {
          title: t("weight_gain_diet.how_to_follow"),
          items: [
            t("weight_gain_diet.steps.increase_calories"),
            t("weight_gain_diet.steps.eat_more_protein"),
            t("weight_gain_diet.steps.healthy_fats"),
            t("weight_gain_diet.steps.frequent_meals"),
          ],
        },
        {
          title: t("weight_gain_diet.benefits"),
          items: [
            t("weight_gain_diet.benefits_list.muscle_growth"),
            t("weight_gain_diet.benefits_list.energy_levels"),
            t("weight_gain_diet.benefits_list.metabolic_rate"),
          ],
        },
        {
          title: t("weight_gain_diet.challenges"),
          items: [
            t("weight_gain_diet.challenges_list.meal_planning"),
            t("weight_gain_diet.challenges_list.fat_gain"),
          ],
        },
        {
          title: t("weight_gain_diet.additional_tips"),
          items: [
            t("weight_gain_diet.tips_list.stay_hydrated"),
            t("weight_gain_diet.tips_list.strength_training"),
            t("weight_gain_diet.tips_list.avoid_junk_food"),
          ],
        },
      ]}
    />
  );
};

export default WeightGainDiet;
