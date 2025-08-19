import React from "react";
import classNames from "classnames";
import styles from "./style.module.scss";
import CustomDropdown from "../customDropdown";
import { useTranslationContext } from "_shared/context/TranslationContext";

interface LanguageDropdownProps {
  className?: string;
  variant?: "desktop" | "mobile";
}

const LanguageDropdown = ({
  className,
  variant = "desktop",
}: LanguageDropdownProps) => {
  const { language, setLanguage, supportedLanguages } = useTranslationContext();

  // Transform supported languages to match CustomDropdown options format
  const languageOptions = supportedLanguages.map((lang) => ({
    title: `${lang.flag} ${lang.label}`,
    action: () => handleLanguageChange(lang.code),
  }));

  // Find current language for display
  const currentLanguage = supportedLanguages.find((l) => l.code === language);
  const currentLanguageDisplay = currentLanguage
    ? `${currentLanguage.flag} ${currentLanguage.label}`
    : `${supportedLanguages[0].flag} ${supportedLanguages[0].label}`; // Default to first language (English)

  const handleLanguageChange = (languageCode: string) => {
    console.log("Setting language to:", languageCode);
    setLanguage(languageCode);
  };

  return (
    <div className={classNames(styles.languageContainer, "w-full")}>
      <CustomDropdown
        isLanguageDropdown
        options={languageOptions}
        value={currentLanguageDisplay}
        notRequiredMargin
        placeholder="Select Language"
      />

      {/* Hidden Google Translate Widget */}
      <div
        id="google_translate_element"
        style={{
          position: "absolute",
          top: "-9999px",
          left: "-9999px",
          visibility: "hidden",
          height: "1px",
          width: "1px",
          overflow: "hidden",
        }}
      ></div>
    </div>
  );
};

export default LanguageDropdown;
