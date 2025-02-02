import React from "react";
import { useTranslation } from "react-i18next";
import DietTemplate from "../../components/DietTemplate";

const JuiceDiet = () => {
  const { t } = useTranslation();

  return (
    <DietTemplate
      title={t("juice_diet.title")}
      description={t("juice_diet.description")}
      sections={[
        {
          title: t("juice_diet.how_to_follow"),
          items: [
            t("juice_diet.steps.choose_fresh"),
            t("juice_diet.steps.use_juicer"),
            t("juice_diet.steps.replace_meals"),
          ],
        },
        {
          title: t("juice_diet.benefits"),
          items: [
            t("juice_diet.benefits_list.high_vitamins"),
            t("juice_diet.benefits_list.weight_loss"),
            t("juice_diet.benefits_list.detox_support"),
          ],
        },
        {
          title: t("juice_diet.challenges"),
          items: [
            t("juice_diet.challenges_list.low_protein"),
            t("juice_diet.challenges_list.not_sustainable"),
            t("juice_diet.challenges_list.weight_regain"),
          ],
        },
        {
          title: t("juice_diet.additional_tips"),
          items: [
            t("juice_diet.tips_list.consult_nutritionist"),
            t("juice_diet.tips_list.stay_hydrated"),
            t("juice_diet.tips_list.avoid_sugar"),
            t("juice_diet.tips_list.monitor_response"),
          ],
        },
      ]}
    />
  );
};

export default JuiceDiet;
