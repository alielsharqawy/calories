import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setIsAtBottom(isBottom);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="bg-emerald-500 dark:bg-gray-900 text-white transition-all py-4 px-3 shadow-xl">
      <div className="container mx-auto text-center text-sm md:text-base">
        <p>{t("footer.copyright")}</p>
      </div>
    </footer>
  );
}

export default Footer;
