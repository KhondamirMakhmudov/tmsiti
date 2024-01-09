import React, { useState, useEffect } from "react";
import { useSettingsStore } from "@/store";
import { get } from "lodash";

const Lang = ({}) => {
  const [selectedLanguage, setSelectedLanguage] = useState(""); // Initialize with an empty string
  const setLang = useSettingsStore((state) => get(state, "setLang", () => {}));
  useEffect(() => {
    // Update the selectedLanguage state when the languageSelected prop changes
    setSelectedLanguage(selectedLanguage);
    setLang(selectedLanguage);
  }, [selectedLanguage]); // Run this effect whenever the languageSelected prop changes

  useEffect(() => {
    setLang(selectedLanguage);
  }, [selectedLanguage]);

  const languages = ["Uz", "En", "Ru"]; // Define your list of languages

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div className="language-select relative cursor-pointer">
      <select
        id="languageSelect"
        value={selectedLanguage}
        onChange={handleLanguageChange}
      >
        {languages.map((language, index) => (
          <option key={index} value={language}>
            {language}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Lang;
