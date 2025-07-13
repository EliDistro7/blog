// context/LanguageContext.tsx
'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import Cookies from 'js-cookie'

import { Language } from '@/utils/ChatBotUtils'

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'sw',
  setLanguage: () => {}
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('sw')

  useEffect(() => {
    // Initialize language from cookie on client side
    const savedLang = Cookies.get('lang') || 'sw'
    // Ensure the saved language is a valid Language type
    const validLanguage: Language = (savedLang === 'en' || savedLang === 'sw') ? savedLang : 'sw'
    setLanguage(validLanguage)
  }, [])

  const updateLanguage = (lang: Language) => {
    Cookies.set('lang', lang, { expires: 365, path: '/' })
    setLanguage(lang)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: updateLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage()  {
  return useContext(LanguageContext)
}