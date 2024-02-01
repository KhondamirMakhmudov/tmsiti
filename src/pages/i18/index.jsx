import React from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import LanguageSwitcher from "@/components/languageSwitcher";

const MyComponent = () => {
  const { t } = useTranslation();

  return (
    <div>
      <LanguageSwitcher />
      <h1>{t("welcome")}</h1>
      <p>{t("greeting", { name: "John" })}</p>
      <button>{t("button")}</button>
    </div>
  );
};

export default MyComponent;
