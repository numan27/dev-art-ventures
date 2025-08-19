import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

const SUPPORTED_LANGUAGES = [
  { code: "en", label: "English (US)", flag: "🇺🇸" },
  { code: "zh", label: "Chinese", flag: "🇨🇳" },
  { code: "ja", label: "Japanese", flag: "🇯🇵" },
  { code: "de", label: "German", flag: "🇩🇪" },
  { code: "fr", label: "French", flag: "🇫🇷" },
];

const TranslationContext = createContext({
  language: "en",
  setLanguage: (lang: string) => {},
  isTranslating: false,
  supportedLanguages: SUPPORTED_LANGUAGES,
});

declare global {
  interface Window {
    google: {
      translate: {
        TranslateElement: any;
      };
    };
    googleTranslateElementInit: () => void;
  }
}

// Utility to render flag as SVG or fallback to Unicode
export function renderFlag(flag: string, label: string) {
  // For now, just return the Unicode flag, but you can extend this to use SVGs if needed
  return (
    <span
      role="img"
      aria-label={label}
      style={{
        fontFamily:
          "Apple Color Emoji, Segoe UI Emoji, NotoColorEmoji, Android Emoji, EmojiSymbols, EmojiOne Mozilla, Twemoji Mozilla, Segoe UI Symbol, Noto Color Emoji, sans-serif",
      }}
    >
      {flag}
    </span>
  );
}

export const TranslationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguageState] = useState<string>(
    typeof window !== "undefined"
      ? localStorage.getItem("language") || "en"
      : "en"
  );
  const [isTranslating, setIsTranslating] = useState(false);
  const [widgetInitialized, setWidgetInitialized] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("language", language);
    }
  }, [language]);

  // Initialize Google Translate Widget
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Define the callback function
    window.googleTranslateElementInit = () => {
      console.log("Google Translate Widget initializing...");
      try {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: SUPPORTED_LANGUAGES.map((l) => l.code).join(","),
            layout:
              window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
            autoDisplay: false,
          },
          "google_translate_element"
        );
        setWidgetInitialized(true);
        console.log("Google Translate Widget initialized successfully");

        // Hide Google Translate elements with CSS instead of removing them
        setTimeout(() => {
          const style = document.createElement("style");
          style.textContent = `
            .goog-te-banner-frame { display: none !important; visibility: hidden !important; height: 0 !important; }
            .skiptranslate { display: none !important; visibility: hidden !important; height: 0 !important; }
            .goog-te-gadget { font-size: 0 !important; }
            #google_translate_element { display: none !important; visibility: hidden !important; }
          `;
          document.head.appendChild(style);
        }, 1000);
      } catch (error) {
        console.error("Failed to initialize Google Translate Widget:", error);
      }
    };

    // Load Google Translate script
    const loadGoogleTranslate = () => {
      if (document.querySelector('script[src*="translate.google.com"]')) {
        console.log("Google Translate script already loaded");
        return;
      }

      const script = document.createElement("script");
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      script.onerror = () =>
        console.error("Failed to load Google Translate script");
      script.onload = () => console.log("Google Translate script loaded");
      document.head.appendChild(script);
    };

    loadGoogleTranslate();
  }, []);

  const setLanguage = useCallback(
    (lang: string) => {
      console.log("Setting language to:", lang);
      setLanguageState(lang);

      // Method 1: Try to use Google Translate Widget
      if (typeof window !== "undefined" && widgetInitialized) {
        setTimeout(() => {
          const select = document.querySelector(
            ".goog-te-combo"
          ) as HTMLSelectElement;
          if (select) {
            console.log("Found Google Translate select, changing to:", lang);
            select.value = lang;
            select.dispatchEvent(new Event("change"));
          } else {
            console.log(
              "Google Translate select not found, trying alternative method"
            );
            // Method 2: Try to trigger translation using Google Translate API
            try {
              // Access the Google Translate iframe and trigger translation
              const iframes = document.querySelectorAll("iframe");
              iframes.forEach((iframe) => {
                if (iframe.src && iframe.src.includes("translate.google.com")) {
                  console.log(
                    "Found Google Translate iframe, triggering translation"
                  );
                  // Try to post message to the iframe
                  iframe.contentWindow?.postMessage(
                    {
                      type: "translate",
                      language: lang,
                    },
                    "*"
                  );
                }
              });

              // Method 3: Try to trigger via URL parameter
              const currentUrl = new URL(window.location.href);
              currentUrl.searchParams.set("googtrans", `/en/${lang}`);
              window.history.replaceState({}, "", currentUrl.toString());

              // Method 4: Force reload with language parameter
              setTimeout(() => {
                window.location.reload();
              }, 100);
            } catch (e) {
              console.error("Failed to trigger translation:", e);
            }
          }
        }, 200);
      }
    },
    [widgetInitialized]
  );

  return (
    <TranslationContext.Provider
      value={{
        language,
        setLanguage,
        isTranslating: false,
        supportedLanguages: SUPPORTED_LANGUAGES,
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslationContext = () => useContext(TranslationContext);
