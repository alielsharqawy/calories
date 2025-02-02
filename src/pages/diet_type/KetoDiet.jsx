import React from "react";
import { useTranslation } from "react-i18next";
import DietTemplate from "../../components/DietTemplate";

const KetoDiet = () => {
  const { t } = useTranslation();

  return (
    <DietTemplate
      title={t("keto_diet.title")}
      description={t("keto_diet.description")}
      sections={[
        {
          title: t("keto_diet.how_to_follow"),
          items: [
            t("keto_diet.steps.reduce_carbs"),
            t("keto_diet.steps.increase_fats"),
            t("keto_diet.steps.moderate_protein"),
          ],
        },
        {
          title: t("keto_diet.benefits"),
          items: [
            t("keto_diet.benefits_list.weight_loss"),
            t("keto_diet.benefits_list.stabilize_sugar"),
            t("keto_diet.benefits_list.mental_clarity"),
          ],
        },
        {
          title: t("keto_diet.challenges"),
          items: [
            t("keto_diet.challenges_list.keto_flu"),
            t("keto_diet.challenges_list.strict_planning"),
          ],
        },
        {
          title: t("keto_diet.additional_tips"),
          items: [
            t("keto_diet.tips_list.consult_nutritionist"),
            t("keto_diet.tips_list.monitor_electrolytes"),
            t("keto_diet.tips_list.whole_foods"),
          ],
        },
      ]}
    />
  );
};

export default KetoDiet;
