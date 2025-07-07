"use client";

import React, { useState } from "react";
import classNames from "classnames";
import styles from "./style.module.scss";
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
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode);
    setDropdownOpen(false);

    setTimeout(() => {
      const select = document.querySelector(
        ".goog-te-combo"
      ) as HTMLSelectElement;
      if (select) {
        console.log("Method 1: Using Google Translate select");
        select.value = langCode;
        select.dispatchEvent(new Event("change"));
        return;
      }

      // Method 2: Try to trigger via Google Translate API
      if (typeof window !== "undefined" && window.google?.translate) {
        console.log("Method 2: Using Google Translate API");
        try {
          // Try to access the translate element directly
          const translateElement = document.querySelector(
            "#google_translate_element"
          );
          if (translateElement) {
            // Create a temporary select element to trigger translation
            const tempSelect = document.createElement("select");
            tempSelect.className = "goog-te-combo";
            tempSelect.value = langCode;
            tempSelect.style.display = "none";
            document.body.appendChild(tempSelect);
            tempSelect.dispatchEvent(new Event("change"));
            setTimeout(() => document.body.removeChild(tempSelect), 1000);
          }
        } catch (e) {
          console.error("Method 2 failed:", e);
        }
      }

      // Method 3: Try to trigger via URL parameter and reload
      console.log("Method 3: Using URL parameter");
      try {
        const currentUrl = new URL(window.location.href);
        currentUrl.searchParams.set("googtrans", `/en/${langCode}`);
        window.history.replaceState({}, "", currentUrl.toString());

        // Force reload to apply translation
        setTimeout(() => {
          window.location.reload();
        }, 200);
      } catch (e) {
        console.error("Method 3 failed:", e);
      }
    }, 300);
  };

  return (
    <div className={classNames(styles.languageContainer, className)}>
      <button
        className={classNames(styles.languageButton, styles[variant])}
        onClick={() => setDropdownOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={dropdownOpen}
      >
        <span className={styles.flag}>
          {supportedLanguages.find((l) => l.code === language)?.flag || "🌐"}
        </span>
        <span className={styles.languageText}>
          {supportedLanguages.find((l) => l.code === language)?.label ||
            "Language"}
        </span>
        <span
          className={classNames(styles.chevron, dropdownOpen && styles.rotated)}
        >
          ▼
        </span>
      </button>
      {dropdownOpen && (
        <div className={classNames(styles.languageDropdown, styles[variant])}>
          {supportedLanguages.map((lang) => (
            <button
              key={lang.code}
              className={classNames(
                styles.languageOption,
                lang.code === language && styles.active
              )}
              onClick={() => handleLanguageChange(lang.code)}
            >
              <span className={styles.flag}>{lang.flag}</span>
              <span className={styles.languageText}>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
      {/* Hidden but functional Google Translate Widget */}
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
