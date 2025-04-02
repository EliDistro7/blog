

// components/LanguageSwitcher.tsx
"use client";

import { useEffect } from "react";

export function LanguageSwitcher() {
  useEffect(() => {
    // This ensures the Google Translate widget is loaded
    if (typeof window !== "undefined" && window.google?.translate?.TranslateElement) {
      new window.google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,sw',
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
      }, 'google_translate_element');
    }
  }, []);

  return (
    <div id="google_translate_element" className="fixed bottom-4 right-4 z-50" />
  );
}