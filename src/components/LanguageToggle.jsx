import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Globe } from "lucide-react";

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);

  const toggleLanguage = () => {
    const newLang = lang === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    setLang(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-2 py-2 border-none outline-none text-xl text-white  rounded-md transition-all"
    >
      <Globe size={20} />
      <span>{lang}</span>
    </button>
  );
};

export default LanguageToggle;
