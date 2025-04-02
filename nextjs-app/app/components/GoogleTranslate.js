// components/GoogleTranslate.tsx
"use client";
import { useTranslate } from '@/app/contex/TranslateContext';

export default function GoogleTranslate() {
  const { isOpen, currentLanguage, toggleDropdown } = useTranslate();

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-dark/30 hover:bg-brand-dark/50 text-brand-foam transition-colors"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="uppercase text-sm font-medium">{currentLanguage}</span>
        <svg 
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  );
}