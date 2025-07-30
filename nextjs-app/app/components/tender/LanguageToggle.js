'use client';
import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'sw' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-4 right-4 z-50 bg-brand-primary hover:bg-brand-primary/80 text-white px-4 py-2 rounded-full flex items-center gap-2 transition-colors duration-200 shadow-lg"
    >
      <Globe className="w-4 h-4" />
      <span className="font-medium">
        {language === 'en' ? 'Kiswahili' : 'English'}
      </span>
    </button>
  );
};

export default LanguageToggle;