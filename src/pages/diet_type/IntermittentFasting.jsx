import React from "react";
import { useTranslation } from "react-i18next";
import DietTemplate from "../../components/DietTemplate";

const IntermittentFasting = () => {
  const { t } = useTranslation();

  return (
    <DietTemplate
      title={t("intermittent_fasting.title")}
      description={t("intermittent_fasting.description")}
      sections={[
        {
          title: t("intermittent_fasting.how_to_follow"),
          items: [
            t("intermittent_fasting.steps.method_16_8"),
            t("intermittent_fasting.steps.method_5_2"),
          ],
        },
        {
          title: t("intermittent_fasting.benefits"),
          items: [
            t("intermittent_fasting.benefits_list.weight_loss"),
            t("intermittent_fasting.benefits_list.heart_health"),
          ],
        },
        {
          title: t("intermittent_fasting.challenges"),
          items: [
            t("intermittent_fasting.challenges_list.hunger"),
            t("intermittent_fasting.challenges_list.not_suitable"),
          ],
        },
        {
          title: t("intermittent_fasting.additional_tips"),
          items: [
            t("intermittent_fasting.tips_list.consult_nutritionist"),
            t("intermittent_fasting.tips_list.stay_hydrated"),
          ],
        },
      ]}
    />
  );
};

export default IntermittentFasting;
