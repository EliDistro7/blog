// components/social/LanguageToggle.jsx
import React from 'react';

const LanguageToggle = ({ language, onLanguageChange }) => {
  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={onLanguageChange}
        className="bg-brand-gold hover:bg-brand-goldDark text-brand-dark px-4 py-2 rounded-lg font-medium transition-colors"
      >
        {language === 'en' ? 'Kiswahili' : 'English'}
      </button>
    </div>
  );
};

export default LanguageToggle;