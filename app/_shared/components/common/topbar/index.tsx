"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Phone,
} from "lucide-react";
import classNames from "classnames";
import styles from "./style.module.scss";
import useWindowDimensions from "hooks/useWindowDimensions";
import { useTranslationContext } from "_shared/context/TranslationContext";
import LanguageDropdown from "../languageDropdown";

const Topbar = () => {
  const { width } = useWindowDimensions();
  const { language, setLanguage, supportedLanguages } = useTranslationContext();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  ];

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode);
    setDropdownOpen(false);

    // Multiple methods to trigger Google Translate
    setTimeout(() => {
      // Method 1: Try to find and use the Google Translate select
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

  // Hide topbar on mobile
  if (width <= 768) {
    return null;
  }

  return (
    <div className={classNames(styles.topbar)}>
      <div className={classNames(styles.container)}>
        {/* Left side - Email */}
        <div className={classNames(styles.leftSection)}>
          <a
            href="mailto:info@coreitventures.com"
            className={classNames(styles.emailLink)}
          >
            <Mail size={16} />
            <span>info@coreitventures.com</span>
          </a>
          <a href="tel:+12345678900" className={classNames(styles.emailLink)}>
            <Phone size={16} />
            <span>+1 (234) 567-8900</span>
          </a>
        </div>

        {/* Right side - Social Icons */}
        <div className={classNames(styles.rightSection)}>
          <div className={classNames(styles.socialIcons)}>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={classNames(styles.socialItem)}
                aria-label={social.label}
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>
          {/* Language Dropdown */}
          <LanguageDropdown variant="desktop" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
