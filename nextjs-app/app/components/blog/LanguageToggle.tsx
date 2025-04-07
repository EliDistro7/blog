

'use client';

import { Globe } from 'lucide-react';

interface LanguageToggleProps {
  language: 'en' | 'sw';
  setLanguage: (lang: 'en' | 'sw') => void;
}

 const LanguageToggle = ({ language, setLanguage }: LanguageToggleProps) => (
  <div className="flex justify-end mb-6">
    <div className="flex rounded-full bg-brand-foam/90 shadow-sm backdrop-blur-sm">
      <button
        onClick={() => setLanguage('en')}
        className={`flex items-center rounded-l-full px-4 py-2 text-sm font-medium transition-colors ${language === 'en' ? 'bg-brand-blue text-white' : 'text-brand-medium hover:bg-brand-foam'}`}
      >
        <Globe className="mr-2 h-4 w-4" />
        EN
      </button>
      <button
        onClick={() => setLanguage('sw')}
        className={`flex items-center rounded-r-full px-4 py-2 text-sm font-medium transition-colors ${language === 'sw' ? 'bg-brand-blue text-white' : 'text-brand-medium hover:bg-brand-foam'}`}
      >
        <Globe className="mr-2 h-4 w-4" />
        SW
      </button>
    </div>
  </div>
);

export default LanguageToggle;