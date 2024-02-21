import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <select onChange={handleChange}>
      <option value="uz">Uzbek</option>
      <option value="ru">Russian</option>
      <option value="en">English</option>
    </select>
  );
};

export default LanguageSwitcher;
