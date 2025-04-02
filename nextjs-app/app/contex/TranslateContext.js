// context/TranslateContext.tsx
"use client";
import { createContext, useContext, useEffect, useState } from 'react';



const TranslateContext = createContext({
  isOpen: false,
  currentLanguage: 'EN',
  toggleDropdown: () => {}
});

export function TranslateProvider({ children }) {
  const [state, setState] = useState({
    isOpen: false,
    currentLanguage: 'EN',
    loaded: false
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (!window.google?.translate) {
      const script = document.createElement('script');
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);

      window.googleTranslateElementInit = () => {
        if (!window.google?.translate) return;
        
        new window.google.translate.TranslateElement({
          pageLanguage: 'en',
          includedLanguages: 'en,sw',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false
        }, 'google_translate_element');

        setState(prev => ({ ...prev, loaded: true }));
      };
    }

    return () => {
      const frames = document.querySelectorAll('.goog-te-menu-frame');
      frames.forEach(frame => frame.remove());
    };
  }, []);

  useEffect(() => {
    if (!state.loaded) return;

    const observer = new MutationObserver(() => {
      const selected = document.querySelector('.goog-te-menu-value span');
      if (selected) {
        setState(prev => ({ ...prev, currentLanguage: selected.textContent || 'EN' }));
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [state.loaded]);

  const toggleDropdown = () => {
    if (state.loaded) {
      const translateButton = document.querySelector('.goog-te-menu-value');
      if (translateButton) {
        translateButton.click();
        setState(prev => ({ ...prev, isOpen: !prev.isOpen }));
      }
    }
  };

  return (
    <TranslateContext.Provider value={{
      isOpen: state.isOpen,
      currentLanguage: state.currentLanguage,
      toggleDropdown
    }}>
      <div id="google_translate_element" className="hidden" />
      {children}
    </TranslateContext.Provider>
  );
}

export const useTranslate = () => useContext(TranslateContext);