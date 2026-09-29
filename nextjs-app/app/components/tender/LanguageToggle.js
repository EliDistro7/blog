'use client';

// @/app/components/tender/LanguageToggle.js
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { AMBER, CREAM, BORDER_S, focusRing } from './shared';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();
  const isEn = language !== 'sw';

  return (
    <button
      type="button"
      onClick={() => setLanguage(isEn ? 'sw' : 'en')}
      aria-label={isEn ? 'Badilisha lugha kuwa Kiswahili' : 'Switch language to English'}
      className={`fixed top-4 right-4 z-50 rounded font-display font-bold text-sm transition-colors hover:bg-amber/10 ${focusRing}`}
      style={{
        background: 'rgba(26,18,8,0.95)',
        border: `1px solid ${BORDER_S}`,
        color: CREAM,
        padding: '0.5rem 0.9rem',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        letterSpacing: '0.04em',
      }}
    >
      <span style={{ color: isEn ? AMBER : CREAM, opacity: isEn ? 1 : 0.6 }}>EN</span>
      <span aria-hidden="true" style={{ opacity: 0.4 }}>{'  /  '}</span>
      <span style={{ color: isEn ? CREAM : AMBER, opacity: isEn ? 0.6 : 1 }}>SW</span>
    </button>
  );
};

export default LanguageToggle;
